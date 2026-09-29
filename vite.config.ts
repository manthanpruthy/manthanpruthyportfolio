import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isPages = process.env["GITHUB_PAGES"] === "true";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Only switch to static output when building for GitHub Pages
    ...(isPages && {
      spa: {
        enabled: true,
        prerender: { outputPath: "/index" }, // makes index.html
      },
    }),
  },
  vite: {
    base: isPages ? "/manthanpruthyportfolio/" : "/",
  },
});
