
'use client';

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from '@/components/ui/card';
import { Check, ArrowRight, FileText, Image as ImageIcon, Search, ServerCog, Type, Calculator, ArrowDown, Users, Truck } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
        duration: 0.6,
        ease: "anticipate",
      },
    },
};

const problemSolution = [
  {
    problem: 'Málo času na obsah',
    solution: 'AI Copywriter',
    kpi: '3–5 článkov/deň, Flesch > 60',
    icon: <FileText className="h-8 w-8 text-aurora" />,
  },
  {
    problem: 'Technická zložitosť',
    solution: 'AI SEO Audit',
    kpi: 'CWV > 90/95/90 do 2 týždňov',
    icon: <ServerCog className="h-8 w-8 text-aurora" />,
  },
  {
    problem: 'Slabá keyword stratégia',
    solution: 'AI Keyword Research',
    kpi: '+2× long‑tail zásah, interné linky',
    icon: <Search className="h-8 w-8 text-aurora" />,
  },
];

const features = [
  {
    name: 'AI SEO Audit',
    desc: 'Hĺbková technika a obsah; návrhy opráv',
    kpi: 'CWV > 90/95/90',
    icon: <ServerCog className="h-6 w-6 text-sky" />,
  },
  {
    name: 'AI Copywriter',
    desc: 'Blogy, landingy, produkt opisy',
    kpi: 'čas tvorby ↓ 80 %',
    icon: <FileText className="h-6 w-6 text-sky" />,
  },
  {
    name: 'Headline Analyzer',
    desc: 'Testuje titulky, zvyšuje CTR',
    kpi: '+2–5 p. b.',
    icon: <Type className="h-6 w-6 text-sky" />,
  },
  {
    name: 'Image Generator',
    desc: 'Rýchle legálne vizuály',
    kpi: '0 licenčných starostí',
    icon: <ImageIcon className="h-6 w-6 text-sky" />,
  },
  {
    name: 'Keyword Research',
    desc: 'Clustre, calendar, interné odkazy',
    kpi: 'stabilný rast organiky',
    icon: <Search className="h-6 w-6 text-sky" />,
  },
];

const testimonials = [
  {
    name: 'Michaela K.',
    role: 'Freelancer copywriterka',
    quote:
      'S AI Copywriterom zvládnem o 4 projekty mesačne viac. Klienti milujú, že texty majú štruktúru aj zdroje.',
    avatar: 'https://i.pravatar.cc/150?u=michaela'
  },
  {
    name: 'Peter L.',
    role: 'Majiteľ e‑shopu',
    quote:
      'Audit mi odhalil 12 kritických chýb. Po fixoch a content kalendári máme +38 % organickej návštevnosti.',
    avatar: 'https://i.pravatar.cc/150?u=peter'
  },
  {
    name: 'Zuzana P.',
    role: 'Marketing manažérka',
    quote:
      'Board vidí jasné KPI – plán obsahu, SERP pohyby, CTR. Menej diskusií, viac čísel.',
    avatar: 'https://i.pravatar.cc/150?u=zuzana'
  },
];

const faq = [
    {"q":"Sú texty generované AI unikátne?","a":"Áno, naša AI generuje originálny obsah a využívame nástroje na kontrolu plagiátorstva, aby sme zabezpečili jeho jedinečnosť."},
    {"q":"Je platforma vhodná aj pre český trh?","a":"Áno, plne podporujeme slovenčinu aj češtinu, vrátane lokálnych dialektov a fráz."},
    {"q":"Ako funguje integrácia s CMS systémami?","a":"Obsah môžete jednoducho exportovať vo formátoch HTML, Markdown alebo čistý text, prípadne využiť naše API pre priamu integráciu s WordPress, Shoptet a ďalšími platformami."},
    {"q":"Je platforma v súlade s GDPR?","a":"Áno, všetky dáta sú spracovávané anonymizovane a naša infraštruktúra je primárne umiestnená v EÚ, v súlade s GDPR reguláciami."},
    {"q":"Aký je odporúčaný počet článkov mesačne?","a":"Pre optimálne výsledky odporúčame publikovať 8–12 nových článkov a pravidelne aktualizovať 1-2 staršie články pre udržanie ich relevancie."},
    {"q":"Pomôžete mi aj so stratégiou, ak žiadnu nemám?","a":"Áno, plány PRO a vyššie zahŕňajú nástroje na tvorbu obsahových kalendárov a kľúčových slov, ktoré vám pomôžu vytvoriť pevnú stratégiu."},
    {"q":"Ako sa meria úspech SEO aktivít?","a":"Sledujeme kombináciu metrík: pozície vo vyhľadávaní (SERP), mieru prekliku (CTR), organickú návštevnosť, a hlavne konverzie a dosah na vaše obchodné ciele."},
    {"q":"Mám vlastnú marketingovú agentúru, má pre mňa vaša platforma zmysel?","a":"Určite áno. Naša platforma môže slúžiť ako výkonný nástroj, ktorý zrýchli produkciu obsahu a auditov pre vašich klientov, čím zvýši efektivitu a ziskovosť vašej agentúry."}
];

