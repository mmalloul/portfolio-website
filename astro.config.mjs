import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import icon from 'astro-icon';
import svelte from '@astrojs/svelte';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: import.meta.env.SITE_URL ? import.meta.env.SITE_URL : 'https://mmalloul.com',
	integrations: [tailwind(), preact(), icon(), svelte(), sitemap()]
});
