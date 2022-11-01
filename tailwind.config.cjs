/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
