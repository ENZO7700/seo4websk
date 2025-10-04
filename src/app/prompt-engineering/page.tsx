
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Lightbulb, Bot, Sparkles, Copy, BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import LottiePlayer from '@/components/ui/lottie-player';
import aiStrategyAnimation from '@/animations/ai-strategy.json';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "anticipate",
    },
  },
};

const PromptCard = ({ title, description, prompt }: { title: string, description: string, prompt: string }) => {
    const { toast } = useToast();

    const handleCopy = () => {
        navigator.clipboard.writeText(prompt);
        toast({
            title: "Prompt skopírovaný!",
            description: "Môžete ho vložiť do vášho obľúbeného AI nástroja.",
        });
    };

    return (
        <Card className="bg-galaxy/50 border-spaceship">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-aurora">
                    <Lightbulb />
                    {title}
                </CardTitle>
                <CardDescription className="text-rocket">{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <pre className="bg-space/50 p-4 rounded-md overflow-x-auto text-sm text-light font-mono whitespace-pre-wrap">
                    {prompt}
                </pre>
            </CardContent>
            <CardFooter>
                <Button variant="ghost" onClick={handleCopy} className="text-aurora hover:bg-aurora/10 hover:text-aurora">
                    <Copy className="mr-2" />
                    Skopírovať Prompt
                </Button>
            </CardFooter>
        </Card>
    )
}

export default function PromptEngineeringPage() {
    return (
        <div className="bg-space text-light">
             <header className="relative bg-galaxy py-20 sm:py-32 overflow-hidden">
                 <div className="absolute inset-0 z-0 opacity-20">
                    <div 
                    className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_at_50%_50%,var(--aurora),rgba(56,224,140,0)_60%)]"
                    style={{ animation: 'aurora-pulse 12s infinite alternate' }}
                    />
                    <div 
                    className="absolute bottom-0 right-[-20%] top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_at_50%_50%,var(--sky),rgba(29,116,246,0)_60%)]"
                    style={{ animation: 'sky-pulse 15s infinite alternate' }}
                    />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-4 text-light font-headline">Prompt Stratégia: Plán na 10 000 €/mesiac</motion.h1>
                        <motion.p variants={itemVariants} className="text-xl max-w-3xl mx-auto text-rocket mb-8 text-balance">
                           Toto je váš kompletný manuál, ako transformovať túto aplikáciu na prémiovú, AI-poháňanú SEO platformu a dosiahnuť finančný úspech.
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <Button size="lg" asChild className="bg-sky hover:bg-night-sky text-light">
                                <Link href="#phase-1">Začať Transformáciu</Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
                 <style jsx global>{`
                    @keyframes aurora-pulse {
                    0% { transform: scale(0.8) translate(20%, -10%); opacity: 0.1; }
                    50% { opacity: 0.25; }
                    100% { transform: scale(1.2) translate(-10%, 10%); opacity: 0.1; }
                    }
                    @keyframes sky-pulse {
                    0% { transform: scale(0.9) translate(-15%, 15%); opacity: 0.15; }
                    50% { opacity: 0.3; }
                    100% { transform: scale(1.1) translate(10%, -5%); opacity: 0.15; }
                    }
                `}</style>
            </header>

            <main className="container mx-auto py-24 px-4 space-y-24">
                <section id="intro-strategy" className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline text-light">Nová Vízia: All-in-One AI SEO Platforma</h2>
                        <p className="text-lg text-rocket mb-4 text-balance">
                           Našim cieľom je premeniť súčasnú webovú stránku na komplexný nástroj pre slovenských marketérov, podnikateľov a SEO špecialistov. Namiesto roztrúsených nástrojov vytvoríme jednotnú platformu, ktorá ponúkne všetko od auditu, cez analýzu, až po generovanie obsahu a obrázkov – všetko poháňané umelou inteligenciou.
                        </p>
                        <p className="text-lg text-rocket text-balance">
                           Tento plán je rozdelený do fáz, pričom každá fáza obsahuje konkrétne "prompty", ktoré môžete použiť na okamžité generovanie obsahu, kódu alebo stratégie pomocou AI.
                        </p>
                    </div>
                    <div>
                        <LottiePlayer animationData={aiStrategyAnimation} className="max-w-md mx-auto" />
                    </div>
                </section>

                <Accordion type="single" collapsible className="w-full space-y-8" defaultValue="item-1">
                    
                    <AccordionItem value="item-1" id="phase-1" className="bg-galaxy/30 border-spaceship rounded-lg p-6">
                        <AccordionTrigger className="text-2xl md:text-3xl font-headline text-aurora hover:no-underline">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center justify-center h-12 w-12 rounded-full bg-aurora/10 text-aurora font-bold text-xl">1</span>
                                Fáza 1: Dokonalá Landing Page
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-6">
                            <p className="text-rocket mb-6 text-balance">Prvý dojem rozhoduje. Potrebujeme vytvoriť novú landing page, ktorá jasne komunikuje hodnotu našej novej AI platformy, buduje dôveru a konvertuje návštevníkov na platiacich zákazníkov. Táto stránka nahradí súčasnú homepage.</p>
                            <PromptCard 
                                title="Prompt na Generovanie Landing Page"
                                description="Tento prompt vygeneruje kompletnú štruktúru a texty pre novú, vysoko-konverznú landing page."
                                prompt={`
ROLE: Expert na copywriting a marketingové stratégie pre SaaS produkty.

TASK: Vytvor kompletný obsah a štruktúru pre novú landing page pre produkt s názvom "Seo4Web AI Suite". Cieľom je predať all-in-one AI platformu pre SEO a marketing na slovenskom trhu.

CIEĽOVÁ SKUPINA: Freelanceri, marketéri v malých a stredných firmách, majitelia e-shopov na Slovensku.

ŠTRUKTÚRA A OBSAH LANDING PAGE:

1.  **Hero Sekcia:**
    *   **Headline:** Vytvor 3 varianty chytľavého nadpisu. Musí byť krátky, úderný a komunikovať hlavnú výhodu. Napr: "Vaše SEO na Autopilota. Získajte Viac Zákazníkov s Umelou Inteligenciou."
    *   **Sub-headline:** Rozviň hlavný nadpis. Jasne popíš, čo produkt robí a pre koho je určený (2-3 vety).
    *   **CTA (Call to Action):** Výzva k akcii. Vytvor text pre hlavné tlačidlo (napr. "Vyskúšať na 7 dní zadarmo") a sekundárne tlačidlo/link (napr. "Pozrieť demo").
    *   **Vizuál:** Navrhni, aký vizuál by sa tu hodil (napr. animácia dashboardu, krátke video ukazujúce kľúčové funkcie).

2.  **Sekcia "Problém/Riešenie" (Ako to funguje):**
    *   Stručne popíš 3 hlavné problémy, s ktorými marketéri bojujú (napr. nedostatok času, zložitosť SEO, vysoké náklady na agentúry).
    *   Ku každému problému priraď konkrétnu funkciu "Seo4Web AI Suite" ako riešenie (napr. Problém: Pomalá tvorba obsahu -> Riešenie: AI Copywriter, ktorý generuje SEO-friendly články za minúty).

3.  **Sekcia "Funkcie" (Features):**
    *   Vymenuj a stručne (1 veta) popíš 5 kľúčových funkcií:
        *   AI SEO Audit (hĺbková analýza webu)
        *   AI Copywriter (generátor blogov a textov)
        *   AI Headline Analyzer (analyzátor titulkov)
        *   AI Image Generator (generátor obrázkov)
        *   AI Keyword Research (prieskum kľúčových slov)
    *   Pre každú funkciu použi ikonku a krátky, pútavý názov.

4.  **Sekcia "Social Proof" (Dôkaz):**
    *   Napíš 3 fiktívne, ale realistické testimonialy (hodnotenia) od rôznych typov zákazníkov (freelancer, majiteľ e-shopu, marketingový manažér). Uveď meno, pozíciu a fotku.
    *   Spomeň možnosť zobrazenia log známych firiem (placeholder).

5.  **Cenníková Sekcia (Pricing):**
    *   Navrhni 3 cenové balíky (napr. ŠTART, PRO, EXPERT).
    *   Pre každý balík uveď cenu (napr. 19€, 49€, 99€ mesačne), hlavné limity (napr. počet auditov, počet generovaných článkov) a pre koho je určený.
    *   Zvýrazni najpopulárnejší balík.

6.  **Finálne CTA:**
    *   Zopakuj hlavnú výzvu k akcii s pocitom urgencie alebo špeciálnou ponukou (napr. "Získajte náskok pred konkurenciou. Začnite svoju 7-dňovú skúšobnú verziu ešte dnes.").

TÓN KOMUNIKÁCIE: Profesionálny, ale prístupný a zrozumiteľný. Zameraný na benefity, nie len na funkcie. Používaj slovenčinu.
                                `}
                            />
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" id="phase-2" className="bg-galaxy/30 border-spaceship rounded-lg p-6">
                        <AccordionTrigger className="text-2xl md:text-3xl font-headline text-aurora hover:no-underline">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center justify-center h-12 w-12 rounded-full bg-aurora/10 text-aurora font-bold text-xl">2</span>
                                Fáza 2: Vylepšenie Sekcií
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-6">
                            <p className="text-rocket mb-6 text-balance">Každú existujúcu sekciu premeníme z pasívnej informačnej stránky na interaktívny nástroj, ktorý vtiahne používateľa do deja a ukáže mu hodnotu našej platformy.</p>
                            <div className="space-y-4">
                                <PromptCard 
                                    title="Prompt pre /sluzby"
                                    description="Premení statický zoznam služieb na interaktívny kvíz, ktorý používateľovi odporučí službu na mieru."
                                    prompt={`
ROLE: Expert na UX dizajn a interaktívny marketing.

TASK: Navrhni vylepšenie pre stránku so zoznamom služieb. Namiesto statického zoznamu vytvor koncept pre krátky, interaktívny kvíz (3-4 otázky), ktorý návštevníkovi pomôže vybrať si tú správnu službu alebo balík.

PRÍKLAD OTÁZOK:
1.  "Aký je váš hlavný cieľ?" (Možnosti: Zvýšiť návštevnosť, Zlepšiť konverzie, Budovať značku)
2.  "Aký je váš mesačný rozpočet na marketing?" (Možnosti: slider od 0 do 1000€)
3.  "V akej fáze je váš projekt?" (Možnosti: Ešte len začínam, Mám web, ale stagnuje, Som líder na trhu)

VÝSTUP KVÍZU:
Na základe odpovedí kvíz zobrazí personalizované odporúčanie - napr. "Zdá sa, že pre vás je ideálny balík SEO RAST. Zameriame sa na technické SEO a budovanie odkazov, aby sme naštartovali vašu návštevnosť. Chcete nezáväznú konzultáciu?"

VÝSTUP PROMPTU:
Vygeneruj React/JSX kód pre tento kvízový komponent s použitím a komponentov z knižnice shadcn/ui (RadioGroup, Slider, Button, Card). Kód by mal obsahovať základnú logiku na zobrazenie otázok a finálneho odporúčania.
                                    `}
                                />
                                 <PromptCard 
                                    title="Prompt pre /tahaky"
                                    description="Premení SEO ťaháky na dynamickú 'knowledge base' s AI-poháňaným vyhľadávaním."
                                    prompt={`
ROLE: AI Architekt a backend inžinier.

TASK: Navrhni vylepšenie pre stránku "SEO Ťaháky". Premeníme ju na dynamickú znalostnú databázu s AI vyhľadávaním.

KONCEPT:
1.  **Obsah:** Existujúce ťaháky (On-Page, Technické, Link Building) budú slúžiť ako základné dokumenty pre AI.
2.  **AI Vyhľadávanie:** Na vrchu stránky bude vyhľadávacie pole. Keď používateľ zadá otázku (napr. "ako optimalizovať obrázky?"), AI neprehľadáva len kľúčové slová, ale pochopí kontext a vygeneruje priamu, súhrnnú odpoveď na základe obsahu ťahákov.
3.  **Zdrojovanie:** Pod každou vygenerovanou odpoveďou AI uvedie zdroj - odkaz na konkrétnu sekciu v ťahákoch, z ktorej čerpala informácie.

VÝSTUP PROMPTU:
Vytvor Genkit flow v TypeScripte s názvom 'answerSeoQuestion'. Flow bude používať Genkit RAG (Retrieval-Augmented Generation) API.
- Bude mať jeden vstup: 'question: string'.
- Bude mať jeden výstup: 'answer: string' a 'source: string'.
- Použije preddefinovaný index 'seoTahakyIndex', ktorý obsahuje dáta z ťahákov.
- Vytvorí prompt, ktorý inštruuje LLM, aby odpovedal na otázku stručne a výhradne na základe poskytnutého kontextu z indexu a aby vždy citoval zdroj.
                                    `}
                                />
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                     <AccordionItem value="item-3" id="phase-3" className="bg-galaxy/30 border-spaceship rounded-lg p-6">
                        <AccordionTrigger className="text-2xl md:text-3xl font-headline text-aurora hover:no-underline">
                           <div className="flex items-center gap-4">
                                <span className="flex items-center justify-center h-12 w-12 rounded-full bg-aurora/10 text-aurora font-bold text-xl">3</span>
                                Fáza 3: Experimentálne Mini-Aplikácie
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-6">
                            <p className="text-rocket mb-6 text-balance">Vytvoríme novú sekciu "Laboratórium", kde budeme postupne pridávať malé, užitočné AI nástroje. Tieto nástroje budú zadarmo, budú slúžiť ako "lead magnet" na prilákanie nových používateľov a zároveň nám pomôžu otestovať, o ktoré funkcie je najväčší záujem pre budúcu robustnú aplikáciu.</p>
                             <div className="space-y-4">
                                <PromptCard 
                                    title="Prompt pre 'Generátor Meta Popisov'"
                                    description="Vytvorí jednoduchý nástroj, kam používateľ zadá URL a AI vygeneruje 3 varianty SEO-friendly meta popisu."
                                    prompt={`
ROLE: Full-stack vývojár so zameraním na Next.js a Genkit.

TASK: Vytvor Genkit flow a jednoduchý React komponent pre nástroj "Generátor Meta Popisov".

GENKIT FLOW ('generateMetaDescriptionFlow'):
- Vstup: 'pageContent: string', 'keywords: string'.
- Výstup: 'descriptions: string[]' (pole s 3 variantmi meta popisu).
- Prompt: Inštruuj LLM, aby na základe obsahu stránky a kľúčových slov vygeneroval 3 pútavé a unikátne meta popisy do 160 znakov.

REACT KOMPONENT ('MetaDescriptionGenerator.tsx'):
- Bude obsahovať dve polia: jedno pre URL adresu a jedno pre hlavné kľúčové slovo.
- Po zadaní URL komponent na pozadí načíta obsah stránky (môžeš použiť existujúci scraperService).
- Po kliknutí na tlačidlo "Generovať" zavolá Genkit flow a zobrazí 3 vygenerované varianty meta popisov, každú s tlačidlom na skopírovanie.
- Použi komponenty z shadcn/ui (Input, Button, Card).
                                    `}
                                />
                                 <PromptCard 
                                    title="Prompt pre 'Analyzátor Sémantickej Relevantnosti'"
                                    description="Nástroj, kde používateľ zadá hlavné kľúčové slovo a text článku a AI zhodnotí, či je text sémanticky relevantný a navrhne súvisiace témy."
                                    prompt={`
ROLE: AI inžinier a SEO špecialista.

TASK: Vytvor Genkit flow pre nástroj "Analyzátor Sémantickej Relevantnosti".

GENKIT FLOW ('analyzeSemanticRelevanceFlow'):
- Vstup: 'mainKeyword: string', 'articleText: string'.
- Výstup: Objekt s poľami: 'relevanceScore: number (0-100)', 'analysis: string' (slovné zhodnotenie, prečo je skóre také, aké je), 'suggestedTopics: string[]' (zoznam 3-5 súvisiacich tém alebo entít, ktoré v texte chýbajú).
- Prompt: Inštruuj LLM, aby sa správal ako expert na sémantické SEO. Na základe hlavného kľúčového slova a textu článku má:
    1. Ohodnotiť na škále 0-100, ako dobre text pokrýva danú tému a súvisiace podtémy.
    2. Poskytnúť krátke slovné vysvetlenie svojho hodnotenia.
    3. Identifikovať a vymenovať dôležité sémanticky súvisiace entity alebo podtémy, ktoré by mal autor do článku doplniť, aby bol komplexnejší.
                                    `}
                                />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-4" id="phase-4" className="bg-galaxy/30 border-spaceship rounded-lg p-6">
                        <AccordionTrigger className="text-2xl md:text-3xl font-headline text-aurora hover:no-underline">
                             <div className="flex items-center gap-4">
                                <span className="flex items-center justify-center h-12 w-12 rounded-full bg-aurora/10 text-aurora font-bold text-xl">4</span>
                                Fáza 4: Marketing a Monetizácia
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-6">
                            <p className="text-rocket mb-6 text-balance">Skvelý produkt je len polovica úspechu. Potrebujeme solídny plán, ako ho dostať k správnym ľuďom a premeniť ho na ziskový biznis.</p>
                             <PromptCard 
                                    title="Prompt pre Marketingový a Monetizačný Plán"
                                    description="Tento prompt vygeneruje komplexnú stratégiu na uvedenie produktu na trh, získanie prvých 100 platiacich zákazníkov a dosiahnutie cieľa 10 000 € mesačne."
                                    prompt={`
ROLE: SaaS marketingový riaditeľ (CMO) a produktový manažér s preukázateľnými úspechmi na slovenskom trhu.

TASK: Vytvor detailný marketingový a monetizačný plán pre "Seo4Web AI Suite" s cieľom dosiahnuť mesačný opakovaný príjem (MRR) 10 000 €.

PLÁN MUSÍ OBSAHOVAŤ NASLEDUJÚCE SEKCIE:

1.  **Monetizačný Model:**
    *   Navrhni detailné 3 cenové balíky (napr. FREE, PRO, EXPERT).
    *   Pre každý balík definuj: cenu, cieľovú skupinu, kľúčové funkcie a limity (napr. počet SEO auditov/mesiac, počet generovaných článkov, počet používateľov).
    *   Zahrň "freemium" model - FREE balík bude obsahovať bezplatné experimentálne mini-aplikácie s veľmi obmedzenými kreditmi, aby slúžil ako efektívny lead magnet.

2.  **Marketingová Stratégia - Fáza 1: Uvedenie na trh (Prvých 100 zákazníkov):**
    *   **Product Hunt Launch:** Detailne popíš stratégiu pre úspešný launch na Product Hunt (príprava, vizuály, komunikácia).
    *   **Obsahový Marketing:** Navrhni 5 tém pre blogové články, ktoré priamo oslovia cieľovú skupinu a predstavia riešenie ich problémov (napr. "Ako som napísal 10 SEO článkov za deň pomocou AI").
    *   **Komunitný Marketing:** Identifikuj 3 slovenské/české Facebookové skupiny alebo fóra, kde sa zdržiava cieľová skupina (napr. "Online Podnikatelia", "Marketingová Všehochuť") a navrhni spôsob, ako tam nevtieravo prezentovať produkt.
    *   **Partnerský Program:** Navrhni základné podmienky pre affiliate program (výška provízie, dĺžka cookie), ktorý by motivoval marketérov a influencerov propagovať náš nástroj.

3.  **Marketingová Stratégia - Fáza 2: Škálovanie (Cesta k 10 000 € MRR):**
    *   **Platená Reklama (PPC):** Navrhni štruktúru kampane pre Google Ads (Search) a Facebook/Instagram Ads. Aké kľúčové slová a publiká cieliť? Aký by mal byť odhadovaný rozpočet?
    *   **SEO pre Vlastný Produkt:** Aké kľúčové slová by sme mali cieliť, aby sme organicky získavali používateľov, ktorí hľadajú "SEO nástroje", "AI copywriting" a pod.?
    *   **Email Marketing:** Navrhni sekvenciu 3 emailov pre používateľov vo free triale, ktorá ich presvedčí prejsť na platenú verziu.

4.  **Kľúčové Metriky (KPIs):**
    *   Definuj 5 najdôležitejších metrík, ktoré budeme sledovať pre vyhodnotenie úspechu (napr. MRR, Churn Rate, Customer Acquisition Cost, LTV, Conversion Rate z free na platenú verziu).

VÝSTUP: Detailne rozpísaný dokument vo formáte Markdown, ktorý slúži ako priamy akčný plán pre marketingový tím.
                                    `}
                                />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </main>
        </div>
    );
}
