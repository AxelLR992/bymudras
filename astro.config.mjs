// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': '/coming-soon',
    '/about': '/coming-soon',
    '/contact-us': '/coming-soon',
  },
  integrations: [tailwind()]
});