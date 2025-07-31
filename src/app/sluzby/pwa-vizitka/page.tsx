
'use client';

// This is a placeholder file for the new service page.
// We can populate it with content in the next step.

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PwaVizitkaPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">PWA Vizitka</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Moderná online vizitka alebo portfólio postavené na PWA technológii.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Získať Cenovú Ponuku</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
               <section className="grid items-center gap-12 md:grid-cols-2 mb-20">
                     <div>
                         <Image
                            src="https://img.freepik.com/free-vector/user-interface-design-concept-illustration_114360-3276.jpg?w=400"
                            alt="Ukážka modernej PWA vizitky na mobile"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-2xl shadow-primary/10 mx-auto"
                            data-ai-hint="modern pwa portfolio"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Urobte Prvý Dojem, Ktorý Zostane</h2>
                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                           Váš prvý kontakt s klientom je kľúčový. PWA Vizitka nie je len obyčajná stránka - je to bleskovo rýchla, interaktívna a vždy dostupná prezentácia vašej značky, ktorú si môžu klienti pridať priamo na plochu svojho telefónu.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Balík obsahuje:</h3>
                                    <p className="text-muted-foreground">Dizajn na mieru, do 5 podstránok, kontaktný formulár, základnú SEO optimalizáciu a možnosť inštalácie na plochu.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-muted-foreground">od 999 € (jednorazovo)</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                 </section>
                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Ste pripravení vyniknúť?</h2>
                      <Button size="lg" asChild>
                        <Link href="/contact">
                            Objednať PWA Vizitku
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    )
}
