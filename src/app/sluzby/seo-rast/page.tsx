
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SeoRastPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">SEO Balík: Rast</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Pre rastúce weby a freelancerov, ktorí chcú získať náskok pred konkurenciou.
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
                           S balíkom Rast prejdeme od základov k pokročilejším technikám. Zameriame sa na technické SEO, začneme budovať autoritu vášho webu prostredníctvom spätných odkazov a optimalizujeme vašu lokálnu viditeľnosť.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Balík obsahuje:</h3>
                                    <p className="text-muted-foreground">Všetko z balíka Štart, plus pokročilú analýzu kľúčových slov (do 50), technické SEO, budovanie 3 spätných odkazov mesačne a optimalizáciu Google My Business.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-muted-foreground">349 € / mesiac</p>
                                </div>
                            </li>
                        </ul>
                    </div>
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
