import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "vitepress2-plugin-mermaid/Mermaid.vue": path.join(
        __dirname,
        "../dist/Mermaid.vue"
      ),
    },
  },
  server: {
    fs: {
      allow: ["../../"],
    },
  },
});
