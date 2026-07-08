import {
  Show,
  ErrorBoundary,
  createSignal,
  createMemo,
  createEffect,
  on,
  For,
  type Accessor,
  type Setter,
} from "solid-js";
import { useParams, useBeforeLeave } from "@solidjs/router";
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

/**
 * 滚动状态管理 hook
 *
 * 职责：管理文件/脚本切换时的滚动位置保存与恢复。
 * 核心设计：滚动恢复必须等 rawLines 数据加载完后才执行，
 * 因为 setActiveFile 触发的是异步 fetch，在旧数据的虚拟列表上直接
 * 设置 scrollTop 会被浏览器 clamp 到 0，新数据加载后位置就丢了。
 *
 * 流程：
 *   1. 切换文件/脚本时 → 保存当前位置到 positions Map，记录 pendingRestoreKey
 *   2. rawLines 加载完 → effect 触发，根据 pendingRestoreKey 恢复滚动
 *   3. 点击注解跳行 → 清除 pendingRestoreKey，直接 scrollToLine（不走记忆）
 */
// 滚动状态缓存：每个脚本记住上次打开的文件和各文件的滚动位置
// 模块级单例：跨组件挂载/卸载持久化，导航回来还能恢复
interface ScriptScrollState {
  selectedFile: string;
  positions: Map<string, number>; // fileId → scrollTop
}
const scrollState = new Map<string, ScriptScrollState>();

function getOrCreateState(stem: string): ScriptScrollState {
  let state = scrollState.get(stem);
  if (!state) {
    state = { selectedFile: "", positions: new Map() };
    scrollState.set(stem, state);
  }
  return state;
}

function useScrollManager(opts: {
  stem: Accessor<string | null>;
  activeFile: Accessor<string | null>;
  setActiveFile: Setter<string | null>;
  rawLines: Accessor<LineData[]>;
  fileTabs: Accessor<{ id: string }[]>;
}) {
  // 待恢复的滚动位置，等 rawLines 加载完后才真正恢复
  let pendingRestore: { stem: string; fileId: string } | null = null;
  // SourceViewer 暴露的命令式 API，通过 bindAPI 注入
  let api: SourceViewerAPI | undefined;

  // 监听 rawLines 变化（数据加载完成），执行挂起的滚动恢复
  createEffect(
    on(opts.rawLines, () => {
      if (!pendingRestore || !api) return;
      const saved = scrollState.get(pendingRestore.stem)?.positions.get(pendingRestore.fileId);
      api.scrollToPos(saved ?? 0);
      pendingRestore = null;
    }),
  );

  // 路由离开前：在旧 DOM 还在时安全保存旧脚本的滚动位置和激活文件
  useBeforeLeave(() => {
    const s = opts.stem();
    const af = opts.activeFile();
    if (s && af && api) {
      const state = getOrCreateState(s);
      state.selectedFile = af;
      state.positions.set(af, api.getCurrentTop());
    }
  });

  // 监听脚本切换（路由变化），恢复新脚本的上次文件+滚动位置
  createEffect(
    on(opts.stem, (currentStem) => {
      if (!currentStem) return;
      const saved = scrollState.get(currentStem)?.selectedFile;
      const tabs = opts.fileTabs();
      const firstFileId = tabs[0]?.id;
      const targetFile = saved && tabs.some((t) => t.id === saved) ? saved : firstFileId;
      if (targetFile) {
        pendingRestore = { stem: currentStem, fileId: targetFile };
        opts.setActiveFile(targetFile);
      }
    }),
  );

  // 点击顶部文件 Tab 时调用：保存旧文件位置 → 设置待恢复 → 切换文件
  const handleFileSwitch = (newFileId: string) => {
    const s = opts.stem();
    const current = opts.activeFile();
    if (!s || current === newFileId) return;
    // 保存当前文件的滚动位置
    if (current && api) {
      getOrCreateState(s).positions.set(current, api.getCurrentTop());
    }
    // 标记待恢复，等 rawLines 加载完后才真正滚动
    pendingRestore = { stem: s, fileId: newFileId };
    opts.setActiveFile(newFileId);
  };

  // 点击注解/搜索结果跳转到指定行：同文件内直接跳，跨文件先切再跳
  // 注意：跳行不走记忆恢复，直接 scrollToLine
  const scrollToLine = (line: number, fileId?: string) => {
    const s = opts.stem();
    const current = opts.activeFile();
    // 跨文件跳转：保存旧文件位置，清除待恢复（跳行优先于记忆），切换文件
    if (s && fileId && fileId !== current) {
      if (current && api) {
        getOrCreateState(s).positions.set(current, api.getCurrentTop());
      }
      pendingRestore = null;
      opts.setActiveFile(fileId);
    }
    // 直接跳行（SourceViewer 内部有 pendingScroll 处理数据未加载的情况）
    api?.scrollToLine(line);
  };

  // 获取当前视口中心行号，供 DetailArea 的上/下注解导航使用
  const getCenterLine = () => api?.getCenterLine() ?? 0;

  return {
    handleFileSwitch,
    scrollToLine,
    getCenterLine,
    // 将 SourceViewer 的 ref 回调绑定到内部 api 变量
    bindAPI: (a: SourceViewerAPI) => {
      api = a;
    },
  };
}

