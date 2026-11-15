// Smoke test: serve dist/client, load every route in a real browser, check the
// console for Solid 2 runtime diagnostics, exercise hydration and interactions,
// and assert a few layout invariants at several viewport widths.
import { join } from "node:path";
import { chromium, type Page } from "playwright-core";

import { serveStatic } from "./serve-static";

const root = join(import.meta.dirname!, "..", "dist", "client");
const port = Number(process.env.SMOKE_PORT ?? 4173);
const origin = `http://localhost:${port}`;

const server = serveStatic(root, port);

async function launchBrowser() {
  if (process.env.SMOKE_CHROME_PATH) {
    return chromium.launch({ executablePath: process.env.SMOKE_CHROME_PATH, headless: true });
  }
  // `channel: "chrome"` uses the installed stable Chrome, so this works on
  // Windows and on CI runners without downloading a Playwright browser.
  try {
    return await chromium.launch({ channel: "chrome", headless: true });
  } catch (error) {
    console.warn(
      `smoke: system Chrome unavailable (${error instanceof Error ? error.message : error}); ` +
        "falling back to bundled Chromium. Run `bunx playwright install chromium` if that fails too.",
    );
    return chromium.launch({ headless: true });
  }
}

const browser = await launchBrowser();

const DIAGNOSTIC =
  /REACTIVITY_HALTED|STRICT_READ_UNTRACKED|PRIMITIVE_IN_FORBIDDEN_SCOPE|REACTIVE_WRITE_IN_OWNED_SCOPE|CLEANUP_IN_FORBIDDEN_SCOPE|NO_OWNER_CLEANUP|MISSING_EFFECT_FN|Hydration key|hydration/i;

const failures: string[] = [];

// External requests (Google Fonts) are progressive enhancement and flake with
// the runner's network. The gate is about the built site's own assets, so only
// same-origin failures count.
function isLocal(url: string) {
  try {
    return new URL(url).origin === origin;
  } catch {
    return true;
  }
}

/** Keep the run hermetic: the font CDN must not decide whether the gate passes. */
async function isolate(page: Page) {
  await page.route("**/*", (route) => {
    const url = route.request().url();
    if (url.startsWith(origin) || url.startsWith("data:") || url.startsWith("blob:")) {
      return route.continue();
    }
    return route.abort();
  });
}

function watch(page: Page, messages: string[]) {
  page.on("console", (message) => {
    const text = message.text();
    const source = message.location().url;
    if (message.type() === "error") {
      if (!source || isLocal(source)) messages.push(text);
      return;
    }
    if (DIAGNOSTIC.test(text)) messages.push(text);
  });
  page.on("pageerror", (error) => messages.push(`pageerror: ${error.message}`));
  page.on("response", (response) => {
    if (response.status() >= 400 && isLocal(response.url())) {
      messages.push(`http ${response.status()}: ${response.url()}`);
    }
  });
  page.on("requestfailed", (request) => {
    if (isLocal(request.url())) {
      messages.push(`requestfailed: ${request.url()} ${request.failure()?.errorText ?? ""}`);
    }
  });
}

async function check(route: string, run: (page: Page) => Promise<void>) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const messages: string[] = [];
  await isolate(page);
  watch(page, messages);

  try {
    await page.goto(`${origin}${route}`, { waitUntil: "networkidle" });
    await run(page);
  } catch (error) {
    failures.push(`${route}: ${error instanceof Error ? error.message : String(error)}`);
  }

  for (const message of messages) failures.push(`${route}: console: ${message}`);
  await page.close();
}

interface Box {
  width: number;
  height: number;
}

interface Layout {
  viewport: number;
  viewportHeight: number;
  scrollWidth: number;
  header: Box | null;
  sidebar: Box | null;
  main: Box | null;
  viewer: (Box & { scrollHeight: number }) | null;
}

const VIEWPORTS = [1280, 1024, 768];

// Usability sanity, not a layout spec. Exact sizes are the visual suite's job;
// here we only assert that the shell stays usable instead of collapsing or
// being swallowed by one pane.
const MAX_SIDEBAR_RATIO = 0.4;
const MIN_MAIN_RATIO = 0.5;
const MIN_VIEWER_RATIO = 0.3;

async function measure(page: Page): Promise<Layout> {
  return page.evaluate(() => {
    const box = (selector: string) => {
      const el = document.querySelector(selector);
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return { width: Math.round(rect.width), height: Math.round(rect.height) };
    };
    const viewer = document.querySelector(".source-viewer");
    return {
      viewport: window.innerWidth,
      viewportHeight: window.innerHeight,
      scrollWidth: document.documentElement.scrollWidth,
      header: box("header"),
      sidebar: box("aside"),
      main: box("main"),
      viewer: viewer
        ? {
            ...box(".source-viewer")!,
            scrollHeight: Math.round(viewer.scrollHeight),
          }
        : null,
    };
  });
}

const pct = (part: number, whole: number) => `${Math.round((part / whole) * 100)}%`;

/**
 * Layout invariants, no pixel baselines: no horizontal overflow, and on the
 * console routes the shell keeps its proportions instead of collapsing.
 */
