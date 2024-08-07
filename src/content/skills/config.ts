import { defineCollection, z } from 'astro:content';

export const skillsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		skills: z.array(
			z.object({
				title: z.string(),
				description: z.string()
			})
		)
	})
});
