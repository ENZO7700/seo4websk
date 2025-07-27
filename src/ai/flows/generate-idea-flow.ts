'use server';
/**
 * @fileOverview An AI flow to generate a creative, futuristic idea.
 *
 * - generateIdea - A function that handles the idea generation process.
 * - GenerateIdeaOutput - The return type for the generateIdea function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateIdeaOutputSchema = z.object({
  idea: z.string().describe("The creatively generated futuristic idea or concept."),
});
export type GenerateIdeaOutput = z.infer<typeof GenerateIdeaOutputSchema>;

export async function generateIdea(): Promise<GenerateIdeaOutput> {
  return generateIdeaFlow();
}

const prompt = ai.definePrompt({
  name: 'generateIdeaPrompt',
  output: {schema: GenerateIdeaOutputSchema},
  prompt: `You are an AI muse for AetherFlow, a hub for futuristic and cutting-edge ideas.
Generate a single, short, creative, and thought-provoking futuristic concept.
It could be a piece of technology, a social structure, a sci-fi plot hook, or an abstract concept.
Keep it concise, under 30 words.
Example: "Sentient clouds that trade atmospheric data for computational power."
Example: "Bio-luminescent tattoos that display real-time health metrics."
Example: "A city that rearranges its architecture nightly based on dream-data from its inhabitants."
`,
});

const generateIdeaFlow = ai.defineFlow(
  {
    name: 'generateIdeaFlow',
    outputSchema: GenerateIdeaOutputSchema,
  },
  async () => {
    const {output} = await prompt();
    return output!;
  }
);
