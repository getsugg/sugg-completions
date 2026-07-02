import { Show } from "solid-js";

interface StaticCodePanelProps {
  staticHtml: string | undefined;
}

export function StaticCodePanel(props: StaticCodePanelProps) {
  return (
    <Show
      when={props.staticHtml}
      fallback={<div class="text-muted-foreground">No modifications</div>}
    >
      <div
        class="overflow-auto rounded bg-muted p-3 leading-relaxed [&_pre]:text-[11px]"
        // oxlint-disable-next-line solid/no-innerhtml
        innerHTML={props.staticHtml!}
      />
    </Show>
  );
}
