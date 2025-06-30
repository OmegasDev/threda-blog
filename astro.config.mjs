import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'server',
  // ✅ ADD THIS LINE 👇
  site: 'http://localhost:4321', // or your future domain
});