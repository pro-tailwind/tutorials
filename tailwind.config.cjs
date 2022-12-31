/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,md,mdx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/container-queries')],
}
