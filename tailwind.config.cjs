/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,md,mdx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    // require('./src/tutorials/animated-stripes/01-08-02/stripes-plugin.cjs'),
  ],
}
