export default function HomePage() {
  return (
    <div class="mt-20 text-center text-muted-foreground">
      <img src="logo-stacked.svg" alt="Sugg" class="mx-auto mb-4 w-20 opacity-60" />
      <h2 class="text-base font-semibold text-foreground">Select a script to analyze</h2>
      <p class="mt-1 text-xs">Completion scripts for the Sugg command engine.</p>
      <p class="text-xs">Click a script in the sidebar to view source and security analysis.</p>
    </div>
  );
}
