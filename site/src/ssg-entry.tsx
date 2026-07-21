import { renderToString } from "solid-js/web";
import LandingPage from "./pages/LandingPage";

export function renderLanding() {
  return renderToString(() => <LandingPage />);
}
