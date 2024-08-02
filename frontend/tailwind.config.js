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
        'custom-image-3': "url('/martians-bg.png')",
        'custom-image-4': "url('/journey-bg.png')",
        'custom-image-5': "url('/tarot-bg.png')",
        'custom-image-6': "url('/tarot-bg-lg.png')",
        'custom-image-7': "url('/journey-bg-lg.png')",
        'custom-image-8': "url('/martians-bg-lg.png')"

      }
    },
  },
  plugins: [],
}