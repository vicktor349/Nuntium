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
      },
      margin: {
        '520px': '520px',
        '1000px': '1000px',
        '1400px': '1400px'
      },
      height: {
        '350px': '350px',
        '2109px': '2109px',
        '1452px': '1452px'
      },
      width: {
        '324px': '324px',
        '350px': '350px',
        '524px': '524px',
        '444px': '444px'
      },
    },

  },
  plugins: [],
}
