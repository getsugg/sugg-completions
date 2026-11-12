import { expect, test } from "@playwright/test";

import { expectScreenshot } from "./helpers";

test("landing page renders correctly", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  // Meteors are positioned with Math.random(), so hide them for a stable shot.
  await page.addStyleTag({
    content: "[class*='animate-magic-meteor'] { display: none !important; }",
  });

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expectScreenshot(page, "landing");
});
