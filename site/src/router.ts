import { createRouter, intentPreload } from "@solidjs/router";
import { fileRoutes } from "@solidjs/router/fs";
import { pageRoutes } from "virtual:file-routes";

export const Router = createRouter({
  routes: fileRoutes(pageRoutes),
  // A link the pointer rests on (or focuses, or touches) runs the matched
  // route's preload before the click, so navigation starts with warm data.
  preloadLinks: intentPreload(),
});

export const { paths } = Router;
