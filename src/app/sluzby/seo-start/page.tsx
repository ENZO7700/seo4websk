
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
                           Balík Štart je navrhnutý tak, aby váš web získal správne nasmerovanie vo svete vyhľadávačov. Zameriame sa na najdôležitejšie on-page faktory a analýzu kľúčových slov, aby ste oslovili prvých relevantných návštevníkov. Je to investícia do budúcnosti vášho webu, ktorá položí základy pre ďalší rast.
                        </p>
                    </div>
                </section>

                 <section className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Pre koho je balík Štart?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                        Tento balíček je ideálny pre nové webové stránky, lokálne podniky, blogerov, a živnostníkov, ktorí majú obmedzený rozpočet, ale chápu dôležitosť organickej návštevnosti. Ak len začínate so SEO a chcete vidieť prvé výsledky, toto je správna voľba.
                    </p>
                </section>

                <section className="mb-20">
                     <Card className="bg-muted/50 border-border/50">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl font-bold text-center">Čo presne získate?</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg">
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Analýza kľúčových slov (do 20)</h3>
                                    <p className="text-sm text-muted-foreground">Nájdeme najrelevantnejšie kľúčové slová s nízkou konkurenciou, na ktoré sa oplatí zamerať.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Základný SEO audit</h3>
                                    <p className="text-sm text-muted-foreground">Preveríme váš web a identifikujeme najzávažnejšie technické a obsahové nedostatky.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">On-page optimalizácia (5 stránok)</h3>
                                    <p className="text-sm text-muted-foreground">Optimalizujeme titulky, popisy, nadpisy a obsah na piatich kľúčových stránkach vášho webu.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Mesačný report</h3>
                                    <p className="text-sm text-muted-foreground">Dostanete prehľadný report o vykonaných prácach a vývoji pozícií.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-sm text-muted-foreground">199 € / mesiac</p>
                                </div>
                            </div>
                        </CardContent>
                     </Card>
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
