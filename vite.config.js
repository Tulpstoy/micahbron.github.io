import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: () => 'assets/[name]-[hash][extname]'
      }
    },
    cssCodeSplit: true,
    assetsInlineLimit: 4096
  },
  css: {
    devSourcemap: true
  }
})
