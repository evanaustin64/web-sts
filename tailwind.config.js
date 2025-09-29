// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica-light': ['var(--font-helvetica-light)', 'Arial', 'sans-serif'],
        'helvetica-regular': ['var(--font-helvetica-regular)', 'Arial', 'sans-serif'],
        'helvetica-black': ['var(--font-helvetica-black)', 'Arial', 'sans-serif'],
        'helvetica-black-oblique': ['var(--font-helvetica-black-oblique)', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}