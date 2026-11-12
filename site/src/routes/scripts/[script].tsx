import { useParams } from "@solidjs/router";
import { ScriptPage } from "~/components/ScriptPage";

export default function ScriptRoute() {
  const params = useParams<{ script: string }>();
  return <ScriptPage stem={params.script} />;
}
