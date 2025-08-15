/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          500: '#6366f1',   // indigo
          600: '#4f46e5',
        }
      },
      boxShadow: {
        card: '0 10px 22px -12px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
