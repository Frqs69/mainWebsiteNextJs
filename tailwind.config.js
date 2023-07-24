/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				backgroundColor: "#F9F9F9",
				thirdColor: "#147EFB",
				mainTextColor: "#2D2E32",
				secondTextColor: "#555555",
			},
			boxShadow: {
				"3xl": "0 0 10px 0 rgba(0, 0, 0, 0.1)",
			},
			transitionDuration: {
				11000: "11000ms",
			},
		},
	},
	plugins: [],
};
