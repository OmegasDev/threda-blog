import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'server',
  adapter: netlify(),
   adapter: vercel(),

  // ✅ ADD THIS LINE 👇
  site: 'http://localhost:4321', // or your future domain
});
