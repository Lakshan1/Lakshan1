/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#F5A623',
        secondary: '#2A2A3B',
        tertiary: '#1F1F2C',
        'bg-primary': '#2A2A3B',
        'bg-secondary': '#1F1F2C',
        'bg-light': '#F7F7F9',
        'text-light': '#FFFFFF',
        'text-muted': '#A4A4B5',
        'text-dark': '#1A1A1A',
      }
    },
  },
  plugins: [],
} 