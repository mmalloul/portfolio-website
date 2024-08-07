import { defineCollection, z } from 'astro:content';

export const aboutCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			name: z.string(),
			role: z.string(),
			image: image()
		})
});
