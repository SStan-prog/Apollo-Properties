import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
import sanity from 'astro-sanity';

// https://astro.build/config
import svelte from '@astrojs/svelte';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sanity({
      projectId: '3ans7o2s',
      dataset: 'production',
      site: 'https://apollopropertiesosaka.com/',
    }),
    svelte(),
    sitemap(),
  ],
  site: 'https://apollopropertiesosaka.com/',
});
