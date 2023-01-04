const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, addComponents, addUtilities }) {
  addBase({
    // Setting default stripe options
    ':root': {
      '--stripes-color': 'black',
      '--stripes-angle': '-45deg',
    },
    // Keyframe animations
    '@keyframes slide': {
      from: { transform: 'translateX(0)' },
      to: { transform: 'translateX(20px)' },
    },
  })

  addComponents({
    '.stripes': {
      position: 'relative',
      overflow: 'hidden',
    },
    '.stripes > *': {
      isolation: 'isolate',
    },
    '.stripes:before': {
      position: 'absolute',
      top: '0',
      right: '0',
      height: '100%',
      width: 'calc(100% + 20px)',
      content: "''",
      backgroundImage: `linear-gradient(
          var(--stripes-angle),
          var(--stripes-color) 5%,
          transparent 5% 45%,
          var(--stripes-color) 45% 55%,
          transparent 55% 95%,
          var(--stripes-color) 95%)`,
      backgroundSize: '20px 20px',
      animation: 'slide 1s infinite linear',
    },
  })

  addUtilities({
    '.stripes-white': {
      '--stripes-color': 'white',
    },
    '.stripes-reverse': {
      '--stripes-angle': '45deg',
    },
  })
})
