import { expect, test } from "@playwright/test";

import { expectScreenshot } from "./helpers";

test("homepage renders correctly", async ({ page }) => {
  await page.goto("/scripts/", { waitUntil: "networkidle" });
  await page.getByText("Select a script to analyze").waitFor();
  await expectScreenshot(page, "homepage");
});
