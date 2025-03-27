// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Only for `npm run dev`
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
