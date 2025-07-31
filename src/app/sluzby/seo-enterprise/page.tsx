
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SeoEnterprisePage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">SEO Balík: Enterprise</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Komplexné riešenie na mieru pre najnáročnejších klientov, medzinárodné trhy a špecifické biznis ciele.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Dohodnúť si Konzultáciu</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
               <section className="grid items-center gap-12 md:grid-cols-2 mb-20">
                    <div>
                         <Image
                            src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3805.jpg?w=400"
                            alt="Tím expertov pracuje na medzinárodnej SEO stratégii"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-2xl shadow-primary/10 mx-auto"
                            data-ai-hint="international seo experts"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Partnerstvo bez Kompromisov</h2>
                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                           Enterprise riešenie znamená, že vaše ciele sa stávajú našimi. Poskytneme vám dedikovaného SEO manažéra a tím špecialistov, ktorí budú úzko spolupracovať s vaším marketingovým a vývojovým oddelením. Navrhneme stratégiu presne na mieru, či už ide o expanziu na nové trhy, riešenie komplexných technických výziev alebo o obranu pozícií pred najväčšími hráčmi na trhu.
                        </p>
                    </div>
                 </section>

                 <section className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Pre koho je Enterprise riešenie?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                        Pre medzinárodné korporácie, technologické firmy a lídrov na trhu, ktorí vyžadujú maximálnu flexibilitu, proaktivitu a partnera, ktorý rozumie ich komplexnému biznisu. Ak štandardné balíky nespĺňajú vaše požiadavky na rozsah, flexibilitu alebo hĺbku expertízy, Enterprise riešenie vám dáva voľnosť a zdroje, ktoré potrebujete na dosiahnutie výnimočných výsledkov.
                    </p>
                </section>

                <section className="mb-20">
                     <Card className="bg-muted/50 border-border/50">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl font-bold text-center">Neobmedzené možnosti s Enterprise</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg pt-6">
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Všetko z balíka Korporát</h3>
                                    <p className="text-sm text-muted-foreground">Absolútne komplexný servis ako východiskový bod, ktorý ďalej prispôsobujeme a rozširujeme podľa vašich potrieb.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Medzinárodné SEO</h3>
                                    <p className="text-sm text-muted-foreground">Kompletná stratégia a exekúcia pre expanziu na zahraničné trhy (analýza trhu, hreflang, geo-targeting, lokalizácia obsahu a i.).</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Dedikovaný SEO manažér a tím</h3>
                                    <p className="text-sm text-muted-foreground">Váš vlastný tím expertov, ktorý pozná váš biznis do hĺbky a je vám plne k dispozícii pre operatívne aj strategické potreby.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Školenia pre váš tím</h3>
                                    <p className="text-sm text-muted-foreground">Zvýšime SEO znalosti vášho interného marketingového, obsahového alebo vývojového tímu prostredníctvom workshopov na mieru.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Kompletné prepojenie s biznis cieľmi</h3>
                                    <p className="text-sm text-muted-foreground">Reportujeme priamo na kľúčové biznis metriky, ktoré sú dôležité pre váš manažment (PNO, ROI, LTV, Market Share).</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-sm text-muted-foreground font-bold text-lg">Na mieru</p>
                                </div>
                            </div>
                        </CardContent>
                     </Card>
                </section>
                
                <section className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-headline">Náš Proces Spolupráce</h2>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                        <li className="mb-10 ml-6">            
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <span className='font-bold text-primary'>1</span>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Strategické partnerstvo a R&D</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Stávame sa vaším výskumným a vývojovým oddelením pre digitálny rast. Neustále analyzujeme trh, testujeme nové hypotézy a hľadáme inovatívne cesty k úspechu.</p>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                 <span className='font-bold text-primary'>2</span>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Plná integrácia s vašimi tímami</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Náš dedikovaný manažér zabezpečuje bezproblémovú komunikáciu a spoluprácu s vašimi internými oddeleniami (marketing, IT, produkt, predaj).</p>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                 <span className='font-bold text-primary'>3</span>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Reporting pre manažment a Board</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Pravidelne pripravujeme a prezentujeme strategické reporty pre vedenie spoločnosti, ktoré jasne preukazujú prínos a návratnosť investícií do SEO.</p>
                        </li>
                    </ol>
                </section>

                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Poďme spoločne definovať budúcnosť vášho úspechu.</h2>
                      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                         Kontaktujte nás a dohodnite si stretnutie, kde preberieme vaše najambicióznejšie ciele a navrhneme stratégiu na ich dosiahnutie.
                     </p>
                      <Button size="lg" asChild>
                        <Link href="/contact">
                            Kontaktujte Nás
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    )
}
