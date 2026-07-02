import { Show } from "solid-js";

interface DynamicCodePanelProps {
  dynamicHtml: string | undefined;
}

export function DynamicCodePanel(props: DynamicCodePanelProps) {
  return (
    <Show
      when={props.dynamicHtml}
      fallback={<div class="text-muted-foreground">No dynamic code</div>}
    >
      <div
        class="overflow-auto rounded bg-muted p-3 leading-relaxed [&_pre]:text-[11px]"
        // oxlint-disable-next-line solid/no-innerhtml
        innerHTML={props.dynamicHtml!}
      />
    </Show>
  );
}
