/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato, sans-serif"],
      },
      boxShadow: {
        top: "0 -0.1px 1px 0",
        bottom: "0 0.1px 1px 0",
      },
    },
  },
  plugins: [],
};
