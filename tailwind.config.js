/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation : {
        fadeIn: 'fadeIn 3s'
      },
      keyframes: {
        fadeIn: {
          '0%' : {opacity: '0'},
          '100$': {opacity: '1'}
        }
      }
    },
    fontSize: {
      xl: ['4.4vw', '55px']
    }
  },
  plugins: [],
}

