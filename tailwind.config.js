/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'secondary-black': '#222222',
        'black-500': '#303030',
        'primary-gray': '#8E8E93',
      },
    },
  },
  plugins: [],
};
