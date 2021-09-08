module.exports = {
  purge: ['./pages/**/*.{tsx}', './components/**/*.{tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      "kaushan": ['Kaushan Script'],
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#00f260'
        },
        black:{
            DEFAULT: '#010101',
            100: '#0a0b1e',
            200: '#16181d',
            500: '#0f1115',
            700: '#202125'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
