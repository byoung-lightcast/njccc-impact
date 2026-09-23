/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        njBlue: '#003366',
        njGold: '#FFB81C',
        njGreen: '#007A5E',
      }
    },
  },
  plugins: [],
};