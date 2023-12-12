/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'HankenGrotesk':['Hanken Grotesk']
			},
			colors:{
				'Light-red': 'hsl(0, 100%, 67%)',
				'Light-red-alpha': 'hsla(0, 100%, 67%, 0.1)',
				'Orangey-yellow': 'hsl(39, 100%, 56%)',
				'Orangey-yellow-alpha': 'hsl(39, 100%, 56%, 0.1)',
				'Green-teal': 'hsl(166, 100%, 37%)',
				'Green-teal-alpha': 'hsl(166, 100%, 37%, 0.1)',
				'Cobalt-blue': 'hsl(234, 85%, 45%)',
				'Cobalt-blue-alpha': 'hsl(234, 85%, 45%, 0.1)',

				'Light-slate-blue' : 'hsl(252, 100%, 67%)',
				'Light-slate-blue-alpha' : 'hsl(252, 100%, 67%, 0.1)',

				'Light-royal-blue' : 'hsl(241, 81%, 54%)',
				'Light-royal-blue-alpha' : 'hsl(241, 81%, 54%, 0.1)',


				'Violet-blue' : 'hsla(256, 72%, 46%, 1)',
				'Persian-blue' : 'hsla(241, 72%, 46%, 0)',

				'Pale-blue': 'hsl(221, 100%, 96%)',
				'Pale-blue-alpha': 'hsl(221, 100%, 96%, 0.1)',

				'Light-lavender': 'hsl(241, 100%, 89%)',
				'Light-lavender-alpha': 'hsl(241, 100%, 89%, 0.1)',

				'Dark-gray-blue': 'hsl(224, 30%, 27%)',
				'Dark-gray-blue-alpha': 'hsl(224, 30%, 27%, 0.5)',
				'blue-video': '#2f8ac6',
			}
		},
	},
	plugins: [],
}
