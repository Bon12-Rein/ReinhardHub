/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0044CC',
          dark: '#0033A3',
          light: '#3366FF'
        },
        secondary: {
          DEFAULT: '#FF6A00',
          dark: '#CC5500'
        },
        accent: '#333333',
        background: '#FAFAFA'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0044CC, #3366FF, #FF6A00)'
      }
    },
  },
  plugins: [],
};