
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
    href: '/contact',
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
    href: '/contact',
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
    href: '/contact',
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
    href: '/contact',
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
    href: '/contact',
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
    href: '/contact',
  },
];

const pwaTiers = [
    {
        name: 'Vývoj PWA pre malé podniky',
        price: 'od 1,999 €',
        priceSuffix: '',
        description: 'Transformujte svoj biznis s modernou Progresívnou Webovou Aplikáciou.',
        features: [
            'Offline funkcionalita',
            'Push notifikácie',
            'Inštalácia na plochu',
            'Rýchle načítanie',
            'Základná SEO optimalizácia',
        ],
        isPopular: true,
        href: '/sluzby/pwa-pre-male-podniky'
    },
    {
        name: 'SEO pre PWA',
        price: 'od 499 €',
        priceSuffix: '/mesiac',
        description: 'Zabezpečte, aby bola vaša PWA viditeľná vo vyhľadávačoch.',
        features: [
            'Audit PWA z pohľadu SEO',
            'Optimalizácia pre mobilné indexovanie',
            'Štruktúrované dáta',
            'JavaScript SEO',
            'Pravidelný monitoring a reporting',
        ],
        isPopular: false,
        href: '/sluzby/seo-pre-pwa'
    },
    {
        name: 'E-commerce platformy (PWA)',
        price: 'Na mieru',
        priceSuffix: '',
        description: 'Robustné e-commerce riešenie postavené na PWA technológii pre maximálny výkon.',
        features: [
            'Kompletný vývoj na mieru',
            'Integrácia platobných brán',
            'Správa produktov a objednávok',
            'Personalizácia pre zákazníkov',
            'Pokročilá analytika',
        ],
        isPopular: false,
        href: '/sluzby/ecommerce-pwa'
    },
    {
        name: 'Konzultácie v oblasti digitálnej transformácie',
        price: 'od 79 €',
        priceSuffix: '/hodina',
        description: 'Pomôžeme vám zorientovať sa v digitálnom svete a nastaviť správnu stratégiu.',
        features: [
            'Analýza súčasného stavu',
            'Návrh digitálnej stratégie',
            'Výber vhodných technológií',
            'Roadmapa implementácie',
            'Optimalizácia procesov',
        ],
        isPopular: false,
        href: '/sluzby/digitalna-transformacia'
    }
]

const PricingTierCard = ({ tier }: { tier: any }) => (
  <Card
    className={`flex flex-col ${tier.isPopular ? 'border-primary shadow-2xl shadow-primary/10' : ''}`}
  >
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        {tier.name === 'Vývoj PWA pre malé podniky' && <Rocket className="text-primary" />}
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
            {tier.price === 'Na mieru' ? 'Kontaktujte nás' : tier.href === '/contact' ? 'Zvoliť balík' : 'Zistiť Viac'}
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
               Nové: PWA & Aplikačné Služby
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

    