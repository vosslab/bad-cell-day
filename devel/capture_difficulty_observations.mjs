#!/usr/bin/env node
/* global HTMLElement, getComputedStyle, document -- Functions below run in Playwright's page context. */
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { resolveRunPaths } from "./difficulty/run_paths.mjs";
import { assertBuiltSourcesCurrent, fingerprints } from "./difficulty/provenance.mjs";

// Snapshot metadata names rooms; only browser pixels and visible DOM describe them.
const ROOT = execFileSync("git", ["rev-parse", "--show-toplevel"], {
  cwd: path.dirname(fileURLToPath(import.meta.url)),
  encoding: "utf8",
}).trim();
const STORAGE_KEY = "bad-cell-day.progress.v1";
const CAPTURE_OFFSETS_MS = [16, 1516, 4016];

function arguments_for_capture() {
  const options = {
    url: "http://127.0.0.1:8127/",
    runDirectory: undefined,
    limit: undefined,
  };
  const seen = new Set();
  for (let index = 2; index < process.argv.length; index += 2) {
    const flag = process.argv[index];
    const value = process.argv[index + 1];
    if (
      !value ||
      value.startsWith("--") ||
      seen.has(flag) ||
      !["--url", "--run-dir", "--limit"].includes(flag)
    ) {
      throw new Error(
        "Usage: node devel/capture_difficulty_observations.mjs --run-dir docs/difficulty_runs/NAME [--url URL] [--limit 1..campaign_count]",
      );
    }
    seen.add(flag);
    if (flag === "--url") options.url = value;
    if (flag === "--run-dir") options.runDirectory = value;
    if (flag === "--limit") options.limit = Number(value);
  }
  if (!options.runDirectory)
    throw new Error("Usage: --run-dir docs/difficulty_runs/NAME is required");
  if (options.limit !== undefined) assert.ok(Number.isInteger(options.limit) && options.limit >= 1);
  const parsed = new URL(options.url);
  assert.ok(["http:", "https:"].includes(parsed.protocol));
  return options;
}

function sha256(bytes) {
  return crypto.createHash("sha256").update(bytes).digest("hex");
}

function ascii_json(value) {
  return `${JSON.stringify(value, null, 2).replace(
    /[\u007f-\uffff]/g,
    (character) => `\\u${character.charCodeAt(0).toString(16).padStart(4, "0")}`,
  )}\n`;
}

async function visible_frame(page) {
  return page.evaluate(() => {
    const shown = (element) => {
      if (!(element instanceof HTMLElement) || element.closest("#hint_text, dialog, [hidden]"))
        return false;
      const style = getComputedStyle(element);
      return style.display !== "none" && style.visibility !== "hidden";
    };
    const text = (selector) => {
      const element = document.querySelector(selector);
      return shown(element) ? element.innerText.trim().replace(/\s+/g, " ") : "";
    };
    const selectors = [
      "#level_number",
      "#level_title",
      "#level_subtitle",
      "#time",
      "#deaths",
      "#collectibles",
      "#status",
      "#default_tip",
      ".isp_card .player_description",
      ".isp_card .key_controls",
      ".pac_card .player_description",
      ".pac_card .key_controls",
      ".toolbar",
    ];
    const visibleText = selectors.map(text).filter(Boolean);
    return {
      visible_text: visibleText,
      title: text("#level_title"),
      time_display: text("#time"),
      retries_display: text("#deaths"),
      status_display: text("#status"),
      hint_expanded: document.querySelector("#hint")?.getAttribute("aria-expanded") === "true",
      level_id_internal: document.querySelector("#game")?.dataset.levelId,
    };
  });
}

