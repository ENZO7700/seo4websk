import { z } from 'zod';

// Define the schema for the structured SEO data we want to extract.
export const PageSeoData = z.object({
  title: z.string().describe('The title of the page.'),
  description: z.string().describe('The meta description of the page.'),
  headings: z.array(z.object({
    level: z.enum(['H1', 'H2', 'H3', 'H4', 'H5', 'H6']),
    text: z.string(),
  })).describe('The heading structure of the page.'),
});
export type PageSeoData = z.infer<typeof PageSeoData>;
