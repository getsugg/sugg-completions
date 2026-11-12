# Sugg Completions — Web App

A browser-based preview and security audit tool for sugg completion scripts. WASM runs in the browser to extract dynamic behaviors.

## Tech Stack

- **Framework**: Solid 2 (`solid-js@2.0.0-rc`) with `@solidjs/vite-plugin` start mode — SSR for the build, then a static export
- **Routing**: `@solidjs/router` 2 + `filesystem-routing` (`src/routes`)
- **Styling**: Tailwind CSS v4 + solid-ui
- **Code Highlighting**: Shiki v4 + `@shikijs/twoslash` at build time
- **UI Components**: `@kobalte/core` 2 alpha + class-variance-authority
- **Parser**: Self-compiled WASM from sugg's `crates/sugg-wasm/`
- **Deployment**: GitHub Pages (static, zero backend)

## How the static build works

`vite build` runs the Solid 2 start-mode build and emits:

- `dist/client` — client assets and `public/` files
- `dist/server/server.js` — the SSR handler (`handleRequest`)

The `prerender({ mode: "static" })` plugin from `prerender-crawler` then imports
that handler, renders `/` and `/404` plus every page reachable by links, and
writes the HTML into `dist/client`. The published directory is `dist/client`.

`/404` is seeded with an explicit filename (`404.html`); script pages are found
through the sidebar links, so adding a script needs no build config. Routes:

| Route             | Page                          |
| ----------------- | ----------------------------- |
| `/`               | Landing page                  |
| `/scripts/`       | Console home                  |
| `/scripts/<stem>/`| Source viewer + audit panel   |
| `/404`            | Not found                     |

## Getting Started

```bash
cd site
bun install
bun run dev
```

Open http://localhost:5173.

`bun run dev` regenerates the script list and highlighted data first. The
generator is cached, so repeat starts are fast.

## Adding a Script

Add a `.ts` file to `completions/` (project root). The script list and its
static route are regenerated on the next dev/build.

Scripts with `dynamic()` functions will automatically show extracted results in
the audit panel.

## Build & Deploy

```bash
cd site
bun run build      # generate + vite build (prerenders into dist/client)
bun run smoke      # optional: serve dist/client and check every route in Chrome
git push main      # GitHub Actions deploys dist/client to Pages
```

## Tests

Both suites run against `dist/client` in a real Chrome, so they exercise the
prerendered HTML plus hydration. Build first.

```bash
bun run build
bun run smoke            # routes, interactions, console/Solid 2 diagnostics, layout
bun run test:visual      # Playwright screenshot comparison (local only)
```

CI runs `bun run check` (tsc) and `bun run smoke` after the build and before the
deploy step, so a broken page never reaches Pages. Visual regression stays
local: pixel baselines are platform-specific and would need a separate Linux set.

Visual baselines live in `tests/visual/*-snapshots/` and are gitignored. The
first run writes them and fails; after that the suite compares. When a UI change
is intentional, refresh them:

```bash
bun run test:visual:update
```

## Updating WASM

After changes to sugg's `crates/sugg-ast/`:

```bash
# In sugg repo root
wasm-pack build crates/sugg-wasm --target web --no-opt --out-dir ../../wasm-pkg

# Copy to this repo
cp ../sugg/wasm-pkg/* site/wasm/
```

## Auto Analysis

When a script is opened, the analysis runs automatically:

1. **Static scan** — `scanSource()` reads the script source and marks known API calls as `safe` or `unsafe`
2. **WASM extraction** — `extract()` replaces `dynamic()` calls with annotated objects

The bottom panel shows results in three tabs:

| Tab         | Description                                                                                           |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| **Summary** | Per-line annotation list with 🔴 UNSAFE / 🟢 SAFE markers. Click a line to scroll to it in the source |
| **Dynamic** | The extracted pure-JS dynamic code                                                                    |
| **Static**  | The modified source with `dynamic()` calls replaced by `{__is_dynamic, id}` markers                   |

Risk classification: `exec`/`execFile`/`fetch` → UNSAFE, `readFile`/`readJson`/`scanPath`/`cache`/`ui` → SAFE.
