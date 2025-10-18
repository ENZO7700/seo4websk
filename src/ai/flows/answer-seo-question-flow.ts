'use server';
/**
 * @fileOverview An AI flow to answer SEO questions based on a provided context.
 *
 * - answerSeoQuestion - A function that handles the question answering process.
 * - AnswerSeoQuestionInput - The input type for the answerSeoQuestion function.
 * - AnswerSeoQuestionOutput - The return type for the answerSeoQuestion function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { defineIndexer, defineRetriever, embed, retrieve } from '@genkit-ai/ai/retriever';
import { index } from '@genkit-ai/ai/retriever';


const TAHAKY_INDEX_NAME = 'seoTahakyIndex';

const AnswerSeoQuestionInputSchema = z.object({
  question: z.string().describe('The user\'s question about SEO.'),
});
export type AnswerSeoQuestionInput = z.infer<typeof AnswerSeoQuestionInputSchema>;

const AnswerSeoQuestionOutputSchema = z.object({
  answer: z.string().describe('A concise and direct answer to the question, based on the provided context. Formatted with markdown.'),
  source: z.string().optional().describe('The specific section/heading from the context that was most relevant to the answer.'),
});
export type AnswerSeoQuestionOutput = z.infer<typeof AnswerSeoQuestionOutputSchema>;

export async function answerSeoQuestion(input: AnswerSeoQuestionInput): Promise<AnswerSeoQuestionOutput> {
  return answerSeoQuestionFlow(input);
}


const SEO_TAHAKY_CONTEXT = `
Sekcia: On-Page SEO: Optimalizácia priamo na stránke
Obsah: On-Page SEO je základom všetkého. Sú to úpravy, ktoré máte plne pod kontrolou priamo na vašom webe. Optimalizácia titulkov (Title Tags): Každá stránka musí mať unikátny a výstižný titulok do 60 znakov, ktorý obsahuje hlavné kľúčové slovo. Meta popisy (Meta Descriptions): Pútavý popis do 160 znakov, ktorý láka na kliknutie. Hoci priamo neovplyvňuje pozície, má obrovský vplyv na mieru prekliku (CTR). Štruktúra nadpisov (H1, H2, H3): Používajte iba jeden H1 nadpis na stránke. Ostatné nadpisy (H2, H3...) používajte na logické členenie obsahu. Interné prelinkovanie: Odkazujte z nových článkov na staré a naopak. Pomáhate tým používateľom aj vyhľadávačom objavovať relevantný obsah. Optimalizácia obrázkov: Komprimujte obrázky a vždy vypĺňajte ALT texty. Pomáha to rýchlosti načítania a prístupnosti.

Sekcia: Technické SEO: Pevné základy pre váš web
Obsah: Technické SEO zabezpečuje, že vyhľadávače dokážu váš web bez problémov prechádzať, indexovať a pochopiť jeho obsah. Rýchlosť načítania: Váš web by sa mal načítať do 3 sekúnd. Používajte nástroje ako Google PageSpeed Insights a zamerajte sa na metriky Core Web Vitals. Responzívny dizajn: Stránka sa musí dokonale zobrazovať na všetkých zariadeniach – mobiloch, tabletoch aj desktopoch. SSL certifikát (HTTPS): Bezpečnosť je dnes štandard a Google weby bez HTTPS penalizuje. Sitemap.xml a Robots.txt: Tieto súbory dávajú vyhľadávačom mapu vášho webu a inštrukcie, čo (ne)majú indexovať. Štruktúrované dáta (Schema Markup): Pomôžte Googlu pochopiť kontext vášho obsahu (recenzie, produkty, udalosti) a získajte tak výhodu vo výsledkoch vyhľadávania vo forme rich snippets.

Sekcia: Link Building: Budovanie autority
Obsah: Spätné odkazy (backlinks) sú pre Google ako odporúčania. Čím viac kvalitných a relevantných webov na vás odkazuje, tým väčšiu autoritu máte. Kvalita nad kvantitou: Jeden odkaz z relevantného, autoritatívneho webu má väčšiu váhu ako 100 odkazov z nekvalitných stránok. Guest blogging: Píšte články pre iné weby vo vašom obore a získajte za to spätný odkaz. Analýza konkurencie: Zistite, odkiaľ získavajú odkazy vaši konkurenti, a skúste osloviť rovnaké weby. Broken Link Building: Nájdite nefunkčné odkazy na iných weboch a ponúknite im ako náhradu váš relevantný obsah.

Sekcia: Lokálne SEO: Dominujte vo svojom meste
Obsah: Ak máte kamennú prevádzku alebo pôsobíte v konkrétnom regióne, lokálne SEO je pre vás kľúčové. Google Business Profile: Vytvorte si a kompletne optimalizujte profil. Zbierajte recenzie, pridávajte fotky a pravidelne publikujte príspevky. Lokálne kľúčové slová: Optimalizujte na frázy ako "oprava mobilov Bratislava" alebo "reštaurácia v Trnave". Lokálne citácie (NAPs): Uistite sa, že vaše meno, adresa a telefónne číslo (Name, Address, Phone) sú konzistentné vo všetkých online registroch.
`;

const seoTahakyIndexer = defineIndexer(
    {
        name: TAHAKY_INDEX_NAME,
        embedder: 'googleai/embedding-004',
    },
    async () => {
        // This is a dummy indexing function. In a real app, you would fetch
        // your knowledge base from a database or file system.
        await index({
            indexer: TAHAKY_INDEX_NAME,
            docs: [
                {
                    content: SEO_TAHAKY_CONTEXT,
                    metadata: {
                        source: 'SEO Ťaháky',
                    }
                }
            ],
        });
    }
);


const seoTahakyRetriever = defineRetriever(
    {
        name: 'seo-tahaky-retriever',
        indexer: TAHAKY_INDEX_NAME,
    },
);

const prompt = ai.definePrompt({
  name: 'answerSeoQuestionPrompt',
  input: { schema: z.object({
      question: z.string(),
      docs: z.array(z.any())
  }) },
  output: { schema: AnswerSeoQuestionOutputSchema },
  prompt: `
    You are a helpful SEO expert assistant. Your task is to answer the user's question based *only* on the provided context, which contains our SEO knowledge base.

    CONTEXT:
    ---
    {{#each docs}}
        {{content}}
    {{/each}}
    ---

    USER'S QUESTION: "{{{question}}}"

    INSTRUCTIONS:
    1.  Read the user's question carefully.
    2.  Find the most relevant section in the provided CONTEXT to answer the question.
    3.  Generate a clear, concise, and direct answer in Slovak. Use markdown for lists if appropriate.
    4.  Your answer MUST be based exclusively on the information in the CONTEXT. Do not use any external knowledge.
    5.  Identify the "Sekcia:" (section heading) from the context that you used to formulate the answer and set it as the 'source' in the output. If no single section is a clear source, you can leave it empty.
  `,
});

const answerSeoQuestionFlow = ai.defineFlow(
  {
    name: 'answerSeoQuestionFlow',
    inputSchema: AnswerSeoQuestionInputSchema,
    outputSchema: AnswerSeoQuestionOutputSchema,
  },
  async (input) => {
     await seoTahakyIndexer();
     
     const docs = await retrieve({
        retriever: seoTahakyRetriever,
        query: input.question,
        options: { k: 1 },
    });

    const { output } = await prompt({ ...input, docs });
    return output!;
  }
);
