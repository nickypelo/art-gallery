/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        '10v': '10vh',
        '20v': '20vh',
        '50v': '50vh',
        '80v': '80vh',
        '90v': '90vh'
      },
      
    
    },
  },
  plugins: [],
}

