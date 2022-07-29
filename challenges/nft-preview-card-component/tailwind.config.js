/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "soft-blue": "hsl(215, 51%, 70%)",
        "cyan": "hsl(178, 100%, 50%)",
        "dark-blue": {
          DEFAULT: "hsl(217, 54%, 11%)",
          card: "hsl(216, 50%, 16%)",
          line: "hsl(215, 32%, 27%)"
        }
      },
      fontFamily: {
        outfit: ["Outfit", "serif"]
      },
      boxShadow: {
        "card": "0 0 45px hsl(217deg 54% 11%), 0 0 35px hsl(217deg 54% 9%), 0 0 20px hsl(217deg 54% 6%)"
      }
    },
  },
  plugins: [],
}
