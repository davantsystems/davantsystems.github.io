// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      port: 3100,
      allowedHosts: ['38dd-2603-8000-cf01-9e88-5daf-3c2b-d450-5dfb.ngrok-free.app']
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