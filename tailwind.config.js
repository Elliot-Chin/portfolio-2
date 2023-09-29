/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
          'inclusive-sans': ['Inclusive Sans', 'sans-serif'],
          'lato': ['Lato', 'sans-serif'],
          'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
      },
      textColor: {
        'default': '#ffffff',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
