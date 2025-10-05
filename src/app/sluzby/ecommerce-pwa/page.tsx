
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, ShoppingCart, Zap, BarChart2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PwaECommercePage() {
    return (
        <div className="bg-space text-light">
             <header className="bg-galaxy py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-light font-headline">E-commerce Platformy na Báze PWA</h1>
                    <p className="text-xl max-w-3xl mx-auto text-rocket mb-8 text-balance">
                        Predbehnite konkurenciu s e-shopom novej generácie, ktorý je rýchlejší, spoľahlivejší a pútavejší než kedykoľvek predtým.
                    </p>
                    <Button size="lg" asChild className="bg-sky hover:bg-night-sky">
                        <Link href="/contact">Dohodnúť si Konzultáciu</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
                <section id="about-ecommerce-pwa" className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline text-light">Prečo je PWA budúcnosťou E-commerce?</h2>
                    <p className="text-lg text-rocket text-balance">
                        E-commerce PWA (Progresívna Webová Aplikácia) kombinuje dostupnosť webu s funkcionalitou natívnej mobilnej aplikácie. Pre vašich zákazníkov to znamená bezkonkurenčný zážitok z nakupovania priamo v prehliadači, bez nutnosti inštalácie z App Store alebo Google Play. Pre vás to znamená vyššiu angažovanosť, lepšie konverzie a v konečnom dôsledku vyšší zisk. Zabudnite na pomalé, neohrabané e-shopy. Privítajte budúcnosť online predaja.
                    </p>
                </section>

                <section id="features" className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="border-spaceship bg-galaxy text-center">
                        <CardHeader className="items-center">
                             <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-space shadow-lg"><Zap className="h-8 w-8 text-sky" /></div>
                            <CardTitle className="mt-4 text-xl font-semibold text-light">Blesková Rýchlosť</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-rocket text-balance">Okamžité načítanie a plynulé prechádzanie produktov zvyšuje spokojnosť zákazníkov a priamo znižuje mieru opustenia košíka. Každá ušetrená milisekunda znamená potenciálne vyšší zisk.</p>
                        </CardContent>
                    </Card>
                        <Card className="border-spaceship bg-galaxy text-center">
                        <CardHeader className="items-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-space shadow-lg"><ShoppingCart className="h-8 w-8 text-sky" /></div>
                            <CardTitle className="mt-4 text-xl font-semibold text-light">Zážitok Natívnej Aplikácie</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-rocket text-balance">Zákazníci si môžu váš e-shop pridať na plochu, nakupovať offline a dostávať push notifikácie o zľavách, novinkách alebo stave objednávky.</p>
                        </CardContent>
                    </Card>
                        <Card className="border-spaceship bg-galaxy text-center lg:col-span-2 xl:col-span-1">
                        <CardHeader className="items-center">
                             <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-space shadow-lg"><BarChart2 className="h-8 w-8 text-sky" /></div>
                            <CardTitle className="mt-4 text-xl font-semibold text-light">Vyššie Konverzie</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-rocket text-balance">Zjednodušený a rýchlejší nákupný proces, personalizácia a efektívny remarketing vedú k výraznému nárastu konverzného pomeru a priemernej hodnoty objednávky.</p>
                        </CardContent>
                    </Card>
                </section>
                
                 <section id="benefits" className="grid items-center gap-12 md:grid-cols-2 mb-20">
                     <div>
                         <Image
                            src="https://img.freepik.com/free-vector/mobile-optimization-concept-illustration_114360-3576.jpg?w=600"
                            alt="Ukážka responzívneho e-commerce PWA na rôznych zariadeniach"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-2xl shadow-sky/10"
                            data-ai-hint="ecommerce responsive devices"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline text-light">Kompletné riešenie na mieru</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-light">Dizajn a Vývoj na Mieru</h3>
                                    <p className="text-rocket">Vytvoríme unikátny dizajn a architektúru presne podľa potrieb vášho biznisu a značky. Žiadne šablónové riešenia, len originálny a funkčný e-shop.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-light">Integrácia Platobných Brán a Dopravy</h3>
                                    <p className="text-rocket">Bezproblémovo integrujeme všetky populárne platobné a dopravné metódy pre maximálne pohodlie vašich zákazníkov (Stripe, PayPal, GoPay, Packeta, a i.).</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-light">Pokročilá Správa Produktov a Zákazníkov</h3>
                                    <p className="text-rocket">Intuitívny systém pre správu produktov, variantov, zásob, objednávok, zľavových kódov a zákazníckych dát.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-light">SEO pre E-commerce</h3>
                                    <p className="text-rocket">Naše riešenie je od základu postavené s dôrazom na najlepšie SEO praktiky pre e-shopy, vrátane štruktúrovaných dát, optimalizácie kategórií a produktových stránok.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                 </section>

                 <section className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-headline text-light">Náš Proces Vývoja</h2>
                    <ol className="relative border-l border-spaceship">                  
                        <li className="mb-10 ml-6">            
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-sky/10 rounded-full -left-4 ring-8 ring-space text-sky font-bold">1</span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-light">Analýza a Stratégia</h3>
                            <p className="mb-4 text-base font-normal text-rocket">Ponoríme sa do vášho biznisu, analyzujeme konkurenciu a definujeme kľúčové funkcie a používateľské cesty pre váš nový e-shop.</p>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-sky/10 rounded-full -left-4 ring-8 ring-space text-sky font-bold">2</span>
                            <h3 className="mb-1 text-lg font-semibold text-light">UX/UI Dizajn a Prototyp</h3>
                            <p className="text-base font-normal text-rocket">Vytvoríme intuitívny a vizuálne príťažlivý dizajn zameraný na maximálnu konverziu. Vytvoríme klikateľný prototyp, aby ste si mohli e-shop vyskúšať ešte pred programovaním.</p>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-sky/10 rounded-full -left-4 ring-8 ring-space text-sky font-bold">3</span>
                            <h3 className="mb-1 text-lg font-semibold text-light">Vývoj, Nasadenie a Podpora</h3>
                            <p className="text-base font-normal text-rocket">Naprogramujeme, otestujeme a nasadíme váš nový e-shop. Poskytneme vám školenie a dlhodobú technickú podporu pre bezproblémový chod.</p>
                        </li>
                    </ol>
                </section>

                 <section id="cta" className="bg-galaxy border-spaceship border rounded-2xl p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline text-light">Pripravení predávať viac?</h2>
                     <p className="text-lg text-rocket mb-8 max-w-2xl mx-auto text-balance">
                         Poďme sa porozprávať o tom, ako môže naša e-commerce PWA platforma naštartovať váš online predaj a zabezpečiť vám dlhodobý rast.
                     </p>
                      <Button size="lg" asChild className="bg-sky hover:bg-night-sky">
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
