import { expect, test } from "@playwright/test";

import { expectScreenshot } from "./helpers";

test("detail area collapses and expands", async ({ page }) => {
  await page.goto("/scripts/npm/", { waitUntil: "networkidle" });
  await page.locator(".line-row").first().waitFor({ timeout: 20_000 });
  await expect(page.getByText("Auto Analysis")).toBeVisible({ timeout: 20_000 });

  const toggle = page.getByRole("button", { name: /Annotations/ });
  await expectScreenshot(page, "detail-area-collapsed");

  await toggle.click();
  await page.getByRole("tab", { name: "Summary" }).waitFor();
  await expectScreenshot(page, "detail-area-expanded");

  await toggle.click();
  await expect(page.getByRole("tab", { name: "Summary" })).toBeHidden();
  await expectScreenshot(page, "detail-area-re-collapsed");
});
