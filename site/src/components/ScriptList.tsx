import { Show, createMemo, createSignal } from "solid-js";
import { useLocation } from "@solidjs/router";
import { debounce } from "@solid-primitives/scheduled";

import { cn } from "~/lib/utils";
import { TextField, TextFieldInput } from "~/components/ui/text-field";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { VirtualList } from "~/components/ui/virtual-list";
import scripts from "~/generated/scripts.json";

export function ScriptList() {
  const location = useLocation();
  const activeStem = () =>
    location.pathname.match(/^\/scripts\/([^/]+)/)?.[1] ?? null;

  const [searchText, setSearchText] = createSignal("");
  const debouncedSetSearch = debounce(setSearchText, 350);

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
        <VirtualList data={filtered()} itemSize={36} bufferSize={200}>
          {(s) => (
            <li>
              <Button
                as="a"
                href={`/scripts/${s.stem}/`}
                variant="ghost"
                class={cn(
                  "h-auto w-full justify-start gap-2 rounded-md px-3 py-2 text-left text-sm transition-none",
                  activeStem() === s.stem
                    ? "!bg-amber-700 !text-white font-semibold"
                    : "!text-[#8b7d9a] hover:!bg-[#ffffff08] hover:!text-[#c8bdd4]",
                )}
              >
                <span class="flex-1 truncate">{s.title}</span>
                <Show when={s.unsafeCount > 0}>
                  <Badge variant="error" class="font-mono text-[9px] px-1.5 py-0">
                    {s.unsafeCount}
                  </Badge>
                </Show>
              </Button>
            </li>
          )}
        </VirtualList>
      </div>
    </aside>
  );
}
