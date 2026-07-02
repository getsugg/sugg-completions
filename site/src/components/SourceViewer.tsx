import { For, Show, createEffect, onMount } from "solid-js";
import { createVirtualizer } from "@tanstack/solid-virtual";
import type { LineData } from "~/types";
import { cn, tokenStyle } from "~/lib/utils";
import { Tooltip, TooltipTrigger, TooltipContent } from "~/components/ui/tooltip";

export const LINE_HEIGHT = 22;

export interface SourceViewerAPI {
  scrollToLine: (line: number) => void;
  scrollToPos: (top: number) => void;
  getCenterLine: () => number;
  getCurrentTop: () => number;
}

interface SourceViewerProps {
  rawLines: LineData[];
  getLineClass: (index: number) => string;
  ref?: (api: SourceViewerAPI) => void;
}

export function SourceViewer(props: SourceViewerProps) {
  let scrollEl: HTMLDivElement | undefined;

  let pendingScroll: (() => void) | null = null;
  let lastJump = { line: -1, scrollTop: -1 };

  const virtualizer = createVirtualizer({
    get count() {
      return props.rawLines.length;
    },
    getScrollElement: () => scrollEl ?? null,
    estimateSize: () => LINE_HEIGHT,
    overscan: 10,
  });

  const api: SourceViewerAPI = {
    scrollToLine: (line: number) => {
      const execute = () => {
        if (!scrollEl) return;
        const maxScroll = Math.max(0, scrollEl.scrollHeight - scrollEl.clientHeight);
        const top = Math.min(
          Math.max(0, line * LINE_HEIGHT - scrollEl.clientHeight / 2 + LINE_HEIGHT / 2),
          maxScroll,
        );
        scrollEl.scrollTop = top;
        lastJump = { line, scrollTop: scrollEl.scrollTop };
      };
      if (virtualizer.getTotalSize() > 0) execute();
      else pendingScroll = execute;
    },
    scrollToPos: (top: number) => {
      const execute = () => {
        if (scrollEl) {
          scrollEl.scrollTop = top;
          lastJump = { line: -1, scrollTop: scrollEl.scrollTop };
        }
      };
      if (virtualizer.getTotalSize() > 0) execute();
      else pendingScroll = execute;
    },
    getCenterLine: () => {
      if (!scrollEl) return 0;
      if (lastJump.line !== -1 && Math.abs(scrollEl.scrollTop - lastJump.scrollTop) <= 1) {
        return lastJump.line;
      }
      return Math.floor((scrollEl.scrollTop + scrollEl.clientHeight / 2) / LINE_HEIGHT);
    },
    getCurrentTop: () => scrollEl?.scrollTop ?? 0,
  };

  onMount(() => props.ref?.(api));

  createEffect(() => {
    if (virtualizer.getTotalSize() > 0 && pendingScroll) {
      pendingScroll();
      pendingScroll = null;
    }
  });

  return (
    <div
      ref={(el) => {
        scrollEl = el;
      }}
      class="h-full overflow-auto"
    >
      <div class="source-viewer p-4 text-sm leading-5.5">
        <div
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            position: "relative",
          }}
        >
          <For each={virtualizer.getVirtualItems()}>
            {(v) => {
              return (
                <div
                  data-line-number={v.index + 1}
                  class={cn("line-row", props.getLineClass(v.index))}
                  style={{
                    position: "absolute",
                    top: `${v.start}px`,
                    left: 0,
                    width: "100%",
                    height: `${v.size}px`,
                  }}
                >
                  <span class="line-content whitespace-pre">
                    <For each={props.rawLines[v.index]?.tokens ?? []}>
                      {(t) => {
                        if (!t.hover) {
                          return <span style={tokenStyle(t)}>{t.content}</span>;
                        }
                        return (
                          <Tooltip placement="top" gutter={8} openDelay={0} closeDelay={200}>
                            <TooltipTrigger
                              as="button"
                              class="hover-anchor"
                              type="button"
                              style={tokenStyle(t)}
                            >
                              {t.content}
                            </TooltipTrigger>
                            <TooltipContent>
                              {t.hover.textTokens ? (
                                <code class="block font-mono text-xs leading-snug max-w-[90vw] wrap-break-word whitespace-pre-wrap">
                                  <For each={t.hover.textTokens}>
                                    {(line) => (
                                      <div>
                                        <For each={line}>
                                          {(tok) => (
                                            <span
                                              style={{
                                                color: tok.color ?? undefined,
                                                "font-style":
                                                  tok.fontStyle && tok.fontStyle & 1
                                                    ? "italic"
                                                    : undefined,
                                                "font-weight":
                                                  tok.fontStyle && tok.fontStyle & 2
                                                    ? "bold"
                                                    : undefined,
                                              }}
                                            >
                                              {tok.content}
                                            </span>
                                          )}
                                        </For>
                                      </div>
                                    )}
                                  </For>
                                </code>
                              ) : (
                                <code
                                  class="font-mono text-xs wrap-break-word"
                                  style={{ "white-space": "pre-wrap" }}
                                >
                                  {t.hover.text}
                                </code>
                              )}
                              <Show when={t.hover.docs}>
                                <div class="mt-1 text-xs text-muted-foreground whitespace-pre-wrap leading-relaxed border-t border-border pt-1">
                                  {t.hover.docs}
                                </div>
                              </Show>
                            </TooltipContent>
                          </Tooltip>
                        );
                      }}
                    </For>
                  </span>
                </div>
              );
            }}
          </For>
        </div>
      </div>
    </div>
  );
}
