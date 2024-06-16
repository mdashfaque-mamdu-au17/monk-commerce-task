/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'secondary-black': '#222222',
        'black-500': '#303030',
        'light-gray': '#F5F7FB',
        'primary-gray': '#8E8E93',
        'gray-500': '#D9D9D9',
        'light-yellow': '#DCF7C5',
        'cream-white': '#FAFAFA',
        'primary-green': '#3BA55D',
      },
    },
  },
  plugins: [],
};
