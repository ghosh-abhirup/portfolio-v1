/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        eros: ["Eros-extra", "sans-serif"],
      },
    },
    colors: {
      backgroundColor: "hsl(var(--bg-color))",
      textColor: "hsl(var(--text-color))",
      ...colors,
    },
    screens: {
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
