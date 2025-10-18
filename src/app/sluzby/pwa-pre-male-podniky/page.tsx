'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Smartphone, Globe, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PwaForBusinessPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-card py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">Vývoj PWA pre Malé a Stredné Podniky</h1>
                    <p className="text-xl max-w-3xl mx-auto text-muted-foreground mb-8 text-balance">
                        Získajte konkurenčnú výhodu s Progresívnou Webovou Aplikáciou, ktorá posunie váš biznis na novú úroveň.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Chcem Bezplatnú Konzultáciu</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
                <section id="about-pwa" className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline text-foreground">Čo je to Progresívna Webová Aplikácia (PWA)?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                        PWA je typ aplikačného softvéru dodávaného prostredníctvom webu, postaveného pomocou bežných webových technológií vrátane HTML, CSS a JavaScriptu. Je určená na prácu na akejkoľvek platforme, ktorá používa prehliadač vyhovujúci štandardom. V skratke, PWA kombinuje to najlepšie z webových stránok (dostupnosť, indexovateľnosť) a mobilných aplikácií (rýchlosť, offline funkčnosť, push notifikácie).
                    </p>
                </section>

                <section id="features" className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-headline text-foreground">Tri piliere PWA</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                         <Card className="text-center">
                            <CardHeader className="items-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 shadow-lg"><Zap className="h-8 w-8 text-primary" /></div>
                                <CardTitle className="mt-4 text-xl font-semibold text-foreground">Rýchlosť</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-balance">PWA sú navrhnuté pre bleskové načítanie a plynulý chod, čo dramaticky zlepšuje používateľský zážitok a znižuje mieru odchodov.</p>
                            </CardContent>
                         </Card>
                         <Card className="text-center">
                            <CardHeader className="items-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 shadow-lg"><Globe className="h-8 w-8 text-primary" /></div>
                                <CardTitle className="mt-4 text-xl font-semibold text-foreground">Spoľahlivosť</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-balance">Aplikácia funguje spoľahlivo aj pri slabom alebo žiadnom internetovom pripojení vďaka inteligentnému cachovaniu.</p>
                            </CardContent>
                         </Card>
                         <Card className="text-center">
                            <CardHeader className="items-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 shadow-lg"><Smartphone className="h-8 w-8 text-primary" /></div>
                                <CardTitle className="mt-4 text-xl font-semibold text-foreground">Pútavosť</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-balance">Poskytuje používateľský zážitok podobný natívnej aplikácii, vrátane možnosti inštalácie na plochu a push notifikácií.</p>
                            </CardContent>
                         </Card>
                    </div>
                </section>
                
                 <section id="benefits" className="grid items-center gap-12 md:grid-cols-2 mb-20">
                     <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline text-foreground">Kľúčové Výhody pre Váš Biznis</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Zvýšená angažovanosť a udržanie zákazníkov</h3>
                                    <p className="text-muted-foreground">Push notifikácie umožňujú efektívne osloviť zákazníkov s novinkami, akciami alebo pripomienkami, a udržať ich tak v kontakte s vašou značkou.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Lepšia konverzia a vyššie tržby</h3>
                                    <p className="text-muted-foreground">Rýchlejšie načítanie a plynulejší používateľský zážitok priamo vedú k vyššej miere konverzie, či už ide o odoslanie dopytu alebo nákup.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground">Nižšie náklady na vývoj a údržbu</h3>
                                    <p className="text-muted-foreground">Jedna aplikácia pre všetky platformy (iOS, Android, web) znamená výraznú úsporu nákladov oproti vývoju a údržbe samostatných natívnych aplikácií.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                         <Image
                            src="https://img.freepik.com/free-vector/keyword-research-concept-illustration_114360-3415.jpg?w=600"
                            alt="Graf zobrazujúci rast konverzií po implementácii PWA"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-2xl shadow-primary/10"
                            data-ai-hint="conversion rate graph"
                        />
                    </div>
                 </section>

                 <section id="cta" className="bg-card border rounded-2xl p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline text-foreground">Ste pripravení na budúcnosť webu?</h2>
                     <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                         Nechajte si od nás vypracovať nezáväznú ponuku a zistite, ako môže PWA transformovať vaše podnikanie a zabezpečiť vám náskok pred konkurenciou.
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
