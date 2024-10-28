/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: { iconLightGray: "#a3abb8" , iconHoverColor:"#ff1f59" },
      backgroundColor:{customDarkBgColor:"#2c1944",customActiveBgColor:"#ececec"}
    },
  },
  plugins: [],
};
