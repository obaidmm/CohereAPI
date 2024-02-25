/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flyFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        flyFromBottom: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        appear: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        },
      },
      animation: {
        flyFromLeft:'flyFromLeft', // Use "forwards" to retain the final state
        appear:'appear',
        slideDown:'slideDown',
        flyFromBottom: 'flyFromBottom'
      }
    },
  },
  plugins: [],
}
