module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "lappka-green": "#43BE8D",
        "lappka-primary-grey": "#232233",
        "lappka-secondary-grey": "#D8D8D8",
        "lappka-light-grey": "#77838F",
        "lappka-dark-grey": "#1E2022",
        "lappka-white": "#FFFFFF",
        "lappka-dark-white": "#F6F6F6",
      },
      screens: {
        "galaxy-fold": { raw: "(max-width: 329px)" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
