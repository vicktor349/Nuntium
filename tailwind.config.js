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
        '500px': '500px',
        '520px': '520px',
        '950px': '950px',
        '1000px': '1000px',
        '1400px': '1400px',
        '1800px': '1800px'
      },
      height: {
        '350px': '350px',
        '2109px': '2109px',
        '1452px': '1452px'
      },
      width: {
        '324px': '324px',
        '350px': '350px',
        '390px': '390px',
        '444px': '444px',
        '524px': '524px',
        '650px': '650px'
      },
      gridAutoColumns: {
        '2fr': 'minmax(0, 2fr)',
      },
      backgroundImage: {
        'hero': "url('../public/img/Article-Image.png')",
        'article': "url('../public/img/Article-Image2.png')"
      }
    },

  },
  plugins: [],
}
