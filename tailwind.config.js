/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": "0px 10px 30px 0px rgba(141, 114, 32, 0.05)",
      },
    },
  },
  plugins: [],
}