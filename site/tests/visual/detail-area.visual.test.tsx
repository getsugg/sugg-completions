import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";
import App from "~/App";

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

test("detail area collapses and expands", async () => {
  const root = document.body.appendChild(document.createElement("div"));
  root.id = "test-root";

  const dispose = render(
    () => (
      <HashRouter>
        <Route path={["/", "/:script"]} component={App} />
      </HashRouter>
    ),
    root,
  );

  try {
    await page.getByText("npm").click();
    await page.getByText("自动分析").findElement({ timeout: 15000 });

    await wait(300);
    await expect(page.elementLocator(root)).toMatchScreenshot("detail-area-collapsed");

    const expandBtn = page.getByText("详情");
    await expandBtn.click();
    await wait(300);
    await expect(page.elementLocator(root)).toMatchScreenshot("detail-area-expanded");

    const collapseBtn = page.getByText("收起详情");
    await collapseBtn.click();
    await wait(300);
    await expect(page.elementLocator(root)).toMatchScreenshot("detail-area-re-collapsed");
  } finally {
    root.remove();
    dispose();
  }
});
