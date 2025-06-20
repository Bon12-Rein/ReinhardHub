/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00CED1',
          dark: '#008B8B',
          light: '#40E0D0'
        },
        secondary: {
          DEFAULT: '#0044CC',
          dark: '#003399'
        },
        accent: '#FF8C00'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00CED1, #0044CC, #FF8C00)'
      }
    },
  },
  plugins: [],
};