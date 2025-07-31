
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SeoRastPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">SEO Balík: Rast</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Pre rastúce weby a freelancerov, ktorí chcú získať náskok pred konkurenciou a získať si svoje miesto na trhu.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Objednať Balík Rast</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
               <section className="grid items-center gap-12 md:grid-cols-2 mb-20">
                    <div>
                         <Image
                            src="https://img.freepik.com/free-vector/analytics-concept-illustration_114360-735.jpg?w=600"
                            alt="Graf znázorňujúci rast návštevnosti"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-2xl shadow-primary/10 mx-auto"
                            data-ai-hint="traffic growth graph"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Akcelerujte Váš Online Rast</h2>
                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                           S balíkom Rast prejdeme od základov k pokročilejším technikám. Zameriame sa na technické SEO, začneme systematicky budovať autoritu vášho webu prostredníctvom kvalitných spätných odkazov a optimalizujeme vašu lokálnu viditeľnosť, aby vás našli aj zákazníci vo vašom okolí.
                        </p>
                    </div>
                 </section>

                 <section className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Pre koho je balík Rast?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                        Tento balíček je určený pre zabehnuté blogy, malé firmy, e-shopy a freelancerov, ktorí už majú vytvorený obsah a chcú systematicky zvyšovať svoju organickú návštevnosť. Ak vaše podnikanie rastie a chcete, aby rástla aj vaša online prítomnosť, toto je balík pre vás.
                    </p>
                </section>

                 <section className="mb-20">
                     <Card className="bg-muted/50 border-border/50">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl font-bold text-center">Čo Rast prináša navyše?</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg">
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Všetko z balíka Štart</h3>
                                    <p className="text-sm text-muted-foreground">Získavate všetky výhody základného balíka ako pevný základ.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Pokročilá analýza kľúčových slov (do 50)</h3>
                                    <p className="text-sm text-muted-foreground">Rozšírime záber a nájdeme ďalšie príležitosti na oslovenie vašej cieľovej skupiny.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Technické SEO</h3>
                                    <p className="text-sm text-muted-foreground">Optimalizujeme rýchlosť načítania, štruktúrované dáta a ďalšie technické aspekty pre lepší výkon.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Budovanie 3 spätných odkazov/mesiac</h3>
                                    <p className="text-sm text-muted-foreground">Začneme budovať autoritu vášho webu prostredníctvom kvalitných odkazov z relevantných zdrojov.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Google Business Profile optimalizácia</h3>
                                    <p className="text-sm text-muted-foreground">Zlepšíme vašu viditeľnosť v lokálnom vyhľadávaní a na mapách.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-sm text-muted-foreground">349 € / mesiac</p>
                                </div>
                            </div>
                        </CardContent>
                     </Card>
                </section>

                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Je čas rásť rýchlejšie ako konkurencia.</h2>
                      <Button size="lg" asChild>
                        <Link href="/contact">
                            Chcem Balík Rast
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    )
}
