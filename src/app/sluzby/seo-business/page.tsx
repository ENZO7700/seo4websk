
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SeoBusinessPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">SEO Balík: Business</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Strategické SEO pre malé a stredné firmy a e-shopy, ktoré chcú rásť, získavať nových zákazníkov a vidieť reálny dopad na tržby.
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
                           Náš Business balík je navrhnutý pre firmy, ktoré vnímajú SEO ako kľúčovú súčasť svojej marketingovej stratégie. Poskytujeme komplexný servis od hĺbkového auditu, cez návrh dlhodobej stratégie, až po mesačnú exekúciu a detailný reporting, ktorý vám ukáže reálny dopad na váš biznis.
                        </p>
                    </div>
                 </section>

                <section className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Pre koho je balík Business?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                        Tento balík je určený pre zabehnuté firmy a e-shopy, ktoré majú stabilný cash-flow a sú pripravené investovať do dlhodobého a udržateľného rastu. Ak hľadáte spoľahlivého partnera, ktorý vám pomôže systematicky zvyšovať organickú návštevnosť a generovať viac dopytov a objednávok, ste na správnom mieste.
                    </p>
                </section>

                 <section className="mb-20">
                     <Card className="bg-muted/50 border-border/50">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl font-bold text-center">Komplexné služby pre váš rast</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg">
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Komplexný SEO audit a stratégia</h3>
                                    <p className="text-sm text-muted-foreground">Začíname hĺbkovou analýzou a vytvorením dlhodobého plánu šitého na mieru.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Priebežná on-page a technická optimalizácia</h3>
                                    <p className="text-sm text-muted-foreground">Neustále sledujeme a vylepšujeme váš web, aby bol v top kondícii.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Link building (10+ odkazov/mesiac)</h3>
                                    <p className="text-sm text-muted-foreground">Systematické budovanie silného a relevantného odkazového profilu.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Pokročilý reporting a analytika</h3>
                                    <p className="text-sm text-muted-foreground">Dostávate prehľadné reporty, ktoré ukazujú nielen pozície, ale aj dopad na vaše biznis ciele.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Konzultácie (2 hod/mesiac)</h3>
                                    <p className="text-sm text-muted-foreground">Pravidelné stretnutia, kde preberieme výsledky a naplánujeme ďalšie kroky.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-sm text-muted-foreground">899 € / mesiac</p>
                                </div>
                            </div>
                        </CardContent>
                     </Card>
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
