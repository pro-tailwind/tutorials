/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,md,mdx}'],
  theme: {
    extend: {
      width: {
        'square-diagonal': (Math.sqrt(2) * 100).toFixed(2) + '%',
      },
    },
  },
  plugins: [],
}
