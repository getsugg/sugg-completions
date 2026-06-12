import { createResource, createSignal, Show, createEffect, createMemo, For } from "solid-js";
import { createStore } from "solid-js/store";
import type { Component } from "solid-js";
import { useParams, useNavigate } from "@solidjs/router";
import { createVirtualizer } from "@tanstack/solid-virtual";
import "@shikijs/twoslash/style-rich.css";
import "./App.css";
import scripts, { getScript } from "./scripts";
import { ensureWasm, extract, analyzeApis } from "./parser";
import { scanSource } from "./scan";
import { Resizable, ResizablePanel, ResizableHandle } from "~/components/ui/resizable";
import { DetailArea, type AnalysisData, type FilterType } from "./DetailArea";

const INITIAL_SIZES = [0.92, 0.08];

const App: Component = () => {
  document.documentElement.classList.add("dark");
  const params = useParams<{ script?: string }>();
  const navigate = useNavigate();
  const selectedStem = () => params.script || null;

  void ensureWasm();

  // ——— Source & Highlighting ———
  const [source] = createResource(selectedStem, async (stem) => {
    if (!stem) return "";
    return getScript(stem)?.source() ?? "";
  });
  const [twoslashHighlighted] = createResource(selectedStem, async (stem) => {
    if (!stem) return "";
    return getScript(stem)?.highlighted() ?? "";
  });
  // ——— Line extraction & virtual scrolling ———
  const rawLines = createMemo(() => {
    const html = twoslashHighlighted();
    if (!html) return [];
    const lines: string[] = [];
    let pos = 0;
    const marker = '<span class="line"';
    while (true) {
      const start = html.indexOf(marker, pos);
      if (start === -1) break;
      const tagEnd = html.indexOf(">", start);
      if (tagEnd === -1) break;
      let depth = 1;
      let i = tagEnd + 1;
      while (depth > 0 && i < html.length) {
        const nextOpen = html.indexOf("<span", i);
        const nextClose = html.indexOf("</span>", i);
        if (nextClose === -1) break;
        if (nextOpen !== -1 && nextOpen < nextClose) {
          depth++;
          i = nextOpen + 6;
        } else {
          depth--;
          i = nextClose + 7;
        }
      }
      lines.push(html.slice(start, i));
      pos = i;
    }
    return lines;
  });

  let scrollEl: HTMLDivElement | undefined;
  const virtualizer = createVirtualizer({
    get count() {
      return rawLines().length;
    },
    getScrollElement: () => scrollEl ?? null,
    estimateSize: () => 22,
    overscan: 10,
  });

  // ——— Per-script UI state (natural per-stem partitioning via store) ———
  const [scriptUI, setScriptUI] = createStore<
    Record<string, { scrollTop: number; focusIdx: number }>
  >({});
  const focusIdx = createMemo(() => scriptUI[selectedStem() ?? ""]?.focusIdx ?? -1);
  const setFocusIdx = (v: number) => {
    const stem = selectedStem();
    if (stem) setScriptUI(stem, "focusIdx", v);
  };

  const [filteredType, setFilteredType] = createSignal<FilterType>("all");

  // ——— Analysis ———
  const analysisCache = new Map<string, AnalysisData>();
  const [analysis] = createResource(
    () => selectedStem(),
    async (stem): Promise<AnalysisData> => {
      const cached = analysisCache.get(stem);
      if (cached) return cached;
      const src = (await getScript(stem)?.source()) ?? "";
      const script = getScript(stem);
      const anns = script?.staticAnalysis ?? scanSource(src);
      await ensureWasm();
      const r = extract(src, "script.ts");
      const apis = r.dynamic.trim() ? analyzeApis(r.dynamic) : [];
      const result: AnalysisData = { stem, anns, r, apis };
      analysisCache.set(stem, result);
      return result;
    },
  );

  // Line annotation classes (data-driven, no DOM queries)
  const lineClasses = createMemo(() => {
    const anns = analysis()?.anns ?? [];
    const filter = filteredType();
    const n = rawLines().length;
    const classes: string[] = [];
    for (let i = 0; i < n; i++) {
      const ann = anns.find((a) => a.line === i);
      let cls = "";
      if (ann) cls = `line-${ann.type}`;
      if (filter !== "all" && (!ann || ann.type !== filter))
        cls = cls ? cls + " line-muted" : "line-muted";
      classes[i] = cls;
    }
    return classes;
  });

  // Restore scroll position after new content renders
  createEffect(() => {
    const lines = rawLines();
    if (!lines.length || !scrollEl) return;
    const stem = selectedStem();
    if (!stem) return;
    const saved = scriptUI[stem];
    requestAnimationFrame(() => {
      if (!scrollEl) return;
      scrollEl.scrollTop = saved && saved.scrollTop > 0 ? saved.scrollTop : 0;
    });
  });

  const scrollToLine = (line: number) => {
    if (!scrollEl) return;
    const top = line * 22 - scrollEl.clientHeight / 2 + 11;
    scrollEl.scrollTop = Math.max(0, top);
  };

  const selectStem = (stem: string) => navigate(`/${stem}`);

  const counts = createMemo(() => {
    const anns = analysis()?.anns ?? [];
    return {
      total: anns.length,
      danger: anns.filter((a) => a.type === "danger").length,
      dynamic: anns.filter((a) => a.type === "dynamic").length,
      safe: anns.filter((a) => a.type === "safe").length,
    };
  });

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
        <aside class="w-50 shrink-0 border-r border-border py-3 overflow-auto">
          <h2 class="px-3.5 pb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Scripts
          </h2>
          <ul class="space-y-px">
            {scripts.map((s) => {
              const anns = analysis()?.anns;
              const hasDanger = anns?.some((a) => a.type === "danger");
              const dotColor = !anns ? "#484f58" : hasDanger ? "#ef4444" : "#22c55e";
              return (
                <li>
                  <button
                    type="button"
                    class={`flex w-full items-center gap-2 border-l-3 border-transparent px-3.5 py-1.5 text-left text-xs transition-none ${
                      selectedStem() === s.stem
                        ? "border-l-amber-500 bg-amber-500/10 text-amber-500"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                    onClick={() => selectStem(s.stem)}
                  >
                    <span class="text-sm">
                      {s.stem === "bun"
                        ? "⚡"
                        : s.stem === "git"
                          ? "〈〉"
                          : s.stem === "npm"
                            ? "●"
                            : s.stem === "scoop"
                              ? "¶"
                              : s.stem === "sugg"
                                ? "»"
                                : "⇣"}
                    </span>
                    <span class="flex-1">{s.title}</span>
                    <span class="size-1.5 shrink-0 rounded-full" style={`background:${dotColor}`} />
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <main class="flex min-w-0 flex-1 flex-col">
          <Show
            when={selectedStem()}
            fallback={
              <div class="mt-20 text-center text-muted-foreground">
                <div class="mb-3 text-3xl text-border">❯</div>
                <h2 class="text-base font-semibold text-foreground">选择一个脚本开始分析</h2>
                <p class="mt-1 text-xs">这些补全脚本用于 Sugg 命令补全引擎。</p>
                <p class="text-xs">点击左侧列表中的脚本查看源码和安全分析。</p>
              </div>
            }
          >
            <div class="flex items-center gap-3 border-b border-border px-5 py-2">
              <h2 class="text-sm font-medium">{selectedStem()}</h2>
              <span class="text-xs text-muted-foreground">
                {getScript(selectedStem()!)?.description ?? ""}
              </span>
              <div class="flex-1" />
              <Show when={analysis.loading}>
                <div class="flex items-center gap-1.5 rounded border border-amber-500/20 bg-amber-500/5 px-2.5 py-1 text-[10px] text-amber-400">
                  <span class="inline-block size-1.5 animate-pulse rounded-full bg-amber-500" />
                  分析中
                </div>
              </Show>
              <Show when={!analysis.loading && analysis()}>
                <div class="flex items-center gap-1.5 rounded border border-border px-2.5 py-1 text-[10px] text-muted-foreground">
                  <span class="text-green-500">✓</span>
                  自动分析
                  {counts().danger > 0 && (
                    <span class="ml-1 text-red-500">· {counts().danger} 项危险</span>
                  )}
                </div>
              </Show>
            </div>

            <Resizable orientation="vertical" initialSizes={INITIAL_SIZES} class="flex-1">
              <ResizablePanel>
                <div
                  ref={(el) => {
                    scrollEl = el;
                  }}
                  class="h-full overflow-auto"
                  onScroll={(e) => {
                    const stem = selectedStem();
                    if (stem) setScriptUI(stem, "scrollTop", e.currentTarget.scrollTop);
                  }}
                >
                  <div class="source-viewer twoslash p-4 text-sm leading-relaxed">
                    <div
                      style={{
                        height: `${virtualizer.getTotalSize()}px`,
                        position: "relative",
                      }}
                    >
                      <For each={virtualizer.getVirtualItems()}>
                        {(item) => (
                          <div
                            data-line-number={item.index + 1}
                            class={(() => {
                              const cls = lineClasses()[item.index];
                              return cls ? `line-row ${cls}` : "line-row";
                            })()}
                            style={{
                              position: "absolute",
                              top: `${item.start}px`,
                              left: 0,
                              width: "100%",
                              height: `${item.size}px`,
                            }}
                            innerHTML={rawLines()[item.index] || ""}
                          />
                        )}
                      </For>
                    </div>
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel>
                <DetailArea
                  analysis={analysis}
                  analysisLoading={() => analysis.loading}
                  source={() => source() ?? ""}
                  scrollToLine={scrollToLine}
                  filteredType={filteredType}
                  setFilteredType={setFilteredType}
                  focusIdx={focusIdx}
                  setFocusIdx={setFocusIdx}
                  counts={counts}
                />
              </ResizablePanel>
            </Resizable>
          </Show>
        </main>
      </div>
    </div>
  );
};

export default App;
