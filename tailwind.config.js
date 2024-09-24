/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rotateImage: 'rotateImage 1s infinite',
      },
      keyframes: {
        rotateImage: {
          '0%': { transform: 'rotate3d(0, 0, 0, 0deg)' },
          '100%': { transform: 'rotate3d(0, 0, 1, 360deg)' },
        },
      },
    },
  },
  plugins: [],
};