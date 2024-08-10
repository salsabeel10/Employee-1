/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        first_btn: 'bg-[#6f74f6]',
      },
      fontFamily: {
        sans: ['PT Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

