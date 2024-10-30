/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: { iconLightGray: "#a3abb8", iconHoverColor: "#ff1f59" },
      backgroundColor: {
        customDarkBgColor: "#2c1944",
        customActiveBgColor: "#ececec",
      },
    },
  },
  plugins: [],
};
