/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        scroll: "scroll 2s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        scroll: {
          "0%": {
            transform: "translateY(0)",
            opacity: "0",
          },
          "30%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(0.75rem)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
}
