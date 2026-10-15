import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import { chromium } from "playwright";

// ASVS 5.3.2: capture paths and filenames are fixed, repository-owned values.
// Run against the existing build: node devel/capture_gameplay_screenshots.mjs
const url = "http://127.0.0.1:8123/";
const order = [2, 1, 4, 3, 6, 8, 5, 7, 11, 9, 10, 12, 13, 14, 15, 16, 18, 17, 19, 20];
const views = [
  {
    room: 13,
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
    room: 19,
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
const hash = crypto.createHash("sha256").update(fs.readFileSync("dist/main.js")).digest("hex");
const browser = await chromium.launch({ headless: true });
const receipt = {
  capturedAt: new Date().toISOString(),
  buildSha256: hash,
  seed: "Prior campaign completion records only; no game-state writes.",
  reducedMotion: false,
  views: [],
};
try {
  for (const view of views) {
    const context = await browser.newContext({
      viewport: { width: 1632, height: 1020 },
      reducedMotion: "no-preference",
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
      (completed) =>
        localStorage.setItem(
          "bad-cell-day.progress.v1",
          JSON.stringify({ version: 1, completed, soundEnabled: false, reducedMotion: false }),
        ),
      order.slice(0, order.indexOf(view.room)).map((n) => ({
        levelId: "level_" + String(n).padStart(2, "0"),
        bestTime: 120,
        bestCollectibles: 0,
      })),
    );
    await page.reload();
    await page.clock.runFor(32);
    await page.getByRole("button", { name: "Levels", exact: true }).click();
    await page.locator("#level_buttons button").nth(order.indexOf(view.room)).click();
    await page.clock.runFor(16);
    const canvas = page.locator("#game");
    const state = () => canvas.evaluate((element) => ({ ...element.dataset }));
    assert.equal((await state()).levelId, "level_" + view.room);
    let held = [];
    let frames = 0;
    let previous = 0;
    let found = false;
    for (const [duration, keys] of view.intervals) {
      for (const key of held) if (!keys.includes(key)) await page.keyboard.up(key);
      for (const key of keys) if (!held.includes(key)) await page.keyboard.down(key);
      held = keys;
      frames += duration;
      const end = Math.round((frames * 1000) / 120);
      let remaining = end - previous;
      previous = end;
      while (remaining > 0) {
        const step = Math.min(remaining, 16);
        await page.clock.runFor(step);
        remaining -= step;
        if ((await state())[view.hero + "Effect"] === view.effect) {
          found = true;
          break;
        }
      }
      if (found) break;
    }
    for (const key of held) await page.keyboard.up(key);
    assert.ok(found, "The ordinary route must reach " + view.effect);
    assert.equal(await page.locator("#deaths").textContent(), "0");
    assert.equal((await state()).phase, "playing");
    // Move the pointer off the canvas; do not cover character art with hover UI.
    await page.mouse.move(0, 0);
    await page.screenshot({ path: "/private/tmp/" + view.file, fullPage: true });
    assert.deepEqual(errors, []);
    receipt.views.push({ file: view.file, state: await state(), errors });
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
