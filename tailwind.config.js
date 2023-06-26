/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html", "./src/*.{jsx, js, tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', // Slow upward movement
          },
          '50%': {
            transform: 'translateY(-10px)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 0.6, 1)', // Fast downward drop
          },
        },
      },
    },
  },
  plugins: [],
}

