
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SeoExpertPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">SEO Balík: Expert</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Pre špecialistov a expertov, ktorí chcú aktívne budovať svoju osobnú značku a stať sa autoritou vo svojom odbore.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Objednať Balík Expert</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
               <section className="grid items-center gap-12 md:grid-cols-2 mb-20">
                    <div>
                         <Image
                            src="https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148421063.jpg?w=600"
                            alt="Expert buduje svoju osobnú značku online"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-2xl shadow-primary/10 mx-auto"
                            data-ai-hint="personal brand building"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Od Experta k Autorite</h2>
                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                           Balík Expert je určený pre profesionálov, ktorí už majú znalosti a skúsenosti, ale potrebujú ich zviditeľniť. Pomôžeme vám premeniť vašu expertízu na silnú osobnú značku, ktorá priťahuje klientov a príležitosti. Zameriame sa na strategický obsah, budovanie autority a využitie sociálnych sietí na posilnenie vášho dosahu.
                        </p>
                    </div>
                 </section>

                  <section className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Pre koho je balík Expert?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                       Pre konzultantov, koučov, právnikov, finančných poradcov, IT špecialistov a všetkých freelancerov, ktorí predávajú svoje know-how. Ak chcete, aby si vás klienti našli vďaka vašim znalostiam a nie len cene, tento balík vám poskytne nástroje, ako na to.
                    </p>
                </section>

                 <section className="mb-20">
                     <Card className="bg-muted/50 border-border/50">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl font-bold text-center">Čo získate s balíkom Expert?</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg pt-6">
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Všetko z balíka Rast</h3>
                                    <p className="text-sm text-muted-foreground">Staviame na pevných základoch a pridávame stratégie pre budovanie osobnej značky.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Komplexná analýza kľúčových slov (do 100)</h3>
                                    <p className="text-sm text-muted-foreground">Zameriame sa na kľúčové slová, ktoré potvrdzujú vašu expertízu a priťahujú vysoko relevantných klientov.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Budovanie 5 spätných odkazov/mesiac</h3>
                                    <p className="text-sm text-muted-foreground">Cielený link building zameraný na získavanie odkazov z rešpektovaných portálov vo vašom odbore a hosťovské blogovanie.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Konzultácie (1 hod/mesiac)</h3>
                                    <p className="text-sm text-muted-foreground">Pravidelné stretnutia, kde preberieme obsahovú stratégiu, výsledky a ďalšie kroky pre posilnenie vašej značky.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Základná optimalizácia sociálnych sietí</h3>
                                    <p className="text-sm text-muted-foreground">Poradíme vám, ako prepojiť SEO so sociálnymi sieťami (najmä LinkedIn) a ako konzistentne budovať vašu online prítomnosť.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-sm text-muted-foreground font-bold text-lg">449 € / mesiac</p>
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
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Definovanie expertízy a cieľov</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Na začiatku si definujeme vašu unikátnu pozíciu na trhu, kľúčové oblasti expertízy a ciele budovania osobnej značky.</p>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                 <span className='font-bold text-primary'>2</span>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Obsahový plán a exekúcia</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Vytvoríme publikačný plán (blog, príspevky na LinkedIn, prípadové štúdie) a pomôžeme vám s tvorbou obsahu, ktorý vás ukáže ako autoritu.</p>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                 <span className='font-bold text-primary'>3</span>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Networking a budovanie autority</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Systematicky budujeme spätné odkazy a hľadáme príležitosti na zviditeľnenie (rozhovory, podcasty, hosťovanie na webinároch).</p>
                        </li>
                    </ol>
                </section>

                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Pripravení zarábať na svojom mene?</h2>
                      <Button size="lg" asChild>
                        <Link href="/contact">
                            Chcem Balík Expert
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    )
}
