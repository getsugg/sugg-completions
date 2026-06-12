import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";
import App from "~/App";

test("not-found page renders correctly", async () => {
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
    window.location.hash = "/nonexistent";
    await page.getByText("404").findElement();
    await expect(page.elementLocator(root)).toMatchScreenshot("not-found");
  } finally {
    root.remove();
    dispose();
  }
});
