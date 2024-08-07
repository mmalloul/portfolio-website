import { defineCollection, z } from 'astro:content';

export const projectsCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			image: image(),
			problemStatement: z.string().optional(),
			solution: z.string().optional(),
			outcome: z.string().optional(),
			features: z.array(z.string()).optional(),
			technologies: z.array(z.string()).optional(),
			galleryImages: z.array(image()).optional(),
			testimonial: z
				.object({
					quote: z.string(),
					author: z.string()
				})
				.optional(),
			github: z.string().optional(),
			gitlab: z.string().optional(),
			website: z.string().optional()
		})
});
