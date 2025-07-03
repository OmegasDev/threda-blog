import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',
  adapter: netlify(),
  site: 'https://threda.netlify.app',
  vite: {
    ssr: {
      noExternal: ['lucide-react']
    },
    optimizeDeps: {
      include: ['lucide-react']
    }
  }
});