
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Award, Users, DollarSign, Handshake } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const processSteps = [
    {
        step: 1,
        title: 'Zaregistrujte sa',
        description: 'Vyplňte náš jednoduchý registračný formulár. Schválenie trvá menej ako 24 hodín.',
    },
    {
        step: 2,
        title: 'Zdieľajte Váš Odkaz',
        description: 'Získate unikátny partnerský odkaz. Zdieľajte ho na svojom webe, blogu, alebo sociálnych sieťach.',
    },
    {
        step: 3,
        title: 'Zarábajte Provízie',
        description: 'Za každého zákazníka, ktorý príde cez váš odkaz a zakúpi si našu službu, získate províziu.',
    },
];

const commissionTiers = [
    {
        icon: <Award className="h-10 w-10 text-yellow-600" />,
        name: 'Bronzový Partner',
        commission: '20% Provízia',
        description: 'Pre každého, kto sa zapojí. Získajte 20% z každej platby.',
    },
    {
        icon: <Award className="h-10 w-10 text-gray-400" />,
        name: 'Strieborný Partner',
        commission: '25% Provízia',
        description: 'Pre partnerov, ktorí prinesú viac ako 5 klientov mesačne.',
    },
    {
        icon: <Award className="h-10 w-10 text-yellow-400" />,
        name: 'Zlatý Partner',
        commission: '30% Provízia',
        description: 'Pre top partnerov s viac ako 15 klientmi mesačne a exkluzívne výhody.',
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


export default function PartnerProgramPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">Staňte sa Našim Partnerom</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Zarábajte odporúčaním našich špičkových SEO a PWA služieb. Spojme sily a rásťme spoločne.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Pripojiť sa k Programu</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-24 px-4">
                <section id="how-it-works" className="max-w-5xl mx-auto mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-headline">Ako to funguje?</h2>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        {processSteps.map((step) => (
                            <motion.div key={step.step} className="flex flex-col items-center" variants={itemVariants}>
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4">{step.step}</div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground text-balance">{step.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                 <section id="commissions" className="mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-headline">Štedré Provízie pre Vás</h2>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        {commissionTiers.map((tier) => (
                            <motion.div key={tier.name} variants={itemVariants}>
                                <Card className="flex flex-col items-center text-center p-6 h-full">
                                    <CardHeader className="items-center">
                                        {tier.icon}
                                        <CardTitle className="mt-4 text-2xl font-bold">{tier.name}</CardTitle>
                                        <p className="text-3xl font-bold text-primary mt-2">{tier.commission}</p>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground">{tier.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                 </section>

                 <section id="benefits" className="grid items-center gap-12 md:grid-cols-2 mb-20">
                     <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Výhody Nášho Partnerstva</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Atraktívne Provízie</h3>
                                    <p className="text-muted-foreground">Ponúkame jedny z najlepších províznych sadzieb na trhu.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Marketingové Materiály</h3>
                                    <p className="text-muted-foreground">Poskytneme vám bannery, texty a všetko, čo potrebujete na úspešnú propagáciu.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Partnerská Podpora</h3>
                                    <p className="text-muted-foreground">Náš tím je tu pre vás, aby vám pomohol s akýmikoľvek otázkami a maximalizoval váš úspech.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                         <Handshake className="h-64 w-64 text-primary/10 mx-auto" />
                    </div>
                 </section>

                 <section id="cta-partner" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Pripravení začať zarábať?</h2>
                     <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                         Staňte sa súčasťou nášho úspechu. Registrácia je rýchla, jednoduchá a bezplatná.
                     </p>
                      <Button size="lg" asChild>
                        <Link href="/contact">
                            Stať sa Partnerom
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    );
}
