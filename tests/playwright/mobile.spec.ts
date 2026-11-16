import { expect, test } from "@playwright/test";
import { LEVELS } from "../../src/levels";

test.use({ viewport: { width: 844, height: 390 }, isMobile: true, hasTouch: true });

// src/app.tsx:441 exposes status/hint text; its toolbar Hint controls both responsive hints.
test("mobile Hint reveals the room tip without covering or overflowing the world", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Play", exact: true }).tap();
  const hintButton = page.getByRole("button", { name: "Hint", exact: true });
  const hint = page.locator("#touch_hint_text");
  const status = page.locator("#status .game_status");
  for (const viewport of [
    { width: 844, height: 390 },
    { width: 568, height: 320 },
  ]) {
    await page.setViewportSize(viewport);
    await expect(hint).toBeHidden();
    await hintButton.tap();
    await expect(hintButton).toHaveAttribute("aria-expanded", "true");
    await expect(hint).toBeVisible();
    await expect(hint).toHaveText(LEVELS[0]!.hint);
    await expect(status).toBeHidden();
    const geometry = await page.evaluate(() => ({
      width: innerWidth,
      height: innerHeight,
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
      stageBottom: document.querySelector(".stage")!.getBoundingClientRect().bottom,
      statusTop: document.querySelector("#status")!.getBoundingClientRect().top,
    }));
    expect(geometry.scrollWidth).toBeLessThanOrEqual(geometry.width);
    expect(geometry.scrollHeight).toBeLessThanOrEqual(geometry.height);
    expect(geometry.statusTop).toBeGreaterThanOrEqual(geometry.stageBottom);
    await page.screenshot({ path: test.info().outputPath(`hint_${viewport.width}.png`) });
    await hintButton.tap();
    await expect(hintButton).toHaveAttribute("aria-expanded", "false");
    await expect(hint).toBeHidden();
    await expect(status).toBeVisible();
  }
});

test("two captured thumbs compose with keyboard, clear on cancellation and rotate safely", async ({
  page,
}) => {
  await page.goto("/");
  await page.locator("#play").click();
  const canvas = page.locator("#game");
  const isp = page.locator("#isp_touch_pad");
  const pac = page.locator("#pac_touch_pad");
  const bounds = await Promise.all([isp.boundingBox(), pac.boundingBox()]);
  expect(bounds.every((box) => box && box.width >= 132 && box.height >= 88)).toBe(true);
  const a = bounds[0]!;
  const b = bounds[1]!;
  const cdp = await page.context().newCDPSession(page);
  const finger = (
    id: number,
    box: typeof a,
    column: number,
    row: number,
  ): { id: number; x: number; y: number } => ({
    id,
    x: box.x + 22 + 44 * column,
    y: box.y + 22 + 44 * row,
  });
  const startIsp = Number(await canvas.getAttribute("data-isp-x"));
  const startPac = Number(await canvas.getAttribute("data-pac-x"));
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchStart",
    touchPoints: [finger(1, a, 2, 1), finger(2, b, 2, 1)],
  });
  await expect(isp).toHaveAttribute("data-zone", "5");
  await expect(pac).toHaveAttribute("data-zone", "5");
  await expect
    .poll(async () => Number(await canvas.getAttribute("data-isp-x")))
    .toBeGreaterThan(startIsp + 15);
  await expect
    .poll(async () => Number(await canvas.getAttribute("data-pac-x")))
    .toBeGreaterThan(startPac + 15);
  await expect(canvas).toBeFocused();
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchStart",
    touchPoints: [finger(1, a, 2, 1), finger(2, b, 2, 1), finger(3, a, 0, 1)],
  });
  await expect(isp).toHaveAttribute("data-zone", "5");
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchEnd",
    touchPoints: [finger(1, a, 2, 1)],
  });
  await expect(isp).toHaveAttribute("data-zone", "");
  await expect(pac).toHaveAttribute("data-zone", "5");
  await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchStart",
    touchPoints: [finger(1, a, 1, 1), finger(2, b, 1, 1)],
  });
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchMove",
    touchPoints: [finger(1, a, 1, 0), finger(2, b, 1, 1)],
  });
  await expect(isp).toHaveAttribute("data-zone", "1");
  await expect(pac).toHaveAttribute("data-zone", "4");
  await page.keyboard.down("d");
  await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
  const before = Number(await canvas.getAttribute("data-isp-x"));
  await expect
    .poll(async () => Number(await canvas.getAttribute("data-isp-x")))
    .toBeGreaterThan(before + 10);
  await page.keyboard.up("d");
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchStart",
    touchPoints: [finger(1, a, 0, 1), finger(2, b, 0, 1)],
  });
  await cdp.send("Input.dispatchTouchEvent", { type: "touchCancel", touchPoints: [] });
  await expect(isp).toHaveAttribute("data-zone", "");
  await expect(pac).toHaveAttribute("data-zone", "");
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchStart",
    touchPoints: [finger(1, a, 0, 1), finger(2, b, 0, 1)],
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(isp).toHaveAttribute("data-zone", "");
  await expect(pac).toHaveAttribute("data-zone", "");
  await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
  await expect(canvas).toHaveAttribute("data-phase", "paused");
  await expect(page.locator("#pause_title")).toHaveText("Rotate to landscape");
  await expect(page.locator("#resume")).toBeDisabled();
  await page.setViewportSize({ width: 844, height: 390 });
  await expect(page.locator("#resume")).toBeEnabled();
  await expect(canvas).toHaveAttribute("data-phase", "paused");
  await page.locator("#resume").click();
  await expect(canvas).toHaveAttribute("data-phase", "playing");
  const geometry = await page.evaluate(() => ({
    width: innerWidth,
    height: innerHeight,
    scroll: document.documentElement.scrollWidth,
    frame: document.querySelector(".game_frame")!.getBoundingClientRect().bottom,
  }));
  expect(geometry.scroll).toBeLessThanOrEqual(geometry.width);
  expect(geometry.frame).toBeLessThanOrEqual(geometry.height);
});
