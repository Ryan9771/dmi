/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "mdl": '820px',
      },
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
        'button-gray': '#F3F4F6',
        'background': '#F0F5F7',
        'imperial-red': '#A41A00',
        'subtle-black': "#1E1E1E",
        'header-blue': "#002146",
        "pillar-1": '#572259',
        "pillar-2": '#74C2FC',
        "pillar-3": '#B5DB61',
        "pillar-4": '#8E319C',
        "pillar-5": '#636463', 
        
      },
      width: {
        '96': '96%',
      },
      fontFamily: {
        'sans': ["Imperial", "sans-serif"],
      }
    },
  },
  plugins: [],
}

