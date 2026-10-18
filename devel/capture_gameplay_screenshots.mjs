import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import { chromium } from "playwright";
import { LEVELS } from "../src/levels.ts";

// ASVS 5.3.2: the capture destination stays fixed; input filenames are basenames.
// Run against the existing build: node --import tsx devel/capture_gameplay_screenshots.mjs
// Optional replay case: node --import tsx devel/capture_gameplay_screenshots.mjs cases.json
const url = "http://127.0.0.1:8127/";
const outputDirectory = "/private/tmp";
const defaultViews = [
  {
    levelId: "level_13",
    hero: "isp",
    effect: "float",
    file: "gem_bubble_relay.png",
    // Ordinary successful route, truncated as soon as the documented effect appears.
    intervals: [
      [1, []],
      [14, ["ArrowRight"]],
      [28, ["d"]],
      [80, ["d", "w"]],
      [106, ["d"]],
      [265, []],
    ],
  },
  {
    levelId: "level_19",
    hero: "pac",
    effect: "shove",
    file: "cana_boomerang_console.png",
    intervals: [
      [1, []],
      [59, ["d"]],
      [120, ["ArrowRight", "ArrowUp"]],
      [100, []],
      [23, ["ArrowRight"]],
      [80, ["ArrowRight", "ArrowUp"]],
      [80, []],
    ],
  },
];

function validateViews(value) {
  // ASVS 1.5.2 and 2.2.1: parse JSON as data and validate required replay fields.
  assert.ok(Array.isArray(value) && value.length > 0, "Replay input must be a non-empty array.");
  const knownLevels = new Set(LEVELS.map((level) => level.id));
  const validKeys = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "Tab", "Enter", "a", "d", "w"]);
  for (const view of value) {
    assert.ok(
      view && typeof view === "object" && !Array.isArray(view),
      "Each view must be an object.",
    );
    assert.ok(knownLevels.has(view.levelId), "Each view must use a known levelId.");
    assert.ok(
      typeof view.file === "string" && /^[A-Za-z0-9][A-Za-z0-9._-]*\.png$/.test(view.file),
      "Each view file must be a plain PNG filename.",
    );
    assert.ok(
      Array.isArray(view.intervals) && view.intervals.length > 0,
      "Each view needs intervals.",
    );
    for (const interval of view.intervals) {
      assert.ok(
        Array.isArray(interval) &&
          interval.length === 2 &&
          Number.isSafeInteger(interval[0]) &&
          interval[0] > 0 &&
          Array.isArray(interval[1]) &&
          interval[1].every((key) => validKeys.has(key)),
        "Each interval must contain a positive integer frame count and supported movement keys.",
      );
    }
    assert.ok(
      view.expectedPhase === undefined || ["playing", "complete"].includes(view.expectedPhase),
      "expectedPhase must be playing or complete.",
    );
    assert.ok(
      view.reducedMotion === undefined || typeof view.reducedMotion === "boolean",
      "reducedMotion must be a boolean when provided.",
    );
    assert.ok(
      (view.hero === undefined && view.effect === undefined) ||
        (["isp", "pac"].includes(view.hero) && typeof view.effect === "string"),
      "hero and effect must be provided together or both omitted.",
    );
  }
  return value;
}

const inputPath = process.argv[2];
assert.ok(process.argv.length <= 3, "Pass at most one optional replay JSON file.");
const views = inputPath
  ? validateViews(JSON.parse(fs.readFileSync(inputPath, "utf8")))
  : validateViews(defaultViews);
