/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#f4f4f4',
        'custom-violet': '#4a00ff'
      }
    },
  },
  plugins: [],
}