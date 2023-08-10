/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Futura Medium', ...defaultTheme.fontFamily.sans],
        'sans': ['Times', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-dark-mode')()],
}