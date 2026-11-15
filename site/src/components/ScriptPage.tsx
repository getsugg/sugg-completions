import {
  For,
  Loading,
  Show,
  createEffect,
  createMemo,
  createSignal,
  onSettled,
  untrack,
  type Accessor,
  type Setter,
} from "solid-js";
import { createResizeObserver } from "@solid-primitives/resize-observer";

import { useSourceLoader } from "~/hooks/useSourceLoader";
import { useAnalysis } from "~/hooks/useAnalysis";
import { getScript } from "~/lib/scripts-utils";
import { ScriptContext, type MergedAnnotation } from "~/contexts/ScriptContext";
import { Resizable, ResizablePanel, ResizableHandle } from "~/components/ui/resizable";
import { SourceViewer, type SourceViewerAPI } from "~/components/SourceViewer";
import { DetailArea } from "~/components/DetailArea";
import { CodeSearch } from "~/components/CodeSearch";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import type { AnalysisData, FilterType, LineAnnotation, LineData } from "~/types";

interface ScriptScrollState {
  selectedFile: string;
  positions: Map<string, number>;
}

const STORAGE_PREFIX = "sugg-scroll:";

function loadPersisted(stem: string): ScriptScrollState | undefined {
  if (typeof sessionStorage === "undefined") return undefined;
  try {
    const raw = sessionStorage.getItem(STORAGE_PREFIX + stem);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw) as {
      selectedFile?: string;
      positions?: [string, number][];
    };
    return {
      selectedFile: parsed.selectedFile ?? "",
      positions: new Map(parsed.positions ?? []),
    };
  } catch {
    return undefined;
  }
}

function getOrCreateState(
  store: Map<string, ScriptScrollState>,
  stem: string,
): ScriptScrollState {
  let state = store.get(stem);
  if (!state) {
    state = loadPersisted(stem) ?? { selectedFile: "", positions: new Map() };
    store.set(stem, state);
  }
  return state;
}

function persistState(stem: string, state: ScriptScrollState) {
  if (typeof sessionStorage === "undefined") return;
  try {
    sessionStorage.setItem(
      STORAGE_PREFIX + stem,
      JSON.stringify({
        selectedFile: state.selectedFile,
        positions: [...state.positions.entries()],
      }),
    );
  } catch {
    // storage full or unavailable; scroll restoration is best effort
  }
}

function useScrollManager(opts: {
  stem: Accessor<string | null>;
  activeFile: Accessor<string | null>;
  setActiveFile: Setter<string | null>;
  rawLines: Accessor<LineData[]>;
  fileTabs: Accessor<{ id: string }[]>;
}) {
  let pendingRestore: { stem: string; fileId: string } | null = null;
  let api: SourceViewerAPI | undefined;
  // Per-instance cache: module scope would be shared by every SSR request.
  const scrollState = new Map<string, ScriptScrollState>();

  createEffect(opts.rawLines, () => {
    if (!pendingRestore || !api) return;
    const saved = scrollState
      .get(pendingRestore.stem)
      ?.positions.get(pendingRestore.fileId);
    api.scrollToPos(saved ?? 0);
    pendingRestore = null;
  });

  createEffect(
    () => [opts.fileTabs(), opts.stem()] as const,
    ([tabs, s]) => {
      if (!s || !tabs.length) return;
      const current = untrack(() => opts.activeFile());
      if (current && tabs.some((t) => t.id === current)) return;
      const saved = getOrCreateState(scrollState, s).selectedFile;
      const target = saved && tabs.some((t) => t.id === saved) ? saved : tabs[0].id;
      pendingRestore = { stem: s, fileId: target };
      opts.setActiveFile(target);
    },
  );

  onSettled(() => {
    const save = () => {
      const s = opts.stem();
      const af = opts.activeFile();
      if (!s || !af || !api) return;
      const state = getOrCreateState(scrollState, s);
      state.selectedFile = af;
      state.positions.set(af, api.getCurrentTop());
      persistState(s, state);
    };
    window.addEventListener("pagehide", save);
    return () => {
      // Navigating away disposes this page before pagehide can fire.
      save();
      window.removeEventListener("pagehide", save);
    };
  });

  const handleFileSwitch = (newFileId: string) => {
    const s = opts.stem();
    const current = opts.activeFile();
    if (!s || current === newFileId) return;
    if (current && api) {
      const state = getOrCreateState(scrollState, s);
      state.positions.set(current, api.getCurrentTop());
      state.selectedFile = newFileId;
      persistState(s, state);
    }
    pendingRestore = { stem: s, fileId: newFileId };
    opts.setActiveFile(newFileId);
  };

  const scrollToLine = (line: number, fileId?: string) => {
    const s = opts.stem();
    const current = opts.activeFile();
    if (s && fileId && fileId !== current) {
      if (current && api) {
        getOrCreateState(scrollState, s).positions.set(current, api.getCurrentTop());
      }
      pendingRestore = null;
      opts.setActiveFile(fileId);
    }
    api?.scrollToLine(line);
  };

  const getCenterLine = () => api?.getCenterLine() ?? 0;

  return {
    handleFileSwitch,
    scrollToLine,
    getCenterLine,
    bindAPI: (a: SourceViewerAPI) => {
      api = a;
    },
  };
}

