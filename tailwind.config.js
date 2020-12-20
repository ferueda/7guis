module.exports = {
  purge: ['./src/**/*.js', './src/**/*.tsx', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        modalOverlay: 'rgba(0, 0, 0, 0.5)',
      },
    },
    maxWidth: {
      15: '15rem',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      borderColor: ['active'],
    },
  },
  plugins: [],
};
