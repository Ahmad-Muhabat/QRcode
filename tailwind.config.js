/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {colors: {
    'White': 'hsl(0, 0%, 100%)',
    'Light-gray': 'hsl(212, 45%, 89%)',
    'Grayish-blue': 'hsl(220, 15%, 55%)',
    'Dark-blue': 'hsl(218, 44%, 22%)'
  },
  fontFamily: {
    'outfit': ['"outfit"', ...defaultTheme.fontFamily.sans],
  },
    extend: {},
  },
  plugins: [],
}

