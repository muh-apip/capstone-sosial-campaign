import { createRequire } from "module";
const require = createRequire(import.meta.url);
const preline = require("preline/plugin");

/** @type {import('tailwindcss').Config} */
const config = {
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
        'primary-green': '#5FBA63',
        'secondary-green': '#83C985',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [preline],
};

export default config;
