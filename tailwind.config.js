/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel Decorative", "serif"],
        cinzelDecorative: ["Cinzel Decorative", "cursive"],
        forum: ["Forum", "serif"],
        Abaddon: ['Abaddon', 'sans-serif'],
      },
      // Add the necessary 3D transform utilities
      transformOrigin: {
        '3d': '50% 50%',
      },
      // Extend the rotate property for the 3D rotation
      rotate: {
        '180': '180deg',
      },
      // Optionally, you can extend scale for the flip effect too
      scale: {
        '110': '1.1',
      },
    },
  },
  plugins: [],
}
