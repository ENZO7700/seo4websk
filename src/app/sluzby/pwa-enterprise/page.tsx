
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Zap, Shield, Infinity } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PwaEnterprisePage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-card py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">Enterprise PWA</h1>
                    <p className="text-xl max-w-3xl mx-auto text-muted-foreground mb-8 text-balance">
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
                            src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3805.jpg?w=600"
                            alt="Tím expertov plánuje enterprise PWA riešenie"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-2xl shadow-primary/10 mx-auto"
                            data-ai-hint="enterprise solution planning"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Neobmedzené Možnosti pre Váš Biznis</h2>
                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                          Pre klientov s najvyššími nárokmi ponúkame Enterprise riešenia. Či už potrebujete komplexnú integráciu s vašimi internými systémami (ERP, CRM), pokročilé bezpečnostné funkcie, špecifickú biznis logiku alebo aplikáciu schopnú zvládnuť milióny používateľov, náš tím expertov je pripravený navrhnúť a vyvinúť riešenie presne na mieru.
                        </p>
                        <p className="text-lg text-muted-foreground text-balance">
                           Neuspokojíme sa s kompromismi. Naším cieľom je vytvoriť robustnú, bezpečnú a vysoko výkonnú platformu, ktorá sa stane jadrom vašich digitálnych operácií.
                        </p>
                    </div>
                </section>

                <section className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Pre koho je Enterprise riešenie?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                       Tento balík je určený pre veľké spoločnosti, korporácie, technologické firmy, startupy s vysokým rastovým potenciálom a organizácie so špecifickými požiadavkami, ktoré presahujú rámec bežných riešení. Ak hľadáte technologického partnera pre dlhodobú a komplexnú spoluprácu, ktorý rozumie zložitým biznis procesom a dokáže priniesť inovácie, ste na správnom mieste.
                    </p>
                </section>

                <section className="mb-20">
                     <Card className="bg-card border">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl font-bold text-center text-foreground">Čo môžete očakávať?</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg pt-6">
                            <div className="flex items-start gap-3">
                                <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Riešenie na kľúč</h3>
                                    <p className="text-sm text-muted-foreground">Zabezpečíme kompletný životný cyklus projektu: od hĺbkovej analýzy požiadaviek, cez architektúru, dizajn, vývoj, prísne testovanie až po finálne nasadenie a dlhodobú údržbu.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Integrácie s externými systémami (API)</h3>
                                    <p className="text-sm text-muted-foreground">Bezproblémovo prepojíme vašu PWA s akýmkoľvek softvérom, ktorý používate – ERP, CRM, účtovné systémy, skladové hospodárstvo alebo proprietárne firemné nástroje.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Pokročilá bezpečnosť a súlad (Compliance)</h3>
                                    <p className="text-sm text-muted-foreground">Implementácia najvyšších bezpečnostných štandardov (napr. OWASP Top 10), ochrana dát a zabezpečenie súladu s GDPR a ďalšími reguláciami.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Dedikovaná podpora a SLA</h3>
                                    <p className="text-sm text-muted-foreground">Pridelený projektový manažér a tím, ktorý je vám k dispozícii. Garantujeme reakčné časy a podporu v rámci Service Level Agreement (SLA).</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Infinity className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Prioritný vývoj a škálovateľnosť</h3>
                                    <p className="text-sm text-muted-foreground">Architektúra navrhnutá pre vysokú záťaž, milióny používateľov a budúci rast. Využívame cloudové technológie a princípy mikroservisov pre maximálnu flexibilitu.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Cena</h3>
                                    <p className="text-sm text-muted-foreground font-bold text-lg">Na mieru</p>
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
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-foreground">Strategické partnerstvo</h3>
                            <p className="mb-4 text-base font-normal text-muted-foreground">Stávame sa vaším výskumným a vývojovým oddelením pre digitálny rast. Neustále analyzujeme trh, testujeme nové hypotézy a hľadáme inovatívne cesty k úspechu.</p>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-8 ring-background text-primary font-bold">2</span>
                            <h3 className="mb-1 text-lg font-semibold text-foreground">Agilný Vývoj a Prototypovanie</h3>
                            <p className="text-base font-normal text-muted-foreground">Pracujeme v krátkych, transparentných šprintoch. Pravidelne vám dodávame funkčné časti aplikácie, aby ste mali neustály prehľad a možnosť ovplyvniť smerovanie vývoja.</p>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-8 ring-background text-primary font-bold">3</span>
                            <h3 className="mb-1 text-lg font-semibold text-foreground">Dlhodobá Podpora a Inovácie</h3>
                            <p className="text-base font-normal text-muted-foreground">Naša spolupráca nekončí nasadením. Poskytujeme dlhodobú technickú podporu, monitorujeme výkon a proaktívne navrhujeme ďalšie vylepšenia a inovácie.</p>
                        </li>
                    </ol>
                </section>

                 <section id="cta" className="bg-card rounded-lg p-12 text-center border">
                     <h2 className="text-3xl font-bold mb-4 font-headline text-foreground">Máte veľkú víziu? My ju zrealizujeme.</h2>
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
