'use server';
/**
 * @fileOverview An AI flow to analyze an SEO headline.
 *
 * - analyzeHeadline - A function that handles the headline analysis process.
 * - AnalyzeHeadlineInput - The input type for the analyzeHeadline function.
 * - AnalyzeHeadlineOutput - The return type for the analyzeHeadline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeHeadlineInputSchema = z.object({
  headline: z.string().describe("The headline to be analyzed for SEO effectiveness."),
});
export type AnalyzeHeadlineInput = z.infer<typeof AnalyzeHeadlineInputSchema>;

const AnalyzeHeadlineOutputSchema = z.object({
  analysis: z.string().describe("A concise analysis of the headline, including strengths, weaknesses, and suggestions for improvement. Use markdown for formatting, like lists."),
  score: z.number().min(0).max(100).describe("An overall SEO score for the headline, from 0 to 100."),
});
export type AnalyzeHeadlineOutput = z.infer<typeof AnalyzeHeadlineOutputSchema>;

export async function analyzeHeadline(input: AnalyzeHeadlineInput): Promise<AnalyzeHeadlineOutput> {
  return analyzeHeadlineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeHeadlinePrompt',
  input: {schema: AnalyzeHeadlineInputSchema},
  output: {schema: AnalyzeHeadlineOutputSchema},
  prompt: `You are an expert SEO copywriter and analyst.
Analyze the following headline for its SEO effectiveness: "{{{headline}}}"

Provide a concise analysis covering:
- Strengths: What is good about it (e.g., clarity, keywords, emotional hook)?
- Weaknesses: What could be improved (e.g., too generic, unclear, lacking keywords)?
- Suggestions: Offer 1-2 concrete alternative headlines.

Also, provide an overall SEO score from 0 to 100, where 100 is a perfect, highly-clickable, and keyword-rich headline.

Format the analysis using markdown bullet points.
`,
});

const analyzeHeadlineFlow = ai.defineFlow(
  {
    name: 'analyzeHeadlineFlow',
    inputSchema: AnalyzeHeadlineInputSchema,
    outputSchema: AnalyzeHeadlineOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
