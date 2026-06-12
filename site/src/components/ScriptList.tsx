import { useNavigate, useParams } from "@solidjs/router";
import scripts from "../scripts";

const ICONS: Record<string, string> = {
  bun: "⚡",
  git: "〈〉",
  npm: "●",
  scoop: "¶",
  sugg: "»",
};

export function ScriptList() {
  const params = useParams<{ script?: string }>();
  const navigate = useNavigate();
  const selectedStem = () => params.script || null;

  return (
    <aside class="w-50 shrink-0 border-r border-border py-3 overflow-auto">
      <h2 class="px-3.5 pb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        Scripts
      </h2>
      <ul class="space-y-px">
        {scripts.map((s) => {
          const hasDanger = s.staticAnalysis.some((a) => a.type === "danger");
          const dotColor = !s.staticAnalysis.length ? "#484f58" : hasDanger ? "#ef4444" : "#22c55e";
          return (
            <li>
              <button
                type="button"
                class={`flex w-full items-center gap-2 border-l-3 border-transparent px-3.5 py-1.5 text-left text-xs transition-none ${
                  selectedStem() === s.stem
                    ? "border-l-amber-500 bg-amber-500/10 text-amber-500"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
                onClick={() => navigate(`/${s.stem}`)}
              >
                <span class="text-sm">{ICONS[s.stem] ?? "⇣"}</span>
                <span class="flex-1">{s.title}</span>
                <span class="size-1.5 shrink-0 rounded-full" style={`background:${dotColor}`} />
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
