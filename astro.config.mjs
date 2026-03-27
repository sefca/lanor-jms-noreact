import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

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
  }
});
