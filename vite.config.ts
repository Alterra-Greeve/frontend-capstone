import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 8080,
    strictPort: true,
    host: '0.0.0.0',
  },
  server: {
    port: 8080,
    strictPort: true,
    host: '0.0.0.0',
  },
})
