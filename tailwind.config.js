/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      keyframes: {
        rotate360: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(-360deg)' }
        }
      },
      animation: {
        rotate360: 'rotate360 60s infinite forwards linear'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("@xpd/tailwind-3dtransforms"),
  ],
}

