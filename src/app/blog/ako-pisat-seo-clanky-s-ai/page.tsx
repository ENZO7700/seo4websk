'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Bot, Lightbulb, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const PromptCard = ({ title, description, prompt, id }: { title: string, description: string, prompt: string, id: string }) => {
    return (
        <motion.div
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="bg-galaxy/50 border-spaceship my-8">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-aurora">
                        <Lightbulb />
                        {title}
                    </CardTitle>
                    <p className="text-rocket">{description}</p>
                </CardHeader>
                <CardContent>
                    <pre className="bg-space/50 p-4 rounded-md overflow-x-auto text-sm text-light font-mono whitespace-pre-wrap">
                        {prompt.trim()}
                    </pre>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default function AiSeoArticlePage() {
    return (
        <div className="bg-space text-light">
            <header className="relative bg-galaxy py-20 sm:py-32">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-8646.jpg?w=1200"
                        alt="AI a copywriting"
                        fill
                        className="object-cover"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-space via-space/70 to-transparent" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                         <p className="text-aurora font-semibold">Copywriting & AI</p>
                        <h1 className="text-4xl md:text-6xl font-bold my-4 text-light font-headline">Ako napísať 10 SEO článkov za deň s pomocou AI</h1>
                        <p className="text-xl max-w-3xl mx-auto text-rocket mb-8 text-balance">
                           Praktický návod a sada promptov, ktoré vám pomôžu dramaticky zrýchliť tvorbu kvalitného obsahu a škálovať vaše SEO aktivity.
                        </p>
                    </motion.div>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
                 <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg dark:prose-invert text-light/90 max-w-none">
                        <p className="lead text-xl text-rocket">
                            Tvorba obsahu je jedným z najväčších bottleneckov v SEO. Je časovo náročná, vyžaduje kreativitu a hĺbkový research. Čo ak by ste však mohli tento proces zrýchliť 10-násobne bez straty kvality? Ukážeme si, ako na to pomocou umelej inteligencie a správne formulovaných promptov.
                        </p>

                        <h2 className="text-aurora">Základný princíp: AI ako partner, nie náhrada</h2>
                        <p>
                           Kľúčom k úspechu nie je nechať AI napísať celý článok jedným klikom. Takýto obsah je často generický a bez hĺbky. Namiesto toho vnímajte AI ako svojho juniorného copywritera alebo výskumného asistenta. Vy ste stratég a editor, AI je exekutíva.
                        </p>

                        <h2 className="text-aurora">5 krokov k super-rýchlemu článku</h2>

                        <h3>Krok 1: Analýza kľúčového slova a SERPu</h3>
                        <p>Predtým, než napíšete čo i len slovo, musíte pochopiť, čo ľudia hľadajú a aký obsah Google preferuje. AI je v tomto geniálna.</p>
                        <PromptCard
                            id="prompt1"
                            title="Prompt #1: Analýza SERPu"
                            description="Tento prompt vám dá kompletný prehľad o tom, kto je na prvej strane, aký typ obsahu preferujú a aké témy pokrývajú."
                            prompt={`
Analyzuj výsledky vyhľadávania (SERP) pre kľúčové slovo "[vaše kľúčové slovo]".

Identifikuj:
1.  **Search Intent:** Aký je zámer používateľa? (Informačný, komerčný, transakčný?)
2.  **Formát obsahu:** Aký typ obsahu sa umiestňuje na top pozíciách? (Blogové články, návody, porovnania, videá, produkty?)
3.  **Hlavné podtémy:** Aké spoločné témy a otázky pokrývajú najlepšie články?
4.  **Unikátny uhol pohľadu:** Aká téma alebo uhol pohľadu chýba, alebo je pokrytá len povrchne? Nájdi medzeru na trhu.

VÝSTUP: Odpovedaj v štruktúrovaných bodoch.
                            `}
                        />

                        <h3>Krok 2: Vytvorenie osnovy článku</h3>
                        <p>Na základe analýzy zo SERPu si nechajte vytvoriť detailnú osnovu. Toto je kostra vášho článku.</p>
                         <PromptCard
                            id="prompt2"
                            title="Prompt #2: Generovanie osnovy"
                            description="S týmto promptom AI vytvorí logickú a komplexnú štruktúru pre váš článok vrátane H2 a H3 nadpisov."
                            prompt={`
Na základe analýzy SERPu pre kľúčové slovo "[vaše kľúčové slovo]" a identifikovaných podtém vytvor detailnú osnovu pre blogový článok.

Osnova musí obsahovať:
1.  Chytľavý H1 nadpis.
2.  Logickú štruktúru H2 a H3 nadpisov, ktoré pokrývajú všetky dôležité aspekty témy.
3.  Zahrň do osnovy aj sekciu FAQ (Často kladené otázky) s 3 relevantnými otázkami.
                            `}
                        />

                        <h3>Krok 3: Generovanie jednotlivých sekcií</h3>
                        <p>Teraz prichádza tá najväčšia časová úspora. Namiesto generovania celého textu naraz, generujte obsah pre každú sekciu osnovy zvlášť. Máte tak lepšiu kontrolu nad kvalitou.</p>
                        <PromptCard
                            id="prompt3"
                            title="Prompt #3: Generovanie obsahu sekcie"
                            description="Tento prompt použite pre každý H2/H3 nadpis z vašej osnovy."
                            prompt={`
Napíš obsah pre sekciu s nadpisom "[Názov H2/H3 nadpisu]".

INŠTRUKCIE:
- Píš pútavo, odborne, ale zrozumiteľne pre začiatočníka.
- Používaj krátke odseky, maximálne 3-4 vety.
- Ak je to vhodné, použi odrážky alebo číslovaný zoznam.
- Tón komunikácie: [formálny/neformálny/priateľský].
- Prirodzene do textu zakomponuj kľúčové slová: [súvisiace kľúčové slovo 1], [súvisiace kľúčové slovo 2].
                            `}
                        />

                        <h3>Krok 4: Editácia a pridanie ľudského dotyku</h3>
                        <p>Toto je krok, kde sa z dobrého obsahu stáva skvelý. Prečítajte si vygenerovaný text, opravte prípadné nezrovnalosti, doplňte vlastné skúsenosti, príklady alebo príbehy. AI je skvelá v spracovaní faktov, ale ľudský dotyk a emócia sú nenahraditeľné.</p>

                        <h3>Krok 5: Finálna SEO optimalizácia</h3>
                        <p>Na záver si nechajte text skontrolovať a navrhnúť finálne úpravy.</p>
                         <PromptCard
                            id="prompt4"
                            title="Prompt #4: Finálna SEO optimalizácia"
                            description="Tento prompt vám pomôže doladiť posledné detaily a vytvoriť pútavý meta popis."
                            prompt={`
Mám finálny text článku s H1 nadpisom "[Váš H1 nadpis]".

ÚLOHY:
1.  Navrhni 3 alternatívne, SEO-optimalizované a klikateľné H1 nadpisy.
2.  Vytvor pútavý meta popis do 160 znakov.
3.  Identifikuj 5 najdôležitejších sémanticky súvisiacich entít (LSI kľúčové slová), ktoré by mali byť v texte spomenuté.
                            `}
                        />

                        <h2 className="text-aurora">Záver</h2>
                        <p>S týmto procesom dokážete vytvoriť jeden kvalitný a SEO-optimalizovaný článok za menej ako hodinu. Pri troche praxe je reálne týmto spôsobom pripraviť 8-10 článkov za jeden pracovný deň. Kľúčom je systematický prístup a správne prompty. Vyskúšajte naše nástroje, ako je <Link href="/analyzer" className="text-sky hover:underline">Analyzátor titulkov</Link> alebo <Link href="/semantic-analyzer" className="text-sky hover:underline">Analyzátor sémantickej relevancie</Link>, ktoré vám tento proces ešte viac zjednodušia.</p>

                    </div>
                    <div className="mt-12 text-center">
                        <Button asChild>
                            <Link href="/blog">
                                <ArrowLeft className="mr-2"/>
                                Späť na Blog
                            </Link>
                        </Button>
                    </div>
                 </div>
            </main>
        </div>
    );
}
