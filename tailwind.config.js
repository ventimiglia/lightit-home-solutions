/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#707070',
        'secondary': '#4F4F4F',
        'gray-dark': '#333333',
        'gray-light': '#f7f7f7',
        'gray-medium': '#efefef',
      }
    },
  },
  plugins: [],
}

