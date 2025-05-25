// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-playfair-display)', 'serif'],
      },
      animation: { // NEW: Add 'animation' key
        'slow-bounce': 'bounce 2s infinite', // Define 'slow-bounce' using existing bounce keyframes but longer duration
      },
      keyframes: { // Optional: If you wanted to customize the bounce movement itself, you'd redefine keyframes here. For just speed, not needed if using existing 'bounce' keyframes.
        // If you wanted to ensure Tailwind's bounce keyframes are available for your custom animation:
        bounce: { // Re-defining Tailwind's bounce keyframes so our animation can reference them
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // If you're using this
  ],
};