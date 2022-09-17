/* eslint-disable */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8EF1AC',
        social: {
          twitter: '#1DA1F2',
          discord: '#EB459E',
        },
      },
      fontFamily: {
        display: ['Electrolize', 'Arial', 'serif'],
        mono: ['Inconsolata', 'Menlo', 'monospace'],
        pixel: ['VT323 Regular'],
        'pixel-secondary': ['TerminusTTF'],
      },
      animation: {
        'spin-custom': '800ms ease-in-out infinite spin',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
  ],
}
