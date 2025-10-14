'use client';

import React, { useRef, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Search, Link2, Cog, BarChart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';


const CodeParticles = () => {
  const ref = useRef<any>();
  const count = 5000;

  const positions = useMemo(() => {
    return new Float32Array(random.inSphere(new Float32Array(count * 3), { radius: 2.5 }));
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="hsl(var(--primary))"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};


const auditFeatures = [
    {
        icon: <Search className="h-8 w-8 text-primary" />,
        title: 'Analýza Kľúčových Slov',
        description: 'Identifikujeme príležitosti a nájdeme slová, ktoré vaši zákazníci skutočne hľadajú.',
    },
    {
        icon: <Cog className="h-8 w-8 text-primary" />,
        title: 'Hĺbkový Technický Audit',
        description: 'Odhalíme skryté technické chyby, ktoré brzdia váš web (rýchlosť, indexácia, a i.).',
    },
    {
        icon: <BarChart className="h-8 w-8 text-primary" />,
        title: 'Analýza Konkurencie',
        description: 'Zistíme, čo robí vaša konkurencia dobre a kde sú vaše šance na predbehnutie.',
    },
    {
        icon: <Link2 className="h-8 w-8 text-primary" />,
        title: 'Audit Odkazového Profilu',
        description: 'Zhodnotíme kvalitu vašich spätných odkazov a navrhneme stratégiu na ich posilnenie.',
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

export default function SeoAuditAkciaPage() {
    return (
        <div className="bg-background text-foreground relative">
             <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <CodeParticles />
                </Canvas>
            </div>
             <div className="relative z-10">
                <header className="bg-background/50 backdrop-blur-sm py-20 sm:py-32">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <motion.p variants={itemVariants} className="mb-2 text-lg font-semibold text-primary">Časovo Obmedzená Ponuka</motion.p>
                            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground font-headline">Hĺbkový SEO Audit</motion.h1>
                            <motion.div variants={itemVariants} className="inline-flex items-baseline justify-center gap-2 md:gap-4">
                                <span className="text-3xl md:text-5xl font-bold text-muted-foreground line-through">249 €</span>
                                <span className="text-5xl md:text-7xl font-bold text-primary">99 €</span>
                            </motion.div>
                            <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground my-8 text-balance">
                                Získajte kompletný prehľad o zdraví vášho webu a konkrétny akčný plán na zlepšenie pozícií vo vyhľadávačoch.
                            </motion.p>
                            <motion.div variants={itemVariants}>
                                <Button size="lg" asChild className="h-12 md:h-14 text-lg" variant="default">
                                    <Link href="/contact?subject=Objednavka SEO auditu">Objednať Audit za 99 €</Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </header>

                <main className="container mx-auto py-16 px-4">
                    <motion.section 
                        id="what-you-get" 
                        className="max-w-5xl mx-auto mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center font-headline">Čo Získate v Rámci Auditu?</motion.h2>
                        <div 
                            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                        >
                            {auditFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                >
                                    <Card className="h-full text-center">
                                        <CardHeader className="items-center">
                                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 shadow-lg">
                                                {feature.icon}
                                            </div>
                                            <CardTitle className="mt-4 text-xl font-semibold text-foreground">
                                                {feature.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground text-balance">{feature.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                    
                    <motion.section 
                        id="process" 
                        className="grid items-center gap-12 md:grid-cols-2 mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants}>
                            <Image
                                src="https://img.freepik.com/free-vector/seo-analytics-teamwork-concept-illustration_114360-9398.jpg?w=600"
                                alt="Detailný report zo SEO auditu zobrazený na laptope"
                                width={600}
                                height={600}
                                className="rounded-lg shadow-2xl shadow-primary/10"
                                data-ai-hint="seo audit report"
                            />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline text-foreground">Výstup, Ktorému Budete Rozumieť</h2>
                            <p className="text-lg text-muted-foreground mb-6 text-balance">
                                Naším cieľom nie je zahltiť vás technickým žargónom. Dostanete prehľadný report s konkrétnymi, prioritizovanými odporúčaniami, ktoré môžete okamžite začať implementovať.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-foreground">Zhrnutie pre Manažment</h3>
                                        <p className="text-muted-foreground">Stručný prehľad najdôležitejších zistení a odporúčaní.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-foreground">Detailný Akčný Plán</h3>
                                        <p className="text-muted-foreground">Krok-za-krokom návod na opravu nájdených chýb, zoradený podľa priority.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-foreground">30-minútová Konzultácia</h3>
                                        <p className="text-muted-foreground">Po doručení auditu si spolu prejdeme výsledky a zodpovieme všetky vaše otázky.</p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>
                    </motion.section>

                    <motion.section 
                        id="cta" 
                        className="bg-card rounded-2xl border p-8 md:p-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 font-headline text-foreground">Nečakajte, Kým Vás Predbehne Konkurencia</h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                            Táto špeciálna cena platí len na obmedzený čas. Investujte do budúcnosti vášho webu ešte dnes.
                        </p>
                        <Button size="lg" asChild className="h-12 text-lg" variant="default">
                            <Link href="/contact?subject=Objednavka SEO auditu">
                                Áno, Chcem SEO Audit za 99 €
                                <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                    </motion.section>
                </main>
             </div>
        </div>
    )
}
