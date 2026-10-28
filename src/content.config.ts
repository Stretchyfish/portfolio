import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    tags: z.array(z.string().min(1)).min(1),
    cover: z.string().optional(),
  }),
});

export const collections = { work };
