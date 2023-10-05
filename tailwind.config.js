/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'lg': '0 4px 3px #D4B754',
      },
      colors:{
        tera : "#E85738",
        gold : "#D4B754"
      }
    },
  },
  plugins: [],
}

