
'use server';
/**
 * @fileOverview An AI flow to analyze the semantic relevance of a text against a keyword.
 *
 * - analyzeSemanticRelevance - A function that handles the analysis process.
 * - AnalyzeSemanticRelevanceInput - The input type for the function.
 * - AnalyzeSemanticRelevanceOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AnalyzeSemanticRelevanceInputSchema = z.object({
  mainKeyword: z.string().describe('The main keyword or topic the article is about (e.g., "how to choose running shoes").'),
  articleText: z.string().describe('The full text of the article to be analyzed.'),
});
export type AnalyzeSemanticRelevanceInput = z.infer<typeof AnalyzeSemanticRelevanceInputSchema>;

const AnalyzeSemanticRelevanceOutputSchema = z.object({
  relevanceScore: z.number().min(0).max(100).describe('A numerical score from 0 to 100 that expresses how comprehensively and relevantly the text covers the given topic.'),
  analysis: z.string().describe('A verbal assessment (2-4 sentences) explaining the assigned score, highlighting the semantic strengths and weaknesses of the text.'),
  suggestedTopics: z.array(z.string()).describe('An array of 3 to 5 specific, semantically related topics, entities, or questions that are missing from the article but should be included for comprehensiveness.'),
  overallSentiment: z.string().describe("The estimated overall sentiment of the text (e.g., 'Positive', 'Neutral', 'Negative')."),
});
export type AnalyzeSemanticRelevanceOutput = z.infer<typeof AnalyzeSemanticRelevanceOutputSchema>;

export async function analyzeSemanticRelevance(input: AnalyzeSemanticRelevanceInput): Promise<AnalyzeSemanticRelevanceOutput> {
  return analyzeSemanticRelevanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeSemanticRelevancePrompt',
  input: { schema: AnalyzeSemanticRelevanceInputSchema },
  output: { schema: AnalyzeSemanticRelevanceOutputSchema },
  prompt: `Act as an expert in semantic SEO and linguistics. Your task is to analyze the provided text ('articleText') in relation to the main keyword ('mainKeyword').

1.  **Evaluate relevance and depth:** On a scale of 0-100, determine how well the text covers the given topic. 100 means the text is extremely comprehensive, covers all important sub-topics, and answers all relevant user questions. 0 means the text is completely off-topic.
2.  **Provide a brief analysis:** In a few sentences, explain your rating. Focus on whether the text goes into depth, uses synonyms and related terms, and covers secondary aspects of the topic.
3.  **Suggest improvements:** Identify key sub-topics, entities, or questions that are missing from the text and are essential for comprehensive coverage of the main topic. Return them as a list of 3-5 concrete suggestions. For example, if the main topic is 'how to choose running shoes', suggest topics like 'Types of pronation (pronation, supination)', 'Difference between trail and road shoes', 'Cushioning and its impact on joints'.
4.  **Analyze sentiment:** Based on the text, determine its overall sentiment.

Return the result exactly according to the defined Zod schema.`,
});

const analyzeSemanticRelevanceFlow = ai.defineFlow(
  {
    name: 'analyzeSemanticRelevanceFlow',
    inputSchema: AnalyzeSemanticRelevanceInputSchema,
    outputSchema: AnalyzeSemanticRelevanceOutputSchema,
  },
  async (input) => {
    // Truncate article text to avoid exceeding token limits, e.g., first 20000 characters
    const truncatedText = input.articleText.substring(0, 20000);

    const { output } = await prompt({ ...input, articleText: truncatedText });
    if (!output) {
      throw new Error('The AI failed to produce an analysis.');
    }
    return output;
  }
);
