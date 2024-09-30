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
      }
    },
  },
  plugins: [],
}