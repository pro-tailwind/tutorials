/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,md,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/container-queries')],
}
