'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const mistakes = [
    {
        title: "1. Pomalé Načítanie Stránky (Core Web Vitals)",
        description: "V dnešnej dobe používatelia očakávajú, že sa stránka načíta do 2-3 sekúnd. Pomalý web frustruje návštevníkov a Google ho penalizuje horšími pozíciami. Zamerajte sa na optimalizáciu obrázkov, minimalizáciu kódu a využívanie moderných formátov ako WebP.",
        solutionHref: "/tahaky#technical"
    },
    {
        title: "2. Ignorovanie Mobilnej Verzie (Mobile-First Indexing)",
        description: "Google už roky hodnotí a indexuje weby primárne podľa ich mobilnej verzie. Ak vaša stránka nie je 100% responzívna a ľahko ovládateľná na mobile, prichádzate o drvivú väčšinu potenciálnych zákazníkov.",
        solutionHref: "/sluzby/pwa-pre-male-podniky"
    },
    {
        title: "3. Nesprávna Indexácia (súbor robots.txt a noindex tagy)",
        description: "Častou chybou je nechcené zablokovanie dôležitých častí webu pre roboty vyhľadávačov. Pravidelne kontrolujte súbor robots.txt a meta tagy 'robots', aby ste sa uistili, že Google môže vidieť všetok obsah, ktorý vidieť má.",
        solutionHref: "/seo-analyzer"
    },
    {
        title: "4. Duplicitný Obsah",
        description: "Ak máte rovnaký alebo veľmi podobný obsah dostupný na viacerých URL adresách, mätie to vyhľadávače a štiepi hodnotu vašich spätných odkazov. Tento problém riešte pomocou kanonických URL adries (canonical tags).",
        solutionHref: "/tahaky#on-page"
    },
    {
        title: "5. Chýbajúca alebo Zlá Štruktúra Dát (Schema Markup)",
        description: "Štruktúrované dáta pomáhajú Googlu lepšie pochopiť obsah vašej stránky (napr. že ide o produkt, recenziu, alebo udalosť). Správna implementácia vám môže priniesť tzv. 'rich snippets', ktoré výrazne zvyšujú viditeľnosť a mieru prekliku.",
        solutionHref: "/tahaky#technical"
    }
]

export default function TechnicalSeoMistakesPage() {
    return (
        <div className="bg-space text-light">
            <header className="relative bg-galaxy py-20 sm:py-32">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://img.freepik.com/free-vector/website-troubleshooting-concept-illustration_114360-7605.jpg?w=1200"
                        alt="Oprava technických chýb na webe"
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
                         <p className="text-aurora font-semibold">Technické SEO</p>
                        <h1 className="text-4xl md:text-6xl font-bold my-4 text-light font-headline">5 najčastejších chýb v technickom SEO (a ako ich opraviť)</h1>
                        <p className="text-xl max-w-3xl mx-auto text-rocket mb-8 text-balance">
                           Môžete mať najlepší obsah na svete, no ak váš web trpí technickými problémami, Google ho nikdy neocení. Pozrite sa na najčastejšie chyby, ktoré brzdia váš úspech.
                        </p>
                    </motion.div>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
                 <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg dark:prose-invert text-light/90 max-w-none">
                        <p className="lead text-xl text-rocket">
                           Technické SEO je chrbtovou kosťou každej úspešnej webovej stránky. Je to súbor pravidiel a optimalizácií, ktoré zabezpečujú, aby bol váš web pre vyhľadávače rýchly, zrozumiteľný a ľahko dostupný. Ignorovanie týchto princípov je ako postaviť dom na zlých základoch. Pozrime sa na 5 najčastejších prešľapov.
                        </p>
                    </div>

                    <div className="space-y-8 my-12">
                        {mistakes.map((mistake, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1}}
                            >
                                <div className="p-6 rounded-lg bg-galaxy/50 border border-spaceship">
                                    <h3 className="flex items-center gap-3 text-2xl font-bold text-aurora mb-3">
                                        <AlertTriangle />
                                        {mistake.title}
                                    </h3>
                                    <p className="text-rocket mb-4 text-balance">{mistake.description}</p>
                                    <Button asChild variant="link" className="p-0 text-sky hover:text-aurora">
                                        <Link href={mistake.solutionHref}>
                                            Ako na to? Pozrite si naše nástroje a ťaháky
                                            <ArrowLeft className="transform rotate-180 ml-2"/>
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                     <div className="prose prose-lg dark:prose-invert text-light/90 max-w-none">
                         <h2 className="text-aurora">Záver</h2>
                        <p>
                           Technické SEO nie je jednorazová záležitosť, ale neustály proces. Pravidelným monitorovaním a odstraňovaním týchto chýb zabezpečíte, že váš web bude mať vždy pevné základy pre dosahovanie top pozícií. Ak si nie ste istí, v akom stave je váš web, využite našu <Link href="/seo-audit-akcia" className="text-sky hover:underline">akciovú ponuku na hĺbkový SEO audit</Link>.
                        </p>
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