const MovingCalculator = () => {
    const [propertyType, setPropertyType] = useState('garsonka');
    const [workerCount, setWorkerCount] = useState(1);
    const [distance, setDistance] = useState(10);
    const [hours, setHours] = useState(2);

    const calculation = useMemo(() => {
        const propertyBasePrices: Record<string, number> = {
            garsonka: 65,
            '1-izbovy': 70,
            '2-izbovy': 140,
            '3-izbovy': 240,
            '4-izbovy': 350,
        };

        const workerHourlyRates: Record<number, number> = {
            1: 40,
            2: 50,
            3: 60, // Assuming 3 workers is custom, lets estimate 60
        };

        const basePrice = propertyType === 'dom' ? 0 : propertyBasePrices[propertyType] || 0;
        const workerPrice = (workerHourlyRates[workerCount] || 0) * hours;
        
        let transportPrice = 0;
        if (distance <= 30) {
            transportPrice = 30;
        } else {
            transportPrice = distance * 0.8;
        }

        let total = basePrice + workerPrice + transportPrice;
        const minimumCharge = 70;
        
        if(propertyType === 'dom') return { total: 'Na mieru', basePrice: 'Na mieru', workerPrice: workerPrice, transportPrice: transportPrice, hours, minimumCharge: 0, isCustom: true };

        const finalTotal = Math.max(total, minimumCharge);

        return {
            total: finalTotal,
            basePrice,
            workerPrice,
            transportPrice,
            hours,
            minimumCharge: finalTotal < minimumCharge ? `(uplatnená minimálna suma ${minimumCharge}€)` : '',
            isCustom: false
        };
    }, [propertyType, workerCount, distance, hours]);

    return (
        <Card className="w-full bg-galaxy border-spaceship text-light">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-light flex items-center justify-center gap-2">
                    <Calculator className="text-aurora" />
                    Interaktívna Cenová Kalkulačka
                </CardTitle>
                <CardDescription className="text-rocket">Získajte okamžitý odhad ceny vášho sťahovania.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                    <div>
                        <Label className="font-semibold text-light">Typ nehnuteľnosti</Label>
                        <Select onValueChange={setPropertyType} defaultValue={propertyType}>
                            <SelectTrigger className="bg-space-grey border-spaceship focus:ring-aurora mt-2">
                                <SelectValue placeholder="Vyberte typ" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="garsonka">Garsónka</SelectItem>
                                <SelectItem value="1-izbovy">1. izbový byt</SelectItem>
                                <SelectItem value="2-izbovy">2. izbový byt</SelectItem>
                                <SelectItem value="3-izbovy">3. izbový byt</SelectItem>
                                <SelectItem value="4-izbovy">4. izbový byt</SelectItem>
                                <SelectItem value="dom">Rodinný dom</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label className="font-semibold text-light flex items-center gap-2"><Users />Počet pracovníkov</Label>
                        <Slider
                            value={[workerCount]}
                            onValueChange={(value) => setWorkerCount(value[0])}
                            min={1}
                            max={3}
                            step={1}
                            className="mt-4"
                        />
                        <p className="text-center text-aurora font-bold mt-2">{workerCount} {workerCount === 1 ? 'pracovník' : 'pracovníci'}{workerCount === 3 ? ' (cena dohodou)' : ''}</p>
                    </div>

                     <div>
                        <Label htmlFor="distance" className="font-semibold text-light flex items-center gap-2"><Truck />Vzdialenosť sťahovania (km)</Label>
                        <Input
                          id="distance"
                          type="number"
                          value={distance}
                          onChange={(e) => setDistance(Math.max(0, parseInt(e.target.value) || 0))}
                          className="bg-space-grey border-spaceship focus:ring-aurora mt-2"
                        />
                     </div>
                      <div>
                        <Label htmlFor="hours" className="font-semibold text-light">Odhadovaný čas sťahovania (hodiny)</Label>
                        <Input
                          id="hours"
                          type="number"
                          value={hours}
                          onChange={(e) => setHours(Math.max(1, parseInt(e.target.value) || 1))}
                          className="bg-space-grey border-spaceship focus:ring-aurora mt-2"
                        />
                     </div>
                </div>

                <div className="bg-space rounded-lg p-6 border border-spaceship space-y-4">
                    <h3 className="text-xl font-bold text-center text-light border-b border-spaceship pb-2">Odhadovaná Cena</h3>
                    {calculation.isCustom ? (
                        <div className="text-center py-10">
                            <p className="text-2xl font-bold text-aurora">Cenová Ponuka na Mieru</p>
                            <p className="text-rocket mt-2 text-balance">Pre rodinné domy a zložitejšie sťahovania nás prosím kontaktujte pre individuálnu cenovú ponuku.</p>
                             <Button asChild className="mt-4" variant="cta">
                                <Link href="/contact">Kontaktovať</Link>
                            </Button>
                        </div>
                    ) : (
                    <>
                        <div className="flex justify-between items-center">
                            <span className="text-rocket">Základná sadzba (byt):</span>
                            <span className="font-bold text-light">{calculation.basePrice} €</span>
                        </div>
                         <div className="flex justify-between items-center">
                            <span className="text-rocket">Pracovníci ({calculation.hours} hod.):</span>
                            <span className="font-bold text-light">{calculation.workerPrice} €</span>
                        </div>
                         <div className="flex justify-between items-center">
                            <span className="text-rocket">Doprava:</span>
                            <span className="font-bold text-light">{calculation.transportPrice.toFixed(2)} €</span>
                        </div>
                         <div className="border-t border-dashed border-spaceship my-2"></div>
                         <div className="flex justify-between items-center text-2xl">
                            <span className="font-bold text-aurora">Spolu:</span>
                            <span className="font-extrabold text-aurora">{calculation.total.toFixed(2)} €</span>
                        </div>
                         {calculation.minimumCharge && (
                             <p className="text-center text-xs text-rocket mt-2">{calculation.minimumCharge}</p>
                         )}
                         <p className="text-xs text-center text-rocket/70 mt-4">Toto je orientačná cena. Konečná suma sa môže líšiť v závislosti od zložitosti sťahovania. Ceny sú uvedené bez DPH. Minimálna suma výjazdu je 70 €.</p>
                    </>
                    )}
                </div>
            </CardContent>
            <CardFooter>
                 <Button asChild className="w-full" variant="cta" size="lg">
                    <Link href="/contact">Nezáväzná Objednávka</Link>
                </Button>
            </CardFooter>
        </Card>
    );
};


