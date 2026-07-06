import type { MermaidPluginConfig } from "./mermaid-plugin";

export const MermaidMarkdown = (
  md: any,
  pluginOptions?: MermaidPluginConfig
) => {
  const fence = md.renderer.rules.fence;

  md.renderer.rules.fence = (
    tokens: any[],
    index: number,
    options: any,
    env: any,
    slf: any
  ) => {
    const token = tokens[index];

    if (token.info.trim() === "mermaid") {
      try {
        const key = index;
        const cssClass = pluginOptions?.class || 'mermaid';
        return `
      <Suspense> 
      <template #default>
      <Mermaid id="mermaid-${key}" class="${cssClass}" graph="${encodeURIComponent(
          token.content
        )}"></Mermaid>
      </template>
        <!-- loading state via #fallback slot -->
        <template #fallback>
          Loading...
        </template>
      </Suspense>`;
      } catch (err) {
        return `<pre>${err}</pre>`;
      }
    }

    if (token.info.trim() === "mmd") {
      tokens[index].info = "mermaid";
    }

    return fence ? fence(tokens, index, options, env, slf) : "";
  };
};
