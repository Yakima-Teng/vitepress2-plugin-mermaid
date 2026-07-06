import path from "path";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/Mermaid.vue",
          dest: "./",
          rename: { stripBase: 1 }, // strips `src/`
        },
        {
          src: "src/mermaid.ts",
          dest: "./",
          rename: { stripBase: 1 }, // strips `src/`
        },
      ],
    }),
    dts({ bundleTypes: true }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MermaidPlugin",
      fileName: (format: string) =>
        format == "es"
          ? `vitepress2-plugin-mermaid.${format}.mjs`
          : `vitepress2-plugin-mermaid.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "vue",
        // "markdown-it",
        // "mermaid",
        // "@mermaid-js/mermaid-mindmap",
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
