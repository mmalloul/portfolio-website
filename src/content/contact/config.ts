import { defineCollection, z } from 'astro:content';

export const contactCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		socialMediaTitle: z.string(),
		contactMethods: z.array(
			z.object({
				title: z.string(),
				value: z.string(),
				action: z.string(),
				link: z.string(),
				description: z.string()
			})
		),
		socialLinks: z.array(
			z.object({
				platform: z.string(),
				url: z.string(),
				icon: z.string()
			})
		)
	})
});
