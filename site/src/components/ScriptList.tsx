import { useNavigate, useParams } from "@solidjs/router";
import scripts from "../scripts";

function unsafeCount(s: (typeof scripts)[number]): number {
  return s.staticAnalysis.filter((a) => a.type === "unsafe").length;
}

export function ScriptList() {
  const params = useParams<{ script?: string }>();
  const navigate = useNavigate();
  const selectedStem = () => params.script || null;

  return (
    <aside class="w-50 shrink-0 border-r border-border overflow-auto py-3 bg-[#110e14]">
      <div class="px-4 pb-3 text-[9px] font-bold uppercase tracking-[0.12em] text-[#4a3f55]">
        Completions
      </div>
      <ul class="flex flex-col px-2">
        {scripts.map((s) => {
          const dc = unsafeCount(s);
          return (
            <li>
              <button
                type="button"
                class={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-none ${
                  selectedStem() === s.stem
                    ? "bg-amber-700 text-white font-semibold"
                    : "text-[#8b7d9a] hover:bg-[#ffffff08] hover:text-[#c8bdd4]"
                }`}
                onClick={() => navigate(`/${s.stem}`)}
              >
                <span class="flex-1 truncate">{s.title}</span>
                {dc > 0 && (
                  <span class="font-mono text-[9px] font-semibold leading-none px-1.5 py-[2px] rounded-sm bg-[#ef444420] text-[#ff5555]">
                    {dc}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