async function checkLayout(route: string, options: { console?: boolean } = {}) {
  for (const width of VIEWPORTS) {
    const page = await browser.newPage({ viewport: { width, height: 800 } });
    const messages: string[] = [];
    await isolate(page);
    watch(page, messages);

    try {
      await page.goto(`${origin}${route}`, { waitUntil: "networkidle" });
      if (options.console) {
        await page.locator(".line-row").first().waitFor({ timeout: 20_000 });
        await page.getByText("Auto Analysis").waitFor({ timeout: 20_000 });
      }
      // Let resize observers settle after the viewport was applied.
      await page.waitForTimeout(250);

      const layout = await measure(page);
      const at = `${route} @${width}px`;

      if (layout.scrollWidth > layout.viewport + 1) {
        failures.push(`${at}: horizontal overflow ${layout.scrollWidth} > ${layout.viewport}`);
      }

      if (!options.console) continue;

      if (!layout.header || layout.header.height <= 0) {
        failures.push(`${at}: header missing or collapsed`);
      }
      if (!layout.sidebar || layout.sidebar.width <= 0) {
        failures.push(`${at}: sidebar missing or collapsed`);
      } else if (layout.sidebar.width > layout.viewport * MAX_SIDEBAR_RATIO) {
        failures.push(
          `${at}: sidebar takes ${pct(layout.sidebar.width, layout.viewport)} of the viewport`,
        );
      }
      if (!layout.main) {
        failures.push(`${at}: main area missing`);
      } else if (layout.main.width < layout.viewport * MIN_MAIN_RATIO) {
        failures.push(
          `${at}: main area takes ${pct(layout.main.width, layout.viewport)} of the viewport`,
        );
      }
      if (!layout.viewer) {
        failures.push(`${at}: source viewer missing`);
      } else if (layout.viewer.height < layout.viewportHeight * MIN_VIEWER_RATIO) {
        failures.push(
          `${at}: source viewer height ${layout.viewer.height}px, ` +
            `min ${Math.round(layout.viewportHeight * MIN_VIEWER_RATIO)}px`,
        );
      } else if (layout.viewer.scrollHeight <= 0) {
        failures.push(`${at}: source viewer has no content`);
      }
    } catch (error) {
      failures.push(
        `${route} @${width}px: ${error instanceof Error ? error.message : String(error)}`,
      );
    }

    for (const message of messages) failures.push(`${route} @${width}px: console: ${message}`);
    await page.close();
  }
}

await check("/", async (page) => {
  await page.getByRole("tab", { name: "Windows" }).click();
  await page.getByText("irm https://getsugg.github.io/install.ps1").waitFor();
  await page.getByRole("link", { name: "Browse Scripts" }).first().click();
  await page.waitForURL("**/scripts/");
  await page.getByText("Select a script to analyze").waitFor();
});

await check("/scripts/", async (page) => {
  await page.getByText("Select a script to analyze").waitFor();
});

await check("/scripts/bun/", async (page) => {
  await page.locator(".line-row").first().waitFor({ timeout: 20_000 });
  await page.getByText("Annotations").waitFor({ timeout: 20_000 });

  // Search: open, type, select a result, panel closes.
  await page.getByRole("button", { name: "Search" }).click();
  await page.getByPlaceholder("Search in file…").fill("create");
  await page.locator("[aria-selected]").first().waitFor({ timeout: 10_000 });
  await page.keyboard.press("Escape");

  // File tabs: switch to the shared module and back.
  await page.getByRole("tab", { name: "npm/utils" }).click();
  await page.locator(".line-row").first().waitFor({ timeout: 20_000 });
  await page.getByRole("tab", { name: "index.ts" }).click();
  await page.locator(".line-row").first().waitFor({ timeout: 20_000 });

  // Detail panel: expand, then switch tabs.
  await page.getByRole("button", { name: /Annotations/ }).click();
  await page.getByRole("tab", { name: "Summary" }).waitFor();
  await page.getByRole("tab", { name: "Dynamic" }).click();
  await page.getByRole("tab", { name: "Static" }).click();

  // Resizable handle: drag it up and confirm it moved.
  const handle = page.locator("[data-resizable-handle]");
  const before = await handle.boundingBox();
  if (!before) throw new Error("resizable handle not found");
  await page.mouse.move(before.x + before.width / 2, before.y + before.height / 2);
  await page.mouse.down();
  await page.mouse.move(before.x + before.width / 2, before.y - 120, { steps: 5 });
  await page.mouse.up();
  const after = await handle.boundingBox();
  if (!after || after.y > before.y - 60) {
    throw new Error(`resizable handle did not move: ${before.y} -> ${after?.y}`);
  }

  // Client-side navigation through the sidebar.
  await page.getByRole("link", { name: /^git/ }).click();
  await page.waitForURL("**/scripts/git/");
  await page.locator(".line-row").first().waitFor({ timeout: 20_000 });
});

await check("/scripts/git/", async (page) => {
  await page.locator(".line-row").first().waitFor({ timeout: 20_000 });
  await page.getByText("Annotations").waitFor({ timeout: 20_000 });
});

await checkLayout("/");
await checkLayout("/scripts/");
await checkLayout("/scripts/npm/", { console: true });

await browser.close();
server.stop(true);

if (failures.length) {
  console.error(`\n${failures.length} failure(s):`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

console.log("smoke: all routes clean");
