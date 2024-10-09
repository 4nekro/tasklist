/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        'copo': '#4C107A',
        'list-light': '#D9D9D9',
        'list-dark': '#9F9F9F'
      },
      backgroundImage: {
        'grid-repeat': 'repeating-linear-gradient(#b5b5b5 0 1px, transparent 1px 100%), repeating-linear-gradient(90deg, #b5b5b5 0 1px, transparent 1px 100%)'  
      },
      backgroundSize: {
        'grid-size': '250px 50px'
      }
    },
  },
  plugins: [],
}