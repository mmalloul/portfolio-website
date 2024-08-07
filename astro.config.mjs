import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import icon from 'astro-icon';
import node from '@astrojs/node';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	output: 'hybrid',
	integrations: [tailwind(), preact(), icon(), svelte()],
	adapter: node({
		mode: 'middleware'
	})
});
