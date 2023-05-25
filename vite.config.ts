import react from "@vitejs/plugin-react";
import autoprefixer from 'autoprefixer';
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
  },
  css: {
    postcss: {
      plugins: [autoprefixer]
    }
  }
});
