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
      {
        synthwave: {
          ...require("daisyui/src/theming/themes")["synthwave"],
          primary: "hsl(309, 80%, 41%)",
          secondary: "hsl(187, 90%, 50%)",
          warning: "hsl(40, 100%, 67%)",
          "base-100": "hsl(270, 60%, 5%)"
        },
      },
    ]
  }
}
