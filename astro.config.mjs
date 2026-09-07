import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default defineConfig({
  site: 'https://cafecito.tech',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/llms.txt'),
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  redirects: {
    '/company/': '/docs/overview/',
    '/docs/company-info/': '/docs/overview/',
  },
});
