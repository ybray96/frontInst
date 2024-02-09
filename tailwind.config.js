/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans"], 
        inter: ['Inter', 'sans'], 
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}