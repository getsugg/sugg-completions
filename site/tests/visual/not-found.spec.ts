import { expect, test } from "@playwright/test";

import { expectScreenshot } from "./helpers";

test("not-found page renders correctly", async ({ page }) => {
  const response = await page.goto("/nonexistent/", { waitUntil: "networkidle" });
  expect(response?.status()).toBe(404);
  await page.getByText("Script not found").waitFor();
  await expectScreenshot(page, "not-found");
});
