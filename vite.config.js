import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/luyen-thi-tin-hoc-12/', // Thêm chính xác dòng này (tên repository của bạn)
})