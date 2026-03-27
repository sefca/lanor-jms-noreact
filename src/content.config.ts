import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const authorsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/authors" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string().optional(),
    avatar: z.string().optional(),
    link: z.string().optional(),
  }),
});

const updatesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/updates" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    author: reference('authors'),
    image: z.string().optional(),
    category: z.string().optional(),
  }),
});

export const collections = {
  'updates': updatesCollection,
  'authors': authorsCollection,
};
