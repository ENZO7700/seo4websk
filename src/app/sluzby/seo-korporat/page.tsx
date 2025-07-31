
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SeoKorporatPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">SEO Balík: Korporát</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Pre veľké e-shopy a firmy, ktoré operujú vo vysoko konkurenčnom prostredí a vyžadujú špičkové, komplexné riešenia.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Objednať Balík Korporát</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
               <section className="grid items-center gap-12 md:grid-cols-2 mb-20">
                    <div>
                         <Image
                            src="https://img.freepik.com/free-vector/mobile-optimization-concept-illustration_114360-3576.jpg?w=600"
                            alt="Stratégia pre korporátne SEO a optimalizáciu konverzií"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-2xl shadow-primary/10 mx-auto"
                            data-ai-hint="corporate seo strategy"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Dominancia na Trhu ako Cieľ</h2>
                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                           Balík Korporát je naša vlajková loď. Ide o komplexné strategické partnerstvo, kde sa náš tím stáva vaším externým SEO oddelením. Kombinujeme najpokročilejšie SEO techniky s dátovo-orientovaným obsahovým marketingom, PR aktivitami a optimalizáciou konverznej miery (CRO), aby sme zabezpečili nielen masívnu návštevnosť, ale aj maximálnu ziskovosť a návratnosť investícií.
                        </p>
                    </div>
                 </section>

                <section className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Pre koho je balík Korporát?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                        Pre veľké firmy a e-shopy s ročným obratom v miliónoch, ktoré čelia silnej konkurencii a potrebujú partnera schopného prinášať merateľné výsledky s priamym dopadom na hospodársky výsledok. Ak hľadáte proaktívny prístup, chcete definovať pravidlá hry na vašom trhu a vnímate SEO ako neoddeliteľnú súčasť biznis stratégie, toto je riešenie pre vás.
                    </p>
                </section>

                 <section className="mb-20">
                     <Card className="bg-muted/50 border-border/50">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl font-bold text-center">Služby pre lídrov na trhu</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg pt-6">
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Všetko v balíku Business</h3>
                                    <p className="text-sm text-muted-foreground">Základ, na ktorom staviame ešte komplexnejšie a agresívnejšie stratégie pre absolútnu dominanciu.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Intenzívny Link building (20+ odkazov/mesiac)</h3>
                                    <p className="text-sm text-muted-foreground">Masívne a cielené budovanie autority prostredníctvom prémiových umiestnení, digitálneho PR a kreatívnych kampaní.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">PR a obsahový marketing</h3>
                                    <p className="text-sm text-muted-foreground">Tvorba a distribúcia vysoko kvalitného obsahu (štúdie, výskumy, interaktívne nástroje), ktorý buduje značku a prirodzene priťahuje hodnotné spätné odkazy.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Analýza a optimalizácia konverzií (CRO)</h3>
                                    <p className="text-sm text-muted-foreground">Nezvyšujeme len návštevnosť, ale aj percento návštevníkov, ktorí sa stanú zákazníkmi. Využívame A/B testovanie a analýzu správania používateľov.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Pravidelné strategické stretnutia</h3>
                                    <p className="text-sm text-muted-foreground">Úzka spolupráca a synchronizácia s vašimi marketingovými a obchodnými cieľmi. Naše tímy budú v neustálom kontakte.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-sm text-muted-foreground font-bold text-lg">1,499 € / mesiac</p>
                                </div>
                            </div>
                        </CardContent>
                     </Card>
                </section>
                
                 <section className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-headline">Náš Proces Spolupráce</h2>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                        <li className="mb-10 ml-6">            
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <span className='font-bold text-primary'>1</span>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Integrácia a strategický alignment</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Na úvodných workshopoch sa zosúladíme s vašimi dlhodobými biznis cieľmi, definujeme spoločné KPI a nastavíme procesy pre hladkú spoluprácu.</p>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                 <span className='font-bold text-primary'>2</span>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Proaktívna exekúcia a inovácie</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Náš tím nečaká na zadania. Proaktívne hľadáme nové príležitosti, testujeme nové hypotézy a implementujeme najnovšie trendy v SEO a digitálnom marketingu.</p>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                 <span className='font-bold text-primary'>3</span>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Business review a strategické poradenstvo</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Na pravidelných stretnutiach (napr. kvartálne) prezentujeme výsledky v kontexte vašich biznis cieľov, vyhodnocujeme ROI a poskytujeme strategické poradenstvo pre ďalší rast.</p>
                        </li>
                    </ol>
                </section>

                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Pripravení definovať pravidlá hry vo vašom odvetví?</h2>
                      <Button size="lg" asChild>
                        <Link href="/contact">
                            Chcem Balík Korporát
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    )
}
