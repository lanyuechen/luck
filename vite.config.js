import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteYaml from '@modyfi/vite-plugin-yaml';
import path from 'path';

let base = '/';
if (process.env.NODE_ENV === 'production') {
  // base = '/luck/';
  base = 'https://cdn.jsdelivr.net/gh/lanyuechen/luck@gh-pages/';
}

// https://vitejs.dev/config/
export default defineConfig({
  base,
  build: {
    assetsDir: '',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    ViteYaml(),
  ],
})
