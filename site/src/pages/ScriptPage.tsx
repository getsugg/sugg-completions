import { Show, createSignal, createMemo, createEffect } from "solid-js";
import { useParams } from "@solidjs/router";
import { useSourceLoader } from "~/hooks/useSourceLoader";
import { useAnalysis } from "~/hooks/useAnalysis";
import { getScript } from "~/lib/scripts-utils";
import { ScriptContext } from "~/contexts/ScriptContext";
import { Resizable, ResizablePanel, ResizableHandle } from "~/components/ui/resizable";
import { SourceViewer } from "~/components/SourceViewer";
import { DetailArea } from "~/components/DetailArea";
import { CodeSearch } from "~/components/CodeSearch";
import type { AnalysisData, FilterType, LineAnnotation } from "~/types";

const scrollPositions = new Map<string, number>();

export default function ScriptPage() {
  const params = useParams<{ script?: string }>();
  const stem = () => params.script ?? null;

  const { rawLines } = useSourceLoader(stem);
  const { analysis, counts } = useAnalysis(stem);

  const [filteredType, setFilteredType] = createSignal<FilterType>("all");
  const [searchMatches, setSearchMatches] = createSignal(new Set<number>());

  const [resizableRoot, setResizableRoot] = createSignal<HTMLElement>();
  const [barHeight, setBarHeight] = createSignal(32);
  const [scrollToTarget, setScrollToTarget] = createSignal<number | null>(null);
  const [restoreScrollTop, setRestoreScrollTop] = createSignal<number | null>(null);
  const [scrollTop, setScrollTop] = createSignal(0);
  const [viewportHeight, setViewportHeight] = createSignal(0);
  let currentScrollTop = 0;

  createEffect((prev: string | null) => {
    const s = stem();
    if (!s) return null;
    if (prev && prev !== s) {
      scrollPositions.set(prev, currentScrollTop);
    }
    return s;
  }, null);

  createEffect(() => {
    const lines = rawLines();
    const s = stem();
    if (!lines.length || !s) return;
    setRestoreScrollTop(scrollPositions.get(s) ?? 0);
  });

  const lineClasses = createMemo(() => {
    const anns: LineAnnotation[] = analysis()?.anns ?? [];
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
    const sm = searchMatches();
    if (sm.size > 0) {
      for (const line of sm) {
        if (line >= 0 && line < n) {
          classes[line] = classes[line]
            ? classes[line] + " line-search-match"
            : "line-search-match";
        }
      }
    }
    return classes;
  });

  const scrollToLine = (line: number) => setScrollToTarget(line);

  const displayAnalysis = createMemo((prev: AnalysisData | undefined) => analysis() ?? prev);

  const contextValue = {
    displayAnalysis,
    counts,
    filteredType,
    setFilteredType,
    scrollToLine,
    scrollTop,
    viewportHeight,
  };

  return (
    <ScriptContext.Provider value={contextValue}>
      <div class="flex min-h-0 min-w-0 flex-1 flex-col">
        <div class="flex h-10 shrink-0 items-center gap-3 border-b border-border px-5 bg-[#110e14]">
          <span class="text-sm font-semibold text-[#e8e4ea]">{stem()}</span>
          <span class="truncate text-[11px] text-[#5a4b68]">
            {getScript(stem()!)?.description ?? ""}
          </span>
          <div class="flex-1" />
          <Show when={analysis.loading}>
            <div class="flex items-center gap-1.5 rounded border border-amber-500/20 bg-amber-500/5 px-2.5 py-1 text-[11px] text-amber-400">
              <span class="inline-block size-1.5 animate-pulse rounded-full bg-amber-500" />
              Analyzing
            </div>
          </Show>
          <Show when={!analysis.loading && analysis()}>
            {counts().unsafe > 0 && (
              <span class="rounded-full border border-[#ef444430] bg-[#ef444420] px-2.5 py-0.5 text-[11px] font-bold text-[#ff5555]">
                {counts().unsafe} unsafe
              </span>
            )}
            <div class="flex items-center gap-1 text-[11px] text-[#6a5d78]">
              <span class="text-green-500 text-[11px] font-bold">✓</span>
              Auto Analysis
            </div>
          </Show>
        </div>

        <Resizable
          ref={setResizableRoot}
          orientation="vertical"
          initialSizes={[1, 0]}
          class="flex-1 min-h-0"
        >
          <ResizablePanel>
            <div class="relative h-full">
              <SourceViewer
                rawLines={rawLines()}
                lineClasses={lineClasses()}
                scrollToTarget={scrollToTarget()}
                onScrollChange={(top, vh) => {
                  setScrollTop(top);
                  setViewportHeight(vh);
                  currentScrollTop = top;
                }}
                restoreScrollTop={restoreScrollTop()}
              />
              <CodeSearch
                rawLines={rawLines()}
                onScrollToLine={scrollToLine}
                onSearchUpdate={setSearchMatches}
              />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel minSize={`${barHeight()}px`} initialSize={`${barHeight()}px`}>
            <DetailArea rootEl={resizableRoot()} onBarHeightChange={setBarHeight} />
          </ResizablePanel>
        </Resizable>
      </div>
    </ScriptContext.Provider>
  );
}
