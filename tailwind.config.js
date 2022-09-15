const defaultConfig = require('tailwindcss/defaultConfig')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{tsx,jsx,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'x': {
          black: '#0C0C0F'
        }
      },
      fontFamily: {
      }
    },
  },
  plugins: [],
}
