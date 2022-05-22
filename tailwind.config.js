module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyUi: {
    themes: [
      {
        myTheme: {
          primary: "#6419E6",
          secondary: "#1FB2A6",
          accent: "#3ABFF8",
          neutral: "#191D24",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
