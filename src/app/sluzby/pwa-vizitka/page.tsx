
'use client';

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
                        Moderná online vizitka alebo portfólio postavené na PWA technológii, ktoré zanechá dojem.
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
                           Váš prvý kontakt s klientom je kľúčový. PWA Vizitka nie je len obyčajná stránka - je to bleskovo rýchla, interaktívna a vždy dostupná prezentácia vašej značky, ktorú si môžu klienti pridať priamo na plochu svojho telefónu. Zabudnite na zastarané papierové vizitky, vaša digitálna vizitka bude pracovať pre vás 24/7.
                        </p>
                    </div>
                </section>
                
                <section className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Pre koho je PWA Vizitka ideálna?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                        Tento balíček je navrhnutý pre freelancerov, umelcov, konzultantov, malé firmy a všetkých profesionálov, ktorí potrebujú pôsobivú a modernú online prezentáciu. Je to perfektné riešenie pre portfóliá, osobné stránky alebo jednoduché firemné weby.
                    </p>
                </section>

                <section className="mb-20">
                     <Card className="bg-muted/50 border-border/50">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl font-bold text-center">Čo Všetko Balík Obsahuje?</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                           <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold">Dizajn na mieru</h3>
                                        <p className="text-sm text-muted-foreground">Vytvoríme unikátny dizajn, ktorý odráža vašu osobnosť alebo značku.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold">Do 5 podstránok</h3>
                                        <p className="text-sm text-muted-foreground">Dostatok priestoru pre predstavenie seba, služieb, portfólia, referencií a kontaktu.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold">Kontaktný formulár</h3>
                                        <p className="text-sm text-muted-foreground">Jednoduchý spôsob pre potenciálnych klientov, ako sa s vami spojiť priamo zo stránky.</p>
                                    </div>
                                </li>
                            </ul>
                             <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold">Základná SEO optimalizácia</h3>
                                        <p className="text-sm text-muted-foreground">Nastavíme všetko potrebné, aby vás vyhľadávače ako Google ľahko našli.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold">Možnosť inštalácie na plochu</h3>
                                        <p className="text-sm text-muted-foreground">Vaša vizitka sa bude správať ako skutočná aplikácia v telefóne alebo počítači.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold">Cena</h3>
                                        <p className="text-sm text-muted-foreground">od 999 € (jednorazovo)</p>
                                    </div>
                                </li>
                            </ul>
                        </CardContent>
                     </Card>
                </section>

                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Ste pripravení vyniknúť?</h2>
                     <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                         Nechajte vašu digitálnu stopu zažiariť. Investujte do modernej prezentácie, ktorá vám prinesie nových klientov.
                     </p>
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
