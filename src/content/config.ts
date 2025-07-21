import { defineCollection, z } from 'astro:content';

// Define the schema for pages
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    keywords: z.union([z.string(), z.array(z.string())]).optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    published: z.date().optional(),
    modified: z.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

// Define the schema for posts
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    keywords: z.union([z.string(), z.array(z.string())]).optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    published: z.date().optional(),
    modified: z.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

// Export the collections
export const collections = {
  'pages': pagesCollection,
  'posts': postsCollection,
};
