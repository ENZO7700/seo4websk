'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Award, Users, DollarSign, Handshake, ShieldCheck, PieChart, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

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
        icon: <Star className="h-10 w-10 text-yellow-600" />,
        name: 'Bronzový Partner',
        commission: '20% Provízia',
        description: 'Pre každého, kto sa zapojí. Získajte 20% z každej platby.',
        className: 'border-yellow-800/50 bg-yellow-900/10'
    },
    {
        icon: <Award className="h-10 w-10 text-gray-400" />,
        name: 'Strieborný Partner',
        commission: '25% Provízia',
        description: 'Pre partnerov, ktorí prinesú viac ako 5 klientov mesačne.',
        className: 'border-gray-500/50 bg-gray-700/10'
    },
    {
        icon: <ShieldCheck className="h-10 w-10 text-yellow-400" />,
        name: 'Zlatý Partner',
        commission: '30% Provízia',
        description: 'Pre top partnerov s viac ako 15 klientmi mesačne a exkluzívne výhody.',
        className: 'border-yellow-400/50 bg-yellow-500/10'
    },
];

const benefits = [
    {
        icon: <DollarSign className="h-8 w-8 text-primary" />,
        title: "Štedré Provízie",
        description: "Ponúkame jedny z najlepších províznych sadzieb na trhu s možnosťou rastu."
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        title: "Partnerská Podpora",
        description: "Náš tím je tu pre vás, aby vám pomohol s akýmikoľvek otázkami a maximalizoval váš úspech."
    },
    {
        icon: <PieChart className="h-8 w-8 text-primary" />,
        title: "Prehľadné Štatistiky",
        description: "Získate prístup k partnerskému dashboardu, kde uvidíte kliknutia, konverzie a vaše zárobky v reálnom čase."
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


export default function PartnerProgramPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-card py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                     <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">Staňte sa Našim Partnerom</motion.h1>
                        <motion.p variants={itemVariants} className="text-xl max-w-3xl mx-auto text-muted-foreground mb-8 text-balance">
                            Zarábajte odporúčaním našich špičkových SEO a PWA služieb. Spojme sily a rásťme spoločne.
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <Button size="lg" asChild variant="default">
                                <Link href="/signup">Pripojiť sa k Programu</Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </header>

            <main className="container mx-auto py-24 px-4">

                <motion.section 
                    id="why-join" 
                    className="max-w-5xl mx-auto mb-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                     <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-headline text-foreground">Prečo sa pridať?</h2>
                     <div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                     >
                        {benefits.map(benefit => (
                            <motion.div key={benefit.title} variants={itemVariants}>
                                <Card className="bg-muted/50 h-full p-6 text-center items-center flex flex-col">
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-card shadow-lg">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                                    <p className="text-muted-foreground text-balance">{benefit.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                     </div>
                </motion.section>

                <motion.section 
                    id="how-it-works" 
                    className="max-w-5xl mx-auto mb-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-headline text-foreground">Ako to funguje?</h2>
                    <div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                    >
                        {processSteps.map((step) => (
                            <motion.div key={step.step} className="flex flex-col items-center" variants={itemVariants}>
                                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-card border-2 border-border text-primary font-bold text-3xl mb-4">{step.step}</div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                                <p className="text-muted-foreground text-balance">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                 <motion.section 
                    id="commissions" 
                    className="mb-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-headline text-foreground">Štedré Provízie pre Vás</h2>
                    <div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {commissionTiers.map((tier) => (
                            <motion.div key={tier.name} variants={itemVariants}>
                                <Card className={cn("flex flex-col items-center text-center p-6 h-full bg-card", tier.className)}>
                                    <CardHeader className="items-center">
                                        {tier.icon}
                                        <CardTitle className="mt-4 text-2xl font-bold text-foreground">{tier.name}</CardTitle>
                                        <p className="text-4xl font-bold text-primary mt-2">{tier.commission}</p>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground">{tier.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                 </motion.section>

                 <motion.section 
                    id="cta-partner" 
                    className="bg-card rounded-2xl p-12 text-center border"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                     <h2 className="text-3xl font-bold mb-4 font-headline text-foreground">Pripravení začať zarábať?</h2>
                     <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                         Staňte sa súčasťou nášho úspechu. Registrácia je rýchla, jednoduchá a bezplatná.
                     </p>
                      <Button size="lg" asChild variant="default">
                        <Link href="/signup">
                            Stať sa Partnerom
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </motion.section>
            </main>
        </div>
    );
}

    
