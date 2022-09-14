/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '12px',
      
    },
    extend: {
      colors:{
        primary: '#00A7EB',
        dark: '#0f172a',
        secondary: '#254A5C',
      },
      screens:{
        '2xl':'1320px',
      },
      fontFamily:{
        root : 'Fredoka'
      }
    },
  },
  plugins: [],
}
