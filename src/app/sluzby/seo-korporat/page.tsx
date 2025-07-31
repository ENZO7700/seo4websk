
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SeoKorporatPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">SEO Balík: Korporát</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Pre veľké e-shopy a firmy, ktoré operujú vo vysoko konkurenčnom prostredí a vyžadujú špičkové riešenia.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Objednať Balík Korporát</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
               <section className="grid items-center gap-12 md:grid-cols-2 mb-20">
                    <div>
                         <Image
                            src="https://img.freepik.com/free-vector/mobile-optimization-concept-illustration_114360-3576.jpg?w=600"
                            alt="Stratégia pre korporátne SEO a optimalizáciu konverzií"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-2xl shadow-primary/10 mx-auto"
                            data-ai-hint="corporate seo strategy"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Dominancia na Trhu</h2>
                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                           Balík Korporát je naša vlajková loď. Ide o komplexné partnerstvo, kde sa náš tím stáva vaším externým SEO oddelením. Kombinujeme pokročilé SEO techniky s obsahovým marketingom, PR a optimalizáciou konverznej miery (CRO), aby sme zabezpečili nielen návštevnosť, ale aj maximálnu ziskovosť.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Balík obsahuje:</h3>
                                    <p className="text-muted-foreground">Všetko z balíka Business, plus intenzívny link building (20+ odkazov/mesiac), PR a obsahový marketing, analýza a optimalizácia konverzií (CRO), pravidelné strategické stretnutia.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-muted-foreground">1,499 € / mesiac</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                 </section>
                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Pripravení definovať pravidlá hry vo vašom odvetví?</h2>
                      <Button size="lg" asChild>
                        <Link href="/contact">
                            Chcem Balík Korporát
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    )
}