export default function NewHomePage() {
  return (
    <div className="bg-space text-light">
      {/* Hero Section */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-space text-light">
          <div className="absolute inset-0 z-0 opacity-50">
            <div className="absolute inset-0 bg-galaxy" />
            <div className="absolute h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(3,12,26,0)_0%,var(--space)_100%)]" />
            <div 
              className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_at_50%_50%,var(--aurora),rgba(56,224,140,0)_60%)] opacity-20"
              style={{ animation: 'aurora-pulse 12s infinite alternate' }}
            />
            <div 
              className="absolute bottom-0 right-[-20%] top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_at_50%_50%,var(--sky),rgba(29,116,246,0)_60%)] opacity-20"
               style={{ animation: 'sky-pulse 15s infinite alternate' }}
            />
          </div>

          <motion.div
            className="relative z-10 flex flex-col items-center text-center px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl font-headline text-light"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
              variants={itemVariants}
            >
              Vaše SEO na Autopilota.
            </motion.h1>

            <motion.p
              className="mt-6 max-w-3xl text-lg tracking-tight text-rocket text-balance"
              variants={itemVariants}
            >
              Seo4Web AI Suite spája audit, copywriting a analýzu kľúčových slov do jedného nástroja. Získajte viac zákazníkov a prestaňte strácať čas – naša AI pracuje za vás.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={itemVariants}
            >
              <Button asChild size="lg" className="w-full sm:w-auto" variant="cta">
                <Link href="#pricing">Vyskúšať na 7 dní zadarmo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-galaxy/50 border-spaceship hover:bg-space-grey">
                <Link href="/dashboard">Pozrieť demo</Link>
              </Button>
            </motion.div>
             <motion.div className="mt-6 flex gap-4 justify-center text-sm text-moon" variants={itemVariants}>
              <span>7-dňová skúška</span><span>•</span>
              <span>Zrušenie jedným klikom</span><span>•</span>
              <span>Podpora v slovenčine</span>
            </motion.div>
          </motion.div>
      </section>

       <style jsx global>{`
            @keyframes aurora-pulse {
              0% { transform: scale(0.8) translate(20%, -10%); opacity: 0.1; }
              50% { opacity: 0.25; }
              100% { transform: scale(1.2) translate(-10%, 10%); opacity: 0.1; }
            }
            @keyframes sky-pulse {
              0% { transform: scale(0.9) translate(-15%, 15%); opacity: 0.15; }
              50% { opacity: 0.3; }
              100% { transform: scale(1.1) translate(10%, -5%); opacity: 0.15; }
            }
        `}</style>
        
        {/* Problem -> Solution */}
        <section id="problem-solution" className="py-20 sm:py-32 bg-galaxy">
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {problemSolution.map((item, index) => (
                        <motion.div key={index} variants={itemVariants} className="flex flex-col items-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-space shadow-lg mb-4">{React.cloneElement(item.icon, { className: "h-8 w-8 text-aurora" })}</div>
                            <h3 className="text-xl font-bold text-light">{item.problem}</h3>
                            <p className="text-rocket">→ {item.solution}</p>
                            <p className="mt-1 text-sm font-semibold bg-aurora/10 text-aurora px-2 py-1 rounded-md">{item.kpi}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>


        {/* Features */}
        <section id="features" className="py-20 sm:py-32 bg-space">
            <div className="container mx-auto px-4">
                 <motion.div 
                    className="text-center max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                >
                    <h2 className="text-3xl font-bold tracking-tighter md:text-5xl font-headline text-light">Váš All-in-One AI Panel</h2>
                    <p className="mt-4 text-lg text-rocket text-balance">
                       Spojili sme všetky nástroje, ktoré potrebujete pre moderné SEO. Prestaňte prepínať medzi desiatkami tabov.
                    </p>
                </motion.div>
                <motion.div
                     className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.2 }}
                     variants={containerVariants}
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-galaxy flex-shrink-0 border border-spaceship">{feature.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-light">{feature.name}</h3>
                                    <p className="text-rocket text-balance">{feature.desc}</p>
                                    <p className="mt-1 text-sm font-semibold text-sky">{feature.kpi}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* Social Proof */}
        <section id="social-proof" className="py-20 sm:py-32 bg-galaxy">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                >
                    <h2 className="text-3xl font-bold tracking-tighter md:text-5xl font-headline text-light">Reálne výsledky pre reálnych ľudí</h2>
                </motion.div>
                <motion.div
                    className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full bg-space p-6 border-spaceship">
                                <CardContent className="p-0">
                                    <p className="text-light text-lg italic text-balance">"{testimonial.quote}"</p>
                                </CardContent>
                                <CardFooter className="p-0 pt-6 mt-4 border-t border-spaceship">
                                    <div className="flex items-center">
                                        <img src={testimonial.avatar} alt={testimonial.name} className="h-12 w-12 rounded-full mr-4" />
                                        <div>
                                            <p className="font-bold text-light">{testimonial.name}</p>
                                            <p className="text-rocket">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 sm:py-32 bg-space">
            <div className="container mx-auto px-4">
                <MovingCalculator />
            </div>
        </section>

         {/* FAQ Section */}
        <section id="faq" className="py-20 sm:py-32 bg-galaxy">
            <div className="container mx-auto px-4 max-w-4xl">
                 <motion.div 
                    className="text-center max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                >
                    <h2 className="text-3xl font-bold tracking-tighter md:text-5xl font-headline text-light">Často Kladené Otázky</h2>
                </motion.div>
                 <motion.div
                    className="mt-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={itemVariants}
                >
                    <Accordion type="single" collapsible className="w-full bg-space rounded-2xl p-4 border border-spaceship">
                    {faq.map((item, index) => (
                        <AccordionItem value={`item-${index+1}`} key={index} className="border-b border-spaceship last:border-b-0">
                            <AccordionTrigger className="text-lg text-left text-light hover:no-underline text-balance">{item.q}</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-base text-rocket">{item.a}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>

        {/* Final CTA */}
        <section id="final-cta" className="py-20 sm:py-32 bg-space">
             <div className="container mx-auto px-4">
                 <motion.div 
                    className="bg-galaxy rounded-2xl p-8 md:p-16 text-center border border-spaceship"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                >
                     <h2 className="text-3xl font-bold tracking-tighter md:text-5xl font-headline text-light">Získajte náskok, kým konkurencia spí.</h2>
                     <p className="mt-4 text-lg text-rocket text-balance max-w-2xl mx-auto">
                        Spustite 7-dňovú skúšobnú verziu a uvidíte rozdiel do pár dní. Žiadne riziko, žiadne záväzky.
                     </p>
                      <Button asChild size="lg" className="mt-8 h-12 text-base" variant="cta">
                        <Link href="#pricing">
                          Vyskúšať na 7 dní zadarmo
                        </Link>
                      </Button>
                 </motion.div>
             </div>
        </section>
    </div>
  );
}
