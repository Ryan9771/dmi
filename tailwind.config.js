/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FEFDE8',
        'secondary': '#003049',
        'header': '#7e0306',
        'link': '#2d2f83',
        'orangy': 'rgb(162, 66, 11)',
        'lblue': '#3f43b2',
        'dark-blue-1': '#222B49',
        'dark-blue-2': '#0B1532',
        'within-button-color': '#A7A7A7',
        'imperial-black': '#141414',
        'imperial-blue': '#0159A5',
        'imperial-gray': '#EBEBEB',
      },
    },
  },
  plugins: [],
}

