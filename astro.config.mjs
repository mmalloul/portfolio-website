import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import icon from 'astro-icon';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), preact(), icon(), svelte()]
});
