/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        spacemono: ['"Space Mono"', 'monospace'],
        rubikmono: ['"Rubik Mono One"', 'monospace']
      },
      transitionProperty: {
        'background': 'background-color',
        'text': 'color',
        'all': 'background-color, color' // Ensure all properties you want to transition are included
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
