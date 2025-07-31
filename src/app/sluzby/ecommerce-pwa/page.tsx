
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, ShoppingCart, Zap, BarChart2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: 'Blesková Rýchlosť',
        description: 'Okamžité načítanie a plynulé prechádzanie produktov zvyšuje spokojnosť zákazníkov a konverzie.',
    },
    {
        icon: <ShoppingCart className="h-8 w-8 text-primary" />,
        title: 'Zážitok Natívnej Aplikácie',
        description: 'Zákazníci si môžu vašu aplikáciu pridať na plochu a nakupovať offline rovnako pohodlne ako v natívnej aplikácii.',
    },
    {
        icon: <BarChart2 className="h-8 w-8 text-primary" />,
        title: 'Vyššie Konverzie',
        description: 'Zjednodušený nákupný proces, push notifikácie a personalizácia vedú k výraznému nárastu konverzií.',
    },
]

export default function PwaECommercePage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">E-commerce Platformy na Báze PWA</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Predbehnite konkurenciu s e-shopom novej generácie, ktorý je rýchlejší, spoľahlivejší a pútavejší než kedykoľvek predtým.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Dohodnúť si Konzultáciu</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
                <section id="about-ecommerce-pwa" className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Prečo je PWA budúcnosťou E-commerce?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                        E-commerce PWA (Progresívna Webová Aplikácia) kombinuje dostupnosť webu s funkcionalitou natívnej mobilnej aplikácie. Pre vašich zákazníkov to znamená bezkonkurenčný zážitok z nakupovania priamo v prehliadači, bez nutnosti inštalácie z App Store alebo Google Play. Pre vás to znamená vyššiu angažovanosť a lepšie obchodné výsledky.
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
                         <Image
                            src="https://firebasestorage.googleapis.com/v0/b/aetherflow-6gd9p.appspot.com/o/images%2Fbenefit-ecommerce.png?alt=media&token=d1f11e92-3c35-42d4-9d55-66795f543e41"
                            alt="Ukážka responzívneho e-commerce PWA na rôznych zariadeniach"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-2xl shadow-primary/10"
                            data-ai-hint="ecommerce responsive devices"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Kompletné riešenie na mieru</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Dizajn a Vývoj na Mieru</h3>
                                    <p className="text-muted-foreground">Vytvoríme unikátny dizajn a architektúru presne podľa potrieb vášho biznisu a značky.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Integrácia Platobných Brán</h3>
                                    <p className="text-muted-foreground">Bezproblémovo integrujeme všetky populárne platobné metódy pre pohodlie vašich zákazníkov.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Pokročilá Správa Produktov</h3>
                                    <p className="text-muted-foreground">Intuitívny systém pre správu produktov, zásob, objednávok a zákazníckych dát.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                 </section>

                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Pripravení predávať viac?</h2>
                     <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                         Poďme sa porozprávať o tom, ako môže naša e-commerce PWA platforma naštartovať váš online predaj a zabezpečiť vám dlhodobý rast.
                     </p>
                      <Button size="lg" asChild>
                        <Link href="/contact">
                            Chcem Ponuku na Mieru
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    )
}

    
