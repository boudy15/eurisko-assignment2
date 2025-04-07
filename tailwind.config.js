/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // 🔥 required!
  theme: {
    extend: {
      colors: {
        primary: "#3251D0", // your custom primary color
      },
    },
  },
  plugins: [],
};
