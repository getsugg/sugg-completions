import { render } from "solid-js/web";
import App from "./App";

const root = document.getElementById("root")!;
if (import.meta.env.PROD) root.innerHTML = "";
render(() => <App />, root);
