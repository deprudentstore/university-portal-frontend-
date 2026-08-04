/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B2545',
        accent: '#C9973A',
      },
    },
  },
  plugins: [],
};
