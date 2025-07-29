'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TahakyPage() {
    return (
    <div className="bg-background text-foreground">
        <header className="bg-primary/10 py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-headline">Exkluzívne SEO Ťaháky</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Objavte 50+ overených techník, ktoré nám pomohli zvýšiť organický traffic našich klientov o 200-500%
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link href="/contact">Chcem Konzultáciu</Link>
                        </Button>
                        <Button size="lg" variant="outline">Stiahnuť PDF (Čoskoro)</Button>
                    </div>
                </div>
            </div>
        </header>

        <main className="container mx-auto py-12 px-4">
          <article className="prose dark:prose-invert max-w-4xl mx-auto">
              <h2>Technická SEO Optimalizácia</h2>
              
              <h3>Rýchlosť Načítania Stránky (Page Speed)</h3>
              <ul>
                  <li><strong>Lazy Loading Obrázkov:</strong> Implementujte odložené načítanie pre všetky obrázky a iframy mimo viditeľnej časti obrazovky.</li>
                  <li><strong>Kompresia a Formát Obrázkov:</strong> Používajte moderné formáty ako WebP alebo AVIF a nástroje ako TinyPNG na kompresiu obrázkov bez viditeľnej straty kvality.</li>
                  <li><strong>Browser Caching:</strong> Nastavte správne hlavičky Cache-Control a Expires, aby sa statické zdroje (CSS, JS, obrázky) ukladali v prehliadači používateľa.</li>
                  <li><strong>Minifikácia Kódu:</strong> Odstráňte nepotrebné znaky, medzery a komentáre z CSS, JavaScript a HTML súborov.</li>
                  <li><strong>Použitie Content Delivery Network (CDN):</strong> Distribuujte váš obsah cez globálnu sieť serverov pre rýchlejšie doručenie používateľom po celom svete.</li>
                  <li><strong>Odstránenie Blokujúceho JavaScriptu:</strong> Presuňte skripty, ktoré nie sú kritické pre prvé vykreslenie, na koniec <body> a použite atribúty `async` alebo `defer`.</li>
              </ul>
              
              <h3>Indexácia a Prehľadávanie</h3>
              <ul>
                  <li><strong>XML Sitemap:</strong> Vytvorte, aktualizujte a odošlite XML sitemap do Google Search Console. Zahrňte všetky dôležité stránky.</li>
                  <li><strong>Robots.txt:</strong> Správne nakonfigurujte súbor robots.txt, aby ste zamedzili prístupu k nepodstatným častiam webu (napr. administrácia, košík).</li>
                  <li><strong>Štruktúrované Dáta (Schema Markup):</strong> Implementujte štruktúrované dáta pre produkty, články, FAQ, recenzie atď., aby ste získali "rich snippets" vo výsledkoch vyhľadávania.</li>
                  <li><strong>Kanonické URL:</strong> Používajte `rel="canonical"` na stránkach s duplicitným obsahom, aby ste predišli problémom s indexáciou.</li>
              </ul>

              <h3>Mobilná Optimalizácia</h3>
              <ul>
                  <li><strong>Responsívny Dizajn:</strong> Zabezpečte, aby sa váš web dokonale prispôsobil všetkým veľkostiam obrazoviek. Testujte na reálnych zariadeniach.</li>
                  <li><strong>Veľkosť Dotykových Prvkov:</strong> Tlačidlá a odkazy by mali mať minimálnu veľkosť 48x48 pixelov, aby sa dali ľahko ovládať na dotykových obrazovkách.</li>
                  <li><strong>Odstránenie Intruzívnych Pop-upov:</strong> Vyhnite sa rušivým intersticiálnym reklamám na mobilných zariadeniach, ktoré Google penalizuje.</li>
              </ul>
              
              <h2>Obsahová Stratégia</h2>
              
              <h3>Analýza a Použitie Kľúčových Slov</h3>
              <ul>
                  <li><strong>Kľúčové Slovo v Titulku a H1:</strong> Vaše primárne kľúčové slovo by malo byť na začiatku titulku a v hlavnom nadpise (H1).</li>
                  <li><strong>Sémantické a LSI Kľúčové Slová:</strong> Používajte synonymá a súvisiace výrazy, aby Google lepšie pochopil kontext vášho obsahu.</li>
                  <li><strong>Long-tail Kľúčové Slová:</strong> Zamerajte sa aj na dlhšie, špecifickejšie frázy, ktoré majú nižšiu konkurenciu a vyššiu mieru konverzie.</li>
                  <li><strong>Analýza Zámeru Vyhľadávania (Search Intent):</strong> Uistite sa, že váš obsah zodpovedá tomu, čo používateľ hľadá (informačný, navigačný, transakčný obsah).</li>
              </ul>
              
              <h3>Tvorba a Optimalizácia Obsahu</h3>
              <ul>
                  <li><strong>Unikátny a Hodnotný Obsah:</strong> Každá stránka musí mať unikátny obsah, ktorý rieši problém alebo odpovedá na otázku používateľa lepšie ako konkurencia.</li>
                  <li><strong>Optimalizácia Nadpisov:</strong> Používajte logickú štruktúru nadpisov (H1, H2, H3...). V podnadpisoch používajte sekundárne kľúčové slová.</li>
                  <li><strong>Interné Prelinkovanie:</strong> Odkazujte z nových článkov na staršie relevantné články a naopak. Používajte popisné kotviace texty (anchor text).</li>
                  <li><strong>Optimalizácia Obrázkov:</strong> Vždy používajte popisné alt texty a názvy súborov pre obrázky. Zahrňte do nich kľúčové slová.</li>
                  <li><strong>Interaktívny Obsah:</strong> Zvýšte angažovanosť a čas strávený na stránke pomocou kvízov, ankiet alebo nástrojov ako je náš <Link href="/analyzer">SEO Analyzátor</Link>.</li>
              </ul>

              <h2>Link Building (Budovanie Odkazov)</h2>
              <ul>
                  <li><strong>Guest Blogging:</strong> Píšte hodnotné články pre relevantné weby vo vašom odbore a získajte spätný odkaz.</li>
                  <li><strong>Analýza Konkurenčných Odkazov:</strong> Zistite, odkiaľ odkazujú na vašu konkurenciu a pokúste sa získať odkazy z rovnakých zdrojov.</li>
                  <li><strong>Broken Link Building:</strong> Hľadajte nefunkčné odkazy na iných weboch a ponúknite im váš relevantný obsah ako náhradu.</li>
                  <li><strong>Tvorba Zdieľateľného Obsahu:</strong> Vytvárajte infografiky, rozsiahle štúdie alebo nástroje, na ktoré budú ostatní prirodzene odkazovať.</li>
              </ul>

              <h2>Lokálne SEO</h2>
              <ul>
                  <li><strong>Optimalizácia Google Business Profile:</strong> Kompletne vyplňte a pravidelne aktualizujte svoj profil, vrátane fotiek, otváracích hodín a služieb.</li>
                  <li><strong>Získavanie Recenzií:</strong> Aktívne žiadajte spokojných zákazníkov o zanechanie hodnotenia na Google a iných relevantných platformách.</li>
                  <li><strong>Lokálne Citácie (NAP):</strong> Zabezpečte konzistentnosť vášho mena, adresy a telefónneho čísla (NAP) vo všetkých online registroch (napr. Zlaté Stránky).</li>
                  <li><strong>Lokálne Orientovaný Obsah:</strong> Píšte články alebo vytvárajte podstránky zamerané na vaše mesto alebo región (napr. "Najlepšie SEO v Bratislave").</li>
              </ul>

              <div className="bg-accent/20 border-l-4 border-accent p-6 rounded-md my-12">
                  <h3 className="!mt-0 text-accent-foreground font-bold">Exkluzívna Ponuka Pre Nových Klientov</h3>
                  <p className="text-accent-foreground/80">Objednajte si kompletný SEO audit vášho webu a získajte 50% zľavu na prvý mesiac spolupráce! Ponuka platí len pre nových klientov.</p>
                  <Button className="mt-4" variant="default" asChild>
                    <Link href="/contact">Využiť Ponuku</Link>
                  </Button>
              </div>
          </article>
        </main>
    </div>
    )
}
