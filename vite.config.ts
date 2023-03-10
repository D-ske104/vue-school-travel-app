import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`,
      '~': `${__dirname}/public/`,
    },
  },
  plugins: [vue()],
  base: (process.env.NODE_ENV === 'production') ? '/vue-school-travel-app/' : '/',
})