interface ScriptPageProps {
  stem: string;
}

// Deterministic widths keep the placeholder stable between renders.
const SKELETON_WIDTHS = Array.from({ length: 30 }, (_, i) => 32 + ((i * 37) % 55));

function ScriptSkeleton(props: { stem: string }) {
  const hasTabs = () => (getScript(props.stem)?.files.length ?? 0) > 1;
  return (
    <div class="flex min-h-0 min-w-0 flex-1 flex-col">
      <div class="flex h-10 shrink-0 items-center gap-3 border-b border-border px-5 bg-[#110e14]">
        <span class="text-sm font-semibold text-[#e8e4ea]">{props.stem}</span>
        <span class="truncate text-[11px] text-[#5a4b68]">
          {getScript(props.stem)?.description ?? ""}
        </span>
        <div class="flex-1" />
        <div class="flex items-center gap-1.5 rounded border border-amber-500/20 bg-amber-500/5 px-2.5 py-1 text-[11px] text-amber-400">
          <span class="inline-block size-1.5 animate-pulse rounded-full bg-amber-500" />
          Analyzing
        </div>
      </div>
      <Show when={hasTabs()}>
        <div class="h-[33px] shrink-0 border-b border-border bg-[#1a1720]" />
      </Show>
      <div class="flex-1 min-h-0 overflow-hidden p-4" aria-hidden="true">
        <div class="flex flex-col">
          <For each={SKELETON_WIDTHS}>
            {(width) => (
              <div class="flex h-[22px] items-center">
                <div class="flex w-8 shrink-0 justify-end pr-2">
                  <div class="h-2 w-4 rounded bg-[#241d2d]" />
                </div>
                <div class="ml-[19px] h-2 rounded bg-[#241d2d]" style={{ width: `${width}%` }} />
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
}

export function ScriptPage(props: ScriptPageProps) {
  const stem = () => props.stem;

  const [activeFile, setActiveFile] = createSignal<string | null>(null);

  const { rawLines } = useSourceLoader(stem, activeFile);
  const { analysis, loading, pending } = useAnalysis(stem, activeFile);

  const mergedAnnotations = createMemo(() => {
    const s = stem();
    if (!s) return [] as MergedAnnotation[];
    const script = getScript(s);
    if (!script) return [] as MergedAnnotation[];
    const result: MergedAnnotation[] = [];
    for (const file of script.files) {
      for (const ann of file.anns) {
        result.push({ ...ann, fileId: file.id, filename: file.filename });
      }
    }
    return result;
  });

  const counts = createMemo(() => {
    const anns = mergedAnnotations();
    return {
      total: anns.length,
      unsafe: anns.filter((a) => a.type === "unsafe").length,
      safe: anns.filter((a) => a.type === "safe").length,
    };
  });

  const [filteredType, setFilteredType] = createSignal<FilterType>("all");
  const [searchMatches, setSearchMatches] = createSignal(new Set<number>());
  const [lastJumpedLine, setLastJumpedLine] = createSignal(-1);

  const [barHeight, setBarHeight] = createSignal(32);
  const [containerHeight, setContainerHeight] = createSignal(0);
  const [panelSizes, setPanelSizes] = createSignal<number[]>([1, 0]);
  const [resizableEl, setResizableEl] = createSignal<HTMLDivElement>();

  createResizeObserver(resizableEl, ({ height }) => {
    setContainerHeight(height);
  });

  const minFrac = createMemo(() => {
    const ch = containerHeight();
    return ch === 0 ? 0 : barHeight() / ch;
  });

  const safePanelSizes = createMemo(() => {
    const current = panelSizes();
    const min = minFrac();
    if (current[1] < min) {
      return [1 - min, min];
    }
    return current;
  });

  const handleSizesChange = (sizes: number[]) => {
    const min = minFrac();
    if (sizes[1] < min) {
      setPanelSizes([1 - min, min]);
    } else {
      setPanelSizes(sizes);
    }
  };

  const fileTabs = createMemo(() => {
    const s = stem();
    if (!s) return [];
    return getScript(s)?.files ?? [];
  });

  const { handleFileSwitch, scrollToLine, getCenterLine, bindAPI } = useScrollManager({
    stem,
    activeFile,
    setActiveFile,
    rawLines,
    fileTabs,
  });

  const baseClasses = createMemo(() => {
    const anns: LineAnnotation[] = analysis()?.anns ?? [];
    const filter = filteredType();
    const n = rawLines().length;
    const classes: string[] = Array.from({ length: n }, () =>
      filter !== "all" ? "line-muted" : "",
    );
    for (const ann of anns) {
      if (ann.line < 0 || ann.line >= n) continue;
      if (filter !== "all" && ann.type !== filter) {
        classes[ann.line] = `line-${ann.type} line-muted`;
      } else {
        classes[ann.line] = `line-${ann.type}`;
      }
    }
    return classes;
  });

  const getLineClass = (index: number) => {
    const base = baseClasses()[index] ?? "";
    return searchMatches().has(index) ? `${base} line-search-match`.trim() : base;
  };

  let lastAnalysis: AnalysisData | undefined;
  const displayAnalysis = createMemo(() => {
    const current = analysis();
    if (current) lastAnalysis = current;
    return lastAnalysis;
  });

  const contextValue = {
    stem,
    activeFile,
    displayAnalysis,
    mergedAnnotations,
    counts,
    filteredType,
    setFilteredType,
    scrollToLine,
    getCenterLine,
    lastJumpedLine,
  };

  return (
    <ScriptContext value={contextValue}>
      <Loading on={stem()} fallback={<ScriptSkeleton stem={stem()} />}>
        <div class="flex min-h-0 min-w-0 flex-1 flex-col">
          <div class="flex h-10 shrink-0 items-center gap-3 border-b border-border px-5 bg-[#110e14]">
            <span class="text-sm font-semibold text-[#e8e4ea]">{stem()}</span>
            <span class="truncate text-[11px] text-[#5a4b68]">
              {getScript(stem())?.description ?? ""}
            </span>
            <div class="flex-1" />
            <Show when={loading()}>
              <div class="flex items-center gap-1.5 rounded border border-amber-500/20 bg-amber-500/5 px-2.5 py-1 text-[11px] text-amber-400">
                <span class="inline-block size-1.5 animate-pulse rounded-full bg-amber-500" />
                Analyzing
              </div>
            </Show>
            <Show when={pending()}>
              <div class="flex items-center gap-1.5 rounded border border-sky-500/20 bg-sky-500/5 px-2.5 py-1 text-[11px] text-sky-400">
                Switching
              </div>
            </Show>
            <Show when={!loading() && analysis()}>
              {counts().unsafe > 0 && (
                <Badge variant="error" round class="text-[11px]">
                  {counts().unsafe} unsafe
                </Badge>
              )}
              <div class="flex items-center gap-1 text-[11px] text-[#6a5d78]">
                <span class="text-green-500 text-[11px] font-bold">✓</span>
                Auto Analysis
              </div>
            </Show>
          </div>

          <Resizable
            ref={setResizableEl}
            orientation="vertical"
            sizes={safePanelSizes()}
            onSizesChange={handleSizesChange}
            class="flex-1 min-h-0"
          >
            <ResizablePanel>
              <div class="relative h-full flex flex-col">
                <Show when={fileTabs().length > 1}>
                  <Tabs value={activeFile() ?? ""} onChange={handleFileSwitch}>
                    <TabsList class="h-auto justify-start rounded-none border-b border-border bg-[#1a1720] p-0 w-full">
                      <For each={fileTabs()}>
                        {(tab) => (
                          <TabsTrigger
                            value={tab.id}
                            class="rounded-none px-3 py-1.5 text-[11px] font-medium text-muted-foreground transition-none"
                          >
                            {tab.filename}
                          </TabsTrigger>
                        )}
                      </For>
                    </TabsList>
                  </Tabs>
                </Show>

                <div class="relative flex-1 min-h-0">
                  <SourceViewer
                    ref={bindAPI}
                    rawLines={rawLines()}
                    getLineClass={getLineClass}
                    onJump={setLastJumpedLine}
                  />
                  <CodeSearch rawLines={rawLines()} onSearchUpdate={setSearchMatches} />
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>
              <DetailArea containerHeight={containerHeight()} onBarHeightChange={setBarHeight} />
            </ResizablePanel>
          </Resizable>
        </div>
      </Loading>
    </ScriptContext>
  );
}
