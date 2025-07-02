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
          DEFAULT: '#00CCA4',
          dark: '#00B894'
        },
        accent: '#FF8C00'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #008080, #00CCA4, #FF8C00)'
      }
    },
  },
  plugins: [],
};