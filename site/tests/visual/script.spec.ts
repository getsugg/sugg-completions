import { expect, test } from "@playwright/test";

import { expectScreenshot } from "./helpers";

test("npm script page renders correctly", async ({ page }) => {
  await page.goto("/scripts/npm/", { waitUntil: "networkidle" });
  await page.locator(".line-row").first().waitFor({ timeout: 20_000 });
  await expect(page.getByText("Auto Analysis")).toBeVisible({ timeout: 20_000 });
  await expectScreenshot(page, "script-npm");
});
