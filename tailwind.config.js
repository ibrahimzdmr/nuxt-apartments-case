module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./layouts/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue"
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: [{
        winter: {
          ...require("daisyui/src/theming/themes")["[data-theme=winter]"],
          "accent": "#4a044e"
        }
      }]
    },
    safelist:  [
      'btn-primary',
      'btn-accent',
      'btn-secondary',
      'btn-lg',
      'btn-sm',
      'btn-xs',
      'btn-outline',
      'input-primary',
      'input-secondary',
      'input-accent',
      'input-info',
      'input-success',
      'input-warning',
      'input-error',
      'input-lg',
      'input-md',
      'input-sm',
      'input-xs',
      'select-primary',
      'select-secondary',
      'select-accent',
      'select-info',
      'select-success',
      'select-warning',
      'select-error',
      'select-lg',
      'select-md',
      'select-sm',
      'select-xs'
    ]
  }