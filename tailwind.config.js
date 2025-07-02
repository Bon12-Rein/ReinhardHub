/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#008080',
          dark: '#006666',
          light: '#00A0A0'
        },
        secondary: {
          DEFAULT: '#FF8C00',
          dark: '#E67E00'
        },
        accent: '#00CCA4'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #008080, #FF8C00, #00CCA4)'
      }
    },
  },
  plugins: [],
};