import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const repoName = 'portafolio'

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
