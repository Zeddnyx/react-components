/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        dropdown: "dropdownAnimate",
      },
      keyframes: {
        dropdownAnimate: {
          "0%": {
            opacity: 0,
            transform: "translateY(-100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      colors: {
        green: "#4E9F51",
        blue: "#1D4ED8",
        red: "#C4180A",
        gray: "#2D3748",
        gray_alt: "#D1D5D8",
        gray_cool: "#F9FaFB",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
