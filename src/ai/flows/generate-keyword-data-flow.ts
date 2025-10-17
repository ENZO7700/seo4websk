
'use server';
/**
 * @fileOverview An AI flow to generate realistic keyword performance data for the dashboard.
 *
 * - generateKeywordData - A function that handles the keyword data generation.
 * - GenerateKeywordDataOutput - The return type for the generateKeywordData function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const KeywordDataSchema = z.object({
    keyword: z.string().describe("A realistic SEO-related keyword, e.g., 'seo optimalizacia' or 'pwa aplikacie'."),
    position: z.number().int().min(1).max(50).describe("The current search engine ranking position for the keyword."),
    change: z.number().int().min(-5).max(5).describe("The change in position over the last 30 days (can be positive, negative, or zero)."),
});

const GenerateKeywordDataOutputSchema = z.object({
  keywords: z.array(KeywordDataSchema).length(5).describe('An array of 5 keyword performance objects.'),
});
export type GenerateKeywordDataOutput = z.infer<typeof GenerateKeywordDataOutputSchema>;

export async function generateKeywordData(): Promise<GenerateKeywordDataOutput> {
  return generateKeywordDataFlow();
}

const prompt = ai.definePrompt({
  name: 'generateKeywordDataPrompt',
  output: { schema: GenerateKeywordDataOutputSchema },
  prompt: `You are a data simulation expert for a web analytics dashboard.
Generate a set of 5 realistic-looking, but fictional, keyword performance data points for an SEO agency's website in Slovakia.

Generate the following data for each of the 5 keywords:
- **keyword**: A plausible SEO-related keyword in Slovak (e.g., 'seo analyza', 'tvorba web stranok', 'link building cennik').
- **position**: The current ranking in search results (between 1 and 50).
- **change**: The change in position over the last 30 days (a small integer, e.g., from -5 to 5).

The data should look plausible. For example, high-competition keywords might have a higher position number and smaller changes.
`,
});

const generateKeywordDataFlow = ai.defineFlow(
  {
    name: 'generateKeywordDataFlow',
    outputSchema: GenerateKeywordDataOutputSchema,
  },
  async () => {
    const { output } = await prompt();
    return output!;
  }
);
