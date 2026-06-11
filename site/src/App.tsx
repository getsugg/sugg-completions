import { createResource, createSignal, Show, createEffect } from "solid-js";
import type { Component } from "solid-js";
import { useParams, useNavigate } from "@solidjs/router";
import "@shikijs/twoslash/style-rich.css";
import "./App.css";
import scripts, { getScript } from "./scripts";
import { ensureWasm, extract, analyzeApis } from "./parser";
import type { ExtractResult, ApiUsage } from "./parser";
import { highlightPlain } from "./shiki";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

interface LineAnnotation {
  line: number;
  type: "danger" | "safe" | "dynamic";
  api?: string;
}

const DANGER_APIS = ["execFile", "exec", "fetch"];
const SAFE_APIS = ["scanPath", "readFile", "readJson", "cache", "ui"];

function scanSource(source: string): LineAnnotation[] {
  const lines = source.split("\n");
  const annotations: LineAnnotation[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const hasDanger = DANGER_APIS.find((a) => line.includes(a + "("));
    if (hasDanger) {
      annotations.push({ line: i, type: "danger", api: hasDanger });
      continue;
    }
    if (line.includes("dynamic(")) {
      annotations.push({ line: i, type: "dynamic" });
      continue;
    }
    const hasSafe = SAFE_APIS.find((a) => line.includes(a + "("));
    if (hasSafe) annotations.push({ line: i, type: "safe", api: hasSafe });
  }
  return annotations;
}

