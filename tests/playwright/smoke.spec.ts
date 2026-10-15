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
