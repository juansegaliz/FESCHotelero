/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      flexGrow: {
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: true,
    styled: true,
    themes: [ "emerald" ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
