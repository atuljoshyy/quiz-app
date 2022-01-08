module.exports = {
  purge: [],
  content: ["./src/**/*.{html,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-green': '#218380',
        'light-green':'#C0FCF9',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
