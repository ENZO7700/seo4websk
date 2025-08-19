
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
import { Check } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';


const seoTiers = [
    // Pre jednotlivcov a malé tímy
    {
        name: 'Štart',
        price: '199 €',
        priceSuffix: '/mesiac',
        description: 'Pevné základy pre nové projekty.',
        href: '/sluzby/seo-start',
        category: 'Pre jednotlivcov a malé tímy',
        features: [
            "Analýza kľúčových slov (do 20)",
            "Základný SEO audit",
            "On-page optimalizácia (5 stránok)",
            "Mesačný report",
            "Emailová podpora",
        ]
    },
    {
        name: 'Rast',
        price: '349 €',
        priceSuffix: '/mesiac',
        description: 'Pre tých, čo chcú predbehnúť konkurenciu.',
        href: '/sluzby/seo-rast',
        category: 'Pre jednotlivcov a malé tímy',
        features: [
            "Analýza kľúčových slov (do 50)",
            "Technické SEO",
            "Budovanie spätných odkazov (3/mesiac)",
            "Google Business Profile",
            "Mesačný report",
        ]
    },
    // Pre rastúce firmy
    {
        name: 'Expert',
        price: '449 €',
        priceSuffix: '/mesiac',
        isPopular: true,
        description: 'Aktívne budovanie osobnej značky a autority.',
        href: '/sluzby/seo-expert',
        category: 'Pre rastúce firmy',
        features: [
            "Všetko v balíku Rast",
            "Obsahová stratégia (Základná)",
            "Budovanie spätných odkazov (5/mesiac)",
            "Monitoring konkurencie",
            "1 hod/mesiac konzultácie",
        ]
    },
    {
        name: 'Líder',
        price: '599 €',
        priceSuffix: '/mesiac',
        description: 'Cesta k dominancii vo vašom segmente.',
        href: '/sluzby/seo-lider',
        category: 'Pre rastúce firmy',
        features: [
            "Všetko v balíku Expert",
            "Obsahová stratégia (Pokročilá)",
            "Budovanie spätných odkazov (7/mesiac)",
            "Analýza konverzií (CRO)",
            "Prioritná podpora",
        ]
    },
    // Pre lídrov na trhu
    {
        name: 'Business',
        price: '899 €',
        priceSuffix: '/mesiac',
        description: 'Komplexný motor pre váš biznis rast.',
        href: '/sluzby/seo-business',
        category: 'Pre lídrov na trhu',
        features: [
            "Všetko v balíku Líder",
            "Link building (10+/mesiac)",
            "Komplexná obsahová stratégia",
            "Biznis reportovanie",
            "2 hod/mesiac konzultácie",
        ]
    },
    {
        name: 'Korporát',
        price: '1499 €',
        priceSuffix: '/mesiac',
        description: 'Pre veľké e-shopy a firmy v konkurenčnom prostredí.',
        href: '/sluzby/seo-korporat',
        category: 'Pre lídrov na trhu',
        features: [
            "Všetko v balíku Business",
            "Digitálne PR a link building (20+/mesiac)",
            "Tvorba obsahu",
            "Optimalizácia konverzií (CRO)",
            "Pravidelné strategické porady",
        ]
    },
     {
        name: 'Dominancia',
        price: '2499 €',
        priceSuffix: '/mesiac',
        description: 'Agresívna stratégia pre absolútne ovládnutie trhu.',
        href: '/sluzby/seo-dominancia',
        category: 'Pre lídrov na trhu',
        features: [
           "Všetko v balíku Korporát",
           "Digitálne PR a link building (30+/mesiac)",
           "Pokročilá analytika a reporting",
           "Medzinárodné SEO (1 trh)",
           "Dedikovaný senior konzultant",
        ]
    },
    {
        name: 'Enterprise',
        price: 'Na mieru',
        priceSuffix: '',
        description: 'Riešenie bez kompromisov pre najnáročnejších.',
        href: '/sluzby/seo-enterprise',
        category: 'Pre lídrov na trhu',
        features: [
           "Medzinárodné SEO (viac trhov)",
           "Dedikovaný manažér a tím",
           "Integrácia s BI nástrojmi",
           "Reporting pre Board",
           "Plná integrácia a podpora",
        ]
    },
];

const getTiersByCategory = (category: string) => seoTiers.filter(tier => tier.category === category);

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
        price: 'od 4,999 €',
        priceSuffix: 'jednorazovo',
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
    {
        name: 'PWA Enterprise',
        price: 'Na mieru',
        priceSuffix: '',
        description: 'Vysoko škálovateľné riešenie na mieru pre komplexné potreby a integrácie.',
        features: [
            'Riešenie na kľúč',
            'Integrácie s ERP/CRM (API)',
            'Pokročilá bezpečnosť a compliance',
            'Dedikovaná podpora a SLA',
            'Vysoká škálovateľnosť',
        ],
        isPopular: false,
        href: '/sluzby/pwa-enterprise'
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
  <motion.div
    variants={itemVariants}
    className={cn(
        "relative flex h-full flex-col rounded-2xl p-8 border",
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
      <CardDescription className="text-rocket pt-2 text-base h-12 text-balance">{tier.description}</CardDescription>
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
            <span className="text-moon text-balance">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="p-0 pt-8 mt-auto">
       <Button asChild className={cn("w-full", !tier.isPopular && "bg-space-grey border border-spaceship text-light hover:bg-spaceship")} size="lg">
            <Link href={tier.href}>
                {tier.price === 'Na mieru' ? 'Kontaktujte nás' : 'Zvoliť balík'}
            </Link>
        </Button>
    </CardFooter>
  </motion.div>
);

const PricingCategorySection = ({ title, tiers }: { title: string, tiers: any[] }) => (
    <div className="mb-16">
        <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-center mb-8 font-headline text-aurora">{title}</motion.h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
                <PricingTierCard key={tier.name} tier={tier} />
            ))}
        </div>
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
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <motion.h2 variants={itemVariants} className="mb-12 text-center text-4xl font-bold tracking-tighter md:text-5xl font-headline">
                 <span className="text-aurora">SEO</span> Služby
                </motion.h2>

                <PricingCategorySection title="Pre jednotlivcov a malé tímy" tiers={getTiersByCategory('Pre jednotlivcov a malé tímy')} />
                <PricingCategorySection title="Pre rastúce firmy" tiers={getTiersByCategory('Pre rastúce firmy')} />
                <PricingCategorySection title="Pre lídrov na trhu" tiers={getTiersByCategory('Pre lídrov na trhu')} />

            </motion.section>

            <motion.section 
                id="pwa-services" 
                className="w-full py-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <motion.h2 variants={itemVariants} className="mb-12 text-center text-4xl font-bold tracking-tighter md:text-5xl font-headline">
                 Vývoj <span className="text-aurora">PWA</span>
                </motion.h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {pwaTiers.map((tier) => (
                        <PricingTierCard key={tier.name} tier={tier} />
                    ))}
                </div>
            </motion.section>
        </div>
      </main>
    </div>
  );
}

    