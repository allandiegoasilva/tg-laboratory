/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9fef00',
        secondary: '#a4b1cd'
      }
    },
    fontFamily: {
      'satisfy': ['Bebas Neue', 'sans-serif'],
      'prompt': ['Prompt', 'sans-serif'],
<<<<<<< HEAD
      'secular': ['Secular One', 'sans-serif']
=======
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845
    }
  },
  plugins: [],
}