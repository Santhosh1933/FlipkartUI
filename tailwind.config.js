/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue':'#2874f0',
        'yellow':'#e5cc25',
        'gray':'#f1f3f6',
        'green':'#388e3c',
        'secondaryGray':'#878787',
        'footer':'#172337',
      }
    },
  },
  plugins: [],
}