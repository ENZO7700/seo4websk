
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Search, Link2, Cog, BarChart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const auditFeatures = [
    {
        icon: <Search className="h-8 w-8 text-primary" />,
        title: 'Analýza Kľúčových Slov',
        description: 'Identifikujeme príležitosti a nájdeme slová, ktoré vaši zákazníci skutočne hľadajú.',
    },
    {
        icon: <Cog className="h-8 w-8 text-primary" />,
        title: 'Hĺbkový Technický Audit',
        description: 'Odhalíme skryté technické chyby, ktoré brzdia váš web (rýchlosť, indexácia, a i.).',
    },
    {
        icon: <BarChart className="h-8 w-8 text-primary" />,
        title: 'Analýza Konkurencie',
        description: 'Zistíme, čo robí vaša konkurencia dobre a kde sú vaše šance na predbehnutie.',
    },
    {
        icon: <Link2 className="h-8 w-8 text-primary" />,
        title: 'Audit Odkazového Profilu',
        description: 'Zhodnotíme kvalitu vašich spätných odkazov a navrhneme stratégiu na ich posilnenie.',
    },
]

export default function SeoAuditPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-gradient-to-br from-primary/10 via-background to-background py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="mb-2 text-lg font-semibold text-primary">Časovo Obmedzená Ponuka</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground font-headline">Hĺbkový SEO Audit</h1>
                        <div className="inline-flex items-baseline justify-center gap-2 md:gap-4">
                             <span className="text-3xl md:text-5xl font-bold text-muted-foreground line-through">249 €</span>
                             <span className="text-5xl md:text-7xl font-bold text-primary">99 €</span>
                        </div>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 my-8 text-balance">
                            Získajte kompletný prehľad o zdraví vášho webu a konkrétny akčný plán na zlepšenie pozícií vo vyhľadávačoch.
                        </p>
                        <Button size="lg" asChild className="h-12 md:h-14 text-lg">
                            <Link href="/contact">Objednať Audit za 99 €</Link>
                        </Button>
                    </motion.div>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
                <section id="what-you-get" className="max-w-5xl mx-auto mb-20">
                     <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-headline">Čo Získate v Rámci Auditu?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {auditFeatures.map((feature, index) => (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                             >
                                <Card className="border-primary/20 bg-card/50 backdrop-blur-lg h-full">
                                    <CardHeader className="items-center text-center">
                                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 shadow-lg">
                                            {feature.icon}
                                        </div>
                                        <CardTitle className="mt-4 text-xl font-semibold">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>
                
                 <section id="process" className="grid items-center gap-12 md:grid-cols-2 mb-20">
                    <div>
                         <Image
                            src="https://firebasestorage.googleapis.com/v0/b/aetherflow-6gd9p.appspot.com/o/images%2Fseo-audit.png?alt=media&token=d14e1a1e-8438-4665-9854-32f2f7556f87"
                            alt="Detailný report zo SEO auditu zobrazený na laptope"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-2xl shadow-primary/10"
                            data-ai-hint="seo audit report"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Výstup, Ktorému Budete Rozumieť</h2>
                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                            Naším cieľom nie je zahltiť vás technickým žargónom. Dostanete prehľadný report s konkrétnymi, prioritizovanými odporúčaniami, ktoré môžete okamžite začať implementovať.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Zhrnutie pre Manažment</h3>
                                    <p className="text-muted-foreground">Stručný prehľad najdôležitejších zistení a odporúčaní.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Detailný Akčný Plán</h3>
                                    <p className="text-muted-foreground">Krok-za-krokom návod na opravu nájdených chýb, zoradený podľa priority.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">30-minútová Konzultácia</h3>
                                    <p className="text-muted-foreground">Po doručení auditu si spolu prejdeme výsledky a zodpovieme všetky vaše otázky.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                 </section>

                 <section id="cta" className="bg-primary/10 rounded-lg p-8 md:p-12 text-center">
                     <h2 className="text-2xl md:text-3xl font-bold mb-4 font-headline">Nečakajte, Kým Vás Predbehne Konkurencia</h2>
                     <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                         Táto špeciálna cena platí len na obmedzený čas. Investujte do budúcnosti vášho webu ešte dnes.
                     </p>
                      <Button size="lg" asChild className="h-12 text-lg">
                        <Link href="/contact">
                            Áno, Chcem SEO Audit za 99 €
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    )
}
