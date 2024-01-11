import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  build: {
    rollupOptions: {
      external: ['/portfolio/src/assets/images/work.svg?react'],
    },
  },
  plugins: [
    svgr({ 
      svgrOptions: {
        // svgr options
      },
    }),
    react({
      include: [/\.jsx?$/, /\.tsx?$/],
    })],
})
