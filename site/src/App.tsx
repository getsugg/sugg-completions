import { createResource, createSignal, Show, createEffect, createMemo } from "solid-js";
import type { Component } from "solid-js";
import { useParams, useNavigate } from "@solidjs/router";
import "@shikijs/twoslash/style-rich.css";
import "./App.css";
import scripts, { getScript } from "./scripts";
import { ensureWasm, extract, analyzeApis } from "./parser";
import type { ExtractResult, ApiUsage } from "./parser";
import { scanSource } from "./scan";
import type { LineAnnotation } from "./scan";
import { highlightPlain } from "./shiki";
import { Card, CardContent } from "~/components/ui/card";

interface AnalysisData {
  stem: string;
  anns: LineAnnotation[];
  r: ExtractResult;
  apis: ApiUsage[];
}

type FilterType = "all" | "danger" | "dynamic" | "safe";

const FILTER_LABELS: Record<FilterType, string> = {
  all: "全部",
  danger: "危险",
  dynamic: "动态",
  safe: "安全",
};
const FILTER_COLORS: Record<FilterType, string> = {
  all: "#8b949e",
  danger: "#ef4444",
  dynamic: "#f59e0b",
  safe: "#22c55e",
};
const TYPE_DOT: Record<string, string> = { danger: "#ef4444", dynamic: "#f59e0b", safe: "#22c55e" };

