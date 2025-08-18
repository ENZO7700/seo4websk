'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SeoLiderPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">SEO Balík: Líder</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Pre etablované projekty a firmy, ktorých cieľom je dominovať vo svojom segmente a stať sa autoritou na trhu.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Objednať Balík Líder</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
               <section className="grid items-center gap-12 md:grid-cols-2 mb-20">
                    <div>
                         <Image
                            src="https://img.freepik.com/free-vector/link-building-concept-illustration_114360-3547.jpg?w=400"
                            alt="Ilustrácia budovania silnej siete odkazov"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-2xl shadow-primary/10 mx-auto"
                            data-ai-hint="link building network"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Staňte sa Lídrom na Trhu</h2>
                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                           Balík Líder je naša najkomplexnejšia ponuka pre individuálnych klientov a menšie firmy s veľkými ambíciami. Už sa nezameriavame len na to, aby sme boli lepší ako konkurencia - naším cieľom je stať sa referenčným bodom na trhu. Zameriavame sa na agresívne budovanie odkazov, tvorbu obsahovej stratégie, ktorá vás odlíši, a detailné sledovanie konkurencie, aby sme vás dostali na absolútnu špičku vo výsledkoch vyhľadávania.
                        </p>
                    </div>
                 </section>

                  <section className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Pre koho je balík Líder?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                       Pre ambiciózne firmy, e-shopy a profesionálov, ktorí sa neuspokoja s priemerom. Ak chcete byť vnímaní ako autorita vo svojom odbore, potrebujete strategický prístup, ktorý kombinuje technickú excelentnosť s kvalitným obsahom, ktorý rezonuje s vašou cieľovou skupinou, a silným odkazovým profilom, ktorý vám dáva rešpekt u vyhľadávačov.
                    </p>
                </section>

                 <section className="mb-20">
                     <Card className="bg-muted/50 border-border/50">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl font-bold text-center">Čo získate s balíkom Líder?</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg pt-6">
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Všetko z balíka Rast</h3>
                                    <p className="text-sm text-muted-foreground">Staviame na pevných základoch a pridávame pokročilé stratégie pre maximálny dopad.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Komplexná obsahová stratégia</h3>
                                    <p className="text-sm text-muted-foreground">Navrhneme témy a formáty obsahu (články, prípadové štúdie, videá, infografiky), ktoré prilákajú a udržia vašu cieľovú skupinu a zároveň generujú spätné odkazy.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Budovanie 7 spätných odkazov/mesiac</h3>
                                    <p className="text-sm text-muted-foreground">Intenzívnejší a cielený link building pre rýchlejšie budovanie autority a lepšie pozície aj pre vysoko konkurenčné kľúčové slová.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Monitoring konkurencie</h3>
                                    <p className="text-sm text-muted-foreground">Detailne sledujeme online aktivity vašich konkurentov, ich obsahové a link buildingové stratégie a hľadáme príležitosti, ako ich predbehnúť.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Prioritná podpora</h3>
                                    <p className="text-sm text-muted-foreground">Vaše požiadavky a otázky budú mať vždy najvyššiu prioritu a najkratší čas odozvy.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-sm text-muted-foreground font-bold text-lg">599 € / mesiac</p>
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
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Strategické plánovanie</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Na základe hĺbkovej analýzy trhu, konkurencie a vašich cieľov vytvoríme kvartálnu stratégiu zameranú na obsah a budovanie autority.</p>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                 <span className='font-bold text-primary'>2</span>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Tvorba a exekúcia</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Náš tím bude proaktívne pracovať na tvorbe obsahu, oslovovaní potenciálnych partnerov pre spätné odkazy a priebežnej optimalizácii.</p>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                 <span className='font-bold text-primary'>3</span>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Pravidelné strategické porady</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Budeme sa pravidelne stretávať, aby sme vyhodnotili výsledky, prediskutovali nové príležitosti a prispôsobili stratégiu aktuálnemu vývoju na trhu.</p>
                        </li>
                    </ol>
                </section>

                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Chcete byť číslom jedna? Poďme na to.</h2>
                      <Button size="lg" asChild>
                        <Link href="/contact">
                            Chcem Balík Líder
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    )
}
