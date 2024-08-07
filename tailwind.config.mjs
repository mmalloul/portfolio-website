/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				bg: 'var(--color-bg)',
				container: 'var(--color-container-bg)',
				text: 'var(--color-text)',
				accent: 'var(--color-accent)',
				secondary: 'var(--color-secondary)'
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: []
};
