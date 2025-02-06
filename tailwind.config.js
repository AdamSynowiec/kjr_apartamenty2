const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "serif"],
        poppins: ["Poppins", "serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".poppins-thin": {
          fontFamily: "Poppins, serif",
          fontWeight: "100",
          fontStyle: "normal",
        },
        ".poppins-thin-italic": {
          fontFamily: "Poppins, serif",
          fontWeight: "100",
          fontStyle: "italic",
        },
        ".poppins-extralight": {
          fontFamily: "Poppins, serif",
          fontWeight: "200",
          fontStyle: "normal",
        },
        ".poppins-extralight-italic": {
          fontFamily: "Poppins, serif",
          fontWeight: "200",
          fontStyle: "italic",
        },
        ".poppins-light": {
          fontFamily: "Poppins, serif",
          fontWeight: "300",
          fontStyle: "normal",
        },
        ".poppins-light-italic": {
          fontFamily: "Poppins, serif",
          fontWeight: "300",
          fontStyle: "italic",
        },
        ".poppins-regular": {
          fontFamily: "Poppins, serif",
          fontWeight: "400",
          fontStyle: "normal",
        },
        ".poppins-regular-italic": {
          fontFamily: "Poppins, serif",
          fontWeight: "400",
          fontStyle: "italic",
        },
        ".poppins-medium": {
          fontFamily: "Poppins, serif",
          fontWeight: "500",
          fontStyle: "normal",
        },
        ".poppins-medium-italic": {
          fontFamily: "Poppins, serif",
          fontWeight: "500",
          fontStyle: "italic",
        },
        ".poppins-semibold": {
          fontFamily: "Poppins, serif",
          fontWeight: "600",
          fontStyle: "normal",
        },
        ".poppins-semibold-italic": {
          fontFamily: "Poppins, serif",
          fontWeight: "600",
          fontStyle: "italic",
        },
        ".poppins-bold": {
          fontFamily: "Poppins, serif",
          fontWeight: "700",
          fontStyle: "normal",
        },
        ".poppins-bold-italic": {
          fontFamily: "Poppins, serif",
          fontWeight: "700",
          fontStyle: "italic",
        },
        ".poppins-extrabold": {
          fontFamily: "Poppins, serif",
          fontWeight: "800",
          fontStyle: "normal",
        },
        ".poppins-extrabold-italic": {
          fontFamily: "Poppins, serif",
          fontWeight: "800",
          fontStyle: "italic",
        },
        ".poppins-black": {
          fontFamily: "Poppins, serif",
          fontWeight: "900",
          fontStyle: "normal",
        },
        ".poppins-black-italic": {
          fontFamily: "Poppins, serif",
          fontWeight: "900",
          fontStyle: "italic",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
