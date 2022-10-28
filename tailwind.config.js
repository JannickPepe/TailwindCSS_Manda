/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      spacing:{
        "big":"48rem"
      },
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'bounce-short': 'bounce 1s ease-in-out 6',
        'ping-slow': 'ping 2s ease-in-out 2',
      },
      
    }, 
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}