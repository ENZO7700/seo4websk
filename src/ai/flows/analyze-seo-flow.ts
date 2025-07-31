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
import { getPageSeoData } from '@/services/scraperService';
import { PageSeoData } from '@/types/seo';

const AnalyzeSeoInputSchema = z.object({
  url: z.string().url().describe('The URL of the webpage to analyze.'),
});
export type AnalyzeSeoInput = z.infer<typeof AnalyzeSeoInputSchema>;

// The output now includes the extracted data directly, which will be passed through from the scraper.
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
  // The prompt input is now the structured SEO data, not the full HTML.
  input: { schema: PageSeoData },
  // The output schema for the analysis part.
  output: { schema: z.object({
      analysis: z.string().describe("A concise analysis of the page's on-page SEO, including strengths, weaknesses, and suggestions for improvement. Use markdown for formatting, like lists and bold text."),
      score: z.number().min(0).max(100).describe("An overall SEO score for the page, from 0 to 100."),
  })},
  prompt: `You are an expert SEO auditor.
Analyze the following on-page SEO data from a webpage.

- **Page Title**: "{{{title}}}"
- **Meta Description**: "{{{description}}}"
- **Heading Structure**:
{{#each headings}}
  - {{this.level}}: {{this.text}}
{{/each}}

Based on this data, provide the following:
1.  **Analysis**: Provide a concise but detailed analysis covering the strengths and weaknesses of the on-page SEO. Include suggestions for improvement. Use markdown for formatting.
2.  **Score**: Give an overall SEO score from 0 to 100, where 100 is perfectly optimized.

Focus on the provided on-page elements. Do not comment on off-page factors like backlinks or domain authority.
`,
});


const analyzeSeoFlow = ai.defineFlow(
  {
    name: 'analyzeSeoFlow',
    inputSchema: AnalyzeSeoInputSchema,
    outputSchema: AnalyzeSeoOutputSchema,
  },
  async (input) => {
    // 1. Scrape the structured SEO data from the URL.
    const pageSeoData = await getPageSeoData(input.url);
    if (!pageSeoData) {
      throw new Error('Could not fetch and parse content from the provided URL.');
    }
    
    // 2. Send the structured data to the AI for analysis.
    const { output } = await prompt(pageSeoData);
    if (!output) {
        throw new Error('The AI failed to produce an analysis.');
    }

    // 3. Combine the scraped data with the AI analysis to form the final result.
    return {
        title: pageSeoData.title,
        description: pageSeoData.description,
        headings: pageSeoData.headings,
        analysis: output.analysis,
        score: output.score,
    };
  }
);
