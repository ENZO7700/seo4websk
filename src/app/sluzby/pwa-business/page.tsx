
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PwaBusinessPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">PWA Business</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Komplexné PWA riešenie pre firmy vrátane blogu a marketingových nástrojov.
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
                           Balík PWA Business je navrhnutý pre firmy, ktoré chcú aktívne komunikovať so svojimi zákazníkmi a využívať web na maximum. Získate nielen špičkovú webovú prezentáciu, ale aj výkonné nástroje na tvorbu obsahu a marketing.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Balík obsahuje:</h3>
                                    <p className="text-muted-foreground">Neobmedzený počet stránok, blogovací systém (CMS), push notifikácie, pokročilú SEO optimalizáciu a analytické nástroje.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-muted-foreground">od 2,499 € (jednorazovo)</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                 </section>
                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Chcete naštartovať Váš online biznis?</h2>
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
