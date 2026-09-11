/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "poke-red": "#EE1515",
        "poke-yellow": "#FFCB05",
        "poke-blue": "#3B4CCA",
        "poke-green": "#2ECC71",
      },
    },
  },
  plugins: [],
}