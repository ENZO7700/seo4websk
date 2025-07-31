
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SeoLiderPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">SEO Balík: Líder</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Pre etablované projekty a firmy, ktorých cieľom je dominovať vo svojom segmente.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Objednať Balík Líder</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
               <section className="grid items-center gap-12 md:grid-cols-2 mb-20">
                    <div>
                         <Image
                            src="https://img.freepik.com/free-vector/link-building-concept-illustration_114360-3547.jpg?w=400"
                            alt="Ilustrácia budovania silnej siete odkazov"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-2xl shadow-primary/10 mx-auto"
                            data-ai-hint="link building network"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Staňte sa Lídrom na Trhu</h2>
                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                           Balík Líder je naša najkomplexnejšia ponuka pre individuálnych klientov. Zameriavame sa na agresívne budovanie odkazov, tvorbu obsahovej stratégie a detailné sledovanie konkurencie, aby sme vás dostali na absolútnu špičku.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Balík obsahuje:</h3>
                                    <p className="text-muted-foreground">Všetko z balíka Rast, plus komplexnú obsahovú stratégiu, budovanie 7 spätných odkazov mesačne, monitoring konkurencie a prioritnú podporu.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-muted-foreground">599 € / mesiac</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                 </section>
                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Chcete byť číslom jedna? Poďme na to.</h2>
                      <Button size="lg" asChild>
                        <Link href="/contact">
                            Chcem Balík Líder
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    )
}
