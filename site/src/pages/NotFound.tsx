import { useNavigate } from "@solidjs/router";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div class="mt-20 text-center">
      <div class="mb-3 text-3xl text-muted-foreground">404</div>
      <h2 class="text-base font-semibold text-foreground">Script not found</h2>
      <p class="mt-1 text-xs text-muted-foreground">Select a valid script from the sidebar.</p>
      <Button
        variant="link"
        class="mt-4 h-auto p-0 text-xs text-amber-500 hover:underline"
        onClick={() => navigate("/")}
      >
        Back to Home
      </Button>
    </div>
  );
}
