/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {},
    screens: {
      'mob-s': '320px',
      'mob-m': '425px',
      'mob-l': '576px',
      'tab-s': '640px',
      'tab-m': '768px',
      'tab-l': '992px',
      'lap-s': '1024px',
      'lap-m': '1200px',
      'lap-l': '1366px',
      'lap-xl': '1440px',
      'lap-2xl': '1680px',
      'lap-3xl': '1920px',
    },
    colors: {
      green: '#2d5a42',
      black: '#000000',
      white: '#FFFFFF',
      'light-grey': '#4a4949',
      'main-color': '#f6a429',
    },
  },
  plugins: [],
}
