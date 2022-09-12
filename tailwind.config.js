/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.65rem',
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-green-500',
    'bg-yellow-500',
  ]
};