export default function ScriptPage() {
  // 路由参数，stem 为脚本 ID（如 "bun"、"node"）
  const params = useParams<{ script?: string }>();
  const stem = () => params.script ?? null;

  // 当前激活的文件 ID（如 "bun"、"_npm-utils"）
  const [activeFile, setActiveFile] = createSignal<string | null>(null);

  // 加载当前脚本+文件的源码行数据（异步 fetch）
  const { rawLines } = useSourceLoader(stem, activeFile);
  // 加载当前脚本+文件的静态分析结果
  const { analysis } = useAnalysis(stem, activeFile);

  // 将所有文件的注解合并为一维数组，附加 fileId 和 filename 便于跨文件展示
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

  // 注解数量统计
  const counts = createMemo(() => {
    const anns = mergedAnnotations();
    return {
      total: anns.length,
      unsafe: anns.filter((a) => a.type === "unsafe").length,
      safe: anns.filter((a) => a.type === "safe").length,
    };
  });

  // 注解过滤类型（all / unsafe / safe）
  const [filteredType, setFilteredType] = createSignal<FilterType>("all");
  // 代码搜索匹配的行号集合
  const [searchMatches, setSearchMatches] = createSignal(new Set<number>());
  // 最近一次通过注解导航跳转的行号
  const [lastJumpedLine, setLastJumpedLine] = createSignal(-1);

  // 可调整面板的根元素和底部栏高度
  const [barHeight, setBarHeight] = createSignal(32);
  const [containerHeight, setContainerHeight] = createSignal(0);
  const [panelSizes, setPanelSizes] = createSignal<number[]>([1, 0]);

  // 派生最小高度占比（计算属性）
  const minFrac = createMemo(() => {
    const ch = containerHeight();
    return ch === 0 ? 0 : barHeight() / ch;
  });

  // 派生安全的面板大小：读时夹逼，不污染原始 panelSizes 触发死循环
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

  // 当前脚本的文件列表（用于渲染顶部 Tab 栏）
  const fileTabs = createMemo(() => {
    const s = stem();
    if (!s) return [];
    return getScript(s)?.files ?? [];
  });

  // 初始化滚动状态管理：封装了位置缓存、Tab 切换、行跳转等逻辑
  const { handleFileSwitch, scrollToLine, getCenterLine, bindAPI } = useScrollManager({
    stem,
    activeFile,
    setActiveFile,
    rawLines,
    fileTabs,
  });

  // 根据注解过滤器和搜索匹配，计算每一行的 CSS 类名
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

  // 获取指定行的完整 CSS 类名（基础样式 + 搜索高亮）
  const getLineClass = (index: number) => {
    const base = baseClasses()[index] ?? "";
    return searchMatches().has(index) ? `${base} line-search-match`.trim() : base;
  };

  // 缓存 analysis 数据，避免 loading 时丢失上一次的结果
  const displayAnalysis = createMemo((prev: AnalysisData | undefined) => analysis() ?? prev);

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

        <ErrorBoundary
          fallback={(err, reset) => (
            <div class="flex flex-1 items-center justify-center flex-col gap-3 text-sm text-muted-foreground">
              <span>Failed to load script data</span>
              <Button
                variant="link"
                class="h-auto p-0 text-xs text-amber-500 hover:text-amber-400 underline"
                onClick={reset}
              >
                Retry
              </Button>
            </div>
          )}
        >
          <Resizable
            ref={(el) => {
              createResizeObserver(el, ({ height }) => {
                setContainerHeight(height);
              });
            }}
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
        </ErrorBoundary>
      </div>
    </ScriptContext.Provider>
  );
}
