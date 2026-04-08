/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'blue-brand': '#0a61ae',
        'blue-100-brand': '#e2f8ff',
        'blue-400-brand': '#61dafb',
        'yellow-brand': '#ffda4b',
        'base': '#555',
        'base-100': '#f1f1f1',
        'base-800': '#000',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}

