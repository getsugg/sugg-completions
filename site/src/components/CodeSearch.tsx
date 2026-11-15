import {
  For,
  Show,
  createEffect,
  createMemo,
  createSignal,
  onSettled,
  type Setter,
} from "solid-js";
import { isServer } from "@solidjs/web";
import { debounce } from "@solid-primitives/scheduled";

import { VirtualList } from "~/components/ui/virtual-list";
import { Button } from "~/components/ui/button";
import type { LineData } from "~/types";
import { tokenStyle } from "~/lib/utils";
import { useScriptContext } from "~/contexts/ScriptContext";

interface CodeSearchProps {
  rawLines: LineData[];
  onSearchUpdate: Setter<Set<number>>;
}

const ITEM_HEIGHT = 32;
const MAX_VISIBLE_ITEMS = 10;
const LIST_HEIGHT = MAX_VISIBLE_ITEMS * ITEM_HEIGHT;

export function CodeSearch(props: CodeSearchProps) {
  const { scrollToLine } = useScriptContext();
  const [open, setOpen] = createSignal(false);
  const [query, setQuery] = createSignal("");
  const [activeIndex, setActiveIndex] = createSignal(0);
  // The server has no platform; start with the neutral label and fix it up on
  // the client so hydration never disagrees with the prerendered HTML.
  const [isMac, setIsMac] = createSignal(false);
  onSettled(() => {
    if (!isServer) setIsMac(navigator.platform.toLowerCase().includes("mac"));
  });
  const shortcutKey = () => (isMac() ? "⌘F" : "Ctrl+F");
  let panelRef: HTMLDivElement | undefined;
  let inputRef: HTMLInputElement | undefined;

  const debouncedSetQuery = debounce((value: string) => {
    setQuery(value);
    setActiveIndex(0);
  }, 350);

  const closeSearch = () => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  };

  const searchableLines = createMemo(() => props.rawLines.map((ld) => ld.text.toLowerCase()));

  const matches = createMemo(() => {
    const q = query().toLowerCase();
    if (!q) return [];
    const idx = searchableLines();
    const result: { line: number; text: string; lineData: LineData }[] = [];
    for (let i = 0; i < props.rawLines.length; i++) {
      if (idx[i].includes(q)) {
        result.push({
          line: i,
          text: props.rawLines[i].text.trim(),
          lineData: props.rawLines[i],
        });
      }
    }
    return result;
  });

  const matchCount = () => matches().length;

  const sameLines = (a: Set<number>, b: Set<number>) => {
    if (a.size !== b.size) return false;
    for (const line of a) if (!b.has(line)) return false;
    return true;
  };

  const highlightedLines = createMemo(
    () => {
      if (!open() || !query()) return new Set<number>();
      const match = matches()[activeIndex()];
      return match ? new Set([match.line]) : new Set<number>();
    },
    { equals: sameLines },
  );

  createEffect(highlightedLines, (lines) => {
    props.onSearchUpdate(lines);
  });

  createEffect(
    () => open(),
    (isOpen) => {
      if (!isOpen) return;
      const frame = requestAnimationFrame(() => inputRef?.focus());
      return () => cancelAnimationFrame(frame);
    },
  );

  onSettled(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "f" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen(true);
        return;
      }
      if (event.key === "Escape" && open()) {
        closeSearch();
      }
    };

    const onMouseDown = (event: MouseEvent) => {
      if (!open() || !panelRef) return;
      const target = event.target as Node;
      if (!panelRef.contains(target)) closeSearch();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onMouseDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onMouseDown);
    };
  });

  const handleSelect = (line: number) => {
    scrollToLine(line);
    closeSearch();
  };

  const handleInputKeyDown = (event: KeyboardEvent) => {
    if (!matchCount()) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, matchCount() - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const match = matches()[activeIndex()];
      if (match) handleSelect(match.line);
    }
  };

  return (
    <>
      <Button
        variant="outline"
        class="absolute top-3 right-3 z-20 h-auto items-center gap-1.5 rounded-md border-border bg-card px-2.5 py-1.5 text-[11px] text-muted-foreground hover:border-[#2f2840] hover:text-foreground transition-none shadow-sm"
        onClick={() => setOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          class="size-3.5"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M16.5 16.5 21 21" />
        </svg>
        Search
        <kbd class="inline-flex items-center rounded border border-border bg-[#1d1b21] px-1 font-mono text-[9px] leading-4 text-muted-foreground">
          {shortcutKey()}
        </kbd>
      </Button>

      <Show when={open()}>
        <div
          ref={(el) => {
            panelRef = el;
          }}
          class="absolute top-12 right-3 z-30 w-80 rounded-lg border border-border bg-popover shadow-xl"
        >
          <div class="flex items-center border-b px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2 size-4 shrink-0 opacity-50"
            >
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
            <input
              ref={(el) => {
                inputRef = el;
              }}
              placeholder="Search in file…"
              value={query()}
              onInput={(event) => debouncedSetQuery(event.currentTarget.value)}
              onKeyDown={handleInputKeyDown}
              class="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>

          <Show when={query() && matchCount() > 0}>
            <div
              style={{
                height: `${Math.min(matchCount() * ITEM_HEIGHT, LIST_HEIGHT)}px`,
              }}
            >
              <VirtualList data={matches()} itemSize={ITEM_HEIGHT} bufferSize={200}>
                {(match, index) => (
                  <button
                    type="button"
                    class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-left text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground"
                    aria-selected={index() === activeIndex() ? "true" : "false"}
                    onMouseEnter={() => setActiveIndex(index())}
                    onClick={() => handleSelect(match.line)}
                  >
                    <span class="mr-2 w-8 shrink-0 text-right font-mono text-[10px] text-muted-foreground">
                      {match.line + 1}
                    </span>
                    <span class="flex-1 truncate font-mono text-[12px] leading-5 [&_span]:whitespace-nowrap!">
                      <For each={match.lineData.tokens}>
                        {(t) => <span style={tokenStyle(t) ?? ""}>{t.content}</span>}
                      </For>
                    </span>
                  </button>
                )}
              </VirtualList>
            </div>
          </Show>

          <Show when={query() && matchCount() === 0}>
            <div class="py-6 text-center text-sm">No results found</div>
          </Show>

          <Show when={query() && matchCount() > 0}>
            <div class="flex items-center justify-between border-t border-border px-3 py-1.5 text-[10px] text-muted-foreground">
              <span>{matchCount()} matches</span>
              <span class="flex items-center gap-2">
                <span>↑↓ navigate</span>
                <span>Enter jump</span>
              </span>
            </div>
          </Show>
        </div>
      </Show>
    </>
  );
}
