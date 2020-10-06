const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'spin-bezier': 'spin 0.7s cubic-bezier(0, 0, 0.30, 0.70) infinite',
      },
      boxShadow: {
        selected: "0 0 0 2px theme('colors.red.600')",
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover', 'focus-within'],
  },
  plugins: [require('@tailwindcss/ui')],
}
