
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
import { Check, Info, Minus, Rocket, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const seoTiers = [
    // Pre jednotlivcov a malé tímy
    {
        name: 'Štart',
        price: '199 €',
        priceSuffix: '/mesiac',
        description: 'Pevné základy pre nové projekty.',
        href: '/sluzby/seo-start',
        category: 'Pre jednotlivcov a malé tímy',
        features: {
            "Analýza kľúčových slov": "do 20",
            "Základný SEO audit": true,
            "On-page optimalizácia": "5 stránok",
            "Technické SEO": false,
            "Budovanie spätných odkazov": false,
            "Google Business Profile": false,
            "Obsahová stratégia": false,
            "Monitoring konkurencie": false,
            "Analýza a optimalizácia konverzií (CRO)": false,
            "Dedikovaný manažér": false,
            "Mesačný report": true,
            "Konzultácie": "email",
        }
    },
    {
        name: 'Rast',
        price: '349 €',
        priceSuffix: '/mesiac',
        description: 'Pre tých, čo chcú predbehnúť konkurenciu.',
        href: '/sluzby/seo-rast',
        category: 'Pre jednotlivcov a malé tímy',
        features: {
            "Analýza kľúčových slov": "do 50",
            "Základný SEO audit": true,
            "On-page optimalizácia": "10 stránok",
            "Technické SEO": true,
            "Budovanie spätných odkazov": "3/mesiac",
            "Google Business Profile": true,
            "Obsahová stratégia": false,
            "Monitoring konkurencie": false,
            "Analýza a optimalizácia konverzií (CRO)": false,
            "Dedikovaný manažér": false,
            "Mesačný report": true,
            "Konzultácie": "email",
        }
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
        features: {
            "Analýza kľúčových slov": "do 100",
            "Základný SEO audit": true,
            "On-page optimalizácia": "15 stránok",
            "Technické SEO": true,
            "Budovanie spätných odkazov": "5/mesiac",
            "Google Business Profile": true,
            "Obsahová stratégia": "Základná",
            "Monitoring konkurencie": false,
            "Analýza a optimalizácia konverzií (CRO)": false,
            "Dedikovaný manažér": false,
            "Mesačný report": "Pokročilý",
            "Konzultácie": "1 hod/mesiac",
        }
    },
    {
        name: 'Líder',
        price: '599 €',
        priceSuffix: '/mesiac',
        description: 'Cesta k dominancii vo vašom segmente.',
        href: '/sluzby/seo-lider',
        category: 'Pre rastúce firmy',
        features: {
            "Analýza kľúčových slov": "do 150",
            "Základný SEO audit": true,
            "On-page optimalizácia": "20 stránok",
            "Technické SEO": true,
            "Budovanie spätných odkazov": "7/mesiac",
            "Google Business Profile": true,
            "Obsahová stratégia": "Pokročilá",
            "Monitoring konkurencie": true,
            "Analýza a optimalizácia konverzií (CRO)": false,
            "Dedikovaný manažér": false,
            "Mesačný report": "Pokročilý",
            "Konzultácie": "1 hod/mesiac",
        }
    },
    // Pre lídrov na trhu
    {
        name: 'Business',
        price: '899 €',
        priceSuffix: '/mesiac',
        description: 'Komplexný motor pre váš biznis rast.',
        href: '/sluzby/seo-business',
        category: 'Pre lídrov na trhu',
        features: {
            "Analýza kľúčových slov": "Neobmedzene",
            "Základný SEO audit": true,
            "On-page optimalizácia": "Priebežne",
            "Technické SEO": true,
            "Budovanie spätných odkazov": "10+/mesiac",
            "Google Business Profile": true,
            "Obsahová stratégia": "Komplexná",
            "Monitoring konkurencie": true,
            "Analýza a optimalizácia konverzií (CRO)": "Základná",
            "Dedikovaný manažér": false,
            "Mesačný report": "Biznis report",
            "Konzultácie": "2 hod/mesiac",
        }
    },
    {
        name: 'Korporát',
        price: '1499 €',
        priceSuffix: '/mesiac',
        description: 'Pre veľké e-shopy a firmy v konkurenčnom prostredí.',
        href: '/sluzby/seo-korporat',
        category: 'Pre lídrov na trhu',
        features: {
            "Analýza kľúčových slov": "Neobmedzene",
            "Základný SEO audit": true,
            "On-page optimalizácia": "Priebežne",
            "Technické SEO": true,
            "Budovanie spätných odkazov": "20+/mesiac (Digitálne PR)",
            "Google Business Profile": true,
            "Obsahová stratégia": "Komplexná + Tvorba",
            "Monitoring konkurencie": true,
            "Analýza a optimalizácia konverzií (CRO)": true,
            "Dedikovaný manažér": false,
            "Mesačný report": "Biznis report",
            "Konzultácie": "Pravidelné porady",
        }
    },
     {
        name: 'Enterprise',
        price: 'Na mieru',
        priceSuffix: '',
        description: 'Riešenie bez kompromisov pre najnáročnejších.',
        href: '/sluzby/seo-enterprise',
        category: 'Pre lídrov na trhu',
        features: {
            "Analýza kľúčových slov": "Medzinárodné",
            "Základný SEO audit": true,
            "On-page optimalizácia": "Priebežne",
            "Technické SEO": true,
            "Budovanie spätných odkazov": "Na mieru",
            "Google Business Profile": true,
            "Obsahová stratégia": "Medzinárodná",
            "Monitoring konkurencie": true,
            "Analýza a optimalizácia konverzií (CRO)": true,
            "Dedikovaný manažér": true,
            "Mesačný report": "Reporting pre Board",
            "Konzultácie": "Plná integrácia",
        }
    },
];

const featureRows = [
    { key: "Analýza kľúčových slov", label: "Analýza kľúčových slov", tooltip: "Počet kľúčových slov, ktoré aktívne sledujeme a optimalizujeme." },
    { key: "Základný SEO audit", label: "Základný SEO audit", tooltip: "Kompletná prvotná analýza technického stavu, obsahu a on-page faktorov." },
    { key: "On-page optimalizácia", label: "On-page optimalizácia", tooltip: "Optimalizácia titulkov, meta popisov, nadpisov a obsahu na stránkach." },
    { key: "Technické SEO", label: "Technické SEO", tooltip: "Optimalizácia rýchlosti, štruktúrovaných dát, indexácie a ďalších technických aspektov." },
    { key: "Budovanie spätných odkazov", label: "Budovanie spätných odkazov", tooltip: "Počet kvalitných spätných odkazov, ktoré pre vás mesačne získame." },
    { key: "Google Business Profile", label: "Google Business Profile", tooltip: "Optimalizácia vášho profilu pre lokálne vyhľadávanie a Google Mapy." },
    { key: "Obsahová stratégia", label: "Obsahová stratégia", tooltip: "Plánovanie a návrh tém a formátov obsahu pre prilákanie cieľovej skupiny." },
    { key: "Monitoring konkurencie", label: "Monitoring konkurencie", tooltip: "Sledovanie online aktivít vašich hlavných konkurentov." },
    { key: "Analýza a optimalizácia konverzií (CRO)", label: "Analýza a optimalizácia konverzií (CRO)", tooltip: "Zvyšovanie percenta návštevníkov, ktorí sa stanú zákazníkmi." },
    { key: "Dedikovaný manažér", label: "Dedikovaný manažér", tooltip: "Pridelená kontaktná osoba pre váš projekt." },
    { key: "Mesačný report", label: "Mesačný report", tooltip: "Pravidelný prehľad vykonaných prác a dosiahnutých výsledkov." },
    { key: "Konzultácie", label: "Konzultácie", tooltip: "Čas, ktorý máte k dispozícii na konzultácie a strategické porady." },
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

const PricingTableSection = ({ title, tiers }: { title: string, tiers: any[] }) => (
    <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 font-headline text-aurora">{title}</h3>
        <Card className="bg-galaxy border-spaceship overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow className="border-b-spaceship hover:bg-galaxy">
                        <TableHead className="w-1/4 sticky left-0 bg-galaxy">
                            Funkcie
                        </TableHead>
                        {tiers.map(tier => (
                            <TableHead key={tier.name} className="text-center w-1/5 min-w-[200px]">
                                <p className="text-xl font-bold text-light">{tier.name}</p>
                                <p className="text-xs text-rocket font-normal h-10">{tier.description}</p>
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {featureRows.map(feature => (
                        <TableRow key={feature.key} className="border-b-spaceship hover:bg-space-grey/50">
                            <TableCell className="font-semibold sticky left-0 bg-galaxy/95 backdrop-blur-sm">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <span className="flex items-center gap-2 cursor-help">
                                                {feature.label}
                                                <Info className="h-4 w-4 text-rocket" />
                                            </span>
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-space-grey text-light border-spaceship max-w-xs">
                                            <p>{feature.tooltip}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </TableCell>
                            {tiers.map(tier => (
                                <TableCell key={tier.name} className="text-center">
                                    {tier.features[feature.key as keyof typeof tier.features] === true && <Check className="h-6 w-6 text-aurora mx-auto" />}
                                    {tier.features[feature.key as keyof typeof tier.features] === false && <Minus className="h-6 w-6 text-rocket/50 mx-auto" />}
                                    {typeof tier.features[feature.key as keyof typeof tier.features] === 'string' && <span className="text-moon font-medium">{tier.features[feature.key as keyof typeof tier.features]}</span>}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                    <TableRow className="border-b-0 hover:bg-galaxy">
                         <TableCell className="font-semibold sticky left-0 bg-galaxy">
                            Cena
                         </TableCell>
                         {tiers.map(tier => (
                             <TableCell key={tier.name} className="text-center">
                                 <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-light">{tier.price}</span>
                                    {tier.priceSuffix && <span className="text-sm text-rocket">{tier.priceSuffix}</span>}
                                 </div>
                             </TableCell>
                         ))}
                    </TableRow>
                     <TableRow className="border-b-0 hover:bg-galaxy">
                         <TableCell className="sticky left-0 bg-galaxy"></TableCell>
                         {tiers.map(tier => (
                             <TableCell key={tier.name} className="text-center p-2">
                                <Button asChild className={cn("w-full", !tier.isPopular && "bg-space-grey border border-spaceship text-light hover:bg-spaceship")} size="sm">
                                    <Link href={tier.href}>
                                        {tier.price === 'Na mieru' ? 'Kontakt' : 'Zvoliť'}
                                    </Link>
                                </Button>
                             </TableCell>
                         ))}
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
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
                <motion.h2 variants={itemVariants} className="mb-12 text-center text-4xl font-bold tracking-tighter md:text-5xl font-headline">
                 <span className="text-aurora">SEO</span> Služby
                </motion.h2>

                <PricingTableSection title="Pre jednotlivcov a malé tímy" tiers={getTiersByCategory('Pre jednotlivcov a malé tímy')} />
                <PricingTableSection title="Pre rastúce firmy" tiers={getTiersByCategory('Pre rastúce firmy')} />
                <PricingTableSection title="Pre lídrov na trhu" tiers={getTiersByCategory('Pre lídrov na trhu')} />

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

    