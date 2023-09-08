/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      height:{
        '10v': '10vh',
        '15v': '15vh',
        '20v': '20vh',
        '50v': '50vh',
        '80v': '80vh',
        '90v': '90vh'
      },

      minHeight:{
        '80v': '80vh',
        '90v': '90vh',
      },

      // minWidth:{

      // }

      margin:{
        '40%': '40%'
      },

      backgroundImage:{
        'hero': "url('../src/img/back.jpg')",
        'hero-small': '',
      }
    
    },
  },
  plugins: [],
}

