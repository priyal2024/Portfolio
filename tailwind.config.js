/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const MyClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)"
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px"
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    }
  })
})
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [MyClass],
};
