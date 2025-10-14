'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const articles = [
    {
        title: 'Kompletný sprievodca SEO pre začiatočníkov v roku 2024',
        description: 'Rozumieme, že SEO môže byť na prvý pohľad zložité. Preto sme pripravili tohto komplexného sprievodcu, ktorý vás prevedie všetkými základmi.',
        href: '/tahaky#on-page',
        image: 'https://img.freepik.com/free-vector/search-engine-optimization-concept-illustration_114360-7579.jpg?w=400',
        imageHint: 'seo startup rocket',
        tags: ['SEO', 'Návody'],
        date: '22. júl 2024',
    },
    {
        title: 'Ako napísať 10 SEO článkov za deň s pomocou AI',
        description: 'Ukážeme vám, ako efektívne využiť AI nástroje na dramatické zrýchlenie tvorby obsahu bez straty kvality. Získajte praktické tipy a prompty.',
        href: '/blog/ako-pisat-seo-clanky-s-ai',
        image: 'https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-8646.jpg?w=600',
        imageHint: 'ai writing content',
        tags: ['AI', 'Copywriting'],
        date: '25. júl 2024',
    },
    {
        title: 'Prečo je vaša firma pripravená na Progresívnu Webovú Aplikáciu (PWA)?',
        description: 'Objavte, ako môže PWA transformovať váš biznis, zvýšiť angažovanosť zákazníkov a poskytnúť vám konkurenčnú výhodu na trhu.',
        href: '/sluzby/pwa-pre-male-podniky',
        image: 'https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg?w=600',
        imageHint: 'modern application on laptop',
        tags: ['PWA', 'Technológie'],
        date: '15. júl 2024',
    },
    {
        title: 'Prípadová štúdia: Ako sme zdvojnásobili organickú návštevnosť pre e-shop',
        description: 'Detailný pohľad na našu stratégiu, ktorá viedla k 100% nárastu organickej návštevnosti a 80% nárastu konverzií pre nášho klienta v priebehu 6 mesiacov.',
        href: '#',
        image: 'https://img.freepik.com/free-vector/data-analysis-complexity-concept-illustration_114360-8413.jpg?w=600',
        imageHint: 'data analysis chart',
        tags: ['Prípadové štúdie', 'SEO'],
        date: '10. júl 2024',
    },
    {
        title: '5 najčastejších chýb v technickom SEO, ktorým sa musíte vyhnúť',
        description: 'Technické SEO je základom úspechu. Prečítajte si, akým chybám sa vyvarovať, aby váš web bol pre vyhľadávače perfektne pripravený.',
        href: '/tahaky#technical',
        image: 'https://img.freepik.com/free-vector/website-troubleshooting-concept-illustration_114360-7605.jpg?w=600',
        imageHint: 'website technical error',
        tags: ['Technické SEO', 'SEO'],
        date: '5. júl 2024',
    },
     {
        title: 'Budúcnosť e-commerce je tu: E-shopy postavené na PWA',
        description: 'Zistite, prečo sú PWA e-shopy rýchlejšie, spoľahlivejšie a konvertujú lepšie ako tradičné riešenia. Poskytnite zákazníkom zážitok z budúcnosti.',
        href: '/sluzby/ecommerce-pwa',
        image: 'https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg?w=600',
        imageHint: 'online shopping cart',
        tags: ['PWA', 'E-commerce'],
        date: '1. júl 2024',
    },
];

const allTags = ['Všetky', ...Array.from(new Set(articles.flatMap(a => a.tags)))];

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

export default function BlogPage() {
    const [activeTag, setActiveTag] = useState('Všetky');

    const filteredArticles = activeTag === 'Všetky'
        ? articles
        : articles.filter(article => article.tags.includes(activeTag));

    return (
        <div className="bg-space text-light">
            <header className="bg-galaxy py-20 sm:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline">
                        Blog, Návody a Prípadové Štúdie
                    </h1>
                    <p className="mt-4 mx-auto max-w-3xl text-lg text-rocket text-balance">
                        Vedomosti sú kľúčom k úspechu. Ponorte sa do našich článkov a získajte cenné informácie zo sveta SEO, PWA a digitálneho marketingu.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16 sm:py-24">
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {allTags.map(tag => (
                        <Button
                            key={tag}
                            variant={activeTag === tag ? 'default' : 'outline'}
                            onClick={() => setActiveTag(tag)}
                            className={cn(
                                'transition-all',
                                activeTag === tag
                                ? 'bg-sky text-light'
                                : 'border-spaceship bg-galaxy/50 text-light hover:bg-space-grey hover:text-light hover:border-aurora/50'
                            )}
                        >
                            {tag}
                        </Button>
                    ))}
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    key={activeTag}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredArticles.map((article, index) => (
                        <motion.div key={article.title + index} variants={itemVariants}>
                             <Card className="flex flex-col overflow-hidden h-full bg-galaxy border-spaceship text-light transition-transform duration-300 hover:-translate-y-2 hover:border-aurora/50 group">
                                <CardContent className="p-0">
                                <Link href={article.href} className="aspect-video block w-full overflow-hidden relative">
                                    <Image
                                        src={article.image}
                                        alt={`Ilustračný obrázok pre článok ${article.title}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={article.imageHint}
                                    />
                                </Link>
                                </CardContent>
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        {article.tags.map(tag => (
                                            <span key={tag} className="text-xs font-semibold text-aurora bg-aurora/10 px-2 py-1 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                    <CardTitle className="text-xl font-bold text-light">
                                        <Link href={article.href} className="hover:text-aurora transition-colors">{article.title}</Link>
                                    </CardTitle>
                                    <CardDescription className="pt-2 text-rocket text-balance">{article.description}</CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-auto flex justify-between items-center">
                                    <p className="text-sm text-rocket">{article.date}</p>
                                    <Button asChild variant="ghost" size="sm" className="text-aurora hover:bg-aurora/10 hover:text-aurora">
                                        <Link href={article.href}>
                                            Čítať viac
                                            <ArrowRight className="ml-2 h-4 w-4"/>
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                 {filteredArticles.length === 0 && (
                    <motion.div
                        className="text-center py-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <p className="text-2xl font-bold text-rocket">Žiadne články v tejto kategórii</p>
                        <p className="text-moon mt-2">Skúste zvoliť inú kategóriu.</p>
                    </motion.div>
                )}
            </main>
        </div>
    );
}
