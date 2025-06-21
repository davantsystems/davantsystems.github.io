/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				'orbitron': ['Orbitron', 'sans-serif'],
				'yellowtail': ['Yellowtail', 'sans-serif'],
				'open-sans': ['Open Sans', 'sans-serif'],
			},
			fontSize: {
				xs: ['0.75rem', '1.3'],
				sm: ['0.875rem', '1.3'],
				base: ['1rem', '1.5'],
				lg: ['1.125rem', '1.3'],
				xl: ['1.125rem', '1.3'],
				'2xl': ['1.5rem', '1.3'],
				'3xl': ['1.875rem', '1.3'],
				'4xl': ['2.25rem', '1.3'],
			},
			colors: {
				'base-100': 'oklch(0.138999 0.036212 306.761881 / 1)',
				'base-200': 'oklch(0.129269 0.033571 306.761881 / 1)',
				'base-300': 'oklch(0.119539 0.031142 306.761881 / 1)',
			},
			backgroundImage: {
				'radial-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
			}
		},
	},
	plugins: [
		typography,
		daisyui
	],
}
