/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/**/*.{ts,jsx,html,js}"],
  theme: {
    extend: {},
    screens: {
      'xxl':{'max':'1600px'},
      'xl': { 'max': '1200px' },
      'lg': { 'max': '991px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '550px' },
      'xsm': { 'max': '357px' },
    }
  },
  plugins: [],
}