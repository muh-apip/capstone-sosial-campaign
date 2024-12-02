/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'custom-green': '#4caf50', 
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [require("preline/plugin")],
};
