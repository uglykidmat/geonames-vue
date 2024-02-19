import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // devServer: {
  //   proxy: 'https://127.0.0.1:8000/',
  //   ws: true,
  //   changeOrigin: true
  // }
})
