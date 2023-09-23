/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dustRed: "#F5222D",
        redHover: "#F5222D",
        headingColor: "rgba(0, 0, 0, 0.85)",
        textcolor: "rgba(0, 0, 0, 0.65)",
        textcolorsecondary: "rgba(0, 0, 0, 0.45)",
        grey1: "#FFFFFF",
        grey4: "#BDBDBD",
        grey5: "#D9D9D9",
        grey8: "#595959",
        grey9: "#262626",
        cream: "#F0F2F5",
        tableheader: "rgba(0, 0, 0, 0.02)",
        transition: "rgba(0, 0, 0, 0.1)",
      },
      inter: "'Inter', 'serif'",
      roboto: "'Roboto', 'serif'",
    },
  },
  plugins: [],
}

