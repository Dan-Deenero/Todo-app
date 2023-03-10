/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          brightBlue: "hsl(220, 98%, 61%)",
          linear1: "hsl(192, 100%, 67%)",
          linear2: "hsl(280, 87%, 65%)"
        },
        lightTheme:{
          VeryLightGray: "hsl(0, 0%, 98%)",
          VeryLightGrayishBlue: "hsl(236, 33%, 92%)",
          LightGrayishBlue: "hsl(233, 11%, 84%)",
          DarkGrayishBlue: "hsl(236, 9%, 61%)",
          VeryDarkGrayishBlue: "hsl(235, 19%, 35%)"
        },
        darkTheme:{
          VeryDarkBlue: "hsl(235, 21%, 11%)",
          VeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
          LightGrayishBlue: "hsl(234, 39%, 85%)",
          LightGrayishBlueHover: "hsl(236, 33%, 92%)",
          DarkGrayishBlue: "hsl(234, 11%, 52%)",
          VeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
          VeryDarkGrayishBlue: "hsl(237, 14%, 26%)",
        }
     },
     fontFamily: {
      'sans': 'Josefin Sans',
    },
    },
  },
  plugins: [],
}
