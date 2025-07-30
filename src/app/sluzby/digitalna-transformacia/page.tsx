
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, TrendingUp, Lightbulb, Bot } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
    {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: 'Stratégia pre Rast',
        description: 'Vytvárame jasné a merateľné stratégie, ktoré pomôžu vašej firme rásť v digitálnom prostredí.',
    },
    {
        icon: <Lightbulb className="h-8 w-8 text-primary" />,
        title: 'Inovácie a Technológie',
        description: 'Identifikujeme a implementujeme najnovšie technológie (vrátane AI), ktoré sú relevantné pre váš biznis.',
    },
    {
        icon: <Bot className="h-8 w-8 text-primary" />,
        title: 'Optimalizácia Procesov',
        description: 'Pomáhame automatizovať a zefektívniť vaše interné procesy, čím šetríme váš čas a peniaze.',
    },
]

export default function DigitalTransformationPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">Konzultácie v Oblasti Digitálnej Transformácie</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Prevedieme vás komplexným procesom digitálnych zmien. Získajte strategického partnera pre vašu cestu do digitálnej budúcnosti.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Dohodnúť si Konzultáciu</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
                <section id="about-digital-transformation" className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Čo je Digitálna Transformácia a Prečo je Dôležitá?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                        Digitálna transformácia nie je len o nasadení nových technológií. Je to o zásadnej zmene v tom, ako vaša firma funguje a prináša hodnotu zákazníkom. V dnešnom svete je kľúčom k udržaniu konkurencieschopnosti, inováciám a rastu. Pomôžeme vám nielen prežiť, ale prosperovať.
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
                            src="/images/services/digital-transformation.png"
                            alt="Tím expertov analyzuje dáta a plánuje digitálnu stratégiu"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-2xl shadow-primary/10"
                            data-ai-hint="data analysis strategy meeting"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Ako Vám Pomôžeme? Náš Proces</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">1. Hĺbková Analýza</h3>
                                    <p className="text-muted-foreground">Začíname pochopením vášho biznisu, cieľov, procesov a aktuálnych výziev.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">2. Návrh Stratégie a Roadmapy</h3>
                                    <p className="text-muted-foreground">Vytvoríme detailný plán digitálnej transformácie s konkrétnymi krokmi a časovým harmonogramom.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">3. Implementácia a Podpora</h3>
                                    <p className="text-muted-foreground">Pomôžeme vám s výberom dodávateľov a zavedením technológií, a poskytneme priebežnú podporu.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                 </section>

                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Pripravení na zmenu?</h2>
                     <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                         Urobte prvý krok k efektívnejšej a modernejšej firme. Poďme sa porozprávať o tom, ako môžeme naštartovať vašu digitálnu transformáciu.
                     </p>
                      <Button size="lg" asChild>
                        <Link href="/contact">
                            Začať Konzultáciu
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    )
}
