/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
      preflight: false,
    },
    content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
    // NOTE: It's fixing flickering issue
    important: '#__next',
    theme: {
      extend: {},
    },
    plugins: [],
  }
  