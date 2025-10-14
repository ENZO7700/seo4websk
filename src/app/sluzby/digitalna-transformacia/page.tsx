
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, TrendingUp, Lightbulb, Bot, GitBranch } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function DigitalTransformationPage() {
    return (
        <div className="bg-space text-light">
             <header className="bg-galaxy py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-light font-headline">Konzultácie v Oblasti Digitálnej Transformácie</h1>
                    <p className="text-xl max-w-3xl mx-auto text-rocket mb-8 text-balance">
                        Prevedieme vás komplexným procesom digitálnych zmien. Získajte strategického partnera pre vašu cestu do digitálnej budúcnosti.
                    </p>
                    <Button size="lg" asChild className="bg-sky hover:bg-night-sky">
                        <Link href="/contact">Dohodnúť si Konzultáciu</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
                <section id="about-digital-transformation" className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline text-light">Čo je Digitálna Transformácia a Prečo je Dôležitá?</h2>
                    <p className="text-lg text-rocket text-balance">
                        Digitálna transformácia nie je len o nasadení nových technológií. Je to o zásadnej zmene v tom, ako vaša firma funguje, komunikuje a prináša hodnotu zákazníkom. Zahŕňa zmeny v podnikovej kultúre, procesoch a biznis modeloch, poháňané novými digitálnymi možnosťami. V dnešnom svete je kľúčom k udržaniu konkurencieschopnosti, inováciám a dlhodobému rastu. Pomôžeme vám nielen prežiť, ale prosperovať a stať sa lídrom vo vašom odvetví.
                    </p>
                </section>

                <section id="features" className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-headline text-light">Naše Oblasti Expertízy</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="border-spaceship bg-galaxy text-center">
                            <CardHeader className="items-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-space shadow-lg"><TrendingUp className="h-8 w-8 text-sky" /></div>
                                <CardTitle className="mt-4 text-xl font-semibold text-light">Stratégia pre Rast</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-rocket text-balance">Vytvárame jasné, dátovo podložené a merateľné stratégie, ktoré prepoja vaše obchodné ciele s digitálnymi aktivitami a pomôžu vašej firme rásť a expandovať na nové trhy.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-spaceship bg-galaxy text-center">
                            <CardHeader className="items-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-space shadow-lg"><Lightbulb className="h-8 w-8 text-sky" /></div>
                                <CardTitle className="mt-4 text-xl font-semibold text-light">Inovácie a Technológie</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-rocket text-balance">Identifikujeme a pomáhame implementovať najnovšie technológie (vrátane AI, PWA, IoT), ktoré sú relevantné pre váš biznis a prinesú vám skutočnú konkurenčnú výhodu.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-spaceship bg-galaxy text-center">
                            <CardHeader className="items-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-space shadow-lg"><Bot className="h-8 w-8 text-sky" /></div>
                                <CardTitle className="mt-4 text-xl font-semibold text-light">Optimalizácia Procesov</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-rocket text-balance">Pomáhame automatizovať a zefektívniť vaše interné a zákaznícke procesy, čím šetríme váš čas, peniaze a zvyšujeme spokojnosť zákazníkov aj zamestnancov.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
                
                 <section id="benefits" className="grid items-center gap-12 md:grid-cols-2 mb-20">
                     <div>
                         <Image
                            src="https://img.freepik.com/free-vector/analytics-dashboard-concept-illustration_114360-7312.jpg?w=400"
                            alt="Tím expertov analyzuje dáta a plánuje digitálnu stratégiu"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-2xl shadow-sky/10"
                            data-ai-hint="data analysis strategy meeting"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline text-light">Ako Vám Pomôžeme? Náš Proces</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <GitBranch className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-light">1. Hĺbková Analýza a Workshop</h3>
                                    <p className="text-rocket">Začíname sériou stretnutí a workshopov, kde sa snažíme do hĺbky pochopiť váš biznis, ciele, procesy, zákazníkov a aktuálne technologické aj trhové výzvy.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <GitBranch className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-light">2. Návrh Stratégie a Roadmapy</h3>
                                    <p className="text-rocket">Na základe analýzy vytvoríme detailný a realizovateľný plán digitálnej transformácie s konkrétnymi krokmi, prioritami, odhadovaným rozpočtom a časovým harmonogramom.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-light">3. Implementácia a Podpora</h3>
                                    <p className="text-rocket">Nezostávame len pri papieri. Aktívne vám pomôžeme s výberom dodávateľov, dohľadom nad implementáciou technológií, riadením projektov a poskytneme priebežnú podporu a poradenstvo.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                 </section>

                 <section id="cta" className="bg-galaxy border border-spaceship rounded-2xl p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline text-light">Pripravení na zmenu?</h2>
                     <p className="text-lg text-rocket mb-8 max-w-2xl mx-auto text-balance">
                         Urobte prvý krok k efektívnejšej a modernejšej firme. Poďme sa porozprávať o tom, ako môžeme naštartovať vašu digitálnu transformáciu a odomknúť plný potenciál vášho podnikania.
                     </p>
                      <Button size="lg" asChild className="bg-sky hover:bg-night-sky">
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
