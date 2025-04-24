/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#0040A0',
        customPurple: '#9C246D',
        customOrange: '#F07E26',
        customRed: '#BD1014',
        customLightBlue: '#39A2DA'
      }
    },
  },
  plugins: [],
}

