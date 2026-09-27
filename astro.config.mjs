import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://waxphx.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        if (item.url === 'https://waxphx.com/') item.priority = 1;
        else if (item.url.endsWith('/acquire/')) item.priority = 0.9;
        else item.priority = 0.7;
        item.lastmod = '2026-09-27';
        return item;
      },
    }),
  ],
});
