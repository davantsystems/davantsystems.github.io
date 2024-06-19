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
        'yellowtail': ['Yellowtail', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', '1.3'],
        sm: ['0.875rem', '1.3'],
        base: ['1rem', '1.5'],
        lg: ['1.125rem', '1.3'],
        xl: ['1.125rem', '1.3'],
        '2xl': ['1.5rem', '1.3'],
        '3xl': ['1.875rem', '1.3'], 
        '4xl': ['2.25rem', '1.3'],
        '5xl': ['3rem', '1.2'],
        '6xl': ['3.75rem', '1.2'],
        '7xl': ['4.5rem', '1.1'],
        '8xl': ['6rem', '1.1'],
        '9xl': ['8rem', '1.0'],
      }
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
          "base-100": "hsl(270, 60%, 5%)",
          "okay": "hsl(120, 100%, 67%)",
        },
      },
    ],
  }
}
