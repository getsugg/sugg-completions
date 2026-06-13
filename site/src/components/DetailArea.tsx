import { Show, createSignal, createMemo, createEffect } from "solid-js";
import ResizablePrimitive from "@corvu/resizable";
import { createResizeObserver } from "@solid-primitives/resize-observer";
import type { AnalysisData, FilterType } from "../types";
import { FilterBar } from "./FilterBar";
import { AnnotationList } from "./AnnotationList";
import { DynamicCodePanel } from "./DynamicCodePanel";
import { StaticCodePanel } from "./StaticCodePanel";

export interface DetailAreaProps {
  rootEl: () => HTMLElement | undefined;
  analysis: () => AnalysisData | undefined;
  analysisLoading: () => boolean;
  source: () => string;
  scrollToLine: (line: number) => void;
  filteredType: () => FilterType;
  setFilteredType: (v: FilterType) => void;
  focusIdx: () => number;
  setFocusIdx: (v: number) => void;
  counts: () => { total: number; danger: number; dynamic: number; safe: number };
  onBarHeightChange?: (px: number) => void;
}

export function DetailArea(props: DetailAreaProps) {
  const ctx = ResizablePrimitive.useContext();
  const [lastExpandedRatio, setLastExpandedRatio] = createSignal(0.35);
  const [containerHeight, setContainerHeight] = createSignal(300);

  createResizeObserver(props.rootEl, ({ height }) => setContainerHeight(height));

  const [filterBarEl, setFilterBarEl] = createSignal<HTMLDivElement>();
  createResizeObserver(filterBarEl, ({ height }) => {
    props.onBarHeightChange?.(Math.ceil(height));
  });

  const isExpanded = createMemo(() => ctx.sizes()[1] * containerHeight() > 60);

  createEffect(() => {
    if (isExpanded()) setLastExpandedRatio(ctx.sizes()[1]);
  });

  const toggle = () => {
    if (isExpanded()) {
      ctx.resize(1, 0);
    } else {
      const r = lastExpandedRatio();
      ctx.setSizes([1 - r, r]);
    }
  };

  const displayAnalysis = createMemo((prev: AnalysisData | undefined) => props.analysis() ?? prev);
  const [activeTab, setActiveTab] = createSignal<"summary" | "dynamic" | "static">("summary");

  const matchedLines = createMemo(() => {
    const filter = props.filteredType();
    if (filter === "all") return [];
    return (displayAnalysis()?.anns ?? [])
      .filter((a) => a.type === filter)
      .map((a) => a.line)
      .sort((a, b) => a - b);
  });

  return (
    <div class="flex flex-col h-full">
      <Show when={displayAnalysis()}>
        <FilterBar
          barRef={setFilterBarEl}
          filteredType={props.filteredType}
          setFilteredType={props.setFilteredType}
          counts={props.counts}
          matchedLines={matchedLines}
          focusIdx={props.focusIdx}
          setFocusIdx={props.setFocusIdx}
          scrollToLine={props.scrollToLine}
          onToggle={toggle}
          isExpanded={isExpanded}
        />
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
                {t === "summary" ? "Summary" : t === "dynamic" ? "Dynamic" : "Static"}
              </button>
            ))}
          </div>
          <div class="flex-1 overflow-auto px-4 py-3 text-xs">
            <Show when={activeTab() === "summary"}>
              <AnnotationList
                anns={() => displayAnalysis()?.anns ?? []}
                source={props.source}
                scrollToLine={props.scrollToLine}
              />
            </Show>
            <Show when={activeTab() === "dynamic"}>
              <DynamicCodePanel dynamicJs={displayAnalysis()?.r.dynamic} />
            </Show>
            <Show when={activeTab() === "static"}>
              <StaticCodePanel modified={displayAnalysis()?.r.modified} />
            </Show>
          </div>
        </div>
      </Show>
    </div>
  );
}
