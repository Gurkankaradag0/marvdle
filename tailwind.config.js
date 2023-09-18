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
            'text-shadow': '0px 16px 16px #7a69a6'
        }
    })
})

module.exports = {
    mode: 'jit',
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
            }
        }
    },
    plugins: [textShadow, tailwindScrollbar]
}
