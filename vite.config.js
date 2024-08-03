import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
      output: {
        entryFileNames: 'js/[name].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'js/[name]-[hash].js',
      },
    },
  },
  server: {
    open: true,
    port: 5173,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'js'),
    },
  },
});
