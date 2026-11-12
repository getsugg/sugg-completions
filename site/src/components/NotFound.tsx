import type { JSX } from "@solidjs/web";

import { Button } from "~/components/ui/button";

export function NotFound() {
  return (
    <div class="mt-20 text-center">
      <div class="mb-3 text-3xl text-muted-foreground">404</div>
      <h2 class="text-base font-semibold text-foreground">Script not found</h2>
      <p class="mt-1 text-xs text-muted-foreground">Select a valid script from the sidebar.</p>
      <Button
        as="a"
        href="/scripts/"
        variant="link"
        class="mt-4 h-auto p-0 text-xs text-amber-500 hover:underline"
      >
        Back to Home
      </Button>
    </div>
  );
}
