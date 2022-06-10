const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		fontFamily: {
			sans: ['"Satoshi"', 'sans-serif'],
			title: ['"Clash Grotesk"', 'sans-serif'],
		},
		colors: {
			transparent: colors.transparent,
			gray: colors.gray,
			white: colors.white,
			red: 'red'
		},
		extend: {
		},
	},
	variants: {
		backgroundColor: ['responsive', 'hover', 'active', 'focus'],
		backgroundOpacity: ['responsive', 'hover', 'active', 'focus'],
	},
	plugins: [],
}
