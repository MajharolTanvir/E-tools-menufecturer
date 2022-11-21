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
          accent: "#FFFFFF",
          neutral: "#47B5FF",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
};
