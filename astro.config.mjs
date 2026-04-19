// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://armand-hoxha25.github.io',
  base: '/personal-page/',
  vite: {
    plugins: [tailwindcss()],
  },
});