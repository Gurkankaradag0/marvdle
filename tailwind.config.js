/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'
import tailwindScrollbar from 'tailwind-scrollbar'

const textShadow = plugin(({ addUtilities }) => {
    addUtilities({
        '.text-shadow-backdrop': {
            'text-shadow':
                '2px 0 #030309, -2px 0 #030309, 0 2px #030309, 0 -2px #030309, 1px 1px #030309, -1px -1px #030309, 1px -1px #030309, -1px 1px #030309'
        },
        '.text-shadow-black-md': {
            'text-shadow': '0px 0px 4px #000'
        },
        '.text-shadow-404': {
            'text-shadow': '0px 16px 16px #e62429'
        }
    })
})

module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                marvel: {
                    black: '#151515',
                    red: '#e62429',
                    yellow: '#c6a972',
                    blue: '#076dfd',
                    gray: '#767676'
                },
                fg: {
                    primary: 'white',
                    secondary: '#cccccc'
                },
                bg: {
                    primary: 'white',
                    secondary: 'rgb(229,29,36,.5)'
                }
            },

            animation: {
                loader: 'loader 5s ease-in-out 1s infinite'
            },

            keyframes: {
                loader: {
                    '0%': {
                        top: '0%',
                        left: '0%',
                        backgroundColor: '#c7e7fb'
                    },
                    '25%': {
                        top: '0%',
                        left: '-100%',
                        backgroundColor: '#e25530'
                    },
                    '50%': {
                        left: '-100%',
                        top: '-100%',
                        backgroundColor: '#fdd201'
                    },
                    '75%': {
                        top: '-100%',
                        left: '0%',
                        backgroundColor: '#fa4222'
                    },
                    '100%': {
                        top: '0%',
                        left: '0%',
                        backgroundColor: '#c7e7fb'
                    }
                }
            }
        }
    },
    plugins: [textShadow, tailwindScrollbar]
}
