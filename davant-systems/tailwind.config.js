/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui')
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'yellowtail': ['Yellowtail', 'sans-serif']
      },
    },
  },
  daisyui: {
    themes: [
      "synthwave"
    ]
  }
}
