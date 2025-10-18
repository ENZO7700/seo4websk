'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, ArrowUp, BarChart, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const kpi = [
    { value: '+112%', label: 'Organická Návštevnosť', description: 'Nárast za prvých 6 mesiacov spolupráce.' },
    { value: '+85%', label: 'Konverzie z Organiky', description: 'Zvýšenie počtu objednávok a dopytov.' },
    { value: 'TOP 3', label: 'Pozície na Kľúčové Slová', description: 'Umiestnenie na 15 z 20 najdôležitejších kľúčových slov.' },
];

export default function CaseStudyPage() {
    return (
        <div className="bg-background text-foreground">
            <header className="relative bg-card py-20 sm:py-32">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://img.freepik.com/free-vector/data-analysis-complexity-concept-illustration_114360-8413.jpg?w=1200"
                        alt="Analýza dát a grafov"
                        fill
                        className="object-cover"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                         <p className="text-primary font-semibold">Prípadová Štúdia</p>
                        <h1 className="text-4xl md:text-6xl font-bold my-4 text-foreground font-headline">Zdvojnásobenie organickej návštevnosti pre e-shop s módou</h1>
                        <p className="text-xl max-w-3xl mx-auto text-muted-foreground mb-8 text-balance">
                           Ako sme pomocou komplexnej SEO stratégie a technickej optimalizácie dosiahli masívny nárast viditeľnosti a tržieb pre nášho klienta.
                        </p>
                    </motion.div>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
                 <div className="max-w-4xl mx-auto">
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
                        {kpi.map((item, index) => (
                             <Card key={index} className="bg-muted/30 border text-center p-6">
                                <p className="text-4xl font-bold text-primary">{item.value}</p>
                                <p className="font-semibold text-foreground mt-2">{item.label}</p>
                                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                            </Card>
                        ))}
                    </div>

                    <div className="prose prose-lg dark:prose-invert text-foreground/90 max-w-none">
                        <h2 className="text-primary">Klient a Východisková Situácia</h2>
                        <p>
                           Náš klient, zabehnutý e-shop s prémiovou módou, čelil stagnácii organickej návštevnosti. Napriek kvalitnému produktu a silnej značke, ich online viditeľnosť nerástla a strácali pozície v prospech agresívnejšej konkurencie. Ich hlavným problémom bol zastaraný web postavený na pomalej platforme a absencia akejkoľvek obsahovej stratégie.
                        </p>

                        <h2 className="text-primary">Naša Stratégia a Postup</h2>
                        
                        <h3>1. Hĺbkový Technický Audit a Redizajn</h3>
                        <p>
                           Prvým krokom bol kompletný technický audit, ktorý odhalil kritické problémy: pomalé načítanie (Core Web Vitals), zlá indexovateľnosť produktových variácií a neefektívna vnútorná štruktúra odkazov. Rozhodli sme sa pre radikálny krok - migrácia na novú, rýchlejšiu platformu postavenú na technológii PWA. Tým sme zabezpečili bleskové načítanie a perfektný mobilný zážitok.
                        </p>

                        <h3>2. Analýza Kľúčových Slov a Obsahová Stratégia</h3>
                        <p>
                           Identifikovali sme stovky "long-tail" kľúčových slov, na ktoré konkurencia necielila. Vytvorili sme obsahový kalendár zameraný na tvorbu hodnotných článkov v blogovej sekcii (napr. "Ako kombinovať farby na jar", "Sprievodca materiálmi: Kašmír vs. Merino"). Tieto články prilákali nových návštevníkov v nákupnej fáze zvažovania a posilnili autoritu e-shopu.
                        </p>

                        <h3>3. Cielený Link Building</h3>
                        <p>
                           Paralelne s tvorbou obsahu sme spustili kampaň na budovanie spätných odkazov. Oslovili sme módnych blogerov, magazíny a influencerov. Vďaka kvalitnému obsahu na našom blogu sme dokázali získať hodnotné spätné odkazy, ktoré Google vnímal ako silné odporúčania.
                        </p>

                        <h2 className="text-primary">Výsledky a Záver</h2>
                        <p>
                           Po 6 mesiacoch intenzívnej práce boli výsledky ohromujúce. Nielenže sme zdvojnásobili organickú návštevnosť, ale vďaka lepšiemu používateľskému zážitku a relevantnejšiemu obsahu stúpol aj konverzný pomer. Táto prípadová štúdia dokazuje, že kombinácia precízneho technického SEO, strategického obsahu a kvalitného link buildingu je kľúčom k dlhodobému úspechu v extrémne konkurenčnom prostredí e-commerce.
                        </p>
                        <p>
                           Máte podobné výzvy? Nechajte si od nás urobiť <Link href="/seo-audit-akcia" className="text-primary/80 hover:underline">nezáväzný SEO audit</Link> a zistite, kde sa skrýva váš rastový potenciál.
                        </p>

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