const App: Component = () => {
  document.documentElement.classList.add("dark");
  const params = useParams<{ script?: string }>();
  const navigate = useNavigate();
  const selectedStem = () => params.script || null;

  void ensureWasm();

  // ——— Source & Highlighting (dual-load: classic fallback) ———
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
  const [visibleStem, setVisibleStem] = createSignal("");
  createEffect(() => {
    const h = twoslashHighlighted() || twoslashClassic();
    const stem = selectedStem();
    if (h && stem) {
      setVisibleContent(h);
      setVisibleStem(stem);
    }
  });

  // ——— Filter / Panel / Search ———
  const [filteredType, setFilteredType] = createSignal<FilterType>("all");
  const [panelOpen, setPanelOpen] = createSignal(false);
  const [activeTab, setActiveTab] = createSignal<"summary" | "dynamic" | "static">("summary");
  const [searchQuery, setSearchQuery] = createSignal("");

  // ——— Analysis (runs AFTER highlighted content is visible) ———
  const analysisCache = new Map<string, AnalysisData>();
  const [analysis] = createResource(
    () => visibleStem() || null,
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

  // eslint-disable-next-line no-unassigned-vars
  let sourceDiv: HTMLDivElement | undefined;

  // Apply annotation CSS classes to DOM lines
  createEffect(() => {
    const stem = selectedStem();
    const vStem = visibleStem();
    const data = analysis();
    const filter = filteredType();
    const html = visibleContent();
    if (!data || !sourceDiv || !html) return;
    if (data.stem !== stem || stem !== vStem) return;
    queueMicrotask(() => {
      const lines = sourceDiv!.querySelectorAll("span.line");
      for (const el of lines)
        el.classList.remove("line-danger", "line-dynamic", "line-safe", "line-muted");
      for (const a of data.anns) {
        const el = lines[a.line];
        if (el) el.classList.add(`line-${a.type}`);
      }
      if (filter !== "all") {
        for (let i = 0; i < lines.length; i++) {
          const el = lines[i];
          const ann = data.anns.find((a) => a.line === i);
          if (!ann || ann.type !== filter) el.classList.add("line-muted");
        }
      }
    });
  });

  // Reset on script change
  createEffect(() => {
    selectedStem();
    setPanelOpen(false);
    setFilteredType("all");
    setSearchQuery("");
  });

  const scrollToLine = (line: number) => {
    if (!sourceDiv) return;
    const el = sourceDiv.querySelector(`span.line:nth-child(${line + 1})`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
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

  const groupedAnns = createMemo(() => {
    const anns = analysis()?.anns ?? [];
    const src = source();
    const q = searchQuery().toLowerCase();
    const groups: { type: FilterType; label: string; items: LineAnnotation[] }[] = [
      { type: "danger", label: "危险", items: [] },
      { type: "dynamic", label: "动态函数", items: [] },
      { type: "safe", label: "安全", items: [] },
    ];
    for (const a of anns) {
      const g = groups.find((g) => g.type === a.type);
      if (!g) continue;
      if (q) {
        const line = src?.split("\n")[a.line] ?? "";
        if (!line.toLowerCase().includes(q)) continue;
      }
      g.items.push(a);
    }
    return groups.filter((g) => g.items.length > 0);
  });

  const [highlightedDynamic] = createResource(
    () => analysis()?.r ?? null,
    (r) => (r?.dynamic ? highlightPlain(r.dynamic) : ""),
  );
  const [highlightedModified] = createResource(
    () => analysis()?.r ?? null,
    (r) => (r?.modified ? highlightPlain(r.modified) : ""),
  );

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

      <div class="flex min-h-[calc(100vh-48px)]">
        <aside class="w-[200px] shrink-0 border-r border-border py-3 overflow-auto">
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

            <div class="flex-1 overflow-auto">
              <Card class="m-0 rounded-none border-0 border-b border-border shadow-none">
                <CardContent class="p-0">
                  <div
                    ref={sourceDiv}
                    class="source-viewer overflow-auto p-4 text-sm leading-relaxed"
                    innerHTML={visibleContent()}
                  />
                </CardContent>
              </Card>
            </div>

            <Show when={analysis()}>
              <div class="flex shrink-0 items-center gap-2 border-t border-border bg-card px-5 py-1.5 text-[10px]">
                {(Object.keys(FILTER_LABELS) as FilterType[]).map((k) => (
                  <button
                    type="button"
                    class={`flex cursor-pointer items-center gap-1 rounded px-2 py-0.5 font-medium transition-none ${
                      filteredType() === k ? "outline-1 outline-current" : ""
                    }`}
                    style={{ color: FILTER_COLORS[k] }}
                    onClick={() => setFilteredType(k)}
                  >
                    <span
                      class="inline-block size-1.5 rounded-full"
                      style={`background:${FILTER_COLORS[k]}`}
                    />
                    {FILTER_LABELS[k]}
                    <span class="ml-0.5 text-muted-foreground">
                      {k === "all" ? counts().total : counts()[k]}
                    </span>
                  </button>
                ))}
                <div class="flex-1" />
                <button
                  type="button"
                  class="cursor-pointer text-muted-foreground hover:text-foreground"
                  onClick={() => setPanelOpen(!panelOpen())}
                >
                  {panelOpen() ? "▾ 收起详情" : "▴ 详情"}
                </button>
              </div>
            </Show>

            <Show when={panelOpen() && analysis()}>
              <div class="flex shrink-0 flex-col border-t border-border bg-card">
                <div class="flex shrink-0 border-b border-border">
                  {(["summary", "dynamic", "static"] as const).map((t) => (
                    <button
                      type="button"
                      class={`cursor-pointer border-b-2 px-3.5 py-1.5 text-[11px] font-medium transition-none ${
                        activeTab() === t
                          ? "border-amber-500 text-amber-500"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setActiveTab(t)}
                    >
                      {t === "summary" ? "汇总" : t === "dynamic" ? "动态代码" : "标记后源码"}
                    </button>
                  ))}
                </div>

                <div class="max-h-[260px] overflow-auto px-4 py-3 text-xs">
                  <Show when={activeTab() === "summary"}>
                    <div class="mb-2">
                      <input
                        type="text"
                        placeholder="搜索标注项..."
                        class="w-full rounded border border-border bg-background px-2.5 py-1 text-[11px] text-foreground outline-none placeholder:text-muted-foreground"
                        onInput={(e) => setSearchQuery(e.currentTarget.value)}
                      />
                    </div>
                    <div class="space-y-2.5">
                      {groupedAnns().map((g) => (
                        <div>
                          <div class="mb-1 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                            <span
                              class="inline-block size-1.5 rounded-full"
                              style={`background:${TYPE_DOT[g.type]}`}
                            />
                            {g.label}
                            <span class="ml-auto text-border">{g.items.length}</span>
                          </div>
                          <ul class="space-y-px">
                            {g.items.map((a) => (
                              <li>
                                <button
                                  type="button"
                                  class="flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1 text-left font-mono text-[11px] text-muted-foreground hover:bg-accent hover:text-foreground"
                                  onClick={() => scrollToLine(a.line)}
                                >
                                  <span class="w-7 shrink-0 text-border">L{a.line + 1}</span>
                                  {a.api && (
                                    <span
                                      class={`shrink-0 rounded px-1.5 py-px text-[9px] font-semibold ${
                                        a.type === "danger"
                                          ? "bg-red-500/15 text-red-500"
                                          : a.type === "safe"
                                            ? "bg-green-500/15 text-green-500"
                                            : "bg-amber-500/15 text-amber-500"
                                      }`}
                                    >
                                      {a.api}
                                    </span>
                                  )}
                                  <span class="truncate">
                                    {source()?.split("\n")[a.line]?.trim()}
                                  </span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </Show>

                  <Show when={activeTab() === "dynamic"}>
                    <Show
                      when={highlightedDynamic()}
                      fallback={<div class="text-muted-foreground">无动态代码</div>}
                    >
                      <div
                        class="overflow-auto rounded bg-muted p-3 leading-relaxed [&_pre]:text-[11px]"
                        innerHTML={highlightedDynamic()}
                      />
                    </Show>
                  </Show>

                  <Show when={activeTab() === "static"}>
                    <Show
                      when={highlightedModified()}
                      fallback={<div class="text-muted-foreground">无修改</div>}
                    >
                      <div
                        class="overflow-auto rounded bg-muted p-3 leading-relaxed [&_pre]:text-[11px]"
                        innerHTML={highlightedModified()}
                      />
                    </Show>
                  </Show>
                </div>
              </div>
            </Show>
          </Show>
        </main>
      </div>
    </div>
  );
};

export default App;
