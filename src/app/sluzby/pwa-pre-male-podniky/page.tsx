
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Smartphone, Globe, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
    {
        icon: <Smartphone className="h-8 w-8 text-primary" />,
        title: 'Návykový zážitok',
        description: 'PWA poskytuje používateľský zážitok podobný natívnej aplikácii priamo v prehliadači.',
    },
    {
        icon: <Globe className="h-8 w-8 text-primary" />,
        title: 'Nezávislosť od pripojenia',
        description: 'Aplikácia funguje spoľahlivo aj pri slabom alebo žiadnom internetovom pripojení.',
    },
    {
        icon: <Shield className="h-8 w-8 text-primary" />,
        title: 'Bezpečnosť a rýchlosť',
        description: 'Vždy doručované cez HTTPS. PWA sú navrhnuté pre bleskové načítanie a plynulý chod.',
    },
]

export default function PwaForBusinessPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="bg-primary/10 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-headline">Vývoj PWA pre Malé a Stredné Podniky</h1>
                    <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8 text-balance">
                        Získajte konkurenčnú výhodu s Progresívnou Webovou Aplikáciou, ktorá posunie váš biznis na novú úroveň.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Chcem Bezplatnú Konzultáciu</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
                <section id="about-pwa" className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Čo je to Progresívna Webová Aplikácia (PWA)?</h2>
                    <p className="text-lg text-muted-foreground text-balance">
                        PWA je typ aplikačného softvéru dodávaného prostredníctvom webu, postaveného pomocou bežných webových technológií vrátane HTML, CSS a JavaScriptu. Je určená na prácu na akejkoľvek platforme, ktorá používa prehliadač vyhovujúci štandardom. Kombinuje najlepšie vlastnosti webových stránok a mobilných aplikácií.
                    </p>
                </section>

                <section id="features" className="mb-20">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {features.map((feature, index) => (
                             <Card key={index} className="border-primary/20 bg-card/50 backdrop-blur-lg text-center">
                                <CardHeader className="items-center">
                                    {feature.icon}
                                    <CardTitle className="mt-4 text-xl font-semibold">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                             </Card>
                        ))}
                    </div>
                </section>
                
                 <section id="benefits" className="grid items-center gap-12 md:grid-cols-2 mb-20">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Kľúčové Výhody pre Váš Biznis</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Zvýšená angažovanosť</h3>
                                    <p className="text-muted-foreground">Push notifikácie umožňujú efektívne osloviť zákazníkov a udržať ich v kontakte s vašou značkou.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Lepšia konverzia</h3>
                                    <p className="text-muted-foreground">Rýchlejšie načítanie a plynulejší zážitok vedú k vyššej miere konverzie.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Nižšie náklady na vývoj</h3>
                                    <p className="text-muted-foreground">Jedna aplikácia pre všetky platformy (iOS, Android, web) znamená výraznú úsporu nákladov oproti natívnemu vývoju.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                         <Image
                            src="https://firebasestorage.googleapis.com/v0/b/aetherflow-6gd9p.appspot.com/o/images%2Fbenefit-conversion.png?alt=media&token=c5d01323-289e-4e43-8512-a72f0e0f3910"
                            alt="Graf zobrazujúci rast konverzií po implementácii PWA"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-2xl shadow-primary/10"
                            data-ai-hint="conversion rate graph"
                        />
                    </div>
                 </section>

                 <section id="cta" className="bg-primary/10 rounded-lg p-12 text-center">
                     <h2 className="text-3xl font-bold mb-4 font-headline">Ste pripravení na budúcnosť webu?</h2>
                     <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                         Nechajte si od nás vypracovať nezáväznú ponuku a zistite, ako môže PWA transformovať vaše podnikanie.
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

    
