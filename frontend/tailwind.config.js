/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#000000",
          "secondary": "#000000",
          "accent": "#000000",
          "neutral": "#000000",
          "base-100": "#000000", // Set background color to black
          "info": "#000000",
          "success": "#000000",
          "warning": "#000000",
          "error": "#000000",
        },
      },
    ],
  },
}
