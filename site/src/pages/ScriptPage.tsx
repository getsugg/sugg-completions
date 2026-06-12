import { Show, createSignal, createMemo, createEffect } from "solid-js";
import { useParams } from "@solidjs/router";
import { useSourceLoader } from "../hooks/useSourceLoader";
import { useAnalysis } from "../hooks/useAnalysis";
import { getScript } from "../lib/scripts-utils";
import { Resizable, ResizablePanel, ResizableHandle } from "~/components/ui/resizable";
import { SourceViewer } from "../components/SourceViewer";
import { DetailArea } from "../components/DetailArea";
import type { FilterType, LineAnnotation } from "../types";

const scrollPositions = new Map<string, number>();

export default function ScriptPage() {
  const params = useParams<{ script?: string }>();
  const stem = () => params.script ?? null;
  const script = createMemo(() => (stem() ? getScript(stem()!) : undefined));

  const { source, rawLines } = useSourceLoader(stem);
  const { analysis, counts } = useAnalysis(stem);

  const [filteredType, setFilteredType] = createSignal<FilterType>("all");
  const [focusIdx, setFocusIdx] = createSignal(-1);

  const [resizableRoot, setResizableRoot] = createSignal<HTMLElement>();
  const [barHeight, setBarHeight] = createSignal(32);
  const [scrollToTarget, setScrollToTarget] = createSignal<number | null>(null);
  const [restoreScrollTop, setRestoreScrollTop] = createSignal<number | null>(null);
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
    return classes;
  });

  const scrollToLine = (line: number) => setScrollToTarget(line);

  return (
    <div class="flex min-h-0 min-w-0 flex-1 flex-col">
      <div class="flex items-center gap-3 border-b border-border px-5 py-2">
        <h2 class="text-sm font-medium">{stem()}</h2>
        <span class="text-xs text-muted-foreground">{script()?.description ?? ""}</span>
        <div class="flex-1" />
        <Show when={analysis.loading}>
          <div class="flex items-center gap-1.5 rounded border border-amber-500/20 bg-amber-500/5 px-2.5 py-1 text-[10px] text-amber-400">
            <span class="inline-block size-1.5 animate-pulse rounded-full bg-amber-500" />
            分析中
          </div>
        </Show>
        <Show when={!analysis.loading && analysis()}>
          <div class="flex items-center gap-1.5 rounded border border-[#30363d] bg-[#21262d] px-2.5 py-1 text-[10px] text-[#8b949e]">
            <span class="text-green-500">✓</span>
            自动分析
            {counts().danger > 0 && (
              <span class="ml-1 text-red-500">· {counts().danger} 项危险</span>
            )}
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
          <SourceViewer
            rawLines={rawLines}
            lineClasses={lineClasses}
            scrollToTarget={scrollToTarget}
            onScrollChange={(top) => {
              currentScrollTop = top;
            }}
            restoreScrollTop={restoreScrollTop}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={`${barHeight()}px`} initialSize={`${barHeight()}px`}>
          <DetailArea
            rootEl={resizableRoot}
            analysis={analysis}
            analysisLoading={() => analysis.loading}
            source={() => source() ?? ""}
            scrollToLine={scrollToLine}
            filteredType={filteredType}
            setFilteredType={setFilteredType}
            focusIdx={focusIdx}
            setFocusIdx={setFocusIdx}
            counts={counts}
            onBarHeightChange={setBarHeight}
          />
        </ResizablePanel>
      </Resizable>
    </div>
  );
}
