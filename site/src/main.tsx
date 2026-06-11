import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";
import App from "./App";

render(
  () => (
    <HashRouter>
      <Route path={["/", "/:script"]} component={App} />
    </HashRouter>
  ),
  document.getElementById("root")!,
);
