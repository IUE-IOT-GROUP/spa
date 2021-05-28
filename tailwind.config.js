const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? "build" : "watch";

module.exports = {
  prefix: "",
  mode: "jit",
  purge: {
    content: ["./src/**/*.{html,ts,css,scss,sass,less,styl}"],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        450: "450px",
      },
      opacity: {
        2: "0.02",
      },
      colors: {
        primary: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-primary), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--color-primary), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--color-primary))`;
        },
        "form-control": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-form-control), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--color-form-control), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--color-form-control))`;
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      outline: ["focus"],
      appearance: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
