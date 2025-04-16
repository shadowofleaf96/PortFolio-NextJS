/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        second: "#d5c455",
      },
      boxShadow: {
        "ring-glow": "0 0 4px 2px #00FFAB",
        "white-glow": "0 0 4px 2px white",
      },
    },
  },
  plugins: [],
});
