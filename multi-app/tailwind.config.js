/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '.2rem .2rem .4rem rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
}

