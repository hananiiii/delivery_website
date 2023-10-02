/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        title_color :'#1E1E1E',
        red:'#EA2C2D',
        yellow:'#FECD0E',
        text_color:'#CFCDCB',
        text:'#F3E9E9',
        body_color:'#f7fafc',
      },
      fontFamily: {
        font: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

