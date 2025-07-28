
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Search, Code, Smartphone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
    {
        icon: <Smartphone className="h-8 w-8 text-primary" />,
        title: 'Mobile-First Indexing',
        description: 'Optimalizujeme vašu PWA pre mobilné indexovanie, čo je kľúčové pre Google a spokojnosť používateľov.',
    },
    {
        icon: <Code className="h-8 w-8 text-primary" />,
        title: 'JavaScript SEO',
        description: 'Zabezpečíme, aby bol váš dynamicky generovaný obsah plne viditeľný a indexovateľný pre vyhľadávače.',
    },
    {
        icon: <Search className="h-8 w-8 text-primary" />,
        title: 'Technický Audit',
        description: 'Vykonáme hĺbkový audit a odstránime všetky technické prekážky, ktoré bránia vašej PWA v top pozíciách.',
    },
]

export default function SeoForPwaPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">SEO pre Progresívne Webové Aplikácie</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Maximalizujte viditeľnosť vašej modernej aplikácie. Naše špecializované SEO stratégie zabezpečia, že vás zákazníci nájdu.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Získať SEO Analýzu Zdarma</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
                <section id="about-pwa-seo" className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Prečo PWA potrebuje špeciálnu SEO starostlivosť?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                        Progresívne Webové Aplikácie (PWA) prinášajú úžasný používateľský zážitok, no ich technická povaha, najmä spoliehanie sa na JavaScript, predstavuje unikátne výzvy pre vyhľadávače. Klasické SEO postupy nestačia. My rozumieme týmto nuansám a vieme, ako optimalizovať vašu PWA pre najlepšie výsledky.
                    </p>
                </section>

                <section id="features" className="mb-20">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {features.map((feature, index) => (
                             <Card key={index} className="border-primary/20 bg-card/50 backdrop-blur-lg text-center">
                                <CardHeader className="items-center">
                                    {feature.icon}
                                    <CardTitle className="mt-4 text-xl font-semibold">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                             </Card>
                        ))}
                    </div>
                </section>
                
                 <section id="benefits" className="grid items-center gap-12 md:grid-cols-2 mb-20">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Náš Prístup k SEO pre PWA</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Renderovanie na strane servera (SSR)</h3>
                                    <p className="text-muted-foreground">Zabezpečíme, aby vyhľadávače dostali plne renderovaný HTML kód, čo dramaticky zlepší rýchlosť indexácie.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Implementácia štruktúrovaných dát</h3>
                                    <p className="text-muted-foreground">Pomôžeme vyhľadávačom lepšie pochopiť obsah vašej PWA a získať tak výhodu vo výsledkoch vyhľadávania (rich snippets).</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Optimalizácia rýchlosti a výkonu</h3>
                                    <p className="text-muted-foreground">Rýchlosť je kľúčový faktor pre SEO aj pre UX. Optimalizujeme každý aspekt vašej PWA pre maximálny výkon.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                         <Image
                            src="https://placehold.co/600x400.png"
                            alt="Graf znázorňujúci organickú návštevnosť po SEO optimalizácii PWA"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-2xl shadow-primary/10"
                            data-ai-hint="organic traffic graph"
                        />
                    </div>
                 </section>

                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Ste pripravení dominovať vo vyhľadávaní?</h2>
                     <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                        Nenechajte svoju PWA stratiť sa v digitálnom šume. Kontaktujte nás a zistite, ako môžeme vašej aplikácii zabezpečiť popredné priečky.
                     </p>
                      <Button size="lg" asChild>
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
