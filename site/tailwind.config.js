/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {},
    fontFamily: {
      'openSans': ['Open Sans', 'sans-serif'],
      'qanelas':['Qanelas Soft Bold', 'sans-serif'],
      'qanelas-medium':['Qanelas Soft Medium', 'sans-serif']
    }
  },
  plugins: [],
}
