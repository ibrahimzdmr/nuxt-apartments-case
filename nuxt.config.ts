export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css:[
    '@/assets/main.css'
  ],
  typescript: {
    strict: true
  },
  modules: [
    '@pinia/nuxt',
  ],
})
