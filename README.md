# vitepress2-plugin-mermaid

Add mermaid support for Vitepress.
It detects any dark theme that are set in body as long as it has dark in the name

See the [docs 📕](https://emersonbottero.github.io/vitepress2-plugin-mermaid/)  
and a [complex example 😎](https://emersonbottero.github.io/vitepress2-plugin-mermaid/guide/more-examples.html#render)

## Install

npm
```bash
npm i vitepress2-plugin-mermaid mermaid -D
```
pnpm
```bash
pnpm install --shamefully-hoist 
```

## Setup it up

Add wrapper

```js
// .vitepress/config.js
import { withMermaid } from "vitepress2-plugin-mermaid";

export default withMermaid({
  // your existing vitepress config...
  mermaid:{
    //mermaidConfig !theme here works for light mode since dark theme is forced in dark mode
  },
  ...
});
```

Use in any Markdown file

````md
<!---any-file.md-->

```mermaid
flowchart TD
  Start --> Stop
```
````
