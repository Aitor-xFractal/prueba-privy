import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      globals: {
        Buffer: true,   // asegura window.Buffer en dev y build
        global: true,
        process: true   // útil para otras libs web3
      },
      protocolImports: true
    })
  ],
  define: {
    // algunas libs siguen buscando "global"
    global: 'globalThis'
  },
  resolve: {
    alias: {
      buffer: 'buffer'  // para imports explícitos 'buffer'
    }
  }
})
