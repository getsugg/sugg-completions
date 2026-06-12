import { useNavigate, useParams } from "@solidjs/router";
import scripts from "../scripts";

export function ScriptList() {
  const params = useParams<{ script?: string }>();
  const navigate = useNavigate();
  const selectedStem = () => params.script || null;

  return (
    <aside class="w-50 shrink-0 border-r border-border py-3 overflow-auto">
      <h2 class="px-4 pb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        Scripts
      </h2>
      <ul class="flex flex-col gap-px px-2">
        {scripts.map((s) => (
          <li>
            <button
              type="button"
              class={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-xs transition-none ${
                selectedStem() === s.stem
                  ? "bg-amber-500 text-[#0d1117] font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
              onClick={() => navigate(`/${s.stem}`)}
            >
              <span class="flex-1 truncate font-mono">{s.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
