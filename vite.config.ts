import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/happy_hippos_app/',
  plugins: [react()],
})