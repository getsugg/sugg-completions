import { expect, type Page } from "@playwright/test";

/**
 * Wait for webfonts so text metrics are stable, then compare against the
 * baseline. Call `page.addStyleTag` in the test first to hide decorations that
 * are random at runtime (e.g. the landing page meteors).
 */
export async function expectScreenshot(
  page: Page,
  name: string,
  options: { fullPage?: boolean } = {},
) {
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  await expect(page).toHaveScreenshot(`${name}.png`, options);
}
