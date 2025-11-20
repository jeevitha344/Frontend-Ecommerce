/** @type {import('tailwindcss').Config} */
export default {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {


 colors: {
        blue: '#088178',
        
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
