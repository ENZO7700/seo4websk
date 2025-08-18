'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Vývoj PWA pre malé podniky',
        description: 'Vytvoríme pre vás modernú Progresívnu Webovú Aplikáciu (PWA), ktorá kombinuje to najlepšie z webu a mobilných aplikácií. Získajte offline prístup, push notifikácie a bleskovú rýchlosť.',
        href: '/sluzby/pwa-pre-male-podniky',
        image: 'https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg?w=600',
        imageHint: 'modern application on laptop',
        width: 600,
        height: 600,
    },
    {
        title: 'SEO pre PWA',
        description: 'Špecializovaná optimalizácia pre vyhľadávače určená pre Progresívne Webové Aplikácie. Zabezpečíme, aby vaša PWA dosiahla maximálnu viditeľnosť a organickú návštevnosť.',
        href: '/sluzby/seo-pre-pwa',
        image: 'https://img.freepik.com/free-vector/social-strategy-concept-illustration_114360-7892.jpg?w=600',
        imageHint: 'seo analytics graph',
        width: 600,
        height: 600,
    },
    {
        title: 'E-commerce platformy (PWA)',
        description: 'Vybudujeme pre vás vysoko výkonnú e-commerce platformu postavenú na technológii PWA. Poskytnite svojim zákazníkom zážitok z nakupovania na úrovni natívnej aplikácie priamo v prehliadači.',
        href: '/sluzby/ecommerce-pwa',
        image: 'https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg?w=600',
        imageHint: 'online shopping cart',
        width: 600,
        height: 600,
    },
    {
        title: 'Konzultácie v oblasti digitálnej transformácie',
        description: 'Navigujeme vašu firmu procesom digitálnej transformácie. Od počiatočnej analýzy až po implementáciu moderných technologických riešení.',
        href: '/sluzby/digitalna-transformacia',
        image: 'https://img.freepik.com/free-vector/business-deal-concept-illustration_114360-5695.jpg?w=600',
        imageHint: 'business meeting strategy',
        width: 600,
        height: 600,
    }
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

export default function ServicesPage() {
    return (
        <div className="bg-space text-light">
            <main className="container mx-auto px-4 py-24 sm:py-32">
                <div className="flex flex-col items-center justify-center space-y-8">
                    <motion.div 
                        className="text-center"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tighter md:text-5xl font-headline text-light">
                            Naše PWA & Aplikačné Služby
                        </motion.h1>
                        <motion.p variants={itemVariants} className="mt-4 max-w-2xl text-lg text-rocket text-balance">
                            Posúvame hranice webu s modernými Progresívnymi Webovými Aplikáciami (PWA). Objavte naše riešenia na mieru, ktoré zrýchlia váš biznis.
                        </motion.p>
                    </motion.div>
                    
                    <motion.div 
                        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 pt-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                    {services.map((service) => (
                        <motion.div key={service.title} variants={itemVariants}>
                            <Card className="flex flex-col overflow-hidden h-full bg-galaxy border-spaceship text-light transition-transform duration-300 hover:-translate-y-2 hover:border-aurora/50">
                                <CardContent className="p-0">
                                <div className="aspect-video relative w-full overflow-hidden">
                                    <Image 
                                        src={service.image}
                                        alt={`Ilustračný obrázok pre službu ${service.title}`}
                                        width={service.width}
                                        height={service.height}
                                        className="object-cover w-full h-full"
                                        data-ai-hint={service.imageHint}
                                    />
                                </div>
                                </CardContent>
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-light">{service.title}</CardTitle>
                                    <CardDescription className="pt-2 text-rocket text-balance h-24">{service.description}</CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-auto">
                                    <Button asChild className="w-full bg-space-grey border border-spaceship text-light hover:bg-spaceship">
                                        <Link href={service.href}>
                                            Zistiť Viac
                                            <ArrowRight className="ml-2"/>
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                    </motion.div>
                </div>
            </main>
        </div>
    )
}
