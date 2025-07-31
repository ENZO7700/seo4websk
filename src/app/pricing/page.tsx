
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
import { Check, Rocket } from 'lucide-react';
import Link from 'next/link';

const individualTiers = [
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
    name: 'Rast',
    price: '349 €',
    priceSuffix: '/mesiac',
    description: 'Pre rastúce weby a freelancerov.',
    features: [
      'Všetko v balíku Štart',
      'Pokročilá analýza kľúčových slov (do 50)',
      'Technické SEO',
      'Budovanie 3 spätných odkazov/mesiac',
      'Google My Business optimalizácia',
    ],
    isPopular: true,
    href: '/sluzby/seo-rast',
  },
  {
    name: 'Líder',
    price: '599 €',
    priceSuffix: '/mesiac',
    description: 'Pre etablované projekty s cieľom dominovať.',
    features: [
      'Všetko v balíku Rast',
      'Komplexná obsahová stratégia',
      'Budovanie 7 spätných odkazov/mesiac',
      'Monitoring konkurencie',
      'Prioritná podpora',
    ],
    isPopular: false,
    href: '/sluzby/seo-lider',
  },
];

const businessTiers = [
  {
    name: 'Business',
    price: '899 €',
    priceSuffix: '/mesiac',
    description: 'Pre malé a stredné firmy a e-shopy.',
    features: [
      'Komplexný SEO audit a stratégia',
      'Priebežná on-page a technická optimalizácia',
      'Link building (10+ odkazov/mesiac)',
      'Pokročilý reporting a analytika',
      'Konzultácie (2 hod/mesiac)',
    ],
    isPopular: false,
    href: '/sluzby/seo-business',
  },
  {
    name: 'Korporát',
    price: '1,499 €',
    priceSuffix: '/mesiac',
    description: 'Pre veľké e-shopy a firmy s vysokou konkurenciou.',
    features: [
      'Všetko v balíku Business',
      'Link building (20+ odkazov/mesiac)',
      'PR a obsahový marketing',
      'Analýza a optimalizácia konverzií (CRO)',
      'Pravidelné strategické stretnutia',
    ],
    isPopular: true,
    href: '/sluzby/seo-korporat',
  },
  {
    name: 'Enterprise',
    price: 'Na mieru',
    priceSuffix: '',
    description: 'Pre najnáročnejších klientov a medzinárodné trhy.',
    features: [
      'Všetko v balíku Korporát',
      'Medzinárodné SEO',
      'Dedikovaný SEO manažér',
      'Školenia pre váš tím',
      'Kompletné prepojenie s biznis cieľmi',
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
        price: 'od 4,999 €',
        priceSuffix: 'jednorazovo',
        description: 'Plnohodnotný e-commerce systém s platobnou bránou a správou produktov.',
        features: [
            'Kompletný e-shop',
            'Integrácia platobných brán',
            'Správa produktov a objednávok',
            'Zákaznícke účty',
            'Optimalizovaný nákupný košík',
        ],
        isPopular: false,
        href: '/sluzby/ecommerce-pwa'
    },
    {
        name: 'Enterprise PWA',
        price: 'Na mieru',
        priceSuffix: '',
        description: 'Vysoko škálovateľné riešenie na mieru pre špecifické potreby vášho podnikania.',
        features: [
            'Riešenie na kľúč',
            'Integrácie s externými systémami (API)',
            'Pokročilá bezpečnosť',
            'Dedikovaná podpora',
            'Prioritný vývoj',
        ],
        isPopular: false,
        href: '/sluzby/pwa-enterprise'
    }
]

const PricingTierCard = ({ tier }: { tier: any }) => (
  <Card
    className={`flex flex-col ${tier.isPopular ? 'border-primary shadow-2xl shadow-primary/10' : ''}`}
  >
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        {tier.isPopular && <Rocket className="text-primary" />}
        {tier.name}
      </CardTitle>
      <CardDescription>{tier.description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow space-y-4">
      <div className="flex items-baseline">
        <span className="text-3xl font-bold">{tier.price}</span>
        {tier.priceSuffix && (
          <span className="ml-2 text-muted-foreground">{tier.priceSuffix}</span>
        )}
      </div>
      <ul className="space-y-2">
        {tier.features.map((feature: string) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button asChild className="w-full" variant={tier.isPopular ? 'default' : 'outline'}>
        <Link href={tier.href}>
            {tier.price === 'Na mieru' ? 'Kontaktujte nás' : 'Zistiť Viac'}
        </Link>
      </Button>
    </CardFooter>
  </Card>
);


export default function PricingPage() {
  return (
    <main className="container mx-auto px-4 py-24 sm:py-32">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Transparentný cenník, merateľné výsledky
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/70 text-balance">
            Vyberte si balík, ktorý najlepšie vyhovuje vašim cieľom. Investujte do rastu, ktorý uvidíte v číslach.
          </p>
        </div>
        
        <section id="pwa-services" className="w-full py-12">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-tighter md:text-4xl font-headline">
               Vývoj Progresívnych Webových Aplikácií (PWA)
            </h2>
             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                 {pwaTiers.map((tier) => (
                      <PricingTierCard key={tier.name} tier={tier} />
                    ))}
             </div>
        </section>

        <section id="seo-individual" className="w-full py-12">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tighter md:text-4xl font-headline">
            SEO pre jednotlivcov a freelancerov
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {individualTiers.map((tier) => (
              <PricingTierCard key={tier.name} tier={tier} />
            ))}
          </div>
        </section>

        <section id="seo-business" className="w-full py-12">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tighter md:text-4xl font-headline">
            SEO pre firmy a E-shopy
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {businessTiers.map((tier) => (
              <PricingTierCard key={tier.name} tier={tier} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
