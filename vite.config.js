import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"http://AnLau25.github.io/webProj1",
  plugins: [react()],
  build: {chunkSizeWarningLimit: 1600}
})
