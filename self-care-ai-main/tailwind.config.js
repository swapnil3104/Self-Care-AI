/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'selfcare-green-light': '#D6F2C1', // The pale green background curve
        'selfcare-green-main': '#4CAF50', // The logo and main text color
        'selfcare-blue': '#40C0F0', // A potential accent color (though not heavily used in text, good for links/buttons)
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
}