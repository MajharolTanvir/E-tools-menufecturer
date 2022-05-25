module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#a991f7",
          secondary: "#FBBD23",
          third: '#8DE3F6',
          accent: "#3ABFF8",
          neutral: "#2A303C",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui"),
    require('tw-elements/dist/plugin')],
}
