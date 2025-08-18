
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Search, Code, ShoppingCart, Lightbulb, TrendingUp, BarChart, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

const services = [
    {
        icon: <Search className="h-8 w-8 text-aurora" />,
        title: 'Komplexné SEO Služby',
        description: 'Od technickej analýzy, cez on-page optimalizáciu až po budovanie autority. Zabezpečíme, aby vás zákazníci našli.',
        href: '/pricing',
    },
    {
        icon: <Code className="h-8 w-8 text-aurora" />,
        title: 'Vývoj PWA Aplikácií',
        description: 'Vytvárame moderné Progresívne Webové Aplikácie, ktoré sú rýchle, spoľahlivé a fungujú aj offline.',
        href: '/sluzby',
    },
    {
        icon: <ShoppingCart className="h-8 w-8 text-aurora" />,
        title: 'E-commerce Riešenia',
        description: 'Budujeme vysoko výkonné e-shopy na báze PWA, ktoré zvyšujú konverzie a poskytujú skvelý nákupný zážitok.',
        href: '/sluzby/ecommerce-pwa',
    },
    {
        icon: <Lightbulb className="h-8 w-8 text-aurora" />,
        title: 'Digitálne Konzultácie',
        description: 'Pomôžeme vám s digitálnou transformáciou a nastavením stratégie, ktorá prinesie merateľné výsledky.',
        href: '/sluzby/digitalna-transformacia',
    }
];

const benefits = [
    {
        icon: <TrendingUp className="h-8 w-8 text-sky" />,
        title: "Zameranie na Výsledky",
        description: "Naše stratégie sú navrhnuté tak, aby prinášali merateľný rast – viac návštevnosti, viac dopytov, vyššie tržby."
    },
    {
        icon: <BarChart className="h-8 w-8 text-sky" />,
        title: "Dátovo Orientovaný Prístup",
        description: "Každé naše rozhodnutie je podložené dátami a hĺbkovou analýzou. Hádanie prenechávame konkurencii."
    },
    {
        icon: <Users className="h-8 w-8 text-sky" />,
        title: "Partnerský Prístup",
        description: "Sme predĺženou rukou vášho tímu. Úzko spolupracujeme, aby sme pochopili váš biznis a dosiahli spoločné ciele."
    }
]

const featuredArticles = [
    {
        title: 'Kompletný sprievodca SEO pre začiatočníkov v roku 2024',
        description: 'Rozumieme, že SEO môže byť na prvý pohľad zložité. Preto sme pripravili tohto komplexného sprievodcu, ktorý vás prevedie všetkými základmi.',
        href: '/tahaky#on-page',
        image: 'https://img.freepik.com/free-vector/search-engine-optimization-concept-illustration_114360-7579.jpg?w=400',
        imageHint: 'seo startup rocket',
    },
    {
        title: 'Prečo je vaša firma pripravená na Progresívnu Webovú Aplikáciu (PWA)?',
        description: 'Objavte, ako môže PWA transformovať váš biznis, zvýšiť angažovanosť zákazníkov a poskytnúť vám konkurenčnú výhodu na trhu.',
        href: '/sluzby/pwa-pre-male-podniky',
        image: 'https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg?w=600',
        imageHint: 'modern application on laptop',
    },
    {
        title: 'Prípadová štúdia: Ako sme zdvojnásobili organickú návštevnosť pre e-shop',
        description: 'Detailný pohľad na našu stratégiu, ktorá viedla k 100% nárastu organickej návštevnosti a 80% nárastu konverzií pre nášho klienta v priebehu 6 mesiacov.',
        href: '/blog',
        image: 'https://img.freepik.com/free-vector/data-analysis-complexity-concept-illustration_114360-8413.jpg?w=600',
        imageHint: 'data analysis chart',
    },
]


