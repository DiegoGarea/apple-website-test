import {sentryVitePlugin} from '@sentry/vite-plugin';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: 'diego-fl',
      project: 'javascript-react',
      base: '/apple-website-test/',
    }),
  ],

  build: {
    sourcemap: true,
  },
});
