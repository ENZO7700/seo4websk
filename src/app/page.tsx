
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";


const features = [
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Keyword Research",
    description:
      "Identifikujeme najcennejšie kľúčové slová pre vaše podnikanie, čím privedieme relevantnú návštevnosť na váš web.",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "On-Page SEO",
    description:
      "Optimalizujeme váš obsah, titulky a meta popisy pre zlepšenie pozícií a miery prekliku (CTR).",
  },
  {
    icon: <Link2 className="h-8 w-8 text-primary" />,
    title: "Link Building",
    description:
      "Budujeme kvalitné spätné odkazy na váš web, aby sme zvýšili jeho autoritu a dôveru u vyhľadávačov.",
  },
  {
    icon: <Cog className="h-8 w-8 text-primary" />,
    title: "Technické SEO",
    description:
      "Zabezpečujeme, aby bol váš web technicky v poriadku, rýchly a ľahko čitateľný pre vyhľadávače.",
  },
];

const testimonials = [
    {
        quote: "Vďaka SEO optimalizácii od SEO4WEB sme po 6 mesiacoch zdvojnásobili organický traffic a zvýšili tržby o 180%. Sme nadšení!",
        name: "Ján Malík",
        company: "E-shop Elektro",
        avatar: "https://placehold.co/64x64",
        avatarHint: "smiling man 45 years old in a suit"
    },
    {
        quote: "Sme malý blog s veľkými ambíciami. SEO4WEB nás posunul na prvú stránku Google za 4 mesiace. Návštevnosť 300% hore, reklama 70% dole.",
        name: "Katarína Muchová",
        company: "Blog Zdravie & Wellness",
        avatar: "https://placehold.co/64x64",
        avatarHint: "smiling woman with blonde wavy hair 35 years old"
    },
    {
        quote: "Za 8 rokov sme vyskúšali 5 SEO agentúr. Až SEO4WEB nám priniesol výsledky ktoré sme očakávali. 3x viac kvalitných leads za polovičnú cenu.",
        name: "Peter Vavrinec",
        company: "Stavebná Firma",
        avatar: "https://placehold.co/64x64",
        avatarHint: "man with glasses 50 years old in a blue suit"
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
        answer: "Cena SEO sa líši v závislosti od rozsahu projektu, konkurencie a cieľov. Menšie projekty môžu začať od 200 € mesačne, zatiaľ čo komplexné stratégie pre veľké e-shopy môžu stáť niekoľko tisíc eur. Pre transparentný prehľad našich cien si pozrite náš <a href='/pricing' class='text-primary underline'>cenník</a>, alebo nás kontaktujte pre cenovú ponuku na mieru."
    },
    {
        question: "Aký je rozdiel medzi on-page a off-page SEO?",
        answer: "On-page SEO zahŕňa všetky optimalizácie, ktoré robíte priamo na vašom webe – napríklad optimalizácia obsahu, titulkov, rýchlosti načítania a štruktúry. Na druhej strane, off-page SEO sa týka aktivít mimo vášho webu, predovšetkým budovania kvalitných spätných odkazov (link building), ktoré zvyšujú autoritu a dôveryhodnosť vašej stránky."
    },
    {
        question: "Je SEO vhodné aj pre môj e-shop?",
        answer: "Absolútne. Pre e-shopy je SEO kľúčové. Pomáha vám získať viditeľnosť pre konkrétne produkty, kategórie a značky, čím priamo zvyšuje organickú návštevnosť a predaj. Zameriavame sa na produktové SEO, optimalizáciu kategórií a technické aspekty špecifické pre e-commerce platformy."
    },
    {
        question: "Čo je to lokálne SEO a potrebujem ho?",
        answer: "Lokálne SEO je optimalizácia pre vyhľadávanie v konkrétnej geografickej oblasti (napr. 'oprava mobilov Bratislava'). Ak máte kamennú prevádzku alebo poskytujete služby v určitom meste či regióne, lokálne SEO je pre vás nevyhnutné. Pomôže vám získať zákazníkov, ktorí hľadajú vaše služby vo svojom okolí, najmä cez Google Mapy."
    },
    {
        question: "Môžem si robiť SEO sám?",
        answer: "Áno, základy SEO sa dajú naučiť. Avšak, SEO je komplexná a neustále sa meniaca disciplína. Spolupráca s agentúrou vám ušetrí čas, prinesie prístup k profesionálnym nástrojom a zabezpečí, že vaša stratégia bude postavená na skúsenostiach a dátach, čo vedie k rýchlejším a lepším výsledkom."
    },
    {
        question: "Zaručujete prvé miesto na Google?",
        answer: "Žiadna seriózna SEO agentúra nemôže zaručiť prvé miesto, pretože algoritmy Google sú zložité a neustále sa menia. Garantujeme však použitie najlepších a overených postupov, maximálne úsilie a transparentné reportovanie, aby sme dosiahli čo najlepšie možné pozície pre vaše kľúčové slová."
    },
    {
        question: "Čo sú to spätné odkazy (backlinks) a prečo sú dôležité?",
        answer: "Spätný odkaz je link z inej webovej stránky na tú vašu. Pre Google je to ako 'odporúčanie'. Čím viac kvalitných a relevantných stránok na vás odkazuje, tým väčšiu autoritu a dôveryhodnosť má váš web v očiach vyhľadávačov, čo vedie k lepším pozíciám vo výsledkoch vyhľadávania."
    }
]


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
            "absolute inset-0 z-0 h-full w-full stroke-gray-400/30",
          )}
        />
      <main className="relative z-10">
        <section
          id="hero"
          className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-transparent"
        >
          <div className="group flex cursor-pointer items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h1
              className="bg-gradient-to-br from-primary from-30% to-accent bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl font-headline"
            >
              seo4web
            </h1>
             <Search className="h-10 w-10 md:h-16 md:w-16 text-primary/40 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:-rotate-12 group-hover:text-accent" />
          </div>
          <p
            className="mt-4 max-w-2xl animate-fade-in-up text-lg text-foreground/80 md:text-xl text-balance"
            style={{ animationDelay: "0.4s" }}
          >
            Zvýšte svoje pozície vo vyhľadávačoch a získajte organickú návštevnosť. Poskytujeme expertné SEO stratégie pre váš úspech.
          </p>
          <div
            className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button size="lg" asChild>
              <a href="#features">
                Naše Služby
                <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/contact">Bezplatná Konzultácia</Link>
            </Button>
          </div>
        </section>

        <section id="features" className="bg-background/80 backdrop-blur-lg py-20 px-4 sm:py-32">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline animate-fade-in-up">
                Naše Kľúčové SEO Služby
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70 text-balance animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Poskytujeme komplexný súbor SEO služieb, ktoré pozdvihnú vašu online prítomnosť z každého uhla.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="transform border-primary/20 bg-card/50 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up"
                   style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CardHeader>
                    {feature.icon}
                    <CardTitle className="mt-4 text-xl font-semibold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="mt-12 text-center">
                <Button asChild size="lg">
                    <Link href="/tahaky">
                        Objavte Naše SEO Ťaháky
                        <Sparkles className="ml-2" />
                    </Link>
                </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-background py-20 px-4 sm:py-32">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline animate-fade-in-up">
                Čo hovoria naši klienti
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70 text-balance animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Vaša spokojnosť je našou najlepšou vizitkou.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="flex flex-col justify-between border-primary/20 bg-card/50 backdrop-blur-lg animate-fade-in-up transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                       <Image
                          src={testimonial.avatar}
                          alt={`Portrét ${testimonial.name}`}
                          width={48}
                          height={48}
                          className="rounded-full"
                          data-ai-hint={testimonial.avatarHint}
                        />
                       <div className="ml-4">
                            <h3 className="font-bold">{testimonial.name}</h3>
                            <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                        </div>
                    </div>
                    <p className="text-foreground/80 italic text-balance mb-4">
                      "{testimonial.quote}"
                    </p>
                     <div className="flex">
                        {[...Array(5)].map((_, i) => (
                           <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                        ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section id="faq" className="bg-muted/50 py-20 px-4 sm:py-32">
            <div className="container mx-auto max-w-4xl">
                 <div className="mb-12 text-center">
                  <h2 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline animate-fade-in-up">
                    Často Kladené Otázky
                  </h2>
                </div>
                 <Accordion type="single" collapsible className="w-full">
                   {faqItems.map((item, index) => (
                      <AccordionItem value={`item-${index+1}`} key={index}>
                        <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
                        <AccordionContent 
                          className="text-base text-muted-foreground"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
                      </AccordionItem>
                   ))}
                </Accordion>
            </div>
        </section>

        <section id="about" className="bg-background py-20 px-4 sm:py-32">
          <div className="container mx-auto grid items-center gap-12 md:grid-cols-2">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Tím seo4web pri strategickom plánovaní digitálneho marketingu"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl shadow-primary/10"
                data-ai-hint="digital marketing team"
              />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline">
                SEO Experti Zameraní na Výsledky
              </h2>
              <p className="mt-4 text-lg text-foreground/70 text-balance">
                seo4web bolo založené na princípe prinášania merateľných výsledkov. Kombinujeme dátami podložené stratégie s overenými SEO technikami, aby sme pomohli vášmu biznisu rásť. Veríme v budovanie partnerstiev a sme odhodlaní pre váš úspech.
              </p>
              <div className="mt-6 flex gap-8">
                <div>
                  <Sparkles className="h-6 w-6 text-primary" />
                  <h3 className="mt-2 text-lg font-bold">Dátami riadené</h3>
                  <p className="text-sm text-muted-foreground">Rozhodnutia podložené dátami a analytikou.</p>
                </div>
                <div>
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="mt-2 text-lg font-bold">Zamerané na klienta</h3>
                  <p className="text-sm text-muted-foreground">Váš úspech je našou prioritou.</p>
                </div>
              </div>
               <div className="mt-8">
                <Button asChild size="lg" variant="outline">
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
    </div>
  );
}

    