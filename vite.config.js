import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://circlechart.kr',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // /api를 빈 문자열로 대체
      }
    },
    watch: {
      usePolling: true, // 파일 변경 감지를 강제
    },
    hmr: true, // Hot Module Replacement 활성화
  },
})
