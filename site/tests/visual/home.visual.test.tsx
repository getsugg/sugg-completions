import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";
import App from "~/App";

test("homepage renders correctly", async () => {
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
    await page.getByText("选择一个脚本开始分析").findElement();
    await expect(page.elementLocator(root)).toMatchScreenshot("homepage");
  } finally {
    root.remove();
    dispose();
  }
});
