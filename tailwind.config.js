/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        rubik : ["'Rubik', sans-serif"],
        mulish : ["'Mulish', sans-serif"],
        poppins : ["'Poppins', sans-serif"]
      },
    },
  },
  plugins: [],
}
