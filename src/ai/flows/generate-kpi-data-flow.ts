'use server';
/**
 * @fileOverview An AI flow to generate realistic KPI data for the dashboard.
 *
 * - generateKpiData - A function that handles the KPI data generation.
 * - GenerateKpiDataOutput - The return type for the generateKpiData function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateKpiDataOutputSchema = z.object({
  traffic: z.object({
    value: z.number().describe("Total number of visitors, e.g., 2420."),
    change: z.number().describe("Percentage change from the previous period, e.g., 12.5."),
  }),
  bounceRate: z.object({
    value: z.number().describe("The bounce rate as a percentage, e.g., 45.2."),
    change: z.number().describe("Percentage change from the previous period, e.g., -5.2."),
  }),
  visitDuration: z.object({
    minutes: z.number().describe("The average visit duration in minutes, e.g., 3."),
    seconds: z.number().describe("The average visit duration in seconds, e.g., 15."),
    change: z.number().describe("The change in total seconds from the previous period, e.g., 120 for 2 minutes."),
  }),
  conversions: z.object({
    value: z.number().describe("Total number of conversions, e.g., 128."),
    change: z.number().describe("Absolute change from the previous period, eg., 15."),
  }),
});
export type GenerateKpiDataOutput = z.infer<typeof GenerateKpiDataOutputSchema>;

export async function generateKpiData(): Promise<GenerateKpiDataOutput> {
  return generateKpiDataFlow();
}

const prompt = ai.definePrompt({
  name: 'generateKpiDataPrompt',
  output: { schema: GenerateKpiDataOutputSchema },
  prompt: `You are a data simulation expert for a web analytics dashboard.
Generate a set of realistic-looking, but fictional, Key Performance Indicator (KPI) data for an SEO agency's website.
The data should look plausible and internally consistent. Provide a brief, one-sentence persona for the site you are generating data for to add context.

Example Persona: A growing SEO agency blog.

Generate the following KPIs:
- **Traffic**: Total visitors and the percentage change.
- **Bounce Rate**: The bounce rate and its percentage change.
- **Visit Duration**: Average visit duration in minutes and seconds, and the change in seconds.
- **Conversions**: Total conversions and the absolute change.

Ensure the changes (positive or negative) make sense together. For example, an increase in traffic might correlate with a slight increase in bounce rate but also an increase in conversions.
`,
});

const generateKpiDataFlow = ai.defineFlow(
  {
    name: 'generateKpiDataFlow',
    outputSchema: GenerateKpiDataOutputSchema,
  },
  async () => {
    const { output } = await prompt();
    return output!;
  }
);
