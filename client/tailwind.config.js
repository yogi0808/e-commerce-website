/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "p": {
          DEFAULT: "#000000",
          2: "#377DFF"
        },
        "g": "#38CB89",
        "n": {
          1: "#FEFEFE",
          2: "#F3F5F7",
          3: "#E8ECEF",
          4: "#6C7275",
          5: "#343839",
          6: "#232627",
          7: "#141718"
        }
      }
    },
  },
  plugins: [],
}