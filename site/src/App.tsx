import { Show, createMemo } from "solid-js";
import { useParams } from "@solidjs/router";
import { ScriptList } from "./components/ScriptList";
import HomePage from "./pages/HomePage";
import ScriptPage from "./pages/ScriptPage";
import NotFound from "./pages/NotFound";
import scripts from "./generated/scripts.json";
import { getScript } from "./lib/scripts-utils";
import "./App.css";
import "solid-devtools";

function App() {
  const params = useParams<{ script?: string }>();
  const stem = () => params.script || null;
  const validScript = createMemo(() => (stem() ? getScript(stem()!) : null));

  return (
    <div class="min-h-screen bg-background text-foreground">
      <header class="relative flex h-12 items-center gap-3 border-b-2 border-amber-500 px-5 py-0 bg-[#1a1420]">
        <div class="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-linear-to-r from-amber-500 via-amber-300 to-amber-700" />
        <img src="logo-horizontal.svg" alt="Sugg" class="h-7 w-auto" />
        <span class="text-[10px] text-[#6a5d78]">Completion Scripts · Security Audit</span>
        <div class="flex-1" />
        <div class="flex items-center gap-1.5 text-[10px] text-[#6a5d78]">
          <span class="inline-block size-1.75 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          <span class="text-[#b8a9c8] font-medium">WASM</span>· {scripts.length} scripts
        </div>
      </header>
      <div class="flex h-[calc(100vh-48px)]">
        <ScriptList />
        <main class="flex min-w-0 flex-1 flex-col">
          <Show when={stem()} fallback={<HomePage />}>
            <Show when={validScript()} fallback={<NotFound />}>
              <ScriptPage />
            </Show>
          </Show>
        </main>
      </div>
    </div>
  );
}

export default App;
