/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        secondary: "#78716C",
      },
      fontFamily: {
        inter: ["Inter"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
