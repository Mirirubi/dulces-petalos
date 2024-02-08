/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      harp: "#deede1",
      wheatfield: "#f2f0ca",
      manz: "#e9ed68",
      mossGreen: "#b3dca3",
      celery: "#a6c856",
      tradewind: "#50b99a",
      caribeanGreen: "#00bda4",
      paradiso: "#2e7f71",
      teal: "#008a7c",
      blueStone: "#005c4e",
      firefly: "#14433b",
    },
  },
  plugins: [],
};
