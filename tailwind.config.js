/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px"
      },
      colors: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        "very-dark-cyan": "hsl(156, 42%, 18%)",
        "cream": "hsl(30, 38%, 92%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "serif"]
      }
    },
  },
  plugins: [],
}
