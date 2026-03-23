// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.davantsystems.com',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      port: 3100,
    }
  },
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Orbitron",
      cssVariable: "--font-orbitron",
    }]
  },
});