
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PwaEnterprisePage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">Enterprise PWA</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Vysoko škálovateľné PWA riešenie na mieru pre špecifické potreby vášho podnikania.
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
                            src="https://img.freepik.com/free-vector/analytics-dashboard-concept-illustration_114360-7312.jpg?w=400"
                            alt="Tím expertov plánuje enterprise PWA riešenie"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-2xl shadow-primary/10 mx-auto"
                            data-ai-hint="enterprise solution planning"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Neobmedzené Možnosti pre Váš Biznis</h2>
                        <p className="text-lg text-muted-foreground mb-6 text-balance">
                          Pre klientov s najvyššími nárokmi ponúkame Enterprise riešenia. Či už potrebujete komplexnú integráciu s vašimi internými systémami, pokročilé bezpečnostné funkcie alebo špecifickú funkcionalitu, náš tím expertov je pripravený navrhnúť a vyvinúť riešenie presne na mieru.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Balík obsahuje:</h3>
                                    <p className="text-muted-foreground">Riešenie na kľúč, integrácie s externými systémami (API), pokročilú bezpečnosť, dedikovanú podporu a prioritný vývoj.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Cena</h3>
                                    <p className="text-muted-foreground">Na mieru</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                 </section>
                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Máte veľkú víziu? My ju zrealizujeme.</h2>
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
