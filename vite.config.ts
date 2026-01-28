import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['@surrealdb/wasm'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  esbuild: {
    supported: {
      'top-level-await': true,
    },
  },
  plugins: [
    tailwindcss(),
    svelte(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '$': path.resolve(__dirname, 'src', 'types'),
    },
  },
});
