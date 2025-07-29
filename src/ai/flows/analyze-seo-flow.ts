'use server';
/**
 * @fileOverview An AI flow to analyze a webpage for SEO effectiveness.
 *
 * - analyzeSeo - A function that handles the SEO analysis process.
 * - AnalyzeSeoInput - The input type for the analyzeSeo function.
 * - AnalyzeSeoOutput - The return type for the analyzeSeo function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { getPageContent } from '@/services/scraperService';

const AnalyzeSeoInputSchema = z.object({
  url: z.string().url().describe('The URL of the webpage to analyze.'),
});
export type AnalyzeSeoInput = z.infer<typeof AnalyzeSeoInputSchema>;

const AnalyzeSeoOutputSchema = z.object({
  title: z.string().describe('The title of the page.'),
  description: z.string().describe('The meta description of the page.'),
  headings: z.array(z.object({
    level: z.enum(['H1', 'H2', 'H3', 'H4', 'H5', 'H6']),
    text: z.string(),
  })).describe('An analysis of the heading structure (H1, H2, etc.).'),
  analysis: z.string().describe("A concise analysis of the page's on-page SEO, including strengths, weaknesses, and suggestions for improvement. Use markdown for formatting, like lists and bold text."),
  score: z.number().min(0).max(100).describe("An overall SEO score for the page, from 0 to 100."),
});
export type AnalyzeSeoOutput = z.infer<typeof AnalyzeSeoOutputSchema>;


export async function analyzeSeo(input: AnalyzeSeoInput): Promise<AnalyzeSeoOutput> {
  return analyzeSeoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeSeoPrompt',
  input: { schema: z.object({ pageContent: z.string() }) },
  output: { schema: AnalyzeSeoOutputSchema },
  prompt: `You are an expert SEO auditor.
Analyze the following HTML content of a webpage and provide a detailed on-page SEO analysis.

HTML Content:
\`\`\`html
{{{pageContent}}}
\`\`\`

Based on the content, provide the following:
1.  **Page Title**: Extract the content of the <title> tag.
2.  **Meta Description**: Extract the content of the <meta name="description"> tag.
3.  **Headings**: Analyze the heading structure (H1, H2, H3, etc.). List the text of each heading.
4.  **Analysis**: Provide a concise but detailed analysis covering the strengths and weaknesses of the on-page SEO. Include suggestions for improvement. Use markdown for formatting.
5.  **Score**: Give an overall SEO score from 0 to 100, where 100 is perfectly optimized.

Focus on on-page elements like title, meta description, heading structure, and keyword opportunities based on the visible text. Do not comment on off-page factors like backlinks or domain authority.
`,
});


const analyzeSeoFlow = ai.defineFlow(
  {
    name: 'analyzeSeoFlow',
    inputSchema: AnalyzeSeoInputSchema,
    outputSchema: AnalyzeSeoOutputSchema,
  },
  async (input) => {
    const pageContent = await getPageContent(input.url);
    if (!pageContent) {
      throw new Error('Could not fetch content from the provided URL.');
    }
    const { output } = await prompt({ pageContent });
    return output!;
  }
);
