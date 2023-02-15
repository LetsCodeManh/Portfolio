/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEF9FC",
        secondary: "#B0617F",
        dark: "#0D160B"
      },
    },
  },
  plugins: [],
};
