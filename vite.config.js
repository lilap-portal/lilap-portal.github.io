import { resolve } from "node:path";
import { defineConfig } from "vite";

// This is a plain multi-page site (index.html + caso.html), not an SPA —
// both pages need to be registered as separate Rollup entry points or
// `vite build` would only emit index.html.
//
// base: "/" is correct for a <username>.github.io user/org GitHub Pages
// site, which is served from the domain root. (A *project* page instead —
// living at username.github.io/repo-name/ — would need base: "/repo-name/".)
export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        caso: resolve(__dirname, "caso.html"),
      },
    },
  },
});
