import { useParams } from "@solidjs/router";
import { defineFileRoute } from "@solidjs/router/fs";
import { prefetchScript } from "~/lib/scripts-utils";
import { ScriptPage } from "~/components/ScriptPage";

// The router's intent preload (hover/focus/touch) calls this before the page
// opens, so the page's own fetches hit the HTTP cache.
export const route = defineFileRoute("/scripts/:script", {
  preload: ({ params }) => {
    prefetchScript(params.script);
  },
});

export default function ScriptRoute() {
  const params = useParams<{ script: string }>();
  return <ScriptPage stem={params.script} />;
}