async function capture_room(browser, options, room, position, buildSha, mapSha, ORDER) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 1,
    reducedMotion: "no-preference",
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(`page: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`console: ${message.text()}`);
  });
  page.on("requestfailed", (request) =>
    errors.push(`request: ${request.url()}: ${request.failure()?.errorText}`),
  );
  await page.clock.install({ time: new Date("2026-01-01T00:00:00Z") });
  await page.clock.pauseAt(new Date("2026-01-01T00:00:00Z"));
  try {
    await page.goto(options.url, { waitUntil: "networkidle" });
    const served = await (await page.request.get(new URL("main.js", options.url).href)).body();
    assert.equal(sha256(served), buildSha, "served build changed");
    const servedMap = await (
      await page.request.get(new URL("main.js.map", options.url).href)
    ).body();
    assert.equal(sha256(servedMap), mapSha, "served source map changed");
    const menuTitles = await page.locator("#level_buttons button b").allInnerTexts();
    assert.deepEqual(
      menuTitles,
      ORDER.map((entry) => entry.title),
      "browser menu roster differs from snapshot",
    );
    if (position > 1) {
      const completed = ORDER.slice(0, position - 1).map((prior) => ({
        levelId: prior.id,
        bestTime: 120,
        bestCollectibles: 0,
      }));
      await page.evaluate(
        ([key, data]) => localStorage.setItem(key, JSON.stringify(data)),
        [STORAGE_KEY, { version: 1, completed, soundEnabled: false, reducedMotion: false }],
      );
      await page.reload({ waitUntil: "networkidle" });
    }
    await page.evaluate(async () =>
      Promise.all([...document.images].map((image) => image.decode().catch(() => undefined))),
    );
    if (position === 1) {
      await page.getByRole("button", { name: /^Play/ }).click();
    } else {
      await page.getByRole("button", { name: "Levels", exact: true }).click();
      const buttons = page.locator("#level_buttons button");
      assert.equal(await buttons.count(), ORDER.length, "campaign order changed");
      const selected = buttons.nth(position - 1);
      assert.ok((await selected.innerText()).includes(room.title), "selector title mismatch");
      await selected.click();
    }
    const captures = [];
    let advanced = 0;
    for (let captureIndex = 0; captureIndex < CAPTURE_OFFSETS_MS.length; captureIndex++) {
      const elapsed = CAPTURE_OFFSETS_MS[captureIndex];
      await page.clock.runFor(elapsed - advanced);
      advanced = elapsed;
      const observed = await visible_frame(page);
      assert.equal(observed.level_id_internal, room.id, "selected room mismatch");
      assert.equal(observed.title, room.title, "browser title differs from snapshot");
      assert.equal(observed.hint_expanded, false, "hint unexpectedly open");
      const imageName = `${room.id}_${captureIndex + 1}.png`;
      const imagePath = path.join(options.out, imageName);
      await page.locator(".game_frame").screenshot({ path: imagePath });
      captures.push({
        path: imageName,
        sha256: sha256(fs.readFileSync(imagePath)),
        elapsed_ms: elapsed,
        keys: [],
        time_display: observed.time_display,
        retries_display: observed.retries_display,
        status_display: observed.status_display,
        visible_text: observed.visible_text,
      });
    }
    assert.deepEqual(errors, [], "browser errors");
    const packet = {
      levelId: room.id,
      position,
      title: (await visible_frame(page)).title,
      buildSha256: buildSha,
      buildMapSha256: mapSha,
      capturedAt: new Date().toISOString(),
      method:
        position === 1
          ? "Fresh Play entry; no keys pressed"
          : "Prior room IDs seeded as completed for level selection; no keys pressed",
      observations: [],
      captures,
      limitations: [
        "Automated first-room-state inspection; no human novice played this room.",
        "Idle captures do not demonstrate the complete route, controls, hazards, or puzzle mechanics.",
        "Screenshots are authoritative for canvas visibility; raw draw-call transcripts are excluded because visibility is unproven. The optional Hint remained closed.",
      ],
      browserErrors: errors,
    };
    fs.writeFileSync(path.join(options.out, `${room.id}.json`), ascii_json(packet));
    return {
      levelId: packet.levelId,
      position,
      title: packet.title,
      bytes: captures.map((entry) => fs.statSync(path.join(options.out, entry.path)).size),
      retries: captures.map((entry) => entry.retries_display),
    };
  } finally {
    await context.close();
  }
}

async function main() {
  const parsed = arguments_for_capture();
  const run = resolveRunPaths(ROOT, parsed.runDirectory);
  const options = { ...parsed, out: run.observationDirectory };
  const SNAPSHOT = JSON.parse(
    fs.readFileSync(path.join(run.dataDirectory, "snapshot.json"), "utf8"),
  );
  const ORDER = SNAPSHOT.levels.map(({ level_id, campaign_position, title }, index) => {
    assert.match(level_id, /^level_\d\d$/);
    assert.equal(campaign_position, index + 1);
    assert.ok(typeof title === "string" && title.length > 0);
    return { id: level_id, title };
  });
  assert.ok(ORDER.length > 0, "snapshot has no campaign rooms");
  assert.equal(new Set(ORDER.map((room) => room.id)).size, ORDER.length);

  options.limit ??= ORDER.length;
  assert.ok(options.limit <= ORDER.length);
  assert.ok(
    !fs.existsSync(options.out),
    `Output exists: ${options.out}. Use a fresh run observation directory.`,
  );
  const current = fingerprints(
    ROOT,
    ORDER.map(({ id, title }) => ({ id, title })),
  );
  assert.equal(SNAPSHOT.campaign_sha256, current.campaign_sha256, "snapshot campaign is stale");
  assert.equal(SNAPSHOT.source_fingerprint, current.source_fingerprint, "snapshot source is stale");
  const { buildSha256: buildSha, buildMapSha256: mapSha } = assertBuiltSourcesCurrent(ROOT);
  fs.mkdirSync(options.out);
  const browser = await chromium.launch({ headless: true });
  try {
    const results = [];
    for (const [index, room] of ORDER.slice(0, options.limit).entries()) {
      const result = await capture_room(browser, options, room, index + 1, buildSha, mapSha, ORDER);
      results.push(result);
      console.log(
        `${result.position}/${ORDER.length} ${result.levelId} ${result.title} ${result.bytes.join(",")} bytes; retries ${result.retries.join(",")}`,
      );
    }
    const receiptPath = path.join(options.out, "capture_receipt.json");
    fs.writeFileSync(
      receiptPath,
      ascii_json({
        capturedAt: new Date().toISOString(),
        buildSha256: buildSha,
        buildMapSha256: mapSha,
        url: options.url,
        order: ORDER.map((room) => room.id),
        captured: results,
        method:
          "first-contact seeded selector inspection; screenshots authoritative for canvas visibility; raw draw-call transcripts excluded",
      }),
    );
    fs.writeFileSync(
      path.join(options.out, "source_binding.json"),
      ascii_json({
        schema_version: 1,
        method: "capture_time",
        bound_at: new Date().toISOString(),
        ...current,
        buildSha256: buildSha,
        buildMapSha256: mapSha,
        receipt_sha256: sha256(fs.readFileSync(receiptPath)),
        packets: results.map(({ levelId, position, title }) => ({
          levelId,
          position,
          title,
          sha256: sha256(fs.readFileSync(path.join(options.out, `${levelId}.json`))),
        })),
      }),
    );
  } finally {
    await browser.close();
  }
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = error instanceof Error && error.message.startsWith("Usage:") ? 2 : 1;
}
