import { createSignal, createMemo, createEffect, Show, For, on, type Setter } from "solid-js";
import { createEventListener } from "@solid-primitives/event-listener";
import {
  createViewportObserver,
  type EntryCallback,
} from "@solid-primitives/intersection-observer";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
} from "~/components/ui/command";
import type { LineData } from "../types";
import { tokenStyle } from "../lib/utils";

interface CodeSearchProps {
  rawLines: LineData[];
  onScrollToLine: (n: number) => void;
  onSearchUpdate: Setter<Set<number>>;
}

const PAGE_SIZE = 50;

const isMac = () => navigator.platform.toLowerCase().includes("mac");
const shortcutKey = () => (isMac() ? "⌘F" : "Ctrl+F");

export function CodeSearch(props: CodeSearchProps) {
  const [open, setOpen] = createSignal(false);
  const [query, setQuery] = createSignal("");
  const [selectedValue, setSelectedValue] = createSignal("");
  const [visibleCount, setVisibleCount] = createSignal(PAGE_SIZE);
  let panelRef: HTMLDivElement | undefined;
  let inputRef: HTMLInputElement | undefined;

  const [intersectionObserver] = createViewportObserver({ rootMargin: "200px" });

  const handleIntersect: EntryCallback = (entry) => {
    if (entry.isIntersecting) {
      setVisibleCount((c) => Math.min(c + PAGE_SIZE, matches().length));
    }
  };

  const matches = createMemo(() => {
    const q = query().toLowerCase();
    if (!q) return [];
    const result: { line: number; text: string; lineData: LineData }[] = [];
    for (let i = 0; i < props.rawLines.length; i++) {
      const ld = props.rawLines[i];
      if (ld.text.toLowerCase().includes(q)) {
        result.push({
          line: i,
          text: ld.text.trim(),
          lineData: ld,
        });
      }
    }
    return result;
  });

  const visibleMatches = createMemo(() => matches().slice(0, visibleCount()));
  const matchCount = () => matches().length;

  const currentIdx = createMemo(() => {
    const v = selectedValue();
    if (!v) return 0;
    return visibleMatches().findIndex((m) => `l${m.line}` === v);
  });

  createEffect(() => {
    if (!open() || !query()) {
      props.onSearchUpdate(new Set<number>());
      return;
    }
    const v = selectedValue();
    if (v) {
      const line = parseInt(v.slice(1), 10);
      if (!isNaN(line)) {
        props.onSearchUpdate(new Set([line]));
        return;
      }
    }
    props.onSearchUpdate(new Set<number>());
  });

  createEffect((prev: string | undefined) => {
    const v = selectedValue();
    if (!open() || !v || v === prev) return;
    const line = parseInt(v.slice(1), 10);
    if (!isNaN(line)) props.onScrollToLine(line);
    return v;
  });

  createEffect(() => {
    if (open()) requestAnimationFrame(() => inputRef?.focus());
  });

  createEffect(
    on(query, () => {
      setVisibleCount(PAGE_SIZE);
    }),
  );

  createEffect(() => {
    if (!open()) {
      setQuery("");
      setSelectedValue("");
    }
  });

  createEventListener(document, "keydown", (e) => {
    if (e.key === "f" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setOpen(true);
      return;
    }
    if (e.key === "Escape" && open()) {
      setOpen(false);
    }
  });

  createEffect(() => {
    if (!open()) return;
    createEventListener(document, "mousedown", (e) => {
      if (!panelRef) return;
      const target = e.target as Node;
      if (!panelRef.contains(target)) setOpen(false);
    });
  });

  const handleSelect = (line: number) => {
    props.onScrollToLine(line);
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        class="absolute top-3 right-3 z-20 flex cursor-pointer items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 text-[11px] text-muted-foreground hover:border-[#2f2840] hover:text-foreground transition-none shadow-sm"
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
      </button>

      <Show when={open()}>
        <div
          ref={(el) => {
            panelRef = el;
          }}
          class="absolute top-12 right-3 z-30 w-80 rounded-lg border border-border bg-popover shadow-xl"
        >
          <Command shouldFilter={false} value={selectedValue()} onValueChange={setSelectedValue}>
            <CommandInput
              ref={(el) => {
                inputRef = el;
              }}
              placeholder="Search in file…"
              value={query()}
              onValueChange={setQuery}
            />
            <CommandList>
              <For each={visibleMatches()}>
                {(match) => (
                  <CommandItem value={`l${match.line}`} onSelect={() => handleSelect(match.line)}>
                    <span class="mr-2 w-8 shrink-0 text-right font-mono text-[10px] text-muted-foreground">
                      {match.line + 1}
                    </span>
                    <span class="flex-1 truncate font-mono text-[12px] leading-5 [&_span]:whitespace-nowrap!">
                      <For each={match.lineData.tokens}>
                        {(t) => <span style={tokenStyle(t) ?? ""}>{t.content}</span>}
                      </For>
                    </span>
                  </CommandItem>
                )}
              </For>
              <Show when={query() && matchCount() === 0}>
                <CommandEmpty>No results found</CommandEmpty>
              </Show>
              <Show when={visibleCount() < matchCount()}>
                <div ref={(el) => intersectionObserver(el, handleIntersect)} class="h-2" />
              </Show>
            </CommandList>
            <Show when={query() && matchCount() > 0}>
              <div class="flex items-center justify-between border-t border-border px-3 py-1.5 text-[10px] text-muted-foreground">
                <span>
                  {currentIdx() + 1} / {matchCount()} matches
                  <Show when={visibleCount() < matchCount()}>
                    <span class="ml-1 text-[9px]">· scroll for more</span>
                  </Show>
                </span>
                <span class="flex items-center gap-2">
                  <span>↑↓ navigate</span>
                  <span>Enter jump</span>
                </span>
              </div>
            </Show>
          </Command>
        </div>
      </Show>
    </>
  );
}
