import { defineCollection, z } from 'astro:content';

// Pages collection - markdown content for main site pages
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.boolean().default(true),
    lastUpdated: z.date().optional(),
  }),
});

// Data collections - JSON data for structured content
const hoursCollection = defineCollection({
  type: 'data',
  schema: z.object({
    dayOfWeek: z.string(),
    openTime: z.string(),
    closeTime: z.string(),
    isClosed: z.boolean().default(false),
    notes: z.string().optional(),
  }),
});

const teamCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const brandsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    category: z.enum(['paint', 'tools', 'weathering', 'primer', 'other']),
    productLines: z.array(z.string()).optional(),
    description: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  pages: pagesCollection,
  hours: hoursCollection,
  team: teamCollection,
  brands: brandsCollection,
};
