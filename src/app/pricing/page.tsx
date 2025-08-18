
'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check, Rocket, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const seoTiers = [
  {
    name: 'Štart',
    price: '199 €',
    priceSuffix: '/mesiac',
    description: 'Pre začínajúcich podnikateľov a malé blogy.',
    features: [
      'Analýza kľúčových slov (do 20)',
      'Základný SEO audit',
      'On-page optimalizácia (5 stránok)',
      'Mesačný report',
    ],
    isPopular: false,
    href: '/sluzby/seo-start',
  },
  {
    name: 'Pro',
    price: '449 €',
    priceSuffix: '/mesiac',
    description: 'Pre rastúce weby, ktoré chcú predbehnúť konkurenciu.',
    features: [
      'Všetko v balíku Štart',
      'Pokročilá analýza kľúčových slov (do 100)',
      'Technické SEO',
      'Budovanie 5 spätných odkazov/mesiac',
      'Google My Business optimalizácia',
      'Prioritná podpora',
    ],
    isPopular: true,
    href: '/sluzby/seo-expert',
  },
  {
    name: 'Enterprise',
    price: 'Na mieru',
    priceSuffix: '',
    description: 'Pre veľké firmy a najnáročnejších klientov.',
    features: [
      'Všetko v balíku Pro',
      'Komplexná obsahová stratégia',
      'Intenzívny link building (10+ odkazov)',
      'Analýza a optimalizácia konverzií (CRO)',
      'Dedikovaný SEO manažér',
    ],
    isPopular: false,
    href: '/sluzby/seo-enterprise',
  },
];

const pwaTiers = [
    {
        name: 'PWA Vizitka',
        price: 'od 999 €',
        priceSuffix: 'jednorazovo',
        description: 'Moderná online vizitka alebo portfólio postavené na PWA technológii.',
        features: [
            'Do 5 podstránok',
            'Responzívny dizajn',
            'Kontaktný formulár',
            'Základná SEO optimalizácia',
            'Inštalácia na plochu',
        ],
        isPopular: false,
        href: '/sluzby/pwa-vizitka'
    },
    {
        name: 'PWA Business',
        price: 'od 2,499 €',
        priceSuffix: 'jednorazovo',
        description: 'Komplexné riešenie pre firmy vrátane blogu a marketingových nástrojov.',
        features: [
            'Neobmedzený počet stránok',
            'Blogovací systém (CMS)',
            'Push notifikácie',
            'Pokročilá SEO optimalizácia',
            'Analytické nástroje',
        ],
        isPopular: true,
        href: '/sluzby/pwa-business'
    },
    {
        name: 'PWA E-shop',
        price: 'Na mieru',
        priceSuffix: '',
        description: 'Plnohodnotný e-commerce systém s platobnou bránou a správou produktov.',
        features: [
            'Kompletný e-shop na mieru',
            'Integrácia platobných brán',
            'Správa produktov a objednávok',
            'Zákaznícke účty a personalizácia',
            'Optimalizovaný nákupný košík',
        ],
        isPopular: false,
        href: '/sluzby/ecommerce-pwa'
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


const PricingTierCard = ({ tier }: { tier: any }) => (
  <div
    className={cn(
        "relative flex flex-col rounded-2xl p-8 border",
        tier.isPopular ? "border-aurora/50 bg-space-grey" : "border-spaceship bg-galaxy"
    )}
    >
    {tier.isPopular && (
        <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
            <div className="rounded-full px-4 py-1.5 text-sm font-semibold text-space bg-aurora">
                Najobľúbenejší
            </div>
        </div>
    )}
    <CardHeader className="p-0">
      <CardTitle className="flex items-center gap-2 text-2xl font-bold text-light">
        {tier.name}
      </CardTitle>
      <CardDescription className="text-rocket pt-2 text-base h-12">{tier.description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow space-y-6 p-0 pt-8">
      <div className="flex items-baseline">
        <span className="text-4xl font-bold text-light">{tier.price}</span>
        {tier.priceSuffix && (
          <span className="ml-2 text-rocket">{tier.priceSuffix}</span>
        )}
      </div>
      <ul className="space-y-3">
        {tier.features.map((feature: string) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-aurora flex-shrink-0 mt-1" />
            <span className="text-moon">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="p-0 pt-8">
       <Button asChild className={cn("w-full", !tier.isPopular && "bg-space-grey border border-spaceship text-light hover:bg-spaceship")} size="lg">
            <Link href={tier.href}>
                {tier.price === 'Na mieru' ? 'Kontaktujte nás' : 'Zvoliť balík'}
            </Link>
        </Button>
    </CardFooter>
  </div>
);


export default function PricingPage() {
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
            <motion.h1 variants={itemVariants} className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-light">
                Transparentný cenník, merateľné výsledky
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-4 max-w-2xl text-lg text-rocket text-balance">
                Vyberte si balík, ktorý najlepšie vyhovuje vašim cieľom. Investujte do rastu, ktorý uvidíte v číslach. Žiadne skryté poplatky.
            </motion.p>
            </motion.div>
            
            <motion.section 
                id="seo-services" 
                className="w-full py-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <motion.h2 variants={itemVariants} className="mb-12 text-center text-3xl font-bold tracking-tighter md:text-4xl font-headline">
                SEO Služby
                </motion.h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {seoTiers.map((tier) => (
                        <motion.div key={tier.name} variants={itemVariants}>
                            <PricingTierCard tier={tier} />
                        </motion.div>
                        ))}
                </div>
            </motion.section>

            <motion.section 
                id="pwa-services" 
                className="w-full py-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <motion.h2 variants={itemVariants} className="mb-12 text-center text-3xl font-bold tracking-tighter md:text-4xl font-headline">
                Vývoj Progresívnych Webových Aplikácií (PWA)
                </motion.h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {pwaTiers.map((tier) => (
                        <motion.div key={tier.name} variants={itemVariants}>
                            <PricingTierCard tier={tier} />
                        </motion.div>
                        ))}
                </div>
            </motion.section>
        </div>
      </main>
    </div>
  );
}
