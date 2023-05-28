import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import * as path from 'path';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  resolve: {
    alias: {
      '@scssutils': path.resolve(__dirname, '/src/shared/scss/utils'),
    },
  },
});
