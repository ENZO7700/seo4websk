
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SeoRastPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-card py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">SEO Balík: Rast</h1>
                    <p className="text-xl max-w-3xl mx-auto text-muted-foreground mb-8 text-balance">
                        Pre rastúce weby a freelancerov, ktorí chcú získať náskok pred konkurenciou a vybudovať si stabilné miesto na trhu.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/signup?plan=rast">Objednať Balík Rast</Link>
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
                           S balíkom Rast prejdeme od základov k pokročilejším technikám. Už sa nepozeráme len na on-page faktory, ale aktívne budujeme autoritu vášho webu. Zameriame sa na technické SEO, začneme systematicky budovať kvalitné spätné odkazy a optimalizujeme vašu lokálnu viditeľnosť, aby vás našli aj zákazníci vo vašom okolí.
                        </p>
                    </div>
                 </section>

                 <section className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Pre koho je balík Rast?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                        Tento balíček je určený pre zabehnuté blogy, malé firmy, e-shopy a freelancerov, ktorí už majú vytvorený obsah a chcú systematicky zvyšovať svoju organickú návštevnosť a predbehnúť konkurenciu. Ak vaše podnikanie rastie a chcete, aby vaša online prítomnosť rástla ešte rýchlejšie, toto je balík pre vás.
                    </p>
                </section>

                 <section className="mb-20">
                     <Card className="bg-card border">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl font-bold text-center text-foreground">Čo Rast prináša navyše?</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg pt-6">
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Všetko z balíka Štart</h3>
                                    <p className="text-sm text-muted-foreground">Získavate všetky výhody základného balíka ako pevný základ, na ktorom budeme stavať ďalšie úspechy.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Pokročilá analýza kľúčových slov (do 50)</h3>
                                    <p className="text-sm text-muted-foreground">Rozšírime záber a nájdeme ďalšie príležitosti na oslovenie vašej cieľovej skupiny. Zameriame sa aj na komerčné kľúčové slová.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Technické SEO</h3>
                                    <p className="text-sm text-muted-foreground">Optimalizujeme rýchlosť načítania (Core Web Vitals), štruktúrované dáta, správu presmerovaní a ďalšie kľúčové technické aspekty.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Budovanie 3 spätných odkazov/mesiac</h3>
                                    <p className="text-sm text-muted-foreground">Začneme systematicky a bezpečne budovať autoritu vášho webu prostredníctvom kvalitných odkazov z relevantných zdrojov.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Google Business Profile optimalizácia</h3>
                                    <p className="text-sm text-muted-foreground">Ak máte lokálny biznis, zlepšíme vašu viditeľnosť v lokálnom vyhľadávaní a na Google Mapách, aby vás zákazníci ľahko našli.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Cena</h3>
                                    <p className="text-sm text-muted-foreground font-bold text-lg">349 € / mesiac</p>
                                </div>
                            </div>
                        </CardContent>
                     </Card>
                </section>
                
                <section className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-headline text-foreground">Náš Proces Spolupráce</h2>
                    <ol className="relative border-l border-border">                  
                        <li className="mb-10 ml-6">            
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-8 ring-background text-primary font-bold">1</span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-foreground">Hĺbkový Audit a Stratégia</h3>
                            <p className="mb-4 text-base font-normal text-muted-foreground">Začíname komplexným auditom vášho webu a konkurencie. Na základe dát vytvoríme jasnú stratégiu a mesačný plán aktivít.</p>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-8 ring-background text-primary font-bold">2</span>
                            <h3 className="mb-1 text-lg font-semibold text-foreground">Mesačná Exekúcia</h3>
                            <p className="text-base font-normal text-muted-foreground">Každý mesiac pracujeme na technickej optimalizácii, on-page úpravách a budovaní spätných odkazov podľa stanoveného plánu.</p>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-8 ring-background text-primary font-bold">3</span>
                            <h3 className="mb-1 text-lg font-semibold text-foreground">Reporting a Plánovanie</h3>
                            <p className="text-base font-normal text-muted-foreground">Na konci mesiaca dostanete detailný report s výsledkami, analýzou a plánom na ďalší mesiac. Sme vám k dispozícii na pravidelné konzultácie.</p>
                        </li>
                    </ol>
                </section>

                 <section id="cta" className="bg-card rounded-lg p-12 text-center border">
                     <h2 className="text-3xl font-bold mb-4 font-headline text-foreground">Je čas rásť rýchlejšie ako konkurencia.</h2>
                      <Button size="lg" asChild>
                        <Link href="/signup?plan=rast">
                            Chcem Balík Rast
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    )
}
