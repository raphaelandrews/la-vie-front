const brandColors = {
  birdBlue: "#1D9BF0",
  onix: "#333639",
  richBlack: "#15202B",
  blackGradient: "linear-gradient(270deg,#09090a,#121214)",
  black: "#121214",
  platinum: "#e1e1e6",
  silver: "#a8a8b3",  
  gray: "#29292e",
  darkPurple: "#2c4bf6",
  purple: "#4863f7",
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...brandColors,

        backgroundColor: brandColors.blackGradient,
        textColor: brandColors.platinum
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}