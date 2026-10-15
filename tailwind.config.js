/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        cinzel: ['"Cinzel"', '"Cormorant Garamond"', 'serif'],
        signature: ['"Alex Brush"', '"Pinyon Script"', 'cursive'],
        script: ['"Pinyon Script"', 'cursive'],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brand: {
          ivory: '#FFFDF9',
          ivoryLight: '#FAF7F2',
          ivoryDark: '#F4ECE4',
          blush: '#FBECE8',
          blushDark: '#ECC8BE',
          gold: '#C5A880',
          goldLogo: '#9C7847',
          goldDark: '#8F6C3D',
          rose: '#7C3B49',
          roseDark: '#5E2B36',
          plum: '#652B39',
          charcoal: '#322B29',
          muted: '#736561',
        }
      },
      letterSpacing: {
        couture: '0.22em',
        widestLuxury: '0.28em',
      }
    },
  },
  plugins: [],
}
