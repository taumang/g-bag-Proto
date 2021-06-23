module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing:{
      widest:'1px'
    },
    extend: {
      outline:{
          blue:['1px solid #0000ff','0.5px'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
