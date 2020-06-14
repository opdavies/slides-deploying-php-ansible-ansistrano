const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  purge: [
    './slides.md'
  ],
  theme: {
    extend: {
      fontFamily: {
        "mono": [
          'Operator Mono Book',
          ...defaultTheme.fontFamily.mono
        ]
      }
    }
  },
  variants: {},
  plugins: []
}
