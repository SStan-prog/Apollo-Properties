import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import image from '@astrojs/image';

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
import sanity from 'astro-sanity';

// https://astro.build/config

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), react(), sanity({
    projectId: '3ans7o2s',
    dataset: 'production',
    site: 'https://apollopropertiesosaka.com/',
  }), svelte(), sitemap()]
});


