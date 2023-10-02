/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)"],
        signRiyathi: ["SignRiyathi", "sans-serif"],
      },
      colors: {
        gray: "#f5f5f5",
        font: "#645b65",
      },
    },
  },
  plugins: [],
};
