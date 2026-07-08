import { VList } from "virtua/solid";
import { useScriptContext } from "~/contexts/ScriptContext";
import { Badge } from "~/components/ui/badge";

const TYPE_STYLE: Record<string, { bar: string; variant: "error" | "success"; label: string }> = {
  unsafe: {
    bar: "#ef4444",
    variant: "error",
    label: "UNSAFE",
  },
  safe: {
    bar: "#22c55e",
    variant: "success",
    label: "SAFE",
  },
};

interface AnnotationItem {
  line: number;
  type: "unsafe" | "safe";
  api?: string;
  fileId?: string;
  filename?: string;
}

interface AnnotationListProps {
  anns: AnnotationItem[];
}

export function AnnotationList(props: AnnotationListProps) {
  const { scrollToLine } = useScriptContext();

  return (
    <VList data={props.anns} style={{ height: "100%" }} itemSize={44} bufferSize={200}>
      {(a) => {
        const style = TYPE_STYLE[a.type] ?? TYPE_STYLE.safe;
        return (
          <button
            type="button"
            class="relative flex items-center gap-3 w-full rounded-md border border-transparent px-2 py-2 text-left cursor-pointer transition-all hover:bg-[rgba(245,158,11,0.05)] hover:border-[rgba(245,158,11,0.1)]"
            onClick={() => scrollToLine(a.line, a.fileId)}
          >
            <span
              class="absolute left-0 top-1 bottom-1 w-0.75 rounded-r-sm"
              style={{
                background: style.bar,
                ...(a.type === "unsafe" && { boxShadow: "0 0 8px rgba(239,68,68,0.3)" }),
              }}
            />
            <span class="font-mono text-[11px] text-[#4a3f55] w-8 shrink-0 ml-2">
              L{a.line + 1}
            </span>
            {a.filename && (
              <span class="font-mono text-[10px] text-[#6a5d78] shrink-0">{a.filename}</span>
            )}
            <span class="font-mono text-xs text-[#c8bdd4] flex-1 truncate">{a.api ?? ""}</span>
            <Badge variant={style.variant} class="text-[10px] px-2 py-0.5 uppercase">
              {style.label}
            </Badge>
          </button>
        );
      }}
    </VList>
  );
}
