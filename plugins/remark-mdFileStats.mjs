import { statSync } from "fs";

export function remarkFileStats() {
  
  return function (_tree, file) {
    const filepath = file.history[0];
    const result = statSync(filepath);

    file.data.astro.frontmatter = {...file.data.astro.frontmatter, birthtime: result.birthtime.toISOString(), lastModified: result.mtime.toISOString()}
  }
  
}