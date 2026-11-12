import { defineConfig } from "@playwright/test";

// Visual regression tests run against the built static site in `dist/client`,
// so they cover the prerendered HTML plus hydration. Build first:
//
//   bun run build && bun run test:visual
//
// Baselines are local-only (gitignored), like the previous vitest setup.
export default defineConfig({
  testDir: "tests/visual",
  fullyParallel: false,
  workers: 1,
  reporter: [["list"]],
  outputDir: "test-results",
  use: {
    baseURL: "http://localhost:4173",
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
    channel: "chrome",
  },
  expect: {
    toHaveScreenshot: {
      animations: "disabled",
      caret: "hide",
      scale: "css",
      maxDiffPixelRatio: 0.001,
    },
  },
  webServer: {
    command: "bun scripts/serve-static.ts",
    url: "http://localhost:4173",
    reuseExistingServer: true,
    timeout: 30_000,
  },
});
