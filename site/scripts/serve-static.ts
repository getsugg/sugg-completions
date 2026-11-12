// Static file server for the prerendered site.
//
// Used by `scripts/smoke.ts` and by Playwright's `webServer`. Mirrors GitHub
// Pages: a missing path falls back to `404.html` with a 404 status.
import { extname, join, normalize, sep } from "node:path";

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".wasm": "application/wasm",
  ".woff2": "font/woff2",
};

export function serveStatic(root: string, port: number) {
  const base = normalize(root);

  return Bun.serve({
    port,
    async fetch(request) {
      const url = new URL(request.url);
      let pathname = decodeURIComponent(url.pathname);
      if (pathname.endsWith("/")) pathname += "index.html";

      const file = normalize(join(base, pathname));
      if (file !== base && !file.startsWith(base + sep)) {
        return new Response("forbidden", { status: 403 });
      }

      const bunFile = Bun.file(file);
      if (await bunFile.exists()) {
        return new Response(bunFile, {
          headers: { "content-type": MIME[extname(file)] ?? "application/octet-stream" },
        });
      }

      const notFound = Bun.file(join(base, "404.html"));
      if (await notFound.exists()) {
        return new Response(notFound, {
          status: 404,
          headers: { "content-type": MIME[".html"] },
        });
      }

      return new Response("not found", { status: 404 });
    },
  });
}

if (import.meta.main) {
  const root = join(import.meta.dirname!, "..", "dist", "client");
  const port = Number(process.env.PORT ?? 4173);
  serveStatic(root, port);
  console.log(`serving ${root} on http://localhost:${port}`);
}
