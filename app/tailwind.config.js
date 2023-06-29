/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pgreen: '#1FCB64',
        pgrey: '#3E3E3E',
        plightBlack: '#1D1D1D',
        plightGrey: '#989898',
      },
      spacing: {
        '7px': '7px',
        '8px': '8px',
        '30px': '30px',
        '150px': '150px',
        '329px': '329px',
      },
    },
  },
  plugins: [],
};
