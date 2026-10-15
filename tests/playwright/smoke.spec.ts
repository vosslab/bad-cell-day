import { expect, test } from "@playwright/test";

// Stable public journey: title, Play, simultaneous keyboard movement, pause, and retry.
test("smoke: the team moves, pauses, and retries without browser errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("/");
  await expect(page).toHaveTitle("Isp & Pac: Bad Cell Day");
  await expect(page.getByRole("heading", { name: "Isp & Pac: Bad Cell Day" })).toBeVisible();
  await page.getByRole("button", { name: "Play", exact: true }).click();
  const canvas = page.getByLabel("Isp and Pac game world");
  await expect(canvas).toBeVisible();
  await expect(page.getByRole("status", { name: "Game status" })).toContainText("ready");
  const isp_start = Number(await canvas.getAttribute("data-isp-x"));
  const pac_start = Number(await canvas.getAttribute("data-pac-x"));
  await page.keyboard.down("d");
  await page.keyboard.down("ArrowRight");
  await expect
    .poll(async () => Number(await canvas.getAttribute("data-isp-x")))
    .toBeGreaterThan(isp_start + 25);
  await expect
    .poll(async () => Number(await canvas.getAttribute("data-pac-x")))
    .toBeGreaterThan(pac_start + 25);
  await page.keyboard.press("Escape");
  await page.keyboard.up("d");
  await page.keyboard.up("ArrowRight");
  await expect(canvas).toHaveAttribute("data-phase", "paused");
  const paused_x = await canvas.getAttribute("data-isp-x");
  // A bounded observation proves the requestAnimationFrame loop cannot advance a paused player.
  await page.waitForTimeout(200);
  await expect(canvas).toHaveAttribute("data-isp-x", paused_x ?? "missing");
  await page.getByRole("button", { name: "Resume adventure" }).click();
  await expect(canvas).toHaveAttribute("data-phase", "playing");
  await page.keyboard.press("r");
  await expect(page.locator("#deaths")).toHaveText("1");
  await expect.poll(async () => Number(await canvas.getAttribute("data-isp-x"))).toBe(isp_start);
  await page.getByRole("button", { name: "Levels", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.locator("#level_buttons button").nth(1)).toBeDisabled();
  await page.getByRole("button", { name: "Close level selection" }).click();
  await expect(page.getByRole("dialog")).not.toBeVisible();
  expect(errors).toEqual([]);
});

// Runtime position attributes expose canvas-only movement; status and toolbar are public UI.
test("active play captures arrows after page and toolbar focus changes", async ({ page }) => {
  await page.setViewportSize({ width: 1000, height: 450 });
  await page.goto("/");
  await page.getByRole("button", { name: "Play", exact: true }).click();
  const canvas = page.getByLabel("Isp and Pac game world");
  await expect(canvas).toHaveAttribute("data-phase", "playing");
  expect(await page.evaluate(() => document.documentElement.scrollHeight)).toBeGreaterThan(450);

  // Clicking page copy gives the browser focus without pausing the game.
  await page.getByRole("status", { name: "Game status" }).click();
  const scroll_before = await page.evaluate(() => window.scrollY);
  const pac_before = Number(await canvas.getAttribute("data-pac-x"));
  await page.keyboard.down("ArrowRight");
  await page.keyboard.down("ArrowDown");
  await page.waitForTimeout(200);
  expect(await page.evaluate(() => window.scrollY)).toBe(scroll_before);
  expect(Number(await canvas.getAttribute("data-pac-x"))).toBeGreaterThan(pac_before);
  await page.keyboard.up("ArrowRight");
  await page.keyboard.up("ArrowDown");
  await page.waitForTimeout(100);
  const pac_released = await canvas.getAttribute("data-pac-x");
  await page.waitForTimeout(200);
  await expect(canvas).toHaveAttribute("data-pac-x", pac_released ?? "missing");

  // Tab still reaches the toolbar; arrows then return keyboard ownership to play.
  await canvas.focus();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("button", { name: "Pause", exact: true })).toBeFocused();
  const toolbar_scroll = await page.evaluate(() => window.scrollY);
  const toolbar_pac = Number(await canvas.getAttribute("data-pac-x"));
  await page.keyboard.down("ArrowLeft");
  await page.waitForTimeout(200);
  await page.keyboard.up("ArrowLeft");
  expect(Number(await canvas.getAttribute("data-pac-x"))).toBeLessThan(toolbar_pac);
  expect(await page.evaluate(() => window.scrollY)).toBe(toolbar_scroll);

  await page.keyboard.press("Escape");
  await expect(canvas).toHaveAttribute("data-phase", "paused");
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.keyboard.press("ArrowDown");
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
  await page.getByRole("button", { name: "Levels", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  const dialog_pac = await canvas.getAttribute("data-pac-x");
  await page.keyboard.press("ArrowRight");
  await expect(canvas).toHaveAttribute("data-pac-x", dialog_pac ?? "missing");
  await expect(page.getByRole("button", { name: "Close level selection" })).toBeFocused();
});
