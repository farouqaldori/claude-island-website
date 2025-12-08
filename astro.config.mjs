// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://claudeisland.com',
  vite: {
    server: {
      allowedHosts: ['localhost', '.ngrok.app', '.ngrok-free.app'],
    },
  },
});
