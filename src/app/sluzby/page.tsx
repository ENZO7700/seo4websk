
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import LottiePlayer from '@/components/ui/lottie-player';

const services = [
    {
        title: 'Vývoj PWA pre malé podniky',
        description: 'Vytvoríme pre vás modernú Progresívnu Webovú Aplikáciu (PWA), ktorá kombinuje to najlepšie z webu a mobilných aplikácií. Získajte offline prístup, push notifikácie a bleskovú rýchlosť.',
        href: '/sluzby/pwa-pre-male-podniky',
        image: 'https://firebasestorage.googleapis.com/v0/b/aetherflow-6gd9p.appspot.com/o/images%2Fservice-pwa-dev.png?alt=media&token=8e9f543e-a6b3-4f0f-87d1-e62a1a2ab5d0',
        imageHint: 'modern application on laptop'
    },
    {
        title: 'SEO pre PWA',
        description: 'Špecializovaná optimalizácia pre vyhľadávače určená pre Progresívne Webové Aplikácie. Zabezpečíme, aby vaša PWA dosiahla maximálnu viditeľnosť a organickú návštevnosť.',
        href: '/sluzby/seo-pre-pwa',
        image: 'https://firebasestorage.googleapis.com/v0/b/aetherflow-6gd9p.appspot.com/o/images%2Fservice-seo-pwa.png?alt=media&token=e153400a-1a3b-4828-9f2b-7c44934e68e4',
        imageHint: 'seo analytics graph'
    },
    {
        title: 'E-commerce platformy (PWA)',
        description: 'Vybudujeme pre vás vysoko výkonnú e-commerce platformu postavenú na technológii PWA. Poskytnite svojim zákazníkom zážitok z nakupovania na úrovni natívnej aplikácie priamo v prehliadači.',
        href: '/sluzby/ecommerce-pwa',
        animationUrl: 'https://lottie.host/b65f5859-2996-415d-ab9b-35b818f9bd8a/l8w2MDB3P9.json',
        imageHint: 'online shopping cart'
    },
    {
        title: 'Konzultácie v oblasti digitálnej transformácie',
        description: 'Navigujeme vašu firmu procesom digitálnej transformácie. Od počiatočnej analýzy až po implementáciu moderných technologických riešení.',
        href: '/sluzby/digitalna-transformacia',
        image: 'https://firebasestorage.googleapis.com/v0/b/aetherflow-6gd9p.appspot.com/o/images%2Fservice-consulting.png?alt=media&token=5a57e3f6-398d-4a1e-9c2e-4b6e828d9c49',
        imageHint: 'business meeting strategy'
    }
]

export default function ServicesPage() {
    return (
        <main className="container mx-auto px-4 py-24 sm:py-32">
            <div className="flex flex-col items-center justify-center space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline">
                        Naše PWA & Aplikačné Služby
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-foreground/70 text-balance">
                        Posúvame hranice webu s modernými Progresívnymi Webovými Aplikáciami (PWA). Objavte naše riešenia na mieru, ktoré zrýchlia váš biznis.
                    </p>
                </div>
                
                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                   {services.map((service, index) => (
                        <Card key={index} className="flex flex-col overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Rocket className="h-6 w-6 text-primary flex-shrink-0"/>
                                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                                </div>
                                <CardDescription className="pt-2 text-balance">{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow flex items-center justify-center">
                               { 'animationUrl' in service ? (
                                    <LottiePlayer src={service.animationUrl} />
                               ) : 'image' in service && service.image ? (
                                   <Image 
                                     src={service.image}
                                     alt={`Ilustračný obrázok pre službu ${service.title}`}
                                     width={600}
                                     height={400}
                                     className="rounded-lg object-cover"
                                     data-ai-hint={service.imageHint}
                                   />
                               ) : null}
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full">
                                    <Link href={service.href}>
                                        Zistiť Viac
                                        <ArrowRight className="ml-2"/>
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                   ))}
                </div>
            </div>
        </main>
    )
}

    
