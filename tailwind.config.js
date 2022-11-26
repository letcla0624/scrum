module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    // screens: {
    //   sm: "576px",
    //   md: "768px",
    //   lg: "992px",
    //   xl: "1200px",
    //   "2xl": "1400px",
    //   "3xl": "1680px",
    // },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          light: "#fff9ba",
          DEFAULT: "#ffac89",
          dark: "#ff7e45",
        },
        secondary: {
          light: "#f2ece9",
          DEFAULT: "#cec8c3",
          dark: "#8d7e73",
        },
      },
      letterSpacing: {
        huge: "3rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
