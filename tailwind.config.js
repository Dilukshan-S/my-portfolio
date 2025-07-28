/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
    'spin-slow': 'spin 20s linear infinite',
  },
    },
  },
  plugins: [],
}

