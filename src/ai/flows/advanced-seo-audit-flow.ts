
'use server';
/**
 * @fileOverview An advanced AI flow to perform a light technical SEO audit on a website.
 *
 * - advancedSeoAudit - A function that handles the entire audit process.
 * - AdvancedSeoAuditInput - The input type for the advancedSeoAudit function.
 * - AdvancedSeoAuditOutput - The return type for the advancedSeoAudit function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import * as cheerio from 'cheerio';

// =================================================================================
// INPUT & OUTPUT SCHEMAS
// =================================================================================

const AdvancedSeoAuditInputSchema = z.object({
  url: z.string().url().describe('The root URL of the website to audit.'),
});
export type AdvancedSeoAuditInput = z.infer<typeof AdvancedSeoAuditInputSchema>;

const AdvancedSeoAuditOutputSchema = z.object({
  summary: z.string().describe("A 3-5 sentence summary of the audit's findings in Slovak."),
  top10QuickWins: z.string().describe("A markdown list of the top 10 actionable quick wins, including the reason for each, in Slovak."),
  fixPlan: z.string().describe("A 3-wave fix plan (Quick Wins, High Impact, Long-term) in markdown format, in Slovak."),
  snippets: z.object({
    canonical: z.string().describe('A correct, self-referencing absolute canonical tag.'),
    preloadHero: z.string().describe('An HTML <link rel="preload"> tag for the hero image, including srcset.'),
    jsonLd: z.string().describe('A JSON-LD snippet for Organization and WebSite/SearchAction.'),
    securityHeaders: z.string().describe('An Nginx snippet for basic security headers and a meta fallback.'),
    openGraph: z.string().describe('OpenGraph and Twitter card meta tags (title, desc, 1200x630 image).'),
  }).describe('A collection of ready-to-use code snippets for fixes.'),
});
export type AdvancedSeoAuditOutput = z.infer<typeof AdvancedSeoAuditOutputSchema>;

// =================================================================================
// HELPER FUNCTIONS & TYPES
// =================================================================================

interface PageData {
    url: string;
    status: number;
    finalUrl: string;
    redirectChain: string[];
    title: string;
    description: string;
    canonical: string | null;
    metaRobots: string | null;
    headings: { level: string, text: string }[];
    images: {
        count: number;
        withoutAlt: number;
        hero: {
            src: string | null;
            size: string; // "unknown" or "WxH"
            lazy: boolean;
            preload: boolean;
        } | null;
    };
    og: Record<string, string>;
    twitter: Record<string, string>;
    jsonLdTypes: string[];
    hasManifest: boolean;
    hasServiceWorker: boolean;
    securityHeaders: Record<string, string>;
}

async function fetchWithRedirects(url: string, redirectChain: string[] = []): Promise<{ response: Response, finalUrl: string, chain: string[] }> {
    const response = await fetch(url, { redirect: 'manual', headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' } });
    redirectChain.push(url);
    if (response.status >= 300 && response.status < 400 && response.headers.has('location')) {
        const location = response.headers.get('location')!;
        const nextUrl = new URL(location, url).toString();
        return fetchWithRedirects(nextUrl, redirectChain);
    }
    return { response, finalUrl: url, chain: redirectChain };
}


async function analyzePage(url: string): Promise<PageData> {
    const { response, finalUrl, chain } = await fetchWithRedirects(url);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const heroImgEl = $('body img').first();

    // Check for Service Worker registration
    const serviceWorkerScript = $('script').filter((_, el) => $(el).text().includes('serviceWorker.register')).text();
    
    const data: PageData = {
        url,
        status: response.status,
        finalUrl,
        redirectChain: chain,
        title: $('title').text() || "unknown",
        description: $('meta[name="description"]').attr('content') || "unknown",
        canonical: $('link[rel="canonical"]').attr('href') || null,
        metaRobots: $('meta[name="robots"]').attr('content') || null,
        headings: $('h1, h2, h3').map((_, el) => ({ level: el.tagName.toUpperCase(), text: $(el).text().trim() })).get(),
        images: {
            count: $('img').length,
            withoutAlt: $('img:not([alt]), img[alt=""]').length,
            hero: heroImgEl.length ? {
                src: heroImgEl.attr('src') || null,
                size: `${heroImgEl.attr('width') || 'unknown'}x${heroImgEl.attr('height') || 'unknown'}`,
                lazy: heroImgEl.attr('loading') === 'lazy',
                preload: !!$(`link[rel="preload"][href="${heroImgEl.attr('src')}"]`).length,
            } : null,
        },
        og: Object.fromEntries(
            $('meta[property^="og:"]')
              .filter((_, el) => $(el).attr('content'))
              .map((_, el) => [$(el).attr('property')!, $(el).attr('content')!])
              .get()
          ),
        twitter: Object.fromEntries(
            $('meta[name^="twitter:"]')
              .filter((_, el) => $(el).attr('content'))
              .map((_, el) => [$(el).attr('name')!, $(el).attr('content')!])
              .get()
          ),
        jsonLdTypes: $('script[type="application/ld+json"]').map((_, el) => {
            try {
                const parsed = JSON.parse($(el).html()!);
                // Handle both single string and array of strings for @type
                const type = parsed['@type'];
                if (Array.isArray(type)) {
                    return type.join(', ');
                }
                return type;
            } catch {
                return 'ParseError';
            }
        }).get(),
        hasManifest: !!$('link[rel="manifest"]').length,
        hasServiceWorker: !!serviceWorkerScript,
        securityHeaders: {
            'Content-Security-Policy': response.headers.get('Content-Security-Policy') || "unknown",
            'X-Content-Type-Options': response.headers.get('X-Content-Type-Options') || "unknown",
            'X-Frame-Options': response.headers.get('X-Frame-Options') || "unknown",
        },
    };
    return data;
}


// =================================================================================
// MAIN FLOW
// =================================================================================

export async function advancedSeoAudit(input: AdvancedSeoAuditInput): Promise<AdvancedSeoAuditOutput> {
  return advancedSeoAuditFlow(input);
}

const analysisPrompt = ai.definePrompt({
  name: 'advancedSeoAnalysisPrompt',
  input: { schema: z.object({ url: z.string(), analyzedPages: z.any() }) },
  output: { schema: z.object({
        summary: AdvancedSeoAuditOutputSchema.shape.summary,
        top10QuickWins: AdvancedSeoAuditOutputSchema.shape.top10QuickWins,
        fixPlan: AdvancedSeoAuditOutputSchema.shape.fixPlan,
    }) },
  prompt: `
ROLE: You are a senior SEO technical analyst. Your tone is helpful, expert, and direct. The output must be in Slovak.

GOAL: Analyze the provided JSON data from a website crawl and generate a strategic audit report.

INPUT:
- Root URL: {{{url}}}
- Analyzed Pages Data: \`\`\`json
{{{json analyzedPages}}}
\`\`\`

STEPS:
1.  **Analyze**: Review the JSON. Look for errors (e.g., status 500), inconsistencies (e.g., different titles), and opportunities (e.g., missing ALT texts, no schema).
2.  **Summarize**: Write a 3-5 sentence executive summary of the site's SEO health.
3.  **Prioritize**: Create a list of the "Top 10 Rýchlych Výhier". These should be actionable, high-impact, low-effort fixes.
4.  **Plan**: Formulate a 3-wave "Plán Opráv" (Rýchle víťazstvá, Opravy s vysokým dopadom, Dlhodobé a základné).

OUTPUT FORMAT:
Strictly adhere to the following output format. Use Markdown for formatting. The entire output must be in Slovak.

### Súhrn
[3-5 sentence executive summary of the website's overall SEO health in Slovak]

### Top 10 Rýchlych Výhier
[A numbered markdown list of the top 10 most impactful and easy-to-implement fixes in Slovak. Example: "1. **Pridajte chýbajúci ALT text:** Zlepšuje prístupnosť..."]

### Plán Opráv
#### Vlna 1: Rýchle víťazstvá (Nízka náročnosť, vysoký dopad)
[List of quick wins in Slovak]
#### Vlna 2: Opravy s vysokým dopadom (Stredná náročnosť, vysoký dopad)
[List of high-impact fixes in Slovak]
#### Vlna 3: Dlhodobé a základné (Vysoká náročnosť)
[List of foundational improvements in Slovak]
`,
});

const snippetsPrompt = ai.definePrompt({
    name: 'generateSeoCodeSnippetsPrompt',
    input: { schema: z.object({ url: z.string() })},
    output: { schema: AdvancedSeoAuditOutputSchema.shape.snippets },
    prompt: `
    ROLE: You are a pragmatic SEO implementer.
    
    GOAL: Generate a set of ready-to-use code snippets for common SEO fixes for the URL: {{{url}}}
    
    OUTPUT: Provide the following code snippets. If a value is unknown, use a clear placeholder like [YOUR_...].
    
    1.  **canonical**: A correct, self-referencing absolute canonical tag for the provided URL.
    2.  **preloadHero**: An HTML <link rel="preload"> tag for a hero image. Use placeholders for the image paths.
    3.  **jsonLd**: A JSON-LD snippet for "Organization" and "WebSite" schema. Use placeholders for company-specific details.
    4.  **securityHeaders**: An Nginx snippet for basic security headers and an HTML meta tag fallback.
    5.  **openGraph**: A set of OpenGraph and Twitter card meta tags. Use placeholders for titles, descriptions, and images.
    `,
});


const advancedSeoAuditFlow = ai.defineFlow(
  {
    name: 'advancedSeoAuditFlow',
    inputSchema: AdvancedSeoAuditInputSchema,
    outputSchema: AdvancedSeoAuditOutputSchema,
  },
  async ({ url }) => {
    // 1. Fetch robots.txt and find up to 2 other links to analyze
    let linksToAudit = [url];
    try {
        const robotsRes = await fetch(new URL('/robots.txt', url).toString());
        if (robotsRes.ok) {
            const robotsTxt = await robotsRes.text();
            // Find more links from homepage only if crawling is not disallowed for the entire site
            if (!robotsTxt.toLowerCase().includes('disallow: /')) {
                const homeHtmlRes = await fetch(url);
                if (homeHtmlRes.ok) {
                    const homeHtml = await homeHtmlRes.text();
                    const $ = cheerio.load(homeHtml);
                    const internalLinks = new Set<string>();
                    $('a[href^="/"]').each((_, el) => {
                        const href = $(el).attr('href');
                        if (href && href.length > 1) {
                            try {
                               internalLinks.add(new URL(href, url).toString());
                            } catch (e) {
                                // Ignore invalid hrefs
                            }
                        }
                    });
                    linksToAudit = [url, ...Array.from(internalLinks).slice(0, 2)];
                }
            }
        }
    } catch (e) {
        console.error("Could not fetch or parse robots.txt, proceeding with single URL audit.", e);
    }
    
    // 2. Analyze pages in parallel
    const analysisPromises = linksToAudit.map(link => analyzePage(link).catch(e => ({ error: e.message, url: link })));
    const analyzedPages = await Promise.all(analysisPromises);
    
    // 3. Send data to the AI for analysis and generate snippets in parallel
    const [analysisResponse, snippetsResponse] = await Promise.all([
        analysisPrompt({ url, analyzedPages }),
        snippetsPrompt({ url })
    ]);
    
    const analysisOutput = analysisResponse.output;
    const snippetsOutput = snippetsResponse.output;

    if (!analysisOutput || !snippetsOutput) {
        throw new Error('The AI failed to produce a complete analysis or code snippets.');
    }

    // Combine the outputs
    return {
        summary: analysisOutput.summary,
        top10QuickWins: analysisOutput.top10QuickWins,
        fixPlan: analysisOutput.fixPlan,
        snippets: snippetsOutput,
    };
  }
);

    