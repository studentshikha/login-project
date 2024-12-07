/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gilroy', 'sans-serif'], // Add Gilroy as the primary font
      },
    },
  },
  plugins: [],
}

