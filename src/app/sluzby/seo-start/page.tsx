
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
                           Balík Štart je navrhnutý tak, aby váš web získal správne nasmerovanie vo svete vyhľadávačov. Zameriame sa na najdôležitejšie on-page faktory a analýzu kľúčových slov, aby ste oslovili prvých relevantných návštevníkov.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Balík obsahuje:</h3>
                                    <p className="text-muted-foreground">Analýza kľúčových slov (do 20), základný SEO audit, on-page optimalizácia (5 stránok), mesačný report.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-muted-foreground">199 € / mesiac</p>
                                </div>
                            </li>
                        </ul>
                    </div>
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
