/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      white: '#FFFFFF',
      slate: {
        300: '#D5E1EF',
        500: '#68778D',
        900: '#1F314F',
      },
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
    boxShadow: { card: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' },
  },
  plugins: [],
};
