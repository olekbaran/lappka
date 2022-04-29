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
        "lappka-red": "#FF453A",
        "lappka-light-blue": "#F4F7FE",
        "lappka-pet-grey": "#616161",
      },
      screens: {
        "galaxy-fold": { raw: "(max-width: 329px)" },
        xs: { raw: "(max-width: 390px)" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
