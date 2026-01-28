import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src',
  publicDir: '../public',
  server: {
    port: 5173,
    strictPort: false,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
