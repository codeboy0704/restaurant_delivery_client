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
      borderRadius: {
        'foodCart': '15px 15px 0px 0px'
      },
      boxShadow: {
        'food_item': '0px 0px 12px #00000015'
      },
      gridTemplateColumns: {
        "display": 'repeat(auto-fill, minmax(240px, 1fr))',
        "footer": '2fr 1fr 1fr',
        "cart": '1fr 1fr 1fr 1fr 1fr 0.5fr'
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

