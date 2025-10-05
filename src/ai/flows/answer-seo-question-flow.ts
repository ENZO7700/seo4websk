'use server';
/**
 * @fileOverview An AI flow to answer SEO questions based on a provided context.
 *
 * - answerSeoQuestion - A function that handles the question answering process.
 * - AnswerSeoQuestionInput - The input type for the answerSeoQuestion function.
 * - AnswerSeoQuestionOutput - The return type for the answerSeoQuestion function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AnswerSeoQuestionInputSchema = z.object({
  question: z.string().describe('The user\'s question about SEO.'),
  context: z.string().describe('The content of the SEO cheatsheets to use as a knowledge base.'),
});
export type AnswerSeoQuestionInput = z.infer<typeof AnswerSeoQuestionInputSchema>;

const AnswerSeoQuestionOutputSchema = z.object({
  answer: z.string().describe('A concise and direct answer to the question, based on the provided context. Formatted with markdown.'),
  source: z.string().optional().describe('The specific section/heading from the context that was most relevant to the answer.'),
});
export type AnswerSeoQuestionOutput = z.infer<typeof AnswerSeoQuestionOutputSchema>;

export async function answerSeoQuestion(input: AnswerSeoQuestionInput): Promise<AnswerSeoQuestionOutput> {
  return answerSeoQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerSeoQuestionPrompt',
  input: { schema: AnswerSeoQuestionInputSchema },
  output: { schema: AnswerSeoQuestionOutputSchema },
  prompt: `
    You are a helpful SEO expert assistant. Your task is to answer the user's question based *only* on the provided context, which contains our SEO knowledge base.

    CONTEXT:
    ---
    {{{context}}}
    ---

    USER'S QUESTION: "{{{question}}}"

    INSTRUCTIONS:
    1.  Read the user's question carefully.
    2.  Find the most relevant section in the provided CONTEXT to answer the question.
    3.  Generate a clear, concise, and direct answer. Use markdown for lists if appropriate.
    4.  Your answer MUST be based exclusively on the information in the CONTEXT. Do not use any external knowledge.
    5.  Identify the "Sekcia:" (section heading) from the context that you used to formulate the answer and set it as the 'source' in the output. If no single section is a clear source, you can leave it empty.
  `,
});

const answerSeoQuestionFlow = ai.defineFlow(
  {
    name: 'answerSeoQuestionFlow',
    inputSchema: AnswerSeoQuestionInputSchema,
    outputSchema: AnswerSeoQuestionOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
