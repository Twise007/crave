/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-white": "var(--color-white)",
        "bg-red": "var(--color-red)",
        "bg-sec": "var(--color-sec)",
        "bg-black": "var(--color-black)",
      },
    },
  },
  plugins: [require("daisyui")],
};