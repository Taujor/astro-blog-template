import { defineConfig } from 'astro/config';
import { remarkFileStats } from './plugins/remark-mdFileStats.mjs';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    applyBaseStyles: false
  })],
  markdown: {
    remarkPlugins: [remarkFileStats]
  }
});