/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Libre Baskerville': ['Libre Baskerville']
      },
      screens: {
        'xsm': { 'max': '480px' },
      }
    },

  },
  plugins: [],
}
