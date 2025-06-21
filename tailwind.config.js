module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-start": "#261925",
        "gradient-end": "#793060",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
