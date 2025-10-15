'use client';

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check, Calculator, Wand2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const seoTiers = [
    {
        name: 'Štart',
        price: '199 €',
        priceSuffix: '/mesiac',
        description: 'Pevné základy pre nové projekty.',
        href: '/sluzby/seo-start',
        planId: 'start',
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
        planId: 'rast',
        category: 'Pre jednotlivcov a malé tímy',
        features: [
            "Analýza kľúčových slov (do 50)",
            "Technické SEO",
            "Budovanie spätných odkazov (3/mesiac)",
            "Google Business Profile",
            "Mesačný report",
        ]
    },
    {
        name: 'Expert',
        price: '449 €',
        priceSuffix: '/mesiac',
        isPopular: true,
        description: 'Aktívne budovanie osobnej značky a autority.',
        href: '/sluzby/seo-expert',
        planId: 'expert',
        category: 'Pre rastúce firmy',
        features: [
            "Všetko v balíku Rast",
            "Obsahová stratégia (Základná)",
            "Budovanie spätných odkazov (5/mesiac)",
            "Monitoring konkurencie",
            "1 hod/mesiac konzultácie",
        ]
    },
];

const pwaTiers = [
    {
        name: 'PWA Vizitka',
        price: 'od 999 €',
        priceSuffix: 'jednorazovo',
        description: 'Moderná online vizitka alebo portfólio postavené na PWA technológii.',
        planId: 'pwa-vizitka',
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
        planId: 'pwa-business',
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
];


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

const InteractiveCalculator = () => {
    const [services, setServices] = useState({ seo: true, pwa: false });
    const [seoKeywords, setSeoKeywords] = useState(50);
    const [seoBacklinks, setSeoBacklinks] = useState(5);
    const [pwaType, setPwaType] = useState(1); // 1: Vizitka, 2: Business

    const totalPrice = useMemo(() => {
        let price = 0;
        if (services.seo) {
            price += seoKeywords * 3 + seoBacklinks * 30;
        }
        if (services.pwa) {
            price += pwaType === 1 ? 999 : 2499;
        }
        return price;
    }, [services, seoKeywords, seoBacklinks, pwaType]);

    return (
        <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <motion.h2 variants={itemVariants} className="mb-12 text-center text-4xl font-bold tracking-tighter md:text-5xl font-headline">
                <span className="text-primary flex items-center justify-center gap-4"><Calculator /> Interaktívna Kalkulačka</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
                     {/* Service Selection */}
                    <Card>
                        <CardHeader>
                            <CardTitle>1. Vyberte si služby</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="seo-service" checked={services.seo} onCheckedChange={(checked) => setServices(s => ({ ...s, seo: !!checked }))} />
                                <Label htmlFor="seo-service" className="text-lg">Priebežné SEO</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="pwa-service" checked={services.pwa} onCheckedChange={(checked) => setServices(s => ({ ...s, pwa: !!checked }))} />
                                <Label htmlFor="pwa-service" className="text-lg">Vývoj PWA</Label>
                            </div>
                        </CardContent>
                    </Card>

                    {/* SEO Options */}
                    {services.seo && (
                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>2. Nastavenie SEO</CardTitle>
                                    <CardDescription>Upravte rozsah mesačných SEO prác.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <Label>Počet sledovaných kľúčových slov: <span className="font-bold text-primary">{seoKeywords}</span></Label>
                                        <Slider value={[seoKeywords]} onValueChange={([val]) => setSeoKeywords(val)} max={200} step={10} />
                                    </div>
                                    <div>
                                        <Label>Počet budovaných spätných odkazov mesačne: <span className="font-bold text-primary">{seoBacklinks}</span></Label>
                                        <Slider value={[seoBacklinks]} onValueChange={([val]) => setSeoBacklinks(val)} max={20} step={1} />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}

                     {/* PWA Options */}
                    {services.pwa && (
                         <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>3. Typ PWA Aplikácie</CardTitle>
                                    <CardDescription>Zvoľte si typ aplikácie, ktorý najlepšie vyhovuje vašim potrebám.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                     <div onClick={() => setPwaType(1)} className={cn("p-4 rounded-lg border cursor-pointer", pwaType === 1 && "border-primary bg-primary/10")}>
                                        <h4 className="font-bold">PWA Vizitka (od 999 €)</h4>
                                        <p className="text-sm text-muted-foreground">Moderná online vizitka alebo portfólio.</p>
                                     </div>
                                     <div onClick={() => setPwaType(2)} className={cn("p-4 rounded-lg border cursor-pointer", pwaType === 2 && "border-primary bg-primary/10")}>
                                        <h4 className="font-bold">PWA Business (od 2,499 €)</h4>
                                        <p className="text-sm text-muted-foreground">Komplexné riešenie s blogom a marketingom.</p>
                                     </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}
                </motion.div>

                {/* Price Summary */}
                <motion.div variants={itemVariants} className="lg:sticky top-24 h-fit">
                    <Card className="bg-card shadow-2xl shadow-primary/10">
                        <CardHeader>
                            <CardTitle className="text-center">Odhadovaná Cena</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-5xl font-bold text-primary">{totalPrice} €</p>
                            <p className="text-muted-foreground">{services.seo ? "mesačne" : "jednorazovo"}</p>
                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                             <Button asChild className="w-full" size="lg">
                                <Link href="/contact?subject=Cenova ponuka na mieru">Chcem Ponuku na Mieru</Link>
                            </Button>
                            <p className="text-xs text-muted-foreground text-center">Cena je orientačná a finálnu ponuku vám radi pripravíme na mieru.</p>
                        </CardFooter>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    )
}

const PricingTierCard = ({ tier }: { tier: any }) => (
  <motion.div
    variants={itemVariants}
    className={cn(
        "relative flex h-full flex-col rounded-2xl p-8",
        tier.isPopular ? "border border-primary/50 bg-card" : "border border-border bg-card"
    )}
    >
    {tier.isPopular && (
        <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
            <div className="rounded-full px-4 py-1.5 text-sm font-semibold text-primary-foreground bg-primary">
                Najobľúbenejší
            </div>
        </div>
    )}
    <CardHeader className="p-0">
      <Link href={tier.href} className="group">
        <CardTitle className="flex items-center gap-2 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
          {tier.name}
        </CardTitle>
        <CardDescription className="pt-2 text-base h-12 text-balance">{tier.description}</CardDescription>
      </Link>
    </CardHeader>
    <CardContent className="flex-grow space-y-6 p-0 pt-8">
      <div className="flex items-baseline">
        <span className="text-4xl font-bold text-foreground">{tier.price}</span>
        {tier.priceSuffix && (
          <span className="ml-2 text-muted-foreground">{tier.priceSuffix}</span>
        )}
      </div>
      <ul className="space-y-3">
        {tier.features.map((feature: string) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <span className="text-muted-foreground text-balance">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="p-0 pt-8 mt-auto">
       <Button asChild className={cn("w-full")} variant={tier.isPopular ? "default" : "outline"} size="lg">
            <Link href={tier.price === 'Na mieru' ? '/contact' : `/signup?plan=${tier.planId}`}>
                {tier.price === 'Na mieru' ? 'Kontaktujte nás' : 'Zvoliť balík'}
            </Link>
        </Button>
    </CardFooter>
  </motion.div>
);

const PricingCategorySection = ({ title, tiers, id }: { title: string, tiers: any[], id: string }) => (
    <div className="mb-16">
        <motion.h3 variants={itemVariants} id={id} className="text-2xl md:text-3xl font-bold text-center mb-12 font-headline text-primary scroll-mt-24">{title}</motion.h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => (
                <PricingTierCard key={tier.name} tier={tier} />
            ))}
        </div>
    </div>
);


export default function PricingPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 py-24 sm:py-32">
        <div className="flex flex-col items-center justify-center space-y-8">
            <motion.div 
                className="text-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
            <motion.h1 variants={itemVariants} className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-foreground">
                Transparentný cenník, merateľné výsledky
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-4 max-w-2xl text-lg text-muted-foreground text-balance">
                Vyberte si balík, ktorý najlepšie vyhovuje vašim cieľom, alebo si vyskladajte vlastný. Investujte do rastu, ktorý uvidíte v číslach.
            </motion.p>
            </motion.div>

            <InteractiveCalculator />
            
            <motion.section 
                id="seo-services" 
                className="w-full py-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <PricingCategorySection title="Balíky SEO služieb" tiers={seoTiers} id="seo-packages" />
            </motion.section>

            <motion.section 
                id="pwa-services" 
                className="w-full py-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <PricingCategorySection title="Vývoj PWA" tiers={pwaTiers} id="pwa-packages" />
            </motion.section>
        </div>
      </main>
    </div>
  );
}
