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
              
              <h3>1. Rýchlosť Načítania Stránky</h3>
              <ul>
                  <li><strong>Lazy Loading Obrázkov:</strong> Implementujte lazy loading pre všetky obrázky mimo viewportu. Toto zníži požiadavky na čas prvého načítania.</li>
                  <li><strong>Kompresia Obrázkov:</strong> Používajte nástroje ako TinyPNG alebo ImageOptim na optimalizáciu veľkosti obrázkov bez straty kvality.</li>
                  <li><strong>Browser Caching:</strong> Nastavte správne hlavičky Cache-Control pre statické zdroje ako CSS, JS a obrázky.</li>
                  <li><strong>Minifikácia CSS a JavaScriptu:</strong> Odstráňte nepotrebné znaky, medzery a komentáre z vašich súborov.</li>
                  <li><strong>Použitie Content Delivery Network (CDN):</strong> Distribuujte váš obsah cez globálnu sieť serverov pre rýchlejšie doručenie.</li>
              </ul>
              
              <h3>2. Mobilná Optimalizácia</h3>
              <ul>
                  <li><strong>Responsívny Dizajn:</strong> Zabezpečte, aby sa váš web správne zobrazoval na všetkých zariadeniach.</li>
                  <li><strong>Touch-friendly Prvky:</strong> Tlačidlá a odkazy by mali mať minimálnu veľkosť 48x48 pixelov.</li>
                  <li><strong>AMP Stránky:</strong> Zvážte implementáciu Accelerated Mobile Pages (AMP) pre okamžité načítanie na mobiloch.</li>
              </ul>
              
              <h3>3. Optimalizácia Štruktúry Webu</h3>
              <ul>
                  <li><strong>Logická Hierarchia:</strong> Vaša štruktúra URL by mala byť jednoduchá a logická (napr. /kategoria/produkt).</li>
                  <li><strong>Interné Spájanie:</strong> Používajte interné odkazy na prepojenie relevantných článkov a produktov.</li>
                  <li><strong>Chlebové Drobtiny (Breadcrumbs):</strong> Implementujte breadcrumbs pre lepšiu používateľskú skúsenosť.</li>
                  <li><strong>XML Sitemap:</strong> Vytvorte a odošlite XML sitemap do Google Search Console.</li>
              </ul>
              
              <h2>Obsahová Optimalizácia</h2>
              
              <h3>4. Kľúčové Slová (Keywords)</h3>
              <ul>
                  <li><strong>Kľúčové Slová v Titulku:</strong> Vaše primárne kľúčové slovo by malo byť v titulku (H1) a meta popise.</li>
                  <li><strong>Sekundárne Kľúčové Slová:</strong> Používajte varianty a synonymá vášho primárneho kľúčového slova.</li>
                  <li><strong>Dĺžka Obsahu:</strong> Pre komplexné témy cielte na dlhšie články (1500+ slov).</li>
                  <li><strong>Prirodzenosť:</strong> Vyhnite sa preplňovaniu kľúčovými slovami. Píšte pre ľudí.</li>
              </ul>
              
              <h3>5. Optimalizácia Textového Obsahu</h3>
              <ul>
                  <li><strong>Použitie Nadpisov:</strong> Organizujte obsah pomocou nadpisov H2, H3 atď.</li>
                  <li><strong>Zvýraznenie:</strong> Používajte tučné písmo a kurzívu pre kľúčové body.</li>
                  <li><strong>Zoznamy a Bodky:</strong> Rozdeľte dlhé odseky pomocou zoznamov.</li>
                  <li><strong>Unikátny Obsah:</strong> Každá stránka by mala mať unikátny obsah.</li>
              </ul>
              
              <h3>6. Multimediálny Obsah</h3>
              <ul>
                  <li><strong>Optimalizácia Obrázkov:</strong> Vždy používajte popisné alt texty a správne názvy súborov.</li>
                  <li><strong>Transkripcie Videí:</strong> Pre videá poskytujte textové prepisy pre lepšie indexovanie.</li>
                  <li><strong>Infografiky:</strong> Vytvárajte originálne infografiky, ktoré možno zdieľať.</li>
                  <li><strong>Interaktívny Obsah:</strong> Kvízy a <Link href="/analyzer">kalkulačky</Link> zvyšujú čas strávený na stránke.</li>
              </ul>

              <div className="bg-accent/20 border-l-4 border-accent p-6 rounded-md my-12">
                  <h3 className="!mt-0 text-accent-foreground font-bold">Exkluzívna Ponuka Pre Nových Klientov</h3>
                  <p className="text-accent-foreground/80">Objednajte si kompletný SEO audit vášho webu a získajte 50% zľavu na prvý mesiac spolupráce! Ponuka platí len pre nových klientov.</p>
                  <Button className="mt-4" variant="outline" asChild>
                    <Link href="/contact">Využiť Ponuku</Link>
                  </Button>
              </div>
          </article>
        </main>
    </div>
    )
}
