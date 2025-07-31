
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Smartphone, Globe, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PwaForBusinessPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">Vývoj PWA pre Malé a Stredné Podniky</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Získajte konkurenčnú výhodu s Progresívnou Webovou Aplikáciou, ktorá posunie váš biznis na novú úroveň.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Chcem Bezplatnú Konzultáciu</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
                <section id="about-pwa" className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Čo je to Progresívna Webová Aplikácia (PWA)?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                        PWA je typ aplikačného softvéru dodávaného prostredníctvom webu, postaveného pomocou bežných webových technológií vrátane HTML, CSS a JavaScriptu. Je určená na prácu na akejkoľvek platforme, ktorá používa prehliadač vyhovujúci štandardom. V skratke, PWA kombinuje to najlepšie z webových stránok (dostupnosť, indexovateľnosť) a mobilných aplikácií (rýchlosť, offline funkčnosť, push notifikácie).
                    </p>
                </section>

                <section id="features" className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-headline">Tri piliere PWA</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                         <Card className="border-primary/20 bg-card/50 backdrop-blur-lg text-center">
                            <CardHeader className="items-center">
                                <Zap className="h-8 w-8 text-primary" />
                                <CardTitle className="mt-4 text-xl font-semibold">Rýchlosť</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">PWA sú navrhnuté pre bleskové načítanie a plynulý chod, čo dramaticky zlepšuje používateľský zážitok a znižuje mieru odchodov.</p>
                            </CardContent>
                         </Card>
                         <Card className="border-primary/20 bg-card/50 backdrop-blur-lg text-center">
                            <CardHeader className="items-center">
                                <Globe className="h-8 w-8 text-primary" />
                                <CardTitle className="mt-4 text-xl font-semibold">Spoľahlivosť</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Aplikácia funguje spoľahlivo aj pri slabom alebo žiadnom internetovom pripojení vďaka inteligentnému cachovaniu.</p>
                            </CardContent>
                         </Card>
                         <Card className="border-primary/20 bg-card/50 backdrop-blur-lg text-center">
                            <CardHeader className="items-center">
                                <Smartphone className="h-8 w-8 text-primary" />
                                <CardTitle className="mt-4 text-xl font-semibold">Pútavosť</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Poskytuje používateľský zážitok podobný natívnej aplikácii, vrátane možnosti inštalácie na plochu a push notifikácií.</p>
                            </CardContent>
                         </Card>
                    </div>
                </section>
                
                 <section id="benefits" className="grid items-center gap-12 md:grid-cols-2 mb-20">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Kľúčové Výhody pre Váš Biznis</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Zvýšená angažovanosť a udržanie zákazníkov</h3>
                                    <p className="text-muted-foreground">Push notifikácie umožňujú efektívne osloviť zákazníkov s novinkami, akciami alebo pripomienkami, a udržať ich tak v kontakte s vašou značkou.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Lepšia konverzia a vyššie tržby</h3>
                                    <p className="text-muted-foreground">Rýchlejšie načítanie a plynulejší používateľský zážitok priamo vedú k vyššej miere konverzie, či už ide o odoslanie dopytu alebo nákup.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Nižšie náklady na vývoj a údržbu</h3>
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

                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Ste pripravení na budúcnosť webu?</h2>
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
