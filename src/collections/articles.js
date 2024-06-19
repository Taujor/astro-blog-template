import { z, defineCollection } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    image: z.object({
        url: z.string(),
        alt: z.string().optional()
    }).optional(),
    tags: z.array(z.string()).optional()
  }),
});

export default articles