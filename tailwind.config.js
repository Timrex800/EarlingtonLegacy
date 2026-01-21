/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#D97706', // Amber-600
        'npc-blue': '#1E3A8A', // Blue-900
      }
    },
  },
  plugins: [],
}
