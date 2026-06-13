import { useNavigate } from "@solidjs/router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div class="mt-20 text-center">
      <div class="mb-3 text-3xl text-muted-foreground">404</div>
      <h2 class="text-base font-semibold text-foreground">Script not found</h2>
      <p class="mt-1 text-xs text-muted-foreground">Select a valid script from the sidebar.</p>
      <button
        type="button"
        class="mt-4 text-xs text-amber-500 hover:underline cursor-pointer"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
}
