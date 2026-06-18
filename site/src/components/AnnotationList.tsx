import { For } from "solid-js";
import type { LineAnnotation } from "../types";

const TYPE_STYLE: Record<string, { bar: string; badge: string; label: string }> = {
  unsafe: {
    bar: "#ef4444",
    badge: "bg-[#ff335518] text-[#ff5555] border-[#ff335530]",
    label: "UNSAFE",
  },
  safe: {
    bar: "#22c55e",
    badge: "bg-[#22c55e18] text-[#22c55e] border-[#22c55e30]",
    label: "SAFE",
  },
};

interface AnnotationListProps {
  anns: LineAnnotation[];
  source: string;
  scrollToLine: (line: number) => void;
}

export function AnnotationList(props: AnnotationListProps) {
  return (
    <div class="flex flex-col gap-1">
      <For each={props.anns}>
        {(a) => {
          const style = TYPE_STYLE[a.type] ?? TYPE_STYLE.safe;
          return (
            <button
              type="button"
              class="relative flex items-center gap-3 w-full rounded-md border border-transparent px-3 py-1.5 text-left cursor-pointer transition-all hover:bg-[rgba(245,158,11,0.05)] hover:border-[rgba(245,158,11,0.1)]"
              onClick={() => props.scrollToLine(a.line)}
            >
              <span
                class="absolute left-0 top-[3px] bottom-[3px] w-[3px] rounded-r-sm"
                style={`background:${style.bar};${a.type === "unsafe" ? "box-shadow:0 0 8px rgba(239,68,68,0.3);" : ""}`}
              />
              <span class="font-mono text-[11px] text-[#4a3f55] w-[36px] shrink-0 ml-3">
                L{a.line + 1}
              </span>
              <span class="font-mono text-[12px] text-[#c8bdd4] flex-1 truncate">
                {a.api ?? ""}
              </span>
              <span
                class={`text-[10px] font-bold px-2 py-0.5 rounded-[4px] uppercase border ${style.badge}`}
              >
                {style.label}
              </span>
            </button>
          );
        }}
      </For>
    </div>
  );
}
