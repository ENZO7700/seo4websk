'use server';
/**
 * @fileOverview An AI flow to generate a professional reply for the contact form.
 *
 * - generateReply - A function that handles the reply generation process.
 * - GenerateReplyInput - The input type for the generateReply function.
 * - GenerateReplyOutput - The return type for the generateReply function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateReplyInputSchema = z.object({
  name: z.string().describe("The name of the person who submitted the form."),
});
export type GenerateReplyInput = z.infer<typeof GenerateReplyInputSchema>;

const GenerateReplyOutputSchema = z.object({
  message: z.string().describe("The professionally generated thank you message."),
});
export type GenerateReplyOutput = z.infer<typeof GenerateReplyOutputSchema>;

export async function generateReply(input: GenerateReplyInput): Promise<GenerateReplyOutput> {
  return generateReplyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateReplyPrompt',
  input: {schema: GenerateReplyInputSchema},
  output: {schema: GenerateReplyOutputSchema},
  prompt: `You are the voice of seo4web, a professional SEO services company.
Someone named {{{name}}} just sent a message through the contact form.
Generate a short, professional, and friendly thank you message.
Acknowledge them by name. Keep it under 25 words.
Example: "Thank you for your inquiry, {{{name}}}. Our team has received your message and will be in touch shortly."
`,
});

const generateReplyFlow = ai.defineFlow(
  {
    name: 'generateReplyFlow',
    inputSchema: GenerateReplyInputSchema,
    outputSchema: GenerateReplyOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
