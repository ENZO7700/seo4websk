'use server';
/**
 * @fileOverview An AI flow to generate SEO-friendly meta descriptions for a given URL.
 *
 * - generateMetaDescription - A function that handles the meta description generation process.
 * - GenerateMetaDescriptionInput - The input type for the generateMetaDescription function.
 * - GenerateMetaDescriptionOutput - The return type for the generateMetaDescription function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import * as cheerio from 'cheerio';

// =================================================================================
// INPUT & OUTPUT SCHEMAS
// =================================================================================

const GenerateMetaDescriptionInputSchema = z.object({
  url: z.string().url().describe('The URL of the page to generate a meta description for.'),
  keywords: z.string().describe('The main keywords to focus on, separated by commas.'),
});
export type GenerateMetaDescriptionInput = z.infer<typeof GenerateMetaDescriptionInputSchema>;

const GenerateMetaDescriptionOutputSchema = z.object({
  descriptions: z.array(z.string()).length(3).describe('An array containing three unique, SEO-friendly meta description variants, each under 160 characters.'),
});
export type GenerateMetaDescriptionOutput = z.infer<typeof GenerateMetaDescriptionOutputSchema>;


// =================================================================================
// HELPER FUNCTION
// =================================================================================
async function getPageTextContent(url: string): Promise<string> {
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            },
            redirect: 'follow',
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch URL: ${response.status} ${response.statusText}`);
        }

        const html = await response.text();
        const $ = cheerio.load(html);

        // Remove script and style elements
        $('script, style, nav, footer, header').remove();
        
        // Get text from the body, try to be smart about main content
        const mainContent = $('main').text() || $('article').text() || $('body').text();
        
        // Replace multiple newlines/spaces with a single space and trim
        return mainContent.replace(/\s\s+/g, ' ').trim();
    } catch (error) {
        console.error("Scraping error:", error);
        throw new Error('Could not retrieve content from the provided URL. It might be down, blocking requests, or it might be a Single Page Application that requires JavaScript to render.');
    }
}


// =================================================================================
// MAIN FLOW
// =================================================================================

export async function generateMetaDescription(input: GenerateMetaDescriptionInput): Promise<GenerateMetaDescriptionOutput> {
  return generateMetaDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMetaDescriptionPrompt',
  input: { schema: z.object({ pageContent: z.string(), keywords: z.string() }) },
  output: { schema: GenerateMetaDescriptionOutputSchema },
  prompt: `
    ROLE: You are an expert SEO copywriter.

    TASK: Based on the provided page content and keywords, generate three unique, compelling, and SEO-friendly meta descriptions.

    CONTEXT:
    - Page Content: {{{pageContent}}}
    - Target Keywords: {{{keywords}}}

    CONSTRAINTS:
    1.  Each meta description MUST be under 160 characters.
    2.  Each meta description MUST be unique.
    3.  Each meta description SHOULD naturally include at least one of the target keywords.
    4.  The descriptions should be engaging and encourage users to click. They must have a call-to-action if appropriate.
    5.  The language of the descriptions must be Slovak.

    OUTPUT: Provide the output as a JSON object with a 'descriptions' array containing three strings.
  `,
});

const generateMetaDescriptionFlow = ai.defineFlow(
  {
    name: 'generateMetaDescriptionFlow',
    inputSchema: GenerateMetaDescriptionInputSchema,
    outputSchema: GenerateMetaDescriptionOutputSchema,
  },
  async ({ url, keywords }) => {
    // 1. Scrape the text content from the URL
    const pageContent = await getPageTextContent(url);

    // Limit content to avoid exceeding token limits, e.g., first 15000 characters
    const truncatedContent = pageContent.substring(0, 15000);

    // 2. Call the AI prompt with the scraped content
    const { output } = await prompt({ pageContent: truncatedContent, keywords });
    
    if (!output) {
      throw new Error('The AI failed to generate meta descriptions.');
    }

    return output;
  }
);
