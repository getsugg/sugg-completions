import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";
import App from "~/App";

test("npm script page renders correctly", async () => {
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
    await expect(page.elementLocator(root)).toMatchScreenshot("script-npm");
  } finally {
    root.remove();
    dispose();
  }
});
