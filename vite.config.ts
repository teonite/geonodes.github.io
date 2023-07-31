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
    proxy: {
      "/api": {
           target: 'http://127.0.0.1:8001',
           changeOrigin: true,
           secure: false,      
           ws: true,
      }
    }
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
  define: {'process.env': process.env}
});
