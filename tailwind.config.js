/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        "lato":"Lato"
      },
      borderRadius: {
        '6xl': '240px 240px 0 0',
      },
    },
  },
  plugins: [],
}

