/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'full': '100% 100%',
        'full-height': 'auto 100%',
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
  darkMode: 'class',
}
