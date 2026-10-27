import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['project', 'experience']),
    date: z.string(),
    organization: z.string(),
    location: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

export const collections = { work };
