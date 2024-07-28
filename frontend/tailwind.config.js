/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'comorant': ['Comorant', 'serif']
      },
      backgroundImage: {
        'custom-image-1': "url('/wands-bg.png')",
        'custom-image-2': "url('/wands-bg-2.png')",
      }
    },
  },
  plugins: [],
}