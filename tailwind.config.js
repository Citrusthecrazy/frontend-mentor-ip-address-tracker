/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        headerImage: "url(./assets/pattern-bg.png)",
        searchArrowImage: "url(./assets/icon-arrow.svg)",
      },
      colors: {
        veryDarkGray: "hsl(0, 0%, 17%)",
        darkGray: "hsl(0, 0%, 59%)",
      },
      screens: {
        xs: "375px",
        md: "768px",
      },
    },
  },
  plugins: [],
};
