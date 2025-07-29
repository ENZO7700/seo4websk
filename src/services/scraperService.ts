'use server';

// A simple server-side function to fetch URL content.
// In a real-world scenario, you would use a more robust library like Cheerio for parsing.
export async function getPageContent(url: string): Promise<string> {
    try {
        const response = await fetch(url, {
            headers: {
                // Some websites might block requests without a user-agent.
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch URL: ${response.status} ${response.statusText}`);
        }

        const text = await response.text();
        return text;
    } catch (error) {
        console.error('Error fetching page content:', error);
        throw new Error('Could not retrieve content from the provided URL. It might be down or blocking requests.');
    }
}
