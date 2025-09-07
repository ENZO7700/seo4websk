
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
  summary: z.string().describe("A 3-5 sentence summary of the audit's findings."),
  top10QuickWins: z.string().describe("A markdown list of the top 10 actionable quick wins, including the reason for each."),
  fixPlan: z.string().describe("A 3-wave fix plan (Quick Wins, High Impact, Long-term) in markdown format."),
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

const prompt = ai.definePrompt({
  name: 'advancedSeoAuditPrompt',
  input: { schema: z.object({ url: z.string(), analyzedPages: z.any() }) },
  output: { schema: AdvancedSeoAuditOutputSchema },
  prompt: `
ROLE: You are a senior SEO technical analyst and a pragmatic implementer. Your tone is helpful, expert, and direct.

GOAL: Conduct a "light" SEO audit of the provided domain data. The data includes the main page and up to 2 subpages. Analyze the provided data to identify key issues and opportunities.

INPUT:
- Root URL: {{{url}}}
- Analyzed Pages Data: \`\`\`json
{{{json analyzedPages}}}
\`\`\`

STEPS:
1)  **Analyze the data**: Review the provided JSON data for each page. Look for inconsistencies, errors, and areas for improvement across all collected data points (status, titles, headings, images, schema, PWA features, etc.). If you see a status of 500, it means the page failed to load, which is a critical error you must highlight.
2)  **Identify issues**: Based on your analysis, identify the most critical issues. For each issue, determine its category (TECH, ONPAGE, CWV, CONTENT), severity (critical/high/medium/low), business impact (1-5, where 5 is highest), and implementation effort (low/med/high).
3)  **Formulate recommendations**: Create a summary, a list of the top 10 quick wins, and a 3-wave fix plan.
4)  **Generate code snippets**: Provide concrete, copy-paste-ready code snippets for the most common and critical fixes. Ensure they are generic enough to be adapted but specific enough to be useful. For the hero image preload, if there are multiple images, pick the most likely one (usually the first one in the body).

OUTPUT:
Strictly adhere to the following output structure and use Markdown for formatting lists and code blocks.

## Súhrn
Provide a 3-5 sentence executive summary of the website's overall SEO health, highlighting the most critical findings and the biggest opportunities for growth.

## Top 10 Rýchlych Výhier
List the top 10 most impactful and easy-to-implement fixes. For each, briefly state the issue and why fixing it is important. Format as a numbered list. Example: "1. **Pridajte chýbajúci ALT text k obrázkom:** Zlepšuje prístupnosť a pozície v obrázkovom vyhľadávaní."

## Plán opráv
Organize the identified issues into a 3-wave plan.
### Vlna 1: Rýchle víťazstvá (Nízka náročnosť, vysoký dopad)
List the fixes that can be done quickly and will bring immediate benefits.
### Vlna 2: Opravy s vysokým dopadom (Stredná náročnosť, vysoký dopad)
List more involved fixes that are crucial for long-term success.
### Vlna 3: Dlhodobé a základné (Vysoká náročnosť)
List foundational improvements that require more planning and resources.

## Úryvky Kódu
Provide the following code snippets. If a value is unknown from the input, use a clear placeholder like [YOUR_...].

### Canonical Tag
\`\`\`html
<!-- Pridajte toto do <head> vašej stránky -->
<link rel="canonical" href="{{{url}}}" />
\`\`\`

### Preload Hero Image
\`\`\`html
<!-- Pridajte toto do <head> pre rýchlejšie načítanie hlavného obrázka. Aktualizujte href a srcset s vašou reálnou cestou k obrázku. -->
<link rel="preload" as="image" href="[YOUR_HERO_IMAGE.JPG]" imagesrcset="[YOUR_HERO_IMAGE_400W.JPG] 400w, [YOUR_HERO_IMAGE_800W.JPG] 800w" />
\`\`\`

### JSON-LD Schéma
\`\`\`html
<!-- Pridajte toto do <head> alebo <body>. Aktualizujte detaily s informáciami o vašej firme. -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[YOUR_COMPANY_NAME]",
  "url": "{{{url}}}",
  "logo": "[URL_TO_YOUR_LOGO.SVG]",
  "sameAs": [
    "https://www.facebook.com/[YourPage]",
    "https://www.twitter.com/[YourHandle]"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "{{{url}}}",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "{{{url}}}/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
</script>
\`\`\`

### Bezpečnostné Hlavičky
\`\`\`nginx
# Nginx úryvok na pridanie základných bezpečnostných hlavičiek. Pridajte do vašej serverovej konfigurácie.
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Content-Security-Policy "frame-ancestors 'self';" always;
\`\`\`
\`\`\`html
<!-- Meta tag fallback pre bezpečnostné hlavičky. Pridajte do <head>. -->
<meta http-equiv="Content-Security-Policy" content="frame-ancestors 'self';">
\`\`\`

### OpenGraph & Twitter Karty
\`\`\`html
<!-- Pridajte tieto tagy do <head> pre lepšie zdieľanie na sociálnych sieťach. -->
<meta property="og:title" content="[Your Page Title]" />
<meta property="og:description" content="[A compelling description of the page content.]" />
<meta property="og:image" content="[URL_TO_A_1200x630_IMAGE.JPG]" />
<meta property="og:url" content="{{{url}}}" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[Your Page Title]" />
<meta name="twitter:description" content="[A compelling description of the page content.]" />
<meta name="twitter:image" content="[URL_TO_A_1200x630_IMAGE.JPG]" />
\`\`\`
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
            if (robotsTxt.toLowerCase().includes('disallow: /')) {
                 // Do not throw an error, just proceed with the single URL. The AI will see the crawl was disallowed.
            } else {
                 // Find 2 more links from the homepage only if crawling is allowed
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
        // Ignore errors, just audit the main URL
    }
    
    // 2. Analyze pages in parallel
    const analysisPromises = linksToAudit.map(link => analyzePage(link));
    const analyzedPages = await Promise.all(analysisPromises);
    
    // 3. Send data to the AI for analysis and recommendations
    const { output } = await prompt({ url, analyzedPages });
    if (!output) {
        throw new Error('The AI failed to produce an analysis.');
    }

    return output;
  }
);
