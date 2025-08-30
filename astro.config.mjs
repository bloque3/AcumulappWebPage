// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Camilo-845.github.io',
  base: '/AcumulappWebPage',
  integrations: [
    alpinejs()
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});