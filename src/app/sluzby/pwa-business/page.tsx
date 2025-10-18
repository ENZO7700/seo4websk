
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Bot, BarChart2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PwaBusinessPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-card py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">PWA Business</h1>
                    <p className="text-xl max-w-3xl mx-auto text-muted-foreground mb-8 text-balance">
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
                        <p className="text-lg text-muted-foreground text-balance">
                           Je to platforma, ktorá rastie s vami a umožňuje vám pružne reagovať na potreby trhu. Prestaňte byť len pasívnym účastníkom, staňte sa aktívnym tvorcom vášho online úspechu.
                        </p>
                    </div>
                </section>

                 <section className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Pre koho je PWA Business určený?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                        Toto riešenie je ideálne pre malé a stredné firmy, ktoré potrebujú dynamický web, chcú publikovať obsah (blog, novinky, prípadové štúdie), budovať komunitu a využívať moderné marketingové kanály ako push notifikácie. Je to perfektná voľba pre servisné firmy, konzultačné spoločnosti, reštaurácie, lokálne podniky alebo akýkoľvek biznis, ktorý chce posilniť vzťahy so zákazníkmi a budovať si pozíciu experta v odbore.
                    </p>
                </section>
                
                 <section className="mb-20">
                     <Card className="bg-card border">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl font-bold text-center text-foreground">Detailné Funkcie Balíka</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg pt-6">
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Neobmedzený počet stránok</h3>
                                    <p className="text-sm text-muted-foreground">Plná flexibilita pre rast vášho obsahu bez akýchkoľvek obmedzení. Pridávajte nové služby, referencie alebo sekcie podľa potreby.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Blogovací systém (CMS)</h3>
                                    <p className="text-sm text-muted-foreground">Jednoducho spravujte a publikujte články, novinky a prípadové štúdie. Budujte si status experta a zlepšujte SEO vďaka kvalitnému obsahu.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Bot className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Push notifikácie</h3>
                                    <p className="text-sm text-muted-foreground">Oslovte zákazníkov priamo na ich zariadeniach s novinkami, akciami alebo dôležitými upozorneniami. Zvýšte mieru návratnosti a angažovanosť.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Pokročilá SEO optimalizácia</h3>
                                    <p className="text-sm text-muted-foreground">Zabezpečíme, aby vaša nová aplikácia bola od začiatku miláčikom vyhľadávačov. Zameriame sa na technické SEO, štruktúrované dáta a optimalizáciu pre mobilné zariadenia.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <BarChart2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Analytické nástroje</h3>
                                    <p className="text-sm text-muted-foreground">Integrácia nástrojov (napr. Google Analytics 4) na sledovanie návštevnosti, správania používateľov a konverzií. Získajte dáta pre lepšie rozhodnutia.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Cena</h3>
                                    <p className="text-sm text-muted-foreground font-bold text-lg">od 2,499 € (jednorazovo)</p>
                                </div>
                            </div>
                        </CardContent>
                     </Card>
                </section>

                <section className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-headline text-foreground">Náš Proces Spolupráce</h2>
                    <ol className="relative border-l border-border">                  
                        <li className="mb-10 ml-6">            
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-8 ring-background text-primary font-bold">1</span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-foreground">Stratégia a Plánovanie</h3>
                            <p className="mb-4 text-base font-normal text-muted-foreground">Začíname hĺbkovým workshopom, kde definujeme ciele, cieľové skupiny, obsahovú stratégiu a kľúčové funkcie vašej novej PWA.</p>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-8 ring-background text-primary font-bold">2</span>
                            <h3 className="mb-1 text-lg font-semibold text-foreground">Dizajn a Vývoj</h3>
                            <p className="text-base font-normal text-muted-foreground">Vytvoríme interaktívny prototyp a po jeho schválení sa pustíme do vývoja aplikácie s dôrazom na čistý kód a najnovšie technológie.</p>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-8 ring-background text-primary font-bold">3</span>
                            <h3 className="mb-1 text-lg font-semibold text-foreground">Nasadenie a Školenie</h3>
                            <p className="text-base font-normal text-muted-foreground">Aplikáciu nasadíme na produkčný server a detailne vás zaškolíme do používania CMS a všetkých funkcií, aby ste mohli platformu naplno využívať.</p>
                        </li>
                    </ol>
                </section>
                
                 <section id="cta" className="bg-card rounded-lg p-12 text-center border">
                     <h2 className="text-3xl font-bold mb-4 font-headline text-foreground">Chcete naštartovať Váš online biznis?</h2>
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
