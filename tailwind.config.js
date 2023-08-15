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
        sans: ['Cascadia Code', 'ui-monospace', 'monospace'],        // 'sans': ['Times', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-dark-mode')()],
}