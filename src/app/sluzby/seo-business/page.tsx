
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SeoBusinessPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">SEO Balík: Business</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Strategické SEO pre malé a stredné firmy a e-shopy, ktoré chcú rásť a získavať nových zákazníkov.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Objednať Balík Business</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
               <section className="grid items-center gap-12 md:grid-cols-2 mb-20">
                    <div>
                         <Image
                            src="https://img.freepik.com/free-vector/seo-analytics-teamwork-concept-illustration_114360-9398.jpg?w=600"
                            alt="Tím analyzuje SEO dáta pre biznis"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-2xl shadow-primary/10 mx-auto"
                            data-ai-hint="seo business analytics"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">SEO ako Motor Vášho Podnikania</h2>
                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                           Náš Business balík je navrhnutý pre firmy, ktoré vnímajú SEO ako kľúčovú súčasť svojej marketingovej stratégie. Poskytujeme komplexný servis od auditu, cez stratégiu až po exekúciu a detailný reporting, ktorý vám ukáže reálny dopad na váš biznis.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Balík obsahuje:</h3>
                                    <p className="text-muted-foreground">Komplexný SEO audit a stratégia, priebežná on-page a technická optimalizácia, link building (10+ odkazov/mesiac), pokročilý reporting a analytika, konzultácie (2 hod/mesiac).</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-muted-foreground">899 € / mesiac</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                 </section>
                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Pripravení investovať do udržateľného rastu?</h2>
                      <Button size="lg" asChild>
                        <Link href="/contact">
                            Chcem Balík Business
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    )
}