export default function HomePage() {
  return (
    <div className="bg-space text-light">
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-space text-light">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute inset-0 bg-galaxy" />
            <div className="absolute h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(3,12,26,0)_0%,var(--space)_100%)]" />
            <div 
              className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_at_50%_50%,var(--aurora),rgba(56,224,140,0)_60%)] opacity-20"
              style={{ animation: 'aurora-pulse 12s infinite alternate' }}
            />
            <div 
              className="absolute bottom-0 right-[-20%] top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_at_50%_50%,var(--sky),rgba(29,116,246,0)_60%)] opacity-20"
               style={{ animation: 'sky-pulse 15s infinite alternate' }}
            />
          </div>

          <motion.div
            className="relative z-10 flex flex-col items-center text-center px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl bg-clip-text bg-gradient-to-br from-light/90 via-light to-moon font-headline"
              variants={itemVariants}
            >
              Viditeľnosť, ktorá predáva
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-lg tracking-tight text-rocket text-balance"
              variants={itemVariants}
            >
              Transformujeme vašu online prítomnosť na merateľné výsledky. S nami
              nebudete len videní – budete nezabudnuteľní.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={itemVariants}
            >
              <Button asChild size="lg" className="w-full sm:w-auto bg-sky hover:bg-night-sky text-light shadow-lg shadow-sky/20">
                <Link href="/seo-audit-akcia">
                  <Sparkles className="mr-2" />
                  Nechaj si urobiť audit
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-spaceship bg-galaxy/50 text-light hover:bg-space-grey hover:text-light">
                <Link href="/pricing">
                  Pozri cenník
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          <style jsx global>{`
            @keyframes aurora-pulse {
              0% { transform: scale(0.8) translate(20%, -10%); opacity: 0.1; }
              50% { opacity: 0.25; }
              100% { transform: scale(1.2) translate(-10%, 10%); opacity: 0.1; }
            }
            @keyframes sky-pulse {
              0% { transform: scale(0.9) translate(-15%, 15%); opacity: 0.15; }
              50% { opacity: 0.3; }
              100% { transform: scale(1.1) translate(10%, -5%); opacity: 0.15; }
            }
          `}</style>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 sm:py-32 bg-galaxy">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                >
                    <h2 className="text-3xl font-bold tracking-tighter md:text-5xl font-headline text-light">Naše Služby: Váš Digitálny Arzenál</h2>
                    <p className="mt-4 text-lg text-rocket text-balance">
                       Pokrývame celé spektrum digitálnych potrieb – od zviditeľnenia vo vyhľadávačoch až po vývoj špičkových webových aplikácií, ktoré vás odlíšia od konkurencie.
                    </p>
                </motion.div>
                <motion.div 
                    className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants}>
                             <Card className="flex flex-col h-full bg-space-grey border-spaceship text-light text-center p-6 transition-all duration-300 hover:-translate-y-2 hover:border-aurora/50">
                                <CardHeader className="items-center p-0">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-galaxy shadow-lg">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="mt-6 text-xl font-bold">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow p-0 pt-4">
                                    <p className="text-rocket text-balance">{service.description}</p>
                                </CardContent>
                                <CardFooter className="p-0 pt-6">
                                     <Button asChild variant="ghost" className="w-full text-aurora hover:bg-aurora/10 hover:text-aurora">
                                        <Link href={service.href}>
                                            Zistiť Viac
                                            <ArrowRight className="ml-2 h-4 w-4"/>
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-20 sm:py-32 bg-space">
             <div className="container mx-auto px-4">
                 <motion.div 
                    className="text-center max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                >
                    <h2 className="text-3xl font-bold tracking-tighter md:text-5xl font-headline text-light">Prečo si Vybrať Nás?</h2>
                    <p className="mt-4 text-lg text-rocket text-balance">
                       Nie sme len ďalšia agentúra. Sme váš partner na ceste k digitálnemu úspechu. Naša filozofia je postavená na troch pevných pilieroch.
                    </p>
                </motion.div>
                 <motion.div 
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {benefits.map((benefit, index) => (
                         <motion.div key={index} variants={itemVariants}>
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-galaxy shadow-lg">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-light">{benefit.title}</h3>
                                <p className="text-rocket text-balance">{benefit.description}</p>
                            </div>
                         </motion.div>
                    ))}
                </motion.div>
             </div>
        </section>


        {/* Blog Section */}
        <section id="blog" className="py-20 sm:py-32 bg-galaxy">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                >
                    <h2 className="text-3xl font-bold tracking-tighter md:text-5xl font-headline text-light">Vedomosti, o Ktoré sa Delíme</h2>
                    <p className="mt-4 text-lg text-rocket text-balance">
                       Veríme, že vzdelávanie je kľúčom k úspechu. Prečítajte si naše najnovšie postrehy, analýzy a návody zo sveta SEO a moderného webu.
                    </p>
                </motion.div>
                <motion.div 
                    className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {featuredArticles.map((article, index) => (
                        <motion.div key={article.title + index} variants={itemVariants}>
                             <Card className="flex flex-col overflow-hidden h-full bg-space border-spaceship text-light transition-transform duration-300 hover:-translate-y-2 hover:border-aurora/50 group">
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
                                    <CardTitle className="text-xl font-bold text-light">
                                        <Link href={article.href} className="hover:text-aurora transition-colors">{article.title}</Link>
                                    </CardTitle>
                                    <CardDescription className="pt-2 text-rocket text-balance">{article.description}</CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-auto flex justify-between items-center">
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
                 <motion.div 
                    className="text-center mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={itemVariants}
                >
                     <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-spaceship bg-galaxy/50 text-light hover:bg-space-grey hover:text-light">
                        <Link href="/blog">
                            Navštíviť Náš Blog
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </motion.div>
            </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 sm:py-32 bg-space">
             <div className="container mx-auto px-4">
                 <motion.div 
                    className="bg-galaxy rounded-2xl p-8 md:p-16 text-center border border-spaceship"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                >
                     <h2 className="text-3xl font-bold tracking-tighter md:text-5xl font-headline text-light">Pripravení na Skutočný Rast?</h2>
                     <p className="mt-4 text-lg text-rocket text-balance max-w-2xl mx-auto">
                         Prestaňte strácať čas a peniaze na stratégie, ktoré nefungujú. Poďme sa porozprávať o tom, ako môžeme vášmu biznisu pomôcť dosiahnuť merateľné výsledky.
                     </p>
                      <Button asChild size="lg" className="mt-8 bg-sky hover:bg-night-sky text-light shadow-lg shadow-sky/20 h-12 text-base">
                        <Link href="/contact">
                          Získať Bezplatnú Konzultáciu
                        </Link>
                      </Button>
                 </motion.div>
             </div>
        </section>
      </main>
    </div>
  );
}

