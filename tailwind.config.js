const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        screens: {
        'xs': '475px',
        ...defaultTheme.screens,
        },
        fontFamily: {
            'sans': ['"Work Sans"'],
            'body': ['"Work Sans""'],
            'serif': ['"Colon Serif"'],
        },

    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}