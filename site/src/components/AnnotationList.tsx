import { createSignal, createMemo } from "solid-js";
import type { LineAnnotation, FilterType } from "../types";

const TYPE_DOT: Record<string, string> = { danger: "#ef4444", dynamic: "#f59e0b", safe: "#22c55e" };

interface AnnotationListProps {
  anns: () => LineAnnotation[];
  source: () => string;
  scrollToLine: (line: number) => void;
}

export function AnnotationList(props: AnnotationListProps) {
  const [searchQuery, setSearchQuery] = createSignal("");

  const groupedAnns = createMemo(() => {
    const anns = props.anns();
    const src = props.source();
    const q = searchQuery().toLowerCase();
    const groups: { type: FilterType; label: string; items: LineAnnotation[] }[] = [
      { type: "danger", label: "危险", items: [] },
      { type: "dynamic", label: "动态函数", items: [] },
      { type: "safe", label: "安全", items: [] },
    ];
    for (const a of anns) {
      const g = groups.find((g) => g.type === a.type);
      if (!g) continue;
      if (q) {
        const line = src?.split("\n")[a.line] ?? "";
        if (!line.toLowerCase().includes(q)) continue;
      }
      g.items.push(a);
    }
    return groups.filter((g) => g.items.length > 0);
  });

  return (
    <>
      <div class="mb-2">
        <input
          type="text"
          placeholder="搜索标注项..."
          class="w-full rounded border border-border bg-background px-2.5 py-1 text-[11px] text-foreground outline-none placeholder:text-muted-foreground"
          onInput={(e) => setSearchQuery(e.currentTarget.value)}
        />
      </div>
      <div class="space-y-2.5">
        {groupedAnns().map((g) => (
          <div>
            <div class="mb-1 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
              <span
                class="inline-block size-1.5 rounded-full"
                style={`background:${TYPE_DOT[g.type]}`}
              />
              {g.label}
              <span class="ml-auto text-border">{g.items.length}</span>
            </div>
            <ul class="space-y-px">
              {g.items.map((a) => (
                <li>
                  <button
                    type="button"
                    class="flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1 text-left font-mono text-[11px] text-muted-foreground hover:bg-accent hover:text-foreground"
                    onClick={() => props.scrollToLine(a.line)}
                  >
                    <span class="w-7 shrink-0 text-border">L{a.line + 1}</span>
                    {a.api && (
                      <span
                        class={`shrink-0 rounded px-1.5 py-px text-[9px] font-semibold ${
                          a.type === "danger"
                            ? "bg-red-500/15 text-red-500"
                            : a.type === "safe"
                              ? "bg-green-500/15 text-green-500"
                              : "bg-amber-500/15 text-amber-500"
                        }`}
                      >
                        {a.api}
                      </span>
                    )}
                    <span class="truncate">{props.source().split("\n")[a.line]?.trim()}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
