module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#a991f7",
          secondary: "#FBBD23",
          accent: "#3ABFF8",
          neutral: "#2A303C",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