const hash = crypto.createHash("sha256").update(fs.readFileSync("dist/main.js")).digest("hex");
const browser = await chromium.launch({ headless: true });
const receipt = {
  capturedAt: new Date().toISOString(),
  buildSha256: hash,
  seed: "Prior campaign completion records only; no game-state writes.",
  views: [],
};
try {
  for (const view of views) {
    const reducedMotion = view.reducedMotion ?? false;
    const levelIndex = LEVELS.findIndex((level) => level.id === view.levelId);
    assert.notEqual(levelIndex, -1, "The capture level must exist in the current campaign.");
    const level = LEVELS[levelIndex];
    assert.ok(level, "The capture level must resolve from the current campaign.");
    const context = await browser.newContext({
      viewport: { width: 1632, height: 1020 },
      reducedMotion: reducedMotion ? "reduce" : "no-preference",
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.clock.install({ time: new Date("2026-01-01T00:00:00Z") });
    await page.goto(url);
    const served = await (await page.request.get(url + "main.js")).body();
    assert.equal(crypto.createHash("sha256").update(served).digest("hex"), hash);
    await page.clock.pauseAt(new Date("2026-01-01T00:00:10Z"));
    await page.evaluate(
      ({ completed, reducedMotion }) =>
        localStorage.setItem(
          "bad-cell-day.progress.v1",
          JSON.stringify({ version: 1, completed, soundEnabled: false, reducedMotion }),
        ),
      {
        completed: LEVELS.slice(0, levelIndex).map((completedLevel) => ({
          levelId: completedLevel.id,
          bestTime: 120,
          bestCollectibles: 0,
        })),
        reducedMotion,
      },
    );
    await page.reload();
    await page.clock.runFor(32);
    await page.getByRole("button", { name: "Levels", exact: true }).click();
    const levelButton = page
      .locator("#level_buttons button")
      .filter({ has: page.getByText(level.title, { exact: true }) });
    assert.equal(await levelButton.count(), 1, "The level title must identify one menu button.");
    await levelButton.click();
    await page.clock.runFor(16);
    const canvas = page.locator("#game");
    const state = () => canvas.evaluate((element) => ({ ...element.dataset }));
    assert.equal((await state()).levelId, view.levelId);
    let held = [];
    let frames = 0;
    let advanced = 0;
    let found = false;
    for (const [duration, keys] of view.intervals) {
      for (const key of held) if (!keys.includes(key)) await page.keyboard.up(key);
      for (const key of keys) if (!held.includes(key)) await page.keyboard.down(key);
      held = keys;
      frames += duration;
      // Quantize cumulative native frames to browser frames and realize each
      // input chunk for at least one complete browser frame.
      const target = Math.max(advanced + 16, Math.round((frames * 1000) / 120 / 16) * 16);
      let remaining = target - advanced;
      advanced = target;
      while (remaining > 0) {
        const step = Math.min(remaining, 16);
        await page.clock.runFor(step);
        remaining -= step;
        if (view.hero && (await state())[view.hero + "Effect"] === view.effect) {
          found = true;
          break;
        }
      }
      if (found) break;
    }
    for (const key of held) await page.keyboard.up(key);
    const finalState = await state();
    const deaths = await page.locator("#deaths").textContent();
    console.log(
      JSON.stringify({ file: view.file, levelId: view.levelId, state: finalState, deaths }),
    );
    if (view.hero) assert.ok(found, "The ordinary route must reach " + view.effect);
    assert.equal(deaths, "0");
    assert.equal(finalState.phase, view.expectedPhase ?? "playing");
    // Move the pointer off the canvas; do not cover character art with hover UI.
    await page.mouse.move(0, 0);
    await page.screenshot({ path: outputDirectory + "/" + view.file, fullPage: true });
    assert.deepEqual(errors, []);
    receipt.views.push({
      file: view.file,
      levelId: level.id,
      title: level.title,
      reducedMotion,
      state: await state(),
      errors,
    });
    await context.close();
  }
  fs.writeFileSync(
    "/private/tmp/gameplay_screenshot_receipt.json",
    JSON.stringify(receipt, null, 2) + "\n",
  );
  console.log(JSON.stringify(receipt, null, 2));
} finally {
  await browser.close();
}
