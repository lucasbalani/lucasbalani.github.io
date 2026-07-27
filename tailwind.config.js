/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./content.js", "./script.js"],
  theme: {
    extend: {
      colors: {
        dotnet: {
          DEFAULT: "#512BD4",
          light: "#7C4DFF",
        },
        agent: {
          DEFAULT: "#22D3EE",
        },
        surface: {
          DEFAULT: "#0B0E14",
          panel: "#161B22",
          border: "#242B38",
        },
      },
    },
  },
  plugins: [],
};
