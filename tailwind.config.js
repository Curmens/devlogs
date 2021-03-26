const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            primary: colors.red,
            blue: colors.lightBlue,
            dark: colors.black,
            pink: colors.fuchsia,
        },

        backgroundColor: {
            'primary': '#070B0D',
            'secondary': '#2069e0',
            'danger': '#222831',
        },

        textColor: {
            'primary': '#ffffff',
            'info': '#c8e1ff',
            'secondary': '#070B0D',
            'danger': '#2069e0',
            'danger-500': '#c8e1ff',
        },

        fontFamily: {
            'display': ['Roboto', 'Space Mono', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],        
            'body': ['Roboto', 'Space Mono', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        },
        extend: {
            textColor: ['active'],
            fontFamily: ['active'],
            colors: ['active'],
        },
    },
    variants: {},
    plugins: [],
    }