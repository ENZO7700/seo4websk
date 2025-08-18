
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Search,
  FileText,
  Link2,
  Cog,
  ArrowRight,
  Sparkles,
  Users,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import HeroSection from "@/components/layout/hero-section";

const features = [
  {
    icon: <Search className="h-8 w-8 text-aurora" />,
    title: "Keyword Research",
    description:
      "Identifikujeme najcennejšie kľúčové slová pre vaše podnikanie, čím privedieme relevantnú návštevnosť na váš web.",
    gradient: "from-blue-500/20 to-teal-400/20",
  },
  {
    icon: <FileText className="h-8 w-8 text-aurora" />,
    title: "On-Page SEO",
    description:
      "Optimalizujeme váš obsah, titulky a meta popisy pre zlepšenie pozícií a miery prekliku (CTR).",
    gradient: "from-green-400/20 to-teal-500/20",
  },
  {
    icon: <Link2 className="h-8 w-8 text-aurora" />,
    title: "Link Building",
    description:
      "Budujeme kvalitné spätné odkazy na váš web, aby sme zvýšili jeho autoritu a dôveru u vyhľadávačov.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: <Cog className="h-8 w-8 text-aurora" />,
    title: "Technické SEO",
    description:
      "Zabezpečujeme, aby bol váš web technicky v poriadku, rýchly a ľahko čitateľný pre vyhľadávače.",
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
];

const testimonials = [
    {
        quote: "Vďaka SEO optimalizácii od SEO4WEB sme po 6 mesiacoch zdvojnásobili organický traffic a zvýšili tržby o 180%. Sme nadšení!",
        name: "Ján Malík",
        company: "E-shop Elektro",
    },
    {
        quote: "Sme malý blog s veľkými ambíciami. SEO4WEB nás posunul na prvú stránku Google za 4 mesiace. Návštevnosť 300% hore, reklama 70% dole.",
        name: "Katarína Muchová",
        company: "Blog Zdravie & Wellness",
    },
    {
        quote: "Za 8 rokov sme vyskúšali 5 SEO agentúr. Až SEO4WEB nám priniesol výsledky ktoré sme očakávali. 3x viac kvalitných leads za polovičnú cenu.",
        name: "Peter Vavrinec",
        company: "Stavebná Firma",
    }
];

const faqItems = [
    {
        question: "Ako dlho trvá vidieť výsledky SEO?",
        answer: "Väčšinou trvá 3-6 mesiacov kým sa začnú prejavovať viditeľné výsledky SEO optimalizácie. Toto obdobie závisí od mnohých faktorov ako je súčasná pozícia vášho webu, úroveň konkurencie vo vašom odvetví a rozsah vykonávaných optimalizácií. Počiatočné zlepšenia ako zvýšenie počtu indexovaných stránok a lepšia pozícia pre menej konkurenčné kľúčové slová môžeme často vidieť už po 4-8 týždňoch."
    },
    {
        question: "Prečo je SEO efektívnejšie ako PPC reklama?",
        answer: "SEO a PPC sa navzájom nevylučujú, ale SEO prináša dlhodobé benefity. Organické výsledky majú u používateľov vyššiu dôveryhodnosť, po dosiahnutí dobrých pozícií neplatíte za kliknutia a budujete udržateľný zdroj návštevnosti. Ideálnou stratégiou je kombinácia oboch prístupov."
    },
    {
        question: "Čo všetko je zahrnuté vo vašich SEO službách?",
        answer: "Náš kompletný SEO balíček obsahuje: technický audit webu, analýzu a výber kľúčových slov, optimalizáciu obsahu, overenie štruktúry a interného prepojenia, budovanie spätných odkazov, pravidelné reportovanie výsledkov a monitorovanie konkurencie. Všetky služby sú prispôsobené konkrétnym potrebám vášho projektu."
    },
    {
        question: "Koľko stojí SEO optimalizácia na Slovensku?",
        answer: "Cena SEO sa líši v závislosti od rozsahu projektu, konkurencie a cieľov. Menšie projekty môžu začať od 200 € mesačne, zatiaľ čo komplexné stratégie pre veľké e-shopy môžu stáť niekoľko tisíc eur. Pre transparentný prehľad našich cien si pozrite náš <a href=\'/pricing\' class=\'text-sky underline\'>cenník</a>, alebo nás kontaktujte pre cenovú ponuku na mieru."
    }
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


export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <HeroSection />

        <section id="features" className="bg-galaxy py-20 px-4 sm:py-32">
          <div className="container mx-auto">
            <motion.div 
              className="mb-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-light">
                Naše Kľúčové SEO Služby
              </motion.h2>
              <motion.p variants={itemVariants} className="mx-auto mt-4 max-w-2xl text-lg text-rocket text-balance">
                Poskytujeme komplexný súbor SEO služieb, ktoré pozdvihnú vašu online prítomnosť z každého uhla.
              </motion.p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                    >
                        <Card className="h-full rounded-2xl bg-space-grey p-6 border-spaceship overflow-hidden text-light">
                             <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-galaxy shadow-lg">
                                <motion.div 
                                    whileHover={{ scale: 1.2, rotate: -10 }}
                                >
                                    {feature.icon}
                                </motion.div>
                            </div>
                            <h3 className="relative z-10 mt-4 text-xl font-semibold text-light">
                                {feature.title}
                            </h3>
                            <p className="relative z-10 mt-2 text-rocket">{feature.description}</p>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
            <motion.div 
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button asChild size="lg" className="bg-sky hover:bg-night-sky text-light">
                    <Link href="/tahaky">
                        Objavte Naše SEO Ťaháky
                        <Sparkles className="ml-2" />
                    </Link>
                </Button>
            </motion.div>
          </div>
        </section>

        <section id="testimonials" className="bg-space py-20 px-4 sm:py-32">
          <div className="container mx-auto">
            <motion.div 
              className="mb-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-light">
                Čo hovoria naši klienti
              </motion.h2>
              <motion.p variants={itemVariants} className="mx-auto mt-4 max-w-2xl text-lg text-rocket text-balance">
                Vaša spokojnosť je našou najlepšou vizitkou.
              </motion.p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                <Card
                  className="flex h-full flex-col justify-between rounded-2xl border-spaceship bg-space-grey text-light"
                >
                   <CardHeader>
                      <div className="flex items-center justify-between">
                          <div>
                              <CardTitle className="text-xl text-light">{testimonial.name}</CardTitle>
                              <CardDescription className="text-rocket">{testimonial.company}</CardDescription>
                          </div>
                          <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                              ))}
                          </div>
                      </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-moon italic text-balance">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        <section id="faq" className="bg-galaxy py-20 px-4 sm:py-32">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-light">
                    Často Kladené Otázky
                  </h2>
                </div>
                <Accordion type="single" collapsible className="w-full bg-space-grey rounded-2xl p-4 border border-spaceship">
                  {faqItems.map((item, index) => (
                      <AccordionItem value={`item-${index+1}`} key={index} className="border-b-spaceship">
                        <AccordionTrigger className="text-lg text-left text-light hover:no-underline">{item.question}</AccordionTrigger>
                        <AccordionContent>
                          <div className="text-base text-rocket" dangerouslySetInnerHTML={{ __html: item.answer }}/>
                        </AccordionContent>
                      </AccordionItem>
                  ))}
                </Accordion>
            </div>
        </section>

        <section id="about" className="bg-space py-20 px-4 sm:py-32">
          <div className="container mx-auto grid items-center gap-12 md:grid-cols-2">
            <div>
              <Image
                src="https://img.freepik.com/free-vector/content-marketing-strategy-concept-illustration_114360-7482.jpg?w=600"
                alt="Tím seo4web pri strategickom plánovaní digitálneho marketingu"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl shadow-sky/10"
                data-ai-hint="digital marketing team"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-light">
                SEO Experti Zameraní na Výsledky
              </h2>
              <p className="mt-4 text-lg text-rocket text-balance">
                seo4web bolo založené na princípe prinášania merateľných výsledkov. Kombinujeme dátami podložené stratégie s overenými SEO technikami, aby sme pomohli vášmu biznisu rásť. Veríme v budovanie partnerstiev a sme odhodlaní pre váš úspech.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-8">
                <div>
                  <Sparkles className="h-6 w-6 text-aurora" />
                  <h3 className="mt-2 text-lg font-bold text-light">Dátami riadené</h3>
                  <p className="text-sm text-rocket">Rozhodnutia podložené dátami a analytikou.</p>
                </div>
                <div>
                  <Users className="h-6 w-6 text-aurora" />
                  <h3 className="mt-2 text-lg font-bold text-light">Zamerané na klienta</h3>
                  <p className="text-sm text-rocket">Váš úspech je našou prioritou.</p>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" variant="outline" className="border-spaceship bg-galaxy/50 text-light hover:bg-space-grey hover:text-light">
                    <Link href="/contact">
                        Napíšte Nám
                        <ArrowRight className="ml-2" />
                    </Link>
                </Button>
            </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
