
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SeoStartPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">SEO Balík: Štart</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Ideálne riešenie pre začínajúcich podnikateľov, malé blogy a projekty, ktoré potrebujú pevné SEO základy.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Objednať Balík Štart</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
               <section className="grid items-center gap-12 md:grid-cols-2 mb-20">
                    <div>
                         <Image
                            src="https://img.freepik.com/free-vector/search-engine-optimization-concept-illustration_114360-7579.jpg?w=400"
                            alt="Raketa štartujúca do vesmíru ako metafora pre SEO štart"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-2xl shadow-primary/10 mx-auto"
                            data-ai-hint="seo startup rocket"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Prvý Krok k Viditeľnosti</h2>
                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                           Balík Štart je navrhnutý tak, aby váš web získal správne nasmerovanie vo svete vyhľadávačov. Zameriame sa na najdôležitejšie on-page faktory a analýzu kľúčových slov, aby ste oslovili prvých relevantných návštevníkov. Je to investícia do budúcnosti vášho webu, ktorá položí základy pre ďalší rast. Nepotrebujete obrovský rozpočet na to, aby ste začali robiť SEO správne.
                        </p>
                    </div>
                </section>

                 <section className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Pre koho je balík Štart?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                        Tento balíček je ideálny pre nové webové stránky, lokálne podniky, blogerov a živnostníkov, ktorí majú obmedzený rozpočet, ale chápu dôležitosť organickej návštevnosti. Ak len začínate so SEO a chcete vidieť prvé výsledky a pochopiť, ako SEO funguje, toto je správna a bezpečná voľba. Je to perfektný odrazový mostík.
                    </p>
                </section>

                <section className="mb-20">
                     <Card className="bg-muted/50 border-border/50">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl font-bold text-center">Čo presne získate?</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg pt-6">
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Analýza kľúčových slov (do 20)</h3>
                                    <p className="text-sm text-muted-foreground">Nájdeme najrelevantnejšie kľúčové slová s nízkou konkurenciou (tzv. long-tail keywords), na ktoré sa oplatí zamerať na začiatku pre rýchlejšie výsledky.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Základný SEO audit</h3>
                                    <p className="text-sm text-muted-foreground">Preveríme váš web a identifikujeme najzávažnejšie technické a obsahové nedostatky, ktoré bránia vášmu úspechu vo vyhľadávaní.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">On-page optimalizácia (5 stránok)</h3>
                                    <p className="text-sm text-muted-foreground">Optimalizujeme titulky, meta popisy, nadpisy a obsah na piatich kľúčových stránkach vášho webu pre maximálnu relevanciu.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Mesačný report</h3>
                                    <p className="text-sm text-muted-foreground">Dostanete prehľadný report o vykonaných prácach a vývoji pozícií pre sledované kľúčové slová. Vždy budete vedieť, za čo platíte.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-sm text-muted-foreground font-bold text-lg">199 € / mesiac</p>
                                </div>
                            </div>
                        </CardContent>
                     </Card>
                </section>
                
                 <section className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-headline">Náš Proces Spolupráce</h2>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                        <li className="mb-10 ml-6">            
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <span className='font-bold text-primary'>1</span>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Úvodná analýza a Kick-off</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Na úvodnom stretnutí si prejdeme vaše ciele a spravíme základný audit a analýzu kľúčových slov, aby sme vedeli, kde začať.</p>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                 <span className='font-bold text-primary'>2</span>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Mesačná optimalizácia</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Každý mesiac sa zameriame na implementáciu odporúčaní z auditu a postupnú on-page optimalizáciu podľa dohodnutého plánu.</p>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                 <span className='font-bold text-primary'>3</span>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Reporting a Konzultácie</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Na konci mesiaca dostanete report s výsledkami a v prípade potreby si môžeme zavolať a prebrať ďalšie kroky a odporúčania.</p>
                        </li>
                    </ol>
                </section>

                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Začnite svoju cestu k lepším pozíciám ešte dnes.</h2>
                      <Button size="lg" asChild>
                        <Link href="/contact">
                            Chcem Balík Štart
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    )
}
