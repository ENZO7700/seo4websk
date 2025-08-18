'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, ShoppingCart, Zap, BarChart2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
                        E-commerce PWA (Progresívna Webová Aplikácia) kombinuje dostupnosť webu s funkcionalitou natívnej mobilnej aplikácie. Pre vašich zákazníkov to znamená bezkonkurenčný zážitok z nakupovania priamo v prehliadači, bez nutnosti inštalácie z App Store alebo Google Play. Pre vás to znamená vyššiu angažovanosť, lepšie konverzie a v konečnom dôsledku vyšší zisk. Zabudnite na pomalé, neohrabané e-shopy. Privítajte budúcnosť online predaja.
                    </p>
                </section>

                <section id="features" className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="border-primary/20 bg-card/50 backdrop-blur-lg text-center">
                        <CardHeader className="items-center">
                            <Zap className="h-8 w-8 text-primary" />
                            <CardTitle className="mt-4 text-xl font-semibold">Blesková Rýchlosť</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Okamžité načítanie a plynulé prechádzanie produktov zvyšuje spokojnosť zákazníkov a priamo znižuje mieru opustenia košíka. Každá ušetrená milisekunda znamená potenciálne vyšší zisk.</p>
                        </CardContent>
                    </Card>
                        <Card className="border-primary/20 bg-card/50 backdrop-blur-lg text-center">
                        <CardHeader className="items-center">
                            <ShoppingCart className="h-8 w-8 text-primary" />
                            <CardTitle className="mt-4 text-xl font-semibold">Zážitok Natívnej Aplikácie</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Zákazníci si môžu váš e-shop pridať na plochu, nakupovať offline a dostávať push notifikácie o zľavách, novinkách alebo stave objednávky.</p>
                        </CardContent>
                    </Card>
                        <Card className="border-primary/20 bg-card/50 backdrop-blur-lg text-center lg:col-span-2 xl:col-span-1">
                        <CardHeader className="items-center">
                            <BarChart2 className="h-8 w-8 text-primary" />
                            <CardTitle className="mt-4 text-xl font-semibold">Vyššie Konverzie</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Zjednodušený a rýchlejší nákupný proces, personalizácia a efektívny remarketing vedú k výraznému nárastu konverzného pomeru a priemernej hodnoty objednávky.</p>
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
                                    <p className="text-muted-foreground">Vytvoríme unikátny dizajn a architektúru presne podľa potrieb vášho biznisu a značky. Žiadne šablónové riešenia, len originálny a funkčný e-shop.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Integrácia Platobných Brán a Dopravy</h3>
                                    <p className="text-muted-foreground">Bezproblémovo integrujeme všetky populárne platobné a dopravné metódy pre maximálne pohodlie vašich zákazníkov (Stripe, PayPal, GoPay, Packeta, a i.).</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Pokročilá Správa Produktov a Zákazníkov</h3>
                                    <p className="text-muted-foreground">Intuitívny systém pre správu produktov, variantov, zásob, objednávok, zľavových kódov a zákazníckych dát.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">SEO pre E-commerce</h3>
                                    <p className="text-muted-foreground">Naše riešenie je od základu postavené s dôrazom na najlepšie SEO praktiky pre e-shopy, vrátane štruktúrovaných dát, optimalizácie kategórií a produktových stránok.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                 </section>

                 <section className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-headline">Náš Proces Vývoja</h2>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                        <li className="mb-10 ml-6">            
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <span className='font-bold text-primary'>1</span>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Analýza a Stratégia</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Ponoríme sa do vášho biznisu, analyzujeme konkurenciu a definujeme kľúčové funkcie a používateľské cesty pre váš nový e-shop.</p>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                 <span className='font-bold text-primary'>2</span>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">UX/UI Dizajn a Prototyp</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Vytvoríme intuitívny a vizuálne príťažlivý dizajn zameraný na maximálnu konverziu. Vytvoríme klikateľný prototyp, aby ste si mohli e-shop vyskúšať ešte pred programovaním.</p>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                 <span className='font-bold text-primary'>3</span>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Vývoj, Nasadenie a Podpora</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Naprogramujeme, otestujeme a nasadíme váš nový e-shop. Poskytneme vám školenie a dlhodobú technickú podporu pre bezproblémový chod.</p>
                        </li>
                    </ol>
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
