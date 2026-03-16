import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const isCI = !!process.env.GITHUB_ACTIONS;
const basePath = process.env.VITE_BASE_PATH || (isCI ? '/direct/' : './');

export default defineConfig({
  base: basePath,
  plugins: [vue()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true
      }
    }
  }
})