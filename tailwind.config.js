const {guessProductionMode} = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? "build" : "watch";

module.exports = {
    prefix: "",
    mode: "jit",
    purge: {
        content: ["./src/**/*.{html,ts,css,scss,sass,less,styl}"],
    },
    darkMode: "class", // or 'media' or 'class'
    theme: {
        minHeight: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
        },
        extend: {
            fontFamily: {
                poppins: ["Poppins"],
            },
            colors: {
                'first': '#FFFFFF',
                'second': '#1E1E2D',
                'third': '#EBEDF3',
                'forth': '#1A1A27',
                'success': '#5CB85C',
                'warning': '#F0AD4E',
                'danger': '#D9534F',
                'transparent': 'transparent',
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
