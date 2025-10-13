'use server';
/**
 * @fileOverview An AI flow to analyze an SEO headline and generate audio for the analysis.
 *
 * - analyzeHeadline - A function that handles the headline analysis process.
 * - AnalyzeHeadlineInput - The input type for the analyzeHeadline function.
 * - AnalyzeHeadlineOutput - The return type for the analyzeHeadline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';


async function toWav( pcmData: Buffer, channels = 1, rate = 24000, sampleWidth = 2): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    let bufs: any[] = [];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}


const AnalyzeHeadlineInputSchema = z.object({
  headline: z.string().describe("The headline to be analyzed for SEO effectiveness."),
});
export type AnalyzeHeadlineInput = z.infer<typeof AnalyzeHeadlineInputSchema>;

const AnalyzeHeadlineOutputSchema = z.object({
  analysis: z.string().describe("A concise analysis of the headline, including strengths, weaknesses, and suggestions for improvement. Use markdown for formatting, like lists."),
  score: z.number().min(0).max(100).describe("An overall SEO score for the headline, from 0 to 100."),
  audioDataUri: z.string().url().optional().describe("The data URI of the generated audio for the analysis. Expected format: 'data:audio/wav;base64,<encoded_data>'."),
});
export type AnalyzeHeadlineOutput = z.infer<typeof AnalyzeHeadlineOutputSchema>;

export async function analyzeHeadline(input: AnalyzeHeadlineInput): Promise<AnalyzeHeadlineOutput> {
  return analyzeHeadlineFlow(input);
}

const analyzeHeadlineFlow = ai.defineFlow(
  {
    name: 'analyzeHeadlineFlow',
    inputSchema: AnalyzeHeadlineInputSchema,
    outputSchema: AnalyzeHeadlineOutputSchema,
  },
  async (input) => {
    const llmResponse = await ai.generate({
        prompt: `You are an expert SEO copywriter and analyst.
Analyze the following headline for its SEO effectiveness: "{{{headline}}}"

Provide a concise analysis covering:
- Strengths: What is good about it (e.g., clarity, keywords, emotional hook)?
- Weaknesses: What could be improved (e.g., too generic, unclear, lacking keywords)?
- Suggestions: Offer 1-2 concrete alternative headlines.

Also, provide an overall SEO score from 0 to 100, where 100 is a perfect, highly-clickable, and keyword-rich headline.

Format the analysis using markdown bullet points.
`,
        input: input,
        output: {
            schema: z.object({
                analysis: z.string(),
                score: z.number().min(0).max(100),
            })
        },
        config: {
            responseModalities: ['TEXT', 'AUDIO']
        }
    });

    const structuredOutput = llmResponse.output();
    if (!structuredOutput) {
        throw new Error("Failed to get structured output from LLM.");
    }
    
    let audioDataUri: string | undefined = undefined;
    if (llmResponse.media) {
        const audioBuffer = Buffer.from(
          llmResponse.media.url.substring(llmResponse.media.url.indexOf(',') + 1),
          'base64'
        );
        const wavBase64 = await toWav(audioBuffer);
        audioDataUri = `data:audio/wav;base64,${wavBase64}`;
    }

    return {
        ...structuredOutput,
        audioDataUri: audioDataUri,
    };
  }
);
