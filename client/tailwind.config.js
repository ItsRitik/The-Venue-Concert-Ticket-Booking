/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.html",
  "./src/**/*.js",
  "./src/**/*.jsx",
  "./public/index.html",],
  enabled: process.env.NODE_ENV === "production",
  theme: {
    extend: {
      colors:{
        'vermilion': {
          '50': '#fff6ec',
          '100': '#ffead3',
          '200': '#ffd2a5',
          '300': '#ffb16d',
          '400': '#ff8532',
          '500': '#ff620a',
          '600': '#ff4800',
          '700': '#cc3102',
          '800': '#a1270b',
          '900': '#82230c',
          '950': '#460e04',
      },
      'cod-gray': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#121212',
    },
    
      },

    },
  },
  plugins: [],
}

