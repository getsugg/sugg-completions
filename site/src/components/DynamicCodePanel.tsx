import { createResource, Show } from "solid-js";
import { highlightPlain } from "../lib/shiki";

interface DynamicCodePanelProps {
  dynamicJs: string | undefined;
}

export function DynamicCodePanel(props: DynamicCodePanelProps) {
  const [highlighted] = createResource(
    () => props.dynamicJs,
    (js) => (js ? highlightPlain(js) : ""),
  );

  return (
    <Show when={highlighted()} fallback={<div class="text-muted-foreground">No dynamic code</div>}>
      <div
        class="overflow-auto rounded bg-muted p-3 leading-relaxed [&_pre]:text-[11px]"
        // oxlint-disable-next-line solid/no-innerhtml
        innerHTML={highlighted()}
      />
    </Show>
  );
}
