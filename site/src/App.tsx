import { HashRouter, Route } from "@solidjs/router";
import LandingPage from "~/pages/LandingPage";
import ConsoleLayout from "~/layouts/ConsoleLayout";
import "./App.css";
import "solid-devtools";

function App() {
  return (
    <HashRouter>
      <Route path="/" component={LandingPage} />
      <Route path="/scripts" component={ConsoleLayout} />
      <Route path="/scripts/:script" component={ConsoleLayout} />
    </HashRouter>
  );
}

export default App;
