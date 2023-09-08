/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
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

      maxWidth:{
        '80w': '900px',
      },

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

