/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#30475E",
        secondary: "#F05454",
        tertiary: "#222831",
        quaternary: "#DDDDDD",
      },
    },
  },
  plugins: [],
};
