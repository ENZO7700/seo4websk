
'use server';

import * as cheerio from 'cheerio';
import { PageSeoData } from '@/types/seo';

/**
 * Fetches the HTML content of a URL.
 * @param url The URL to fetch.
 * @returns The HTML content as a string.
 */
async function getPageContent(url: string): Promise<string> {
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            },
             // It's good practice to follow redirects.
            redirect: 'follow',
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch URL: ${response.status} ${response.statusText}`);
        }

        const text = await response.text();
        return text;
    } catch (error) {
        throw new Error('Could not retrieve content from the provided URL. It might be down or blocking requests.');
    }
}


/**
 * Fetches a webpage and extracts key SEO data using Cheerio.
 * @param url The URL of the webpage to analyze.
 * @returns A structured object with SEO data, or null if an error occurs.
 */
export async function getPageSeoData(url: string): Promise<PageSeoData> {
  try {
    const html = await getPageContent(url);
    const $ = cheerio.load(html);

    const title = $('title').first().text() || $('h1').first().text();
    const description = $('meta[name="description"]').attr('content') || '';

    const headings: { level: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6'; text: string }[] = [];
    $('h1, h2, h3, h4, h5, h6').each((i, el) => {
        const tagName = $(el).prop('tagName');
        const text = $(el).text().trim();
        if(text) {
             headings.push({
                level: tagName as 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6',
                text: text
            });
        }
    });

    const seoData: PageSeoData = {
      title,
      description,
      headings,
    };
    
    // Validate the extracted data against our schema
    return PageSeoData.parse(seoData);

  } catch (error) {
    throw new Error('Could not parse SEO data from the provided URL.');
  }
}
