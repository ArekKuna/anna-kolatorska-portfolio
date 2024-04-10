/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        didactGothic: ["var(--font-didact-gothic)"],
        jomhuria: ["var(--font-jomhuria)"],
        koHo: ["var(--font-koHo)"],
      },
    },
  },
  plugins: [],
};
