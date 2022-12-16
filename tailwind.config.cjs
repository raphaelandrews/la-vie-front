const brandColors = {
  birdBlue: "#1D9BF0",
  onix: "#333639",
  richBlack: "#15202B",
  blackGradient: "linear-gradient(270deg,#09090a,#121214)",
  black: "#121214",
  platinum: "#e1e1e6",
  silver: "#a8a8b3",  
  gray: "#29292e",
  darkPurple: "#514BF7",
  purple: "#6F6AF8",
  ice: '#F8FAFB',
  greyIce: '#F2F2FD',
  purpleBlue:'#1E1957',
  white:'#FFFFFF'
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...brandColors,

        backgroundColor: brandColors.ice,
        textColor: brandColors.purpleBlue
      }
    },
  },
  plugins: [require('flowbite/plugin')],
};
