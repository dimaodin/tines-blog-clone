/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roobert', ...defaultTheme.fontFamily.sans],
        'serif': ['Reckless', ...defaultTheme.fontFamily.serif]
      },
      colors: {
        paleDesert: '#f8f4f0',
        paleLight: '#fffdfb',
      }
    }
  },
  variants: {},
  plugins: [
    '@tailwindcss/forms',
    require('@tailwindcss/forms'),
  ]
}
