'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Search, Code, Smartphone, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SeoForPwaPage() {
    return (
        <div className="bg-space text-light">
             <header className="bg-galaxy py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-light font-headline">SEO pre Progresívne Webové Aplikácie</h1>
                    <p className="text-xl max-w-3xl mx-auto text-rocket mb-8 text-balance">
                        Maximalizujte viditeľnosť vašej modernej aplikácie. Naše špecializované SEO stratégie zabezpečia, že vás zákazníci nájdu.
                    </p>
                    <Button size="lg" asChild className="bg-sky hover:bg-night-sky">
                        <Link href="/contact">Získať SEO Analýzu Zdarma</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
                <section id="about-pwa-seo" className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline text-light">Prečo PWA potrebuje špeciálnu SEO starostlivosť?</h2>
                    <p className="text-lg text-rocket text-balance">
                        Progresívne Webové Aplikácie (PWA) prinášajú úžasný používateľský zážitok, no ich technická povaha, najmä spoliehanie sa na JavaScript pri vykresľovaní obsahu, predstavuje unikátne výzvy pre vyhľadávače. Klasické SEO postupy často nestačia. Ak sa optimalizácia neurobí správne, Google nemusí byť schopný vidieť a zaindexovať váš obsah, čo vedie k nulovej organickej návštevnosti. My rozumieme týmto nuansám a vieme, ako optimalizovať vašu PWA pre najlepšie výsledky.
                    </p>
                </section>

                <section id="features" className="mb-20">
                     <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-headline text-light">Naše Kľúčové Oblasti Zamerania</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                         <Card className="border-spaceship bg-galaxy text-center">
                            <CardHeader className="items-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-space shadow-lg"><Smartphone className="h-8 w-8 text-sky" /></div>
                                <CardTitle className="mt-4 text-xl font-semibold text-light">Mobile-First Indexing</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-rocket text-balance">Optimalizujeme vašu PWA pre mobilné indexovanie, čo je absolútne kľúčové pre Google a spokojnosť rastúceho počtu mobilných používateľov.</p>
                            </CardContent>
                         </Card>
                         <Card className="border-spaceship bg-galaxy text-center">
                            <CardHeader className="items-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-space shadow-lg"><Code className="h-8 w-8 text-sky" /></div>
                                <CardTitle className="mt-4 text-xl font-semibold text-light">JavaScript SEO</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-rocket text-balance">Zabezpečíme, aby bol váš dynamicky generovaný obsah plne viditeľný a indexovateľný pre vyhľadávače pomocou techník ako Server-Side Rendering (SSR) alebo dynamické renderovanie.</p>
                            </CardContent>
                         </Card>
                         <Card className="border-spaceship bg-galaxy text-center">
                            <CardHeader className="items-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-space shadow-lg"><Zap className="h-8 w-8 text-sky" /></div>
                                <CardTitle className="mt-4 text-xl font-semibold text-light">Rýchlosť a Výkon</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-rocket text-balance">Vykonáme hĺbkový audit a odstránime všetky technické prekážky, ktoré bránia vašej PWA v top pozíciách, vrátane optimalizácie Core Web Vitals.</p>
                            </CardContent>
                         </Card>
                    </div>
                </section>
                
                 <section id="benefits" className="grid items-center gap-12 md:grid-cols-2 mb-20">
                     <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline text-light">Náš Prístup k SEO pre PWA</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-light">Renderovanie na strane servera (SSR)</h3>
                                    <p className="text-rocket">Implementujeme Server-Side Rendering (SSR) alebo Dynamic Rendering, aby vyhľadávače dostali plne vykreslený HTML kód, čo dramaticky zlepší rýchlosť a spoľahlivosť indexácie.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-light">Implementácia štruktúrovaných dát</h3>
                                    <p className="text-rocket">Pomôžeme vyhľadávačom lepšie pochopiť obsah vašej PWA (produkty, články, recenzie) a získať tak výhodu vo výsledkoch vyhľadávania vo forme rich snippets.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-light">Optimalizácia pre Crawl Budget</h3>
                                    <p className="text-rocket">Zabezpečíme, aby vyhľadávače neplytvali svojimi zdrojmi na nedôležitých častiach vašej PWA a zamerali sa na kľúčový obsah, ktorý prináša výsledky.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-light">App Shell Model a Service Workers</h3>
                                    <p className="text-rocket">Správne nakonfigurujeme Service Workery a App Shell, aby sme zabezpečili bleskové načítanie a offline funkčnosť bez negatívneho dopadu na SEO.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                         <Image
                            src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3805.jpg?w=400"
                            alt="Graf znázorňujúci organickú návštevnosť po SEO optimalizácii PWA"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-2xl shadow-sky/10"
                            data-ai-hint="organic traffic graph"
                        />
                    </div>
                 </section>

                 <section id="cta" className="bg-galaxy border border-spaceship rounded-2xl p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline text-light">Ste pripravení dominovať vo vyhľadávaní?</h2>
                     <p className="text-lg text-rocket mb-8 max-w-2xl mx-auto text-balance">
                        Nenechajte svoju PWA stratiť sa v digitálnom šume. Kontaktujte nás a zistite, ako môžeme vašej aplikácii zabezpečiť popredné priečky.
                     </p>
                      <Button size="lg" asChild className="bg-sky hover:bg-night-sky">
                        <Link href="/contact">
                            Chcem byť viditeľný
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>

            </main>
        </div>
    )
}
