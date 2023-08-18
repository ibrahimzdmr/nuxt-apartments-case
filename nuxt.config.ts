import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [
      svgLoader()
    ]
  },
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
  imports: {
    dirs: [
      'composables',
      'composables/*/index.{ts,js,mjs,mts}',
      'composables/**',
      'pages/**'
    ]
  },
})
