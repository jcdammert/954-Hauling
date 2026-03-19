/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1A212D',
          gold: '#F6D25A',
          orange: '#FF8C00',
          gray: '#6A7181',
          light: '#F5F5F0',
        },
      },
      fontFamily: {
        heading: ['"Public Sans"', 'sans-serif'],
        body: ['"Public Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
