
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
import {googleAI} from '@genkit-ai/google-genai';
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
  suggestions: z.array(z.string()).length(3).describe("An array of three alternative, SEO-optimized headline suggestions."),
  audioDataUri: z.string().url().optional().describe("The data URI of the generated audio for the analysis. Expected format: 'data:audio/wav;base64,<encoded_data>'."),
});
export type AnalyzeHeadlineOutput = z.infer<typeof AnalyzeHeadlineOutputSchema>;

export async function analyzeHeadline(input: AnalyzeHeadlineInput): Promise<AnalyzeHeadlineOutput> {
  return analyzeHeadlineFlow(input);
}

const analyzeHeadlinePrompt = ai.definePrompt(
  {
      name: 'analyzeHeadlinePrompt',
      input: { schema: AnalyzeHeadlineInputSchema },
      output: { 
          schema: z.object({
            analysis: z.string().describe("A concise analysis of the headline, including strengths, weaknesses. Use markdown for formatting, like lists."),
            score: z.number().min(0).max(100).describe("An overall SEO score for the headline, from 0 to 100."),
            suggestions: z.array(z.string()).length(3).describe("An array of three alternative, SEO-optimized headline suggestions."),
          })
       },
      prompt: `You are an expert SEO copywriter and analyst.
Analyze the following headline for its SEO effectiveness: "{{{headline}}}"

Provide a concise analysis covering:
**Strengths**: What is good about it (e.g., clarity, keywords, emotional hook)?
**Weaknesses**: What could be improved (e.g., too generic, unclear, lacking keywords)?

Also, provide an overall SEO score from 0 to 100, where 100 is a perfect, highly-clickable, and keyword-rich headline.

Finally, offer exactly 3 concrete alternative headlines that are SEO-optimized and highly clickable.

Format the analysis using markdown bullet points for each section.
The language of the output must be Slovak.
`,
  }
);


const analyzeHeadlineFlow = ai.defineFlow(
  {
    name: 'analyzeHeadlineFlow',
    inputSchema: AnalyzeHeadlineInputSchema,
    outputSchema: AnalyzeHeadlineOutputSchema,
  },
  async (input) => {
    
    const [llmResponse, audioResponse] = await Promise.all([
        analyzeHeadlinePrompt(input),
        ai.generate({
            model: googleAI.model('gemini-2.5-flash-preview-tts'),
            config: {
                responseModalities: ['AUDIO'],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: { voiceName: 'Algenib' },
                    },
                },
            },
            prompt: `Tu si expert na SEO, ktorý práve analyzoval nadpis. Teraz stručne zhrň túto analýzu pre používateľa: ${input.headline}`,
        })
    ]);

    const structuredOutput = llmResponse.output;
    if (!structuredOutput) {
        throw new Error("Failed to get structured output from LLM.");
    }
    
    let audioDataUri: string | undefined = undefined;
    if (audioResponse.media) {
        const audioBuffer = Buffer.from(
          audioResponse.media.url.substring(audioResponse.media.url.indexOf(',') + 1),
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
