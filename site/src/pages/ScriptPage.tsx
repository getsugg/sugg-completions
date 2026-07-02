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
import { useParams } from "@solidjs/router";
import { useSourceLoader } from "~/hooks/useSourceLoader";
import { useAnalysis } from "~/hooks/useAnalysis";
import { getScript } from "~/lib/scripts-utils";
import { ScriptContext, type MergedAnnotation } from "~/contexts/ScriptContext";
import { Resizable, ResizablePanel, ResizableHandle } from "~/components/ui/resizable";
import { SourceViewer, type SourceViewerAPI } from "~/components/SourceViewer";
import { DetailArea } from "~/components/DetailArea";
import { CodeSearch } from "~/components/CodeSearch";
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
function useScrollManager(opts: {
  stem: Accessor<string | null>;
  activeFile: Accessor<string | null>;
  setActiveFile: Setter<string | null>;
  rawLines: Accessor<LineData[]>;
  fileTabs: Accessor<{ id: string }[]>;
}) {
  // 滚动位置缓存，key 格式为 "脚本ID:文件ID"，value 为 scrollTop 像素值
  const positions = new Map<string, number>();
  // 记录每个脚本上次打开的文件 ID，用于跨脚本切换时恢复
  const lastActiveFiles = new Map<string, string>();
  // 待恢复的滚动位置 key，等 rawLines 加载完后才真正恢复
  let pendingRestoreKey: string | null = null;
  // SourceViewer 暴露的命令式 API，通过 bindAPI 注入
  let api: SourceViewerAPI | undefined;

  // 监听 rawLines 变化（数据加载完成），执行挂起的滚动恢复
  createEffect(
    on(opts.rawLines, () => {
      if (!pendingRestoreKey || !api) return;
      const saved = positions.get(pendingRestoreKey);
      api.scrollToPos(saved ?? 0);
      pendingRestoreKey = null;
    }),
  );

  // 监听脚本切换（路由变化），保存旧脚本状态并恢复新脚本的上次文件+滚动位置
  createEffect(
    on(opts.stem, (currentStem, prevStem) => {
      if (!currentStem) return;
      // 离开旧脚本时，保存当前文件和滚动位置
      if (prevStem && api) {
        const af = opts.activeFile();
        if (af) {
          lastActiveFiles.set(prevStem, af);
          positions.set(`${prevStem}:${af}`, api.getCurrentTop());
        }
      }
      // 决定新脚本打开哪个文件：优先恢复上次的文件，否则用第一个
      const saved = lastActiveFiles.get(currentStem);
      const tabs = opts.fileTabs();
      const firstFileId = tabs[0]?.id;
      const targetFile = saved && tabs.some((t) => t.id === saved) ? saved : firstFileId;
      if (targetFile) {
        pendingRestoreKey = `${currentStem}:${targetFile}`;
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
      positions.set(`${s}:${current}`, api.getCurrentTop());
    }
    // 标记待恢复，等 rawLines 加载完后才真正滚动
    pendingRestoreKey = `${s}:${newFileId}`;
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
        positions.set(`${s}:${current}`, api.getCurrentTop());
      }
      pendingRestoreKey = null;
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

  // 可调整面板的根元素和底部栏高度
  const [resizableRoot, setResizableRoot] = createSignal<HTMLElement>();
  const [barHeight, setBarHeight] = createSignal(32);

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

        <ErrorBoundary
          fallback={(err, reset) => (
            <div class="flex flex-1 items-center justify-center flex-col gap-3 text-sm text-muted-foreground">
              <span>Failed to load script data</span>
              <button
                type="button"
                class="text-xs text-amber-500 hover:text-amber-400 cursor-pointer underline"
                onClick={reset}
              >
                Retry
              </button>
            </div>
          )}
        >
          <Resizable
            ref={setResizableRoot}
            orientation="vertical"
            initialSizes={[1, 0]}
            class="flex-1 min-h-0"
          >
            <ResizablePanel>
              <div class="relative h-full flex flex-col">
                <Show when={fileTabs().length > 1}>
                  <div class="flex shrink-0 border-b border-border bg-[#1a1720]">
                    <For each={fileTabs()}>
                      {(tab) => (
                        <button
                          type="button"
                          class="cursor-pointer border-b-2 px-3 py-1.5 text-[11px] font-medium transition-none"
                          classList={{
                            "border-amber-500 bg-[#2d2a35] text-amber-500": activeFile() === tab.id,
                            "border-transparent text-muted-foreground hover:text-foreground hover:bg-[#252230]":
                              activeFile() !== tab.id,
                          }}
                          onClick={() => handleFileSwitch(tab.id)}
                        >
                          {tab.filename}
                        </button>
                      )}
                    </For>
                  </div>
                </Show>

                <div class="relative flex-1 min-h-0">
                  <SourceViewer ref={bindAPI} rawLines={rawLines()} getLineClass={getLineClass} />
                  <CodeSearch
                    rawLines={rawLines()}
                    onScrollToLine={scrollToLine}
                    onSearchUpdate={setSearchMatches}
                  />
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel minSize={`${barHeight()}px`} initialSize={`${barHeight()}px`}>
              <DetailArea
                rootEl={resizableRoot()}
                onBarHeightChange={setBarHeight}
                scrollToLine={scrollToLine}
                getCenterLine={getCenterLine}
              />
            </ResizablePanel>
          </Resizable>
        </ErrorBoundary>
      </div>
    </ScriptContext.Provider>
  );
}
