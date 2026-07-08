import { createSignal, createMemo } from "solid-js";
import { useNavigate, useParams } from "@solidjs/router";
import { debounce } from "@solid-primitives/scheduled";
import { VList } from "virtua/solid";
import { cn } from "~/lib/utils";
import { TextField, TextFieldInput } from "~/components/ui/text-field";
import scripts from "~/generated/scripts.json";

export function ScriptList() {
  const params = useParams<{ script?: string }>();
  const navigate = useNavigate();
  const selectedStem = () => params.script || null;
  const [searchText, setSearchText] = createSignal("");
  const debouncedSetSearch = debounce(setSearchText, 200);

  const filtered = createMemo(() => {
    const q = searchText().toLowerCase();
    if (!q) return scripts;
    return scripts.filter(
      (s) => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q),
    );
  });

  return (
    <aside class="w-50 shrink-0 border-r border-border flex flex-col bg-[#110e14]">
      <div class="px-4 pt-3 pb-2 flex flex-col gap-2">
        <div class="flex items-center justify-between">
          <span class="text-[9px] font-bold uppercase tracking-[0.12em] text-[#4a3f55]">
            Completions
          </span>
        </div>
        <TextField>
          <TextFieldInput
            placeholder="Search scripts..."
            value={searchText()}
            onInput={(e) => debouncedSetSearch(e.currentTarget.value)}
            class="h-8 text-xs"
          />
        </TextField>
      </div>
      <div class="flex-1 min-h-0 px-2 pb-3">
        <VList data={filtered()} style={{ height: "100%" }} itemSize={36} bufferSize={200}>
          {(s) => (
            <li>
              <button
                type="button"
                class={cn(
                  "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-none",
                  selectedStem() === s.stem
                    ? "bg-amber-700 text-white font-semibold"
                    : "text-[#8b7d9a] hover:bg-[#ffffff08] hover:text-[#c8bdd4]",
                )}
                onClick={() => navigate(`/${s.stem}`)}
              >
                <span class="flex-1 truncate">{s.title}</span>
                {s.unsafeCount > 0 && (
                  <span class="font-mono text-[9px] font-semibold leading-none px-1.5 py-0.5 rounded-sm bg-[#ef444420] text-[#ff5555]">
                    {s.unsafeCount}
                  </span>
                )}
              </button>
            </li>
          )}
        </VList>
      </div>
    </aside>
  );
}
