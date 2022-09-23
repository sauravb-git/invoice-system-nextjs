/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    screens: {
      xm: "300px",
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    }, 
    extend: {
      colors: {
        mainColor: '#12ACF8', 
      }
  }},
  plugins: [],
}
