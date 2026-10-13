import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split the build so no single chunk balloons past Vite's 500 kB
        // notice. Two groups:
        //   1. Vendor libraries — cacheable independently of app code.
        //   2. Curriculum day data — one chunk per phase file, so editing a
        //      single day does not invalidate the other eleven phases.
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@supabase') || id.includes('supabase')) {
              return 'vendor-supabase'
            }
            if (id.includes('recharts')) {
              return 'vendor-charts'
            }
            if (
              id.includes('react') ||
              id.includes('react-dom') ||
              id.includes('react-router') ||
              id.includes('scheduler')
            ) {
              return 'vendor-react'
            }
            return undefined
          }
          const phase = id.match(/curriculum\/days\/phase-(\d+)\.ts/)
          if (phase) {
            return `curriculum-${phase[1]}`
          }
          return undefined
        },
      },
    },
  },
})