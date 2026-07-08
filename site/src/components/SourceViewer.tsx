import { For, Show, onMount } from "solid-js";
import { VList, type VirtualizerHandle } from "virtua/solid";
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
  onJump?: (line: number) => void;
}

export function SourceViewer(props: SourceViewerProps) {
  let handle: VirtualizerHandle | undefined = undefined;
  const api: SourceViewerAPI = {
    scrollToLine: (line: number) => {
      if (!handle) return;
      props.onJump?.(line);
      handle.scrollToIndex(line, { align: "center" });
    },
    scrollToPos: (top: number) => {
      if (!handle) return;
      handle.scrollTo(top);
    },
    getCenterLine: () => {
      if (!handle) return 0;
      return Math.floor((handle.scrollOffset + handle.viewportSize / 2) / LINE_HEIGHT);
    },
    getCurrentTop: () => handle?.scrollOffset ?? 0,
  };

  onMount(() => props.ref?.(api));

  return (
    <VList
      ref={(el) => {
        handle = el;
      }}
      data={props.rawLines}
      style={{ height: "100%" }}
      class="source-viewer h-full overflow-auto p-4 text-sm leading-5.5"
      itemSize={LINE_HEIGHT}
      bufferSize={LINE_HEIGHT * 10}
    >
      {(line, index) => (
        <div
          data-line-number={index() + 1}
          class={cn("line-row", props.getLineClass(index()))}
          style={{ height: `${LINE_HEIGHT}px` }}
        >
          <span class="line-content whitespace-pre">
            <For each={line.tokens ?? []}>
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
                                          tok.fontStyle && tok.fontStyle & 1 ? "italic" : undefined,
                                        "font-weight":
                                          tok.fontStyle && tok.fontStyle & 2 ? "bold" : undefined,
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
      )}
    </VList>
  );
}
