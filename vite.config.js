import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [
    svgr({ 
      svgrOptions: {
        // svgr options
        plugins: [
          '@svgr/plugin-svgo',
          '@svgr/plugin-jsx',
          '@svgr/plugin-prettier'
        ],
      },
    }),
    react({
      include: [/\.jsx?$/, /\.tsx?$/],
    })],
})
