
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Zap, Smartphone, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    {
        icon: <Zap className="h-8 w-8 text-aurora" />,
        title: "Blesková Rýchlosť",
        description: "PWA sú extrémne rýchle vďaka moderným technológiám cachovania. Rýchlosť je kľúčový faktor pre udržanie pozornosti používateľa a pre lepšie hodnotenie v Google."
    },
    {
        icon: <Smartphone className="h-8 w-8 text-aurora" />,
        title: "Zážitok ako z Aplikácie",
        description: "Používatelia si môžu vašu stránku pridať na plochu telefónu jediným klikom. Získate tak stálu prítomnosť na ich zariadeniach bez potreby sťahovania z App Store."
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-aurora" />,
        title: "Offline Funkčnosť",
        description: "Základný obsah a funkcie vašej stránky zostanú dostupné aj pri slabom alebo žiadnom internetovom pripojení. Ideálne pre používateľov na cestách."
    }
]

export default function PwaFuturePage() {
    return (
        <div className="bg-space text-light">
            <header className="relative bg-galaxy py-20 sm:py-32">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg?w=1200"
                        alt="Vývoj moderných aplikácií"
                        fill
                        className="object-cover"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-space via-space/70 to-transparent" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                         <p className="text-aurora font-semibold">Technológie</p>
                        <h1 className="text-4xl md:text-6xl font-bold my-4 text-light font-headline">Prečo je vaša firma pripravená na Progresívnu Webovú Aplikáciu (PWA)?</h1>
                        <p className="text-xl max-w-3xl mx-auto text-rocket mb-8 text-balance">
                           Zistite, ako môže táto prelomová technológia transformovať váš online biznis, zvýšiť angažovanosť zákazníkov a zabezpečiť vám náskok pred konkurenciou.
                        </p>
                    </motion.div>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
                 <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg dark:prose-invert text-light/90 max-w-none">
                        <p className="lead text-xl text-rocket">
                            Vo svete, kde sa väčšina online interakcií odohráva na mobilných zariadeniach, už nestačí mať len "responzívny web". Očakávania používateľov sa posunuli. Chcú rýchlosť, spoľahlivosť a plynulý zážitok, ktorý im poskytujú natívne mobilné aplikácie. A presne to prinášajú Progresívne Webové Aplikácie (PWA).
                        </p>

                        <h2 className="text-aurora">Čo je to vlastne PWA?</h2>
                        <p>
                           Predstavte si PWA ako hybrid medzi webovou stránkou a mobilnou aplikáciou. Je to webová stránka, ale obohatená o moderné technológie, ktoré jej umožňujú správať sa ako aplikácia. Zákazníci ju nájdu cez Google ako bežný web, no môžu si ju nainštalovať na plochu svojho telefónu, používať ju offline a dostávať od vás push notifikácie.
                        </p>
                        
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
                            {benefits.map(benefit => (
                                <Card key={benefit.title} className="bg-galaxy/50 border-spaceship text-center p-6">
                                    <div className="mb-4 inline-block">{benefit.icon}</div>
                                    <h3 className="text-xl font-bold text-light mb-2">{benefit.title}</h3>
                                    <p className="text-rocket text-sm text-balance">{benefit.description}</p>
                                </Card>
                            ))}
                        </div>

                        <h2 className="text-aurora">Kedy sa vám PWA oplatí najviac?</h2>
                        <p>
                           Implementácia PWA dáva zmysel pre takmer každý online biznis, no existujú situácie, kedy je jej prínos najväčší:
                        </p>
                        <ul>
                            <li><strong>E-shopy:</strong> Zvýšenie konverzií vďaka rýchlejšiemu načítaniu produktov a zjednodušenému nákupnému procesu. Push notifikácie o opustenom košíku sú extrémne efektívne.</li>
                            <li><strong>Rezervačné systémy:</strong> Hotely, reštaurácie alebo služby môžu používateľom umožniť rýchlu a jednoduchú rezerváciu aj pri slabom signáli.</li>
                            <li><strong>Obsahové weby a médiá:</strong> Možnosť čítať články offline a dostávať upozornenia na nový obsah výrazne zvyšuje lojalitu čitateľov.</li>
                            <li><strong>B2B portály a SaaS:</strong> Poskytnite vašim firemným klientom rýchly a spoľahlivý prístup k vašim službám priamo z ich plochy.</li>
                        </ul>

                        <h2 className="text-aurora">Záver: Investícia, ktorá sa vráti</h2>
                        <p>Prechod na PWA nie je len technologický upgrade. Je to strategické rozhodnutie, ktoré priamo ovplyvňuje spokojnosť zákazníkov, konverzie a vaše postavenie na trhu. V čase, keď je konkurencia len o klik ďalej, poskytnutie špičkového používateľského zážitku je to, čo rozhoduje o úspechu.</p>
                        <p>Ste pripravení posunúť váš web na ďalšiu úroveň? Preskúmajte naše <Link href="/sluzby/ecommerce-pwa" className="text-sky hover:underline">riešenia pre e-commerce</Link> alebo <Link href="/sluzby/pwa-pre-male-podniky" className="text-sky hover:underline">služby pre malé a stredné podniky</Link>.</p>

                    </div>
                    <div className="mt-12 text-center">
                        <Button asChild>
                            <Link href="/blog">
                                <ArrowLeft className="mr-2"/>
                                Späť na Blog
                            </Link>
                        </Button>
                    </div>
                 </div>
            </main>
        </div>
    );
}
