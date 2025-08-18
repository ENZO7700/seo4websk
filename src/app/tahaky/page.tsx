
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const faqItems = [
    {
        id: "on-page",
        question: "On-Page SEO: Optimalizácia priamo na stránke",
        answer: `
            <p>On-Page SEO je základom všetkého. Sú to úpravy, ktoré máte plne pod kontrolou priamo na vašom webe.</p>
            <ul>
                <li><strong>Optimalizácia titulkov (Title Tags):</strong> Každá stránka musí mať unikátny a výstižný titulok do 60 znakov, ktorý obsahuje hlavné kľúčové slovo.</li>
                <li><strong>Meta popisy (Meta Descriptions):</strong> Pútavý popis do 160 znakov, ktorý láka na kliknutie. Hoci priamo neovplyvňuje pozície, má obrovský vplyv na mieru prekliku (CTR).</li>
                <li><strong>Štruktúra nadpisov (H1, H2, H3):</strong> Používajte iba jeden H1 nadpis na stránke. Ostatné nadpisy (H2, H3...) používajte na logické členenie obsahu.</li>
                <li><strong>Interné prelinkovanie:</strong> Odkazujte z nových článkov na staré a naopak. Pomáhate tým používateľom aj vyhľadávačom objavovať relevantný obsah.</li>
                <li><strong>Optimalizácia obrázkov:</strong> Komprimujte obrázky a vždy vypĺňajte ALT texty. Pomáha to rýchlosti načítania a prístupnosti.</li>
            </ul>
        `
    },
    {
        id: "technical",
        question: "Technické SEO: Pevné základy pre váš web",
        answer: `
            <p>Technické SEO zabezpečuje, že vyhľadávače dokážu váš web bez problémov prechádzať, indexovať a pochopiť jeho obsah.</p>
            <ul>
                <li><strong>Rýchlosť načítania:</strong> Váš web by sa mal načítať do 3 sekúnd. Používajte nástroje ako Google PageSpeed Insights a zamerajte sa na metriky Core Web Vitals.</li>
                <li><strong>Responzívny dizajn:</strong> Stránka sa musí dokonale zobrazovať na všetkých zariadeniach – mobiloch, tabletoch aj desktopoch.</li>
                <li><strong>SSL certifikát (HTTPS):</strong> Bezpečnosť je dnes štandard a Google weby bez HTTPS penalizuje.</li>
                <li><strong>Sitemap.xml a Robots.txt:</strong> Tieto súbory dávajú vyhľadávačom mapu vášho webu a inštrukcie, čo (ne)majú indexovať.</li>
                <li><strong>Štruktúrované dáta (Schema Markup):</strong> Pomôžte Googlu pochopiť kontext vášho obsahu (recenzie, produkty, udalosti) a získajte tak výhodu vo výsledkoch vyhľadávania vo forme rich snippets.</li>
            </ul>
        `
    },
    {
        id: "link-building",
        question: "Link Building: Budovanie autority",
        answer: `
            <p>Spätné odkazy (backlinks) sú pre Google ako odporúčania. Čím viac kvalitných a relevantných webov na vás odkazuje, tým väčšiu autoritu máte.</p>
            <ul>
                <li><strong>Kvalita nad kvantitou:</strong> Jeden odkaz z relevantného, autoritatívneho webu má väčšiu váhu ako 100 odkazov z nekvalitných stránok.</li>
                <li><strong>Guest blogging:</strong> Píšte články pre iné weby vo vašom obore a získajte za to spätný odkaz.</li>
                <li><strong>Analýza konkurencie:</strong> Zistite, odkiaľ získavajú odkazy vaši konkurenti, a skúste osloviť rovnaké weby.</li>
                <li><strong>Broken Link Building:</strong> Nájdite nefunkčné odkazy na iných weboch a ponúknite im ako náhradu váš relevantný obsah.</li>
            </ul>
        `
    },
     {
        id: "local-seo",
        question: "Lokálne SEO: Dominujte vo svojom meste",
        answer: `
            <p>Ak máte kamennú prevádzku alebo pôsobíte v konkrétnom regióne, lokálne SEO je pre vás kľúčové.</p>
            <ul>
                <li><strong>Google Business Profile:</strong> Vytvorte si a kompletne optimalizujte profil. Zbierajte recenzie, pridávajte fotky a pravidelne publikujte príspevky.</li>
                <li><strong>Lokálne kľúčové slová:</strong> Optimalizujte na frázy ako "oprava mobilov Bratislava" alebo "reštaurácia v Trnave".</li>
                <li><strong>Lokálne citácie (NAPs):</strong> Uistite sa, že vaše meno, adresa a telefónne číslo (Name, Address, Phone) sú konzistentné vo všetkých online registroch.</li>
            </ul>
        `
    }
];

export default function TahakyPage() {
    return (
    <div className="bg-space text-light">
        <header className="bg-galaxy py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tighter md:text-6xl font-headline">
                        SEO Ťaháky a Osvedčené Postupy
                    </h1>
                    <p className="mt-4 mx-auto max-w-3xl text-lg text-rocket text-balance">
                        Váš kompletný sprievodca svetom SEO. Zozbierali sme pre vás overené tipy a stratégie, ktoré vám pomôžu dostať sa na vrchol výsledkov vyhľadávania.
                    </p>
                </div>
            </div>
        </header>

        <main className="container mx-auto px-4 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto">
                 <p className="lead text-xl text-center text-rocket mb-12 text-balance">
                    SEO nie je len o kľúčových slovách. Je to komplexná disciplína, ktorá zahŕňa technické nastavenia, kvalitný obsah, budovanie autority a skvelý používateľský zážitok. Prejdite si naše ťaháky a začnite optimalizovať ako profesionál. Vyskúšajte náš <a href="/analyzer" className="text-aurora underline">Analyzátor titulkov</a> alebo <a href="/seo-analyzer" className="text-aurora underline">hĺbkový SEO Analyzátor</a> na okamžitú spätnú väzbu.
                </p>

                <Accordion type="single" collapsible className="w-full bg-galaxy rounded-2xl p-4 border border-spaceship">
                  {faqItems.map((item, index) => (
                      <AccordionItem value={`item-${index+1}`} key={index} className="border-b-spaceship last:border-b-0">
                        <AccordionTrigger className="text-lg text-left text-light hover:no-underline text-balance">{item.question}</AccordionTrigger>
                        <AccordionContent>
                            <div 
                                className="prose prose-lg dark:prose-invert text-base text-rocket" 
                                dangerouslySetInnerHTML={{ __html: item.answer }}
                            />
                        </AccordionContent>
                      </AccordionItem>
                  ))}
                </Accordion>

                <Card className="mt-16 bg-space-grey border-spaceship">
                    <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-bold font-headline text-light">Pripravení naštartovať vaše SEO?</h2>
                                <p className="text-rocket mt-2 max-w-2xl text-balance">
                                    Prestaňte hádať a začnite robiť rozhodnutia založené na dátach. Pomôžeme vám s komplexnou SEO stratégiou.
                                </p>
                            </div>
                            <Button asChild size="lg" className="flex-shrink-0 bg-sky hover:bg-night-sky text-light">
                                <Link href="/contact">
                                    Získať Bezplatnú Konzultáciu
                                    <ArrowRight className="ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    </div>
    );
}
