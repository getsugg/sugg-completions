import { createSignal, Show, createMemo, createResource, createEffect } from "solid-js";
import { highlightPlain } from "./shiki";
import type { LineAnnotation } from "./scan";
import type { ExtractResult, ApiUsage } from "./parser";
import ResizablePrimitive from "@corvu/resizable";

export type FilterType = "all" | "danger" | "dynamic" | "safe";

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

export interface AnalysisData {
  stem: string;
  anns: LineAnnotation[];
  r: ExtractResult;
  apis: ApiUsage[];
}

export interface DetailAreaProps {
  analysis: () => AnalysisData | undefined;
  analysisLoading: () => boolean;
  source: () => string;
  scrollToLine: (line: number) => void;
  filteredType: () => FilterType;
  setFilteredType: (v: FilterType) => void;
  focusIdx: () => number;
  setFocusIdx: (v: number) => void;
  counts: () => {
    total: number;
    danger: number;
    dynamic: number;
    safe: number;
  };
}

export function DetailArea(props: DetailAreaProps) {
  const ctx = ResizablePrimitive.useContext();
  const collapsedSize = 0.08;
  const idx = 1;

  const isExpanded = createMemo(() => ctx.sizes()[idx] > collapsedSize + 0.001);

  const [lastExpandedSize, setLastExpandedSize] = createSignal(0.4);

  createEffect(() => {
    if (isExpanded()) setLastExpandedSize(ctx.sizes()[idx]);
  });

  let cachedAnalysis: AnalysisData | undefined;

  createEffect(() => {
    if (props.analysis()) cachedAnalysis = props.analysis();
  });

  const displayAnalysis = () => props.analysis() ?? cachedAnalysis;

  const [activeTab, setActiveTab] = createSignal<"summary" | "dynamic" | "static">("summary");
  const [searchQuery, setSearchQuery] = createSignal("");

  const matchedLines = createMemo(() => {
    const filter = props.filteredType();
    if (filter === "all") return [];
    return (displayAnalysis()?.anns ?? [])
      .filter((a) => a.type === filter)
      .map((a) => a.line)
      .sort((a, b) => a - b);
  });

  const groupedAnns = createMemo(() => {
    const anns = displayAnalysis()?.anns ?? [];
    const src = props.source();
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
    () => displayAnalysis()?.r ?? null,
    (r) => (r?.dynamic ? highlightPlain(r.dynamic) : ""),
  );
  const [highlightedModified] = createResource(
    () => displayAnalysis()?.r ?? null,
    (r) => (r?.modified ? highlightPlain(r.modified) : ""),
  );

  const toggle = () => {
    const cur = ctx.sizes()[idx];
    const ns = [...ctx.sizes()];
    if (isExpanded()) {
      ns[idx] = collapsedSize;
      ns[0] = ctx.sizes()[0] + cur - collapsedSize;
    } else {
      ns[idx] = lastExpandedSize();
      ns[0] = ctx.sizes()[0] - (lastExpandedSize() - cur);
    }
    ctx.setSizes(ns);
  };

  return (
    <div class="flex flex-col h-full">
      <Show when={displayAnalysis()}>
        <div class="flex shrink-0 items-center gap-2 border-t border-border bg-card px-5 py-1.5 text-[10px]">
          {(Object.keys(FILTER_LABELS) as FilterType[]).map((k) => (
            <button
              type="button"
              class={`flex cursor-pointer items-center gap-1 rounded px-2 py-0.5 font-medium transition-none ${
                props.filteredType() === k ? "outline-1 outline-current" : ""
              }`}
              style={{ color: FILTER_COLORS[k] }}
              onClick={() => {
                props.setFilteredType(k);
                props.setFocusIdx(-1);
              }}
            >
              <span
                class="inline-block size-1.5 rounded-full"
                style={`background:${FILTER_COLORS[k]}`}
              />
              {FILTER_LABELS[k]}
              <span class="ml-0.5 text-muted-foreground">
                {k === "all" ? props.counts().total : props.counts()[k]}
              </span>
            </button>
          ))}
          <div class="w-px h-3 bg-border mx-1" />
          <button
            type="button"
            class="cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-muted-foreground hover:text-foreground px-1"
            disabled={props.filteredType() === "all" || matchedLines().length === 0}
            onClick={() => {
              const lines = matchedLines();
              const cur = props.focusIdx();
              const next = cur < 0 ? lines.length - 1 : Math.max(0, cur - 1);
              props.setFocusIdx(next);
              props.scrollToLine(lines[next]);
            }}
          >
            ◀
          </button>
          <button
            type="button"
            class="cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-muted-foreground hover:text-foreground px-1"
            disabled={props.filteredType() === "all" || matchedLines().length === 0}
            onClick={() => {
              const lines = matchedLines();
              const cur = props.focusIdx();
              const next = cur < 0 ? 0 : Math.min(lines.length - 1, cur + 1);
              props.setFocusIdx(next);
              props.scrollToLine(lines[next]);
            }}
          >
            ▶
          </button>
          <div class="flex-1" />
          <button
            type="button"
            class="cursor-pointer text-muted-foreground hover:text-foreground"
            onClick={toggle}
          >
            {isExpanded() ? "▾ 收起详情" : "▴ 详情"}
          </button>
        </div>
      </Show>
      <Show when={isExpanded() && displayAnalysis()}>
        <div class="flex flex-1 flex-col min-h-0 border-t border-border bg-card">
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
          <div class="flex-1 overflow-auto px-4 py-3 text-xs">
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
                            onClick={() => props.scrollToLine(a.line)}
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
                              {props.source().split("\n")[a.line]?.trim()}
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
    </div>
  );
}
