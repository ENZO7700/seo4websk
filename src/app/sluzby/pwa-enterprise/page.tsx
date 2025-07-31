
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Zap, Shield, Infinity } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PwaEnterprisePage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">Enterprise PWA</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Vysoko škálovateľné PWA riešenie na mieru pre špecifické potreby vášho podnikania a najnáročnejšie požiadavky.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Dohodnúť si Konzultáciu</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
               <section className="grid items-center gap-12 md:grid-cols-2 mb-20">
                    <div>
                         <Image
                            src="https://img.freepik.com/free-vector/analytics-dashboard-concept-illustration_114360-7312.jpg?w=400"
                            alt="Tím expertov plánuje enterprise PWA riešenie"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-2xl shadow-primary/10 mx-auto"
                            data-ai-hint="enterprise solution planning"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Neobmedzené Možnosti pre Váš Biznis</h2>
                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                          Pre klientov s najvyššími nárokmi ponúkame Enterprise riešenia. Či už potrebujete komplexnú integráciu s vašimi internými systémami (ERP, CRM), pokročilé bezpečnostné funkcie, špecifickú biznis logiku alebo aplikáciu schopnú zvládnuť milióny používateľov, náš tím expertov je pripravený navrhnúť a vyvinúť riešenie presne na mieru.
                        </p>
                    </div>
                </section>

                <section className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Pre koho je Enterprise riešenie?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                       Tento balík je určený pre veľké spoločnosti, korporácie, startupy s vysokým rastovým potenciálom a organizácie so špecifickými požiadavkami, ktoré presahujú rámec bežných riešení. Ak hľadáte technologického partnera pre dlhodobú a komplexnú spoluprácu, ste na správnom mieste.
                    </p>
                </section>

                <section className="mb-20">
                     <Card className="bg-muted/50 border-border/50">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl font-bold text-center">Čo môžete očakávať?</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg">
                            <div className="flex items-start gap-3">
                                <Zap className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Riešenie na kľúč</h3>
                                    <p className="text-sm text-muted-foreground">Kompletný cyklus od analýzy, dizajnu, vývoja, testovania až po nasadenie a údržbu.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Integrácie s externými systémami (API)</h3>
                                    <p className="text-sm text-muted-foreground">Prepojíme vašu PWA s akýmkoľvek softvérom, ktorý používate.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Shield className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Pokročilá bezpečnosť</h3>
                                    <p className="text-sm text-muted-foreground">Implementácia najvyšších bezpečnostných štandardov a ochrana dát.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Dedikovaná podpora</h3>
                                    <p className="text-sm text-muted-foreground">Pridelený projektový manažér a tím, ktorý je vám k dispozícii.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Infinity className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Prioritný vývoj a škálovateľnosť</h3>
                                    <p className="text-sm text-muted-foreground">Architektúra navrhnutá pre vysokú záťaž a budúci rast.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-sm text-muted-foreground">Na mieru podľa rozsahu projektu</p>
                                </div>
                            </div>
                        </CardContent>
                     </Card>
                </section>

                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Máte veľkú víziu? My ju zrealizujeme.</h2>
                      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                         Poďme sa porozprávať o vašich cieľoch a požiadavkách. Spoločne navrhneme riešenie, ktoré posunie vaše podnikanie ďaleko pred konkurenciu.
                     </p>
                      <Button size="lg" asChild>
                        <Link href="/contact">
                            Kontaktujte Nás
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    )
}
