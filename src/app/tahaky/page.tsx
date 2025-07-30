
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TahakyPage() {
    return (
    <div className="bg-background text-foreground">
        <header className="bg-primary/10 py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tighter md:text-6xl font-headline">
                        SEO Ťaháky a Osvedčené Postupy
                    </h1>
                    <p className="mt-4 mx-auto max-w-3xl text-lg text-foreground/80 text-balance">
                        Váš kompletný sprievodca svetom SEO. Zozbierali sme pre vás overené tipy a stratégie, ktoré vám pomôžu dostať sa na vrchol výsledkov vyhľadávania.
                    </p>
                </div>
            </div>
        </header>

        <main className="container mx-auto px-4 py-16 sm:py-24">
            <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
                <p className="lead">
                    SEO nie je len o kľúčových slovách. Je to komplexná disciplína, ktorá zahŕňa technické nastavenia, kvalitný obsah, budovanie autority a skvelý používateľský zážitok. Prejdite si naše ťaháky a začnite optimalizovať ako profesionál. Vyskúšajte náš <a href="/analyzer" className="text-primary underline">Analyzátor titulkov</a> alebo <a href="/seo-analyzer" className="text-primary underline">hĺbkový SEO Analyzátor</a> na okamžitú spätnú väzbu.
                </p>

                <article className="mt-12 space-y-8">
                    <section id="on-page">
                        <h2>On-Page SEO: Optimalizácia priamo na stránke</h2>
                        <p>
                            On-Page SEO je základom všetkého. Sú to úpravy, ktoré máte plne pod kontrolou priamo na vašom webe.
                        </p>
                        <ul>
                            <li><strong>Optimalizácia titulkov (Title Tags):</strong> Každá stránka musí mať unikátny a výstižný titulok do 60 znakov, ktorý obsahuje hlavné kľúčové slovo.</li>
                            <li><strong>Meta popisy (Meta Descriptions):</strong> Pútavý popis do 160 znakov, ktorý láka na kliknutie. Hoci priamo neovplyvňuje pozície, má obrovský vplyv na mieru prekliku (CTR).</li>
                            <li><strong>Štruktúra nadpisov (H1, H2, H3):</strong> Používajte iba jeden H1 nadpis na stránke. Ostatné nadpisy (H2, H3...) používajte na logické členenie obsahu.</li>
                            <li><strong>Interné prelinkovanie:</strong> Odkazujte z nových článkov na staré a naopak. Pomáhate tým používateľom aj vyhľadávačom objavovať relevantný obsah.</li>
                            <li><strong>Optimalizácia obrázkov:</strong> Komprimujte obrázky a vždy vypĺňajte ALT texty. Pomáha to rýchlosti načítania a prístupnosti.</li>
                        </ul>
                    </section>

                    <section id="technical">
                        <h2>Technické SEO: Pevné základy pre váš web</h2>
                        <p>
                            Technické SEO zabezpečuje, že vyhľadávače dokážu váš web bez problémov prechádzať, indexovať a pochopiť jeho obsah.
                        </p>
                        <ul>
                            <li><strong>Rýchlosť načítania:</strong> Váš web by sa mal načítať do 3 sekúnd. Používajte nástroje ako Google PageSpeed Insights a zamerajte sa na metriky Core Web Vitals.</li>
                            <li><strong>Responzívny dizajn:</strong> Stránka sa musí dokonale zobrazovať na všetkých zariadeniach – mobiloch, tabletoch aj desktopoch.</li>
                            <li><strong>SSL certifikát (HTTPS):</strong> Bezpečnosť je dnes štandard a Google weby bez HTTPS penalizuje.</li>
                            <li><strong>Sitemap.xml a Robots.txt:</strong> Tieto súbory dávajú vyhľadávačom mapu vášho webu a inštrukcie, čo (ne)majú indexovať.</li>
                             <li><strong>Štruktúrované dáta (Schema Markup):</strong> Pomôžte Googlu pochopiť kontext vášho obsahu (recenzie, produkty, udalosti) a získajte tzv. rich snippets vo výsledkoch vyhľadávania.</li>
                        </ul>
                    </section>
                    
                    <section id="link-building">
                        <h2>Link Building: Budovanie autority</h2>
                        <p>Spätné odkazy (backlinks) sú pre Google ako odporúčania. Čím viac kvalitných a relevantných webov na vás odkazuje, tým väčšiu autoritu máte.</p>
                        <ul>
                            <li><strong>Kvalita nad kvantitou:</strong> Jeden odkaz z relevantného, autoritatívneho webu má väčšiu váhu ako 100 odkazov z nekvalitných stránok.</li>
                            <li><strong>Guest blogging:</strong> Píšte články pre iné weby vo vašom obore a získajte za to spätný odkaz.</li>
                            <li><strong>Analýza konkurencie:</strong> Zistite, odkiaľ získavajú odkazy vaši konkurenti, a skúste osloviť rovnaké weby.</li>
                            <li><strong>Broken Link Building:</strong> Nájdite nefunkčné odkazy na iných weboch a ponúknite im ako náhradu váš relevantný obsah.</li>
                        </ul>
                    </section>

                    <section id="local-seo">
                        <h2>Lokálne SEO: Dominujte vo svojom meste</h2>
                        <p>Ak máte kamennú prevádzku alebo pôsobíte v konkrétnom regióne, lokálne SEO je pre vás kľúčové.</p>
                        <ul>
                            <li><strong>Google Business Profile:</strong> Vytvorte si a kompletne optimalizujte profil. Zbierajte recenzie, pridávajte fotky a pravidelne publikujte príspevky.</li>
                            <li><strong>Lokálne kľúčové slová:</strong> Optimalizujte na frázy ako "oprava mobilov Bratislava" alebo "reštaurácia v Trnave".</li>
                            <li><strong>Lokálne citácie (NAPs):</strong> Uistite sa, že vaše meno, adresa a telefónne číslo (Name, Address, Phone) sú konzistentné vo všetkých online registroch.</li>
                        </ul>
                    </section>
                </article>

                <Card className="mt-16 bg-primary/10 border-primary/20">
                    <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-bold font-headline text-foreground">Pripravení naštartovať vaše SEO?</h2>
                                <p className="text-foreground/80 mt-2 max-w-2xl">
                                    Prestaňte hádať a začnite robiť rozhodnutia založené na dátach. Pomôžeme vám s komplexnou SEO stratégiou.
                                </p>
                            </div>
                            <Button asChild size="lg" className="flex-shrink-0">
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
