import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import sanity from '@sanity/astro';
// https://astro.build/config
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import netlify from '@astrojs/netlify';

// https://astro.build/config
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),

    sanity({
      projectId: '3ans7o2s',
      dataset: 'production',
      // Set useCdn to false if you're building statically.
      useCdn: false,
    }),

    svelte(),
    sitemap(),
    robotsTxt(),
  ],
  site: 'https://apollopropertiesosaka.com/',

  adapter: netlify(),
});
