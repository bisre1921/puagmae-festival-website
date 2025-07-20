/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goldenrod: '#DAA520',
        'transparent-black': 'rgba(0, 0, 0, 0.5)',
        'eerie-black': '#1b1b1b',
        'ghost-white': '#f8f8ff',
        'vampire-black': '#080808',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
