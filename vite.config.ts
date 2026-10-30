import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  // Project Pages path in production; root path for local `npm run dev`
  base: command === 'build' ? '/class-prep-azhdahak-ebi/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 43127,
    strictPort: true,
  },
}))
