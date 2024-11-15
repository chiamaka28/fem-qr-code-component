/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Slate300: '#D5E1EF',
        Slate500: '#68778D',
        Slate900: '#1F314F',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      boxShadow: { 'custom-light': 'rgba(149, 157, 165, 0.2) 0px 8px 24px' },
    },
  },
  plugins: [],
};
