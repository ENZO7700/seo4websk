
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Search, Link2, Cog, BarChart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const auditFeatures = [
    {
        icon: <Search className="h-8 w-8 text-sky" />,
        title: 'Analýza Kľúčových Slov',
        description: 'Identifikujeme príležitosti a nájdeme slová, ktoré vaši zákazníci skutočne hľadajú.',
    },
    {
        icon: <Cog className="h-8 w-8 text-sky" />,
        title: 'Hĺbkový Technický Audit',
        description: 'Odhalíme skryté technické chyby, ktoré brzdia váš web (rýchlosť, indexácia, a i.).',
    },
    {
        icon: <BarChart className="h-8 w-8 text-sky" />,
        title: 'Analýza Konkurencie',
        description: 'Zistíme, čo robí vaša konkurencia dobre a kde sú vaše šance na predbehnutie.',
    },
    {
        icon: <Link2 className="h-8 w-8 text-sky" />,
        title: 'Audit Odkazového Profilu',
        description: 'Zhodnotíme kvalitu vašich spätných odkazov a navrhneme stratégiu na ich posilnenie.',
    },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "anticipate",
    },
  },
};

export default function SeoAuditAkciaPage() {
    return (
        <div className="bg-space text-light">
             <header className="bg-galaxy py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="mb-2 text-lg font-semibold text-aurora">Časovo Obmedzená Ponuka</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-light font-headline">Hĺbkový SEO Audit</h1>
                        <div className="inline-flex items-baseline justify-center gap-2 md:gap-4">
                             <span className="text-3xl md:text-5xl font-bold text-rocket line-through">249 €</span>
                             <span className="text-5xl md:text-7xl font-bold text-aurora">99 €</span>
                        </div>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto text-rocket my-8 text-balance">
                            Získajte kompletný prehľad o zdraví vášho webu a konkrétny akčný plán na zlepšenie pozícií vo vyhľadávačoch.
                        </p>
                        <Button size="lg" asChild className="h-12 md:h-14 text-lg bg-sky hover:bg-night-sky">
                            <Link href="/contact?subject=Objednavka SEO auditu">Objednať Audit za 99 €</Link>
                        </Button>
                    </motion.div>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
                <section id="what-you-get" className="max-w-5xl mx-auto mb-20">
                     <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-headline">Čo Získate v Rámci Auditu?</h2>
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        {auditFeatures.map((feature, index) => (
                             <motion.div
                                key={index}
                                variants={itemVariants}
                             >
                                <Card className="h-full bg-galaxy border-spaceship text-center">
                                    <CardHeader className="items-center">
                                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-space shadow-lg">
                                            {feature.icon}
                                        </div>
                                        <CardTitle className="mt-4 text-xl font-semibold text-light">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-rocket text-balance">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
                
                 <section id="process" className="grid items-center gap-12 md:grid-cols-2 mb-20">
                    <div>
                         <Image
                            src="https://img.freepik.com/free-vector/seo-analytics-teamwork-concept-illustration_114360-9398.jpg?w=600"
                            alt="Detailný report zo SEO auditu zobrazený na laptope"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-2xl shadow-sky/10"
                            data-ai-hint="seo audit report"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline text-light">Výstup, Ktorému Budete Rozumieť</h2>
                        <p className="text-lg text-rocket mb-6 text-balance">
                            Naším cieľom nie je zahltiť vás technickým žargónom. Dostanete prehľadný report s konkrétnymi, prioritizovanými odporúčaniami, ktoré môžete okamžite začať implementovať.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-light">Zhrnutie pre Manažment</h3>
                                    <p className="text-rocket">Stručný prehľad najdôležitejších zistení a odporúčaní.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-light">Detailný Akčný Plán</h3>
                                    <p className="text-rocket">Krok-za-krokom návod na opravu nájdených chýb, zoradený podľa priority.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-light">30-minútová Konzultácia</h3>
                                    <p className="text-rocket">Po doručení auditu si spolu prejdeme výsledky a zodpovieme všetky vaše otázky.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                 </section>

                 <section id="cta" className="bg-galaxy rounded-2xl border border-spaceship p-8 md:p-12 text-center">
                     <h2 className="text-2xl md:text-3xl font-bold mb-4 font-headline text-light">Nečakajte, Kým Vás Predbehne Konkurencia</h2>
                     <p className="text-lg text-rocket mb-8 max-w-2xl mx-auto text-balance">
                         Táto špeciálna cena platí len na obmedzený čas. Investujte do budúcnosti vášho webu ešte dnes.
                     </p>
                      <Button size="lg" asChild className="h-12 text-lg bg-sky hover:bg-night-sky">
                        <Link href="/contact?subject=Objednavka SEO auditu">
                            Áno, Chcem SEO Audit za 99 €
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    )
}
