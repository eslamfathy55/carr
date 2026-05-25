/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          600: '#dc2626',
          700: '#b91c1c',
        },
        zinc: {
          900: '#18181b',
          950: '#09090b',
        },
      },
    },
  },
  plugins: [],
}
