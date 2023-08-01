/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Outfit:['Outfit', 'sans-serif']
    },
    backgroundImage:{
      'vision-bg-mobile': "url('../public/images/vision_bg_mobile.svg')",
      'vision-bg': "url('../public/images/vision_bg.svg')",
      'vision-bg-tablet': "url('../public/images/vision_bg_tablet.svg')",
      'L2': "url('../public/images/L2.svg')",
      'L3': "url('../public/images/L3.svg')",
      'L5': "url('../public/images/L5.svg')",
      'L6': "url('../public/images/L6.svg')",
      'L7': "url('../public/images/L7.svg')",
    }
  },
  plugins: [],
}

