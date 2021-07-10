const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: 'orange',
      white: 'wheat',
      blue:'navajowhite',
      gray: '#525252',
      hulu: '#06202A',
      hulu_:'#020D11'
    },
    extend: {
      screens: {
        "3xl": "2000px",
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
      textColor: ['active'],
      transitionProperty: ['hover', 'focus', 'group-hover'],
      transitionDuration: ['hover', 'group-hover'],
      fontWeight: ['group-hover'],
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
    padding: ['responsive', 'hover', 'last'],
  },
  plugins: [require('tailwind-scrollbar-hide')],
  future: {
    purgeLayersByDefault: true,
  },
}