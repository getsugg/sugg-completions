import { For, Show, createEffect } from "solid-js";
import { createVirtualizer } from "@tanstack/solid-virtual";
import type { LineData } from "../types";
import { cn, tokenStyle } from "../lib/utils";
import { Tooltip, TooltipTrigger, TooltipContent } from "~/components/ui/tooltip";

export const LINE_HEIGHT = 22;

interface SourceViewerProps {
  rawLines: () => LineData[];
  lineClasses: () => string[];
  scrollToTarget: () => number | null;
  onScrollChange: (top: number, viewportHeight: number) => void;
  restoreScrollTop: () => number | null;
}

export function SourceViewer(props: SourceViewerProps) {
  let scrollEl: HTMLDivElement | undefined;

  const virtualizer = createVirtualizer({
    get count() {
      return props.rawLines().length;
    },
    getScrollElement: () => scrollEl ?? null,
    estimateSize: () => LINE_HEIGHT,
    overscan: 10,
  });

  createEffect(() => {
    const lines = props.rawLines();
    const top = props.restoreScrollTop();
    if (!lines.length || top == null || !scrollEl) return;
    scrollEl.scrollTop = top;
  });

  createEffect(() => {
    const target = props.scrollToTarget();
    if (target == null || !scrollEl) return;
    const top = target * LINE_HEIGHT - scrollEl.clientHeight / 2 + LINE_HEIGHT / 2;
    scrollEl.scrollTop = Math.max(0, top);
  });

  return (
    <div
      ref={(el) => {
        scrollEl = el;
        props.onScrollChange(el.scrollTop, el.clientHeight);
      }}
      onScroll={(e) =>
        props.onScrollChange(e.currentTarget.scrollTop, e.currentTarget.clientHeight)
      }
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
                  class={cn("line-row", props.lineClasses()[v.index])}
                  style={{
                    position: "absolute",
                    top: `${v.start}px`,
                    left: 0,
                    width: "100%",
                    height: `${v.size}px`,
                  }}
                >
                  <span class="line-content whitespace-pre">
                    <For each={props.rawLines()[v.index]?.tokens ?? []}>
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
                                  style="white-space:pre-wrap"
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
