/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slide: {
         '0%': { opacity: 1 },
          '20%': { opacity: 1 },
          '25%': { opacity: 0 },
          '45%': { opacity: 0 },
          '50%': { opacity: 1 },
          '70%': { opacity: 1 },
          '75%': { opacity: 0 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        'scroll-slow': 'scroll 20s linear infinite',
        'slide': 'slide 10s infinite',
      },
    },
  },
  plugins: [],
}
