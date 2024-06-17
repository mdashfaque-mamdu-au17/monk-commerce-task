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
        'gray-100': '#D8D8D8',
        'gray-200': '#EFEFEF',
        'gray-300': '#F6F6F6',
        'gray-500': '#D9D9D9',
        'gray-600': '#888888',
        'light-yellow': '#DCF7C5',
        'cream-white': '#FAFAFA',
        'primary-green': '#3BA55D',
      },
      boxShadow: {
        'menu-shadow': '0px 1px 0px 0px #CCCCCC80 inset',
      },
    },
  },
  plugins: [],
};
