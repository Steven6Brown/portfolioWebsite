/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        maxWidth: '1366px',
      },
      colors: {
        'p-green': '#63fc66', // Styling and main colors
        's-blue': '#0073ff', // Styling and main colors
        'bt-grey': '#ADB7BE', // Color used on tab headers and background text such as "Thanks for stopping by"
        'h-black': '#121212', // Background 1
        'd-grey-bg': '#222222', // Background 2
        'e-black': '#18191E', // Email section background
        'e-border': '#33353F', // Email section border
        'e-placeholder': '#9CA2A9', // Email section placeholder "stevenbrown@gmail.com"

        // POSSIBLE IDEAS FOR COLORS:
        //green bg: '#0b1406' 
        //blue bg: '#0e1818'
        //grey bg: '#2A2A2A'
        // dark grey bg: '#222222'
        //light blue bg: '#0f2f2f'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
