/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5B2C6F',
          dark: '#4A235A',
          light: '#8E44AD'
        },
        secondary: {
          DEFAULT: '#FFA500',
          dark: '#FF8C00'
        },
        accent: '#E74C3C'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #5B2C6F, #8E44AD, #FFA500)'
      }
    },
  },
  plugins: [],
};