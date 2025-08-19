
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SeoDominanciaPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">SEO Balík: Dominancia</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                       Agresívna a komplexná stratégia pre firmy, ktorých cieľom je absolútne ovládnuť svoj trh a stať sa neprehliadnuteľným lídrom.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Chcem Dominovať</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
               <section className="grid items-center gap-12 md:grid-cols-2 mb-20">
                    <div>
                         <Image
                            src="https://img.freepik.com/free-vector/business-leader-concept-illustration_114360-1 líder.jpg?w=600"
                            alt="Šachový kráľ ako metafora pre dominanciu na trhu"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-2xl shadow-primary/10 mx-auto"
                            data-ai-hint="market leader chess king"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Nielen Hrať. Vyhrávať.</h2>
                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                           Balík Dominancia je určený pre klientov, ktorí sa neuspokoja s druhým miestom. Kombinujeme najmodernejšie SEO techniky, dátovo riadené PR a agresívny link building, aby sme nielen dosiahli prvé priečky, ale aby sme ich aj dlhodobo udržali a vytvorili okolo vašej značky nedobytnú pevnosť.
                        </p>
                    </div>
                 </section>

                  <section className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Pre koho je balík Dominancia?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                      Pre etablované firmy a e-shopy, ktoré sú lídrami vo svojom segmente alebo sa nimi chcú stať. Ak je vaším cieľom nielen organická návštevnosť, ale aj budovanie značky, posilňovanie reputácie a maximalizácia podielu na trhu, tento balík vám poskytne nástroje a stratégiu na dosiahnutie týchto cieľov.
                    </p>
                </section>

                 <section className="mb-20">
                     <Card className="bg-muted/50 border-border/50">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl font-bold text-center">Čo získate s balíkom Dominancia?</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg pt-6">
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Všetko z balíka Korporát</h3>
                                    <p className="text-sm text-muted-foreground">Komplexný základ, na ktorom staviame ešte agresívnejšiu stratégiu.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Digitálne PR a link building (30+ odkazov/mesiac)</h3>
                                    <p className="text-sm text-muted-foreground">Vysokofrekvenčné a cielené budovanie autority prostredníctvom prémiových médií, kreatívnych kampaní a spoluprác s influencermi.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Pokročilá analytika a prediktívne modelovanie</h3>
                                    <p className="text-sm text-muted-foreground">Využívame dáta na predpovedanie trendov, identifikáciu nových príležitostí a optimalizáciu rozpočtu pre maximálnu ROI.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Medzinárodné SEO (1 trh v cene)</h3>
                                    <p className="text-sm text-muted-foreground">Pomôžeme vám expandovať na jeden zahraničný trh podľa vášho výberu, vrátane analýzy trhu a lokalizačnej stratégie.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Dedikovaný senior konzultant</h3>
                                    <p className="text-sm text-muted-foreground">Váš projekt povedie jeden z našich najskúsenejších expertov s preukázateľnými výsledkami v najkonkurenčnejších segmentoch.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-sm text-muted-foreground font-bold text-lg">2,499 € / mesiac</p>
                                </div>
                            </div>
                        </CardContent>
                     </Card>
                </section>
                
                <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Ste pripravení zanechať konkurenciu ďaleko za sebou?</h2>
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

    