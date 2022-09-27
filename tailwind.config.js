module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#06283D",
          secondary: "#256D85",
          third: "#47B5FF",
          accent: "#DFF6FF",
          neutral: "#2A303C",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
};
