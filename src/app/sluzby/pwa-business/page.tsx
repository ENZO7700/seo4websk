
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Bot, BarChart2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PwaBusinessPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">PWA Business</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Komplexné PWA riešenie pre firmy vrátane blogu, marketingových nástrojov a automatizácie.
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
                            src="https://img.freepik.com/free-vector/content-marketing-strategy-concept-illustration_114360-7482.jpg?w=600"
                            alt="Tím pracujúci na PWA business aplikácii"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-2xl shadow-primary/10 mx-auto"
                            data-ai-hint="business app development"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Aplikácia, Ktorá Podporuje Váš Rast</h2>
                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                           Balík PWA Business je navrhnutý pre firmy, ktoré chcú aktívne komunikovať so svojimi zákazníkmi a využívať web na maximum. Získate nielen špičkovú webovú prezentáciu, ale aj výkonné nástroje na tvorbu obsahu, marketing a získavanie cenných dát pre ďalší rozvoj vášho podnikania.
                        </p>
                    </div>
                </section>

                 <section className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Pre koho je PWA Business určený?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                        Toto riešenie je ideálne pre malé a stredné firmy, ktoré potrebujú dynamický web, chcú publikovať obsah (blog, novinky), budovať komunitu a využívať moderné marketingové kanály ako push notifikácie. Je to perfektná voľba pre servisné firmy, konzultačné spoločnosti, reštaurácie alebo lokálne podniky.
                    </p>
                </section>
                
                 <section className="mb-20">
                     <Card className="bg-muted/50 border-border/50">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl font-bold text-center">Detailné Funkcie Balíka</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg">
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Neobmedzený počet stránok</h3>
                                    <p className="text-sm text-muted-foreground">Plná flexibilita pre rast vášho obsahu bez obmedzení.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Blogovací systém (CMS)</h3>
                                    <p className="text-sm text-muted-foreground">Jednoducho spravujte a publikujte články, novinky a prípadové štúdie.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Bot className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Push notifikácie</h3>
                                    <p className="text-sm text-muted-foreground">Oslovte zákazníkov priamo na ich zariadeniach s novinkami a akciami.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Pokročilá SEO optimalizácia</h3>
                                    <p className="text-sm text-muted-foreground">Zabezpečíme, aby vaša nová aplikácia bola od začiatku miláčikom vyhľadávačov.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <BarChart2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Analytické nástroje</h3>
                                    <p className="text-sm text-muted-foreground">Integrácia nástrojov na sledovanie návštevnosti a správania používateľov.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-sm text-muted-foreground">od 2,499 € (jednorazovo)</p>
                                </div>
                            </div>
                        </CardContent>
                     </Card>
                </section>
                
                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Chcete naštartovať Váš online biznis?</h2>
                     <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                         Investujte do platformy, ktorá porastie spolu s vami. Kontaktujte nás pre nezáväznú konzultáciu a cenovú ponuku.
                     </p>
                      <Button size="lg" asChild>
                        <Link href="/contact">
                            Objednať PWA Business
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    )
}
