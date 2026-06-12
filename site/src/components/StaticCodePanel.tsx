import { createResource, Show } from "solid-js";
import { highlightPlain } from "../shiki";

interface StaticCodePanelProps {
  modified: string | undefined;
}

export function StaticCodePanel(props: StaticCodePanelProps) {
  const [highlighted] = createResource(
    () => props.modified,
    (code) => (code ? highlightPlain(code) : ""),
  );

  return (
    <Show when={highlighted()} fallback={<div class="text-muted-foreground">无修改</div>}>
      <div
        class="overflow-auto rounded bg-muted p-3 leading-relaxed [&_pre]:text-[11px]"
        innerHTML={highlighted()}
      />
    </Show>
  );
}
