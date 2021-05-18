module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      ...boxShadow,
      bottom: {
        right: '5px 5px 6px rgb(0 0 0 / 0.45)',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
