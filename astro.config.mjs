import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      fs: {
        allow: ['..']
      }
    }
  },

  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  adapter: cloudflare()
});