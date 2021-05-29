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
      spacing: {
        'login': '450px',
      },
      opacity: {
        '1': '0.01',
        '2': '0.02',
        '3': '0.03',
        '4': '0.04',
      },
      colors: {
        primary: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-primary), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--color-primary), var(${opacityVariable}, 1))`
          }
          return `rgb(var(--color-primary))`
        },
        secondary: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-secondary), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--color-secondary), var(${opacityVariable}, 1))`
          }
          return `rgb(var(--color-secondary))`
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