const App: Component = () => {
  document.documentElement.classList.add("dark");
  const params = useParams<{ script?: string }>();
  const navigate = useNavigate();
  const selectedStem = () => params.script || null;

  const [wasmReady] = createResource(() => ensureWasm());

  const [source] = createResource(selectedStem, async (stem) => {
    if (!stem) return "";
    return getScript(stem)?.source() ?? "";
  });

  const [twoslashClassic] = createResource(selectedStem, async (stem) => {
    if (!stem) return "";
    return getScript(stem)?.highlightedClassic() ?? "";
  });

  const [twoslashHighlighted] = createResource(selectedStem, async (stem) => {
    if (!stem) return "";
    return getScript(stem)?.highlighted() ?? "";
  });

  const [visibleContent, setVisibleContent] = createSignal("");
  createEffect(() => {
    const h = twoslashHighlighted() || twoslashClassic();
    if (h) setVisibleContent(h);
  });

  const [annotations, setAnnotations] = createSignal<LineAnnotation[]>([]);
  const [filter, setFilter] = createSignal<"all" | "danger" | "dynamic" | "safe">("all");
  const [result, setResult] = createSignal<ExtractResult | null>(null);
  const [apiUsages, setApiUsages] = createSignal<ApiUsage[]>([]);
  const [auditing, setAuditing] = createSignal(false);
  const [highlightedDynamic] = createResource(result, (r) =>
    r?.dynamic ? highlightPlain(r.dynamic) : "",
  );
  const [highlightedModified] = createResource(result, (r) =>
    r?.modified ? highlightPlain(r.modified) : "",
  );
  let sourceDiv: HTMLDivElement | undefined;

  const runAudit = async () => {
    const src = source();
    if (!src) return;
    setAuditing(true);
    setResult(null);
    setApiUsages([]);
    setAnnotations([]);
    await ensureWasm();
    const r = extract(src, "script.ts");
    setResult(r);
    if (r.dynamic.trim()) {
      const apis = analyzeApis(r.dynamic);
      setApiUsages(apis);
    }
    setAnnotations(scanSource(src));
    setAuditing(false);
  };

  createEffect(() => {
    const html = visibleContent();
    const anns = annotations();
    if (!html || !anns.length || !sourceDiv) return;
    queueMicrotask(() => {
      if (!sourceDiv) return;
      const lines = sourceDiv.querySelectorAll("span.line");
      anns.forEach((a) => {
        const el = lines[a.line];
        if (el) {
          el.classList.add(`line-${a.type}`);
          if (a.api) el.setAttribute("data-api", a.api);
        }
      });
    });
  });

  createEffect(() => {
    selectedStem();
    setResult(null);
    setApiUsages([]);
    setAnnotations([]);
    setFilter("all");
  });

  const scrollToLine = (line: number) => {
    if (!sourceDiv) return;
    const el = sourceDiv.querySelector(`span.line:nth-child(${line + 1})`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const selectStem = (stem: string) => {
    navigate(`/${stem}`);
  };

  const counts = () => {
    const a = annotations();
    return {
      total: a.length,
      danger: a.filter((x) => x.type === "danger").length,
      dynamic: a.filter((x) => x.type === "dynamic").length,
      safe: a.filter((x) => x.type === "safe").length,
    };
  };

  const apiDangerLevel = (api: string) =>
    api === "exec" || api === "execFile" || api === "fetch" ? "error" : "success";

  return (
    <div class="min-h-screen bg-background text-foreground">
      <header class="flex items-center gap-3 border-b border-border px-6 py-4">
        <h1 class="text-xl font-semibold text-primary">Sugg Completions</h1>
        <span class="text-sm text-muted-foreground">补全脚本仓库</span>
      </header>

      <div class="flex min-h-[calc(100vh-65px)]">
        <aside class="w-56 shrink-0 border-r border-border py-4">
          <h2 class="px-4 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            脚本列表
          </h2>
          <ul class="space-y-0.5">
            {scripts.map((s) => (
              <li>
                <Button
                  variant="ghost"
                  classList={{
                    "w-full justify-start rounded-none border-l-3 border-transparent px-4": true,
                    "border-l-accent bg-accent/30": selectedStem() === s.stem,
                  }}
                  onClick={() => selectStem(s.stem)}
                >
                  <div class="text-left">
                    <div class="text-sm font-medium">{s.title}</div>
                    <div class="text-xs text-muted-foreground">{s.description}</div>
                  </div>
                </Button>
              </li>
            ))}
          </ul>
        </aside>

        <main class="flex min-w-0 flex-1">
          <div class="flex-1 overflow-auto p-6">
            <Show
              when={selectedStem()}
              fallback={
                <div class="mt-20 text-center text-muted-foreground">
                  <h2 class="text-2xl font-semibold text-foreground">选择一个脚本开始审核</h2>
                  <p class="mt-2">这些补全脚本用于 Sugg 命令补全引擎。</p>
                  <p class="mt-1">点击左侧列表中的脚本，查看源码并进行安全审计。</p>
                </div>
              }
            >
              <div class="mb-4 flex items-center justify-between border-b border-border pb-4">
                <h2 class="text-lg font-semibold">{selectedStem()}</h2>
                <Button onClick={runAudit} disabled={!source() || wasmReady.loading || auditing()}>
                  {auditing() ? "审计中..." : annotations().length > 0 ? "重新审计" : "安全审计"}
                </Button>
              </div>

              <Card>
                <CardContent class="p-0">
                  <div
                    ref={(el) => {
                      sourceDiv = el;
                    }}
                    class="source-viewer overflow-auto p-4 text-sm leading-relaxed"
                    innerHTML={visibleContent()}
                  />
                </CardContent>
              </Card>
            </Show>
          </div>

          <Show when={result()}>
            <aside class="w-80 shrink-0 border-l border-border overflow-auto p-4 space-y-4">
              <h3 class="text-sm font-semibold">审计结果</h3>

              <div class="flex flex-wrap gap-2">
                <Badge variant="error">危险 ×{counts().danger}</Badge>
                <Badge variant="warning">动态 ×{counts().dynamic}</Badge>
                <Badge variant="success">安全 ×{counts().safe}</Badge>
              </div>

              <div class="flex gap-1">
                {(["all", "danger", "dynamic", "safe"] as const).map((f) => (
                  <Button
                    size="sm"
                    variant={filter() === f ? "default" : "ghost"}
                    onClick={() => setFilter(f)}
                  >
                    {f === "all"
                      ? "全部"
                      : f === "danger"
                        ? "危险"
                        : f === "dynamic"
                          ? "动态"
                          : "安全"}
                  </Button>
                ))}
              </div>

              <div class="space-y-1 overflow-auto font-mono text-xs max-h-60">
                {annotations()
                  .filter((a) => filter() === "all" || a.type === filter())
                  .map((a) => (
                    <button
                      type="button"
                      class="flex w-full items-center gap-2 rounded px-2 py-1 text-left hover:bg-accent"
                      onClick={() => scrollToLine(a.line)}
                    >
                      <span class="w-10 shrink-0 text-muted-foreground">L{a.line + 1}</span>
                      <span
                        class={`h-4 w-0.5 shrink-0 rounded-full ${a.type === "danger" ? "bg-red-500" : a.type === "dynamic" ? "bg-blue-500" : "bg-green-500"}`}
                      />
                      <span class="truncate">{source()?.split("\n")[a.line]?.trim()}</span>
                    </button>
                  ))}
              </div>

              <Show when={apiUsages().length > 0}>
                <details class="group">
                  <summary class="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground">
                    API 使用详情
                  </summary>
                  <div class="mt-2 space-y-2">
                    {apiUsages().map((a) => (
                      <div class="rounded bg-muted p-2">
                        <div class="mb-1 text-xs font-medium">{a.name}</div>
                        <div class="flex flex-wrap gap-1">
                          {a.apis.length > 0 ? (
                            a.apis.map((api) => (
                              <Badge variant={apiDangerLevel(api)} class="text-xs">
                                {api}
                              </Badge>
                            ))
                          ) : (
                            <Badge variant="success">无外部调用</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
              </Show>

              <Show when={highlightedDynamic()}>
                <details class="group">
                  <summary class="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground">
                    查看提取的动态代码
                  </summary>
                  <div
                    class="mt-2 overflow-auto rounded-lg bg-muted p-3 text-xs leading-relaxed"
                    innerHTML={highlightedDynamic()}
                  />
                </details>
              </Show>

              <Show when={highlightedModified()}>
                <details class="group">
                  <summary class="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground">
                    查看静态命令树
                  </summary>
                  <div
                    class="mt-2 overflow-auto rounded-lg bg-muted p-3 text-xs leading-relaxed"
                    innerHTML={highlightedModified()}
                  />
                </details>
              </Show>
            </aside>
          </Show>
        </main>
      </div>
    </div>
  );
};

export default App;
