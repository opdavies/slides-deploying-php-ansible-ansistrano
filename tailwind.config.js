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
          'Operator Mono',
          ...defaultTheme.fontFamily.mono
        ]
      }
    }
  },
  variants: {},
  plugins: []
}
