import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Astro Social Share',
			social: {
				github: 'https://github.com/silent1mezzo/astro-social-share',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', slug: 'start-here/getting-started' },
						{ label: 'Advanced Usage', slug: 'start-here/advanced-usage' },
						{ label: 'Demo', slug: 'start-here/demo' },
					],
				},
				{
					label: 'Configuration',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Properties', slug: 'configuration/properties' },
						{ label: 'Slots', slug: 'configuration/slots' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
