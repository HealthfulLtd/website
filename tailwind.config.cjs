module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography')
	],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
			serif: ['Lora', 'serif']
		}
	}
};
