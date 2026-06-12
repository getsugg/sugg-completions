import { Show, createMemo } from "solid-js";
import { useParams } from "@solidjs/router";
import { ScriptList } from "./components/ScriptList";
import HomePage from "./HomePage";
import ScriptPage from "./ScriptPage";

import NotFound from "./NotFound";
import scripts from "./scripts";
import { getScript } from "./scripts-utils";
import "@shikijs/twoslash/style-rich.css";
import "./App.css";

function App() {
  document.documentElement.classList.add("dark");
  const params = useParams<{ script?: string }>();
  const stem = () => params.script || null;
  const validScript = createMemo(() => (stem() ? getScript(stem()!) : null));

  return (
    <div class="min-h-screen bg-background text-foreground">
      <header class="flex items-center gap-3 border-b border-border px-5 py-0 h-12">
        <h1 class="text-base font-semibold text-primary before:content-['❯_'] before:text-green-500">
          Sugg Completions
        </h1>
        <span class="text-xs text-muted-foreground">补全脚本仓库 · 安全分析</span>
        <div class="flex-1" />
        <div class="flex items-center gap-2 text-[10px] text-muted-foreground">
          <span class="inline-block size-1.5 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e66]" />
          WASM · {scripts.length} 个脚本
        </div>
      </header>
      <div class="flex h-[calc(100vh-48px)]">
        <ScriptList />
        <main class="flex min-w-0 flex-1 flex-col">
          <Show when={stem()}>
            <Show when={validScript()} fallback={<NotFound />}>
              <ScriptPage />
            </Show>
          </Show>
          <Show when={!stem()}>
            <HomePage />
          </Show>
        </main>
      </div>
    </div>
  );
}

export default App;
