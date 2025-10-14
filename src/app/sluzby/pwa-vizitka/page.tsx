
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Smartphone, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PwaVizitkaPage() {
    return (
        <div className="bg-space text-light">
             <header className="bg-galaxy py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-light font-headline">PWA Vizitka</h1>
                    <p className="text-xl max-w-3xl mx-auto text-rocket mb-8 text-balance">
                        Moderná online vizitka alebo portfólio postavené na PWA technológii, ktoré zanechá dojem.
                    </p>
                    <Button size="lg" asChild className="bg-sky hover:bg-night-sky">
                        <Link href="/contact">Získať Cenovú Ponuku</Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-16 px-4">
               <section className="grid items-center gap-12 md:grid-cols-2 mb-20">
                     <div>
                         <Image
                            src="https://img.freepik.com/free-vector/user-interface-design-concept-illustration_114360-3276.jpg?w=400"
                            alt="Ukážka modernej PWA vizitky na mobile"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-2xl shadow-sky/10 mx-auto"
                            data-ai-hint="modern pwa portfolio"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Urobte Prvý Dojem, Ktorý Zostane</h2>
                        <p className="text-lg text-rocket mb-6 text-balance">
                           Váš prvý kontakt s klientom je kľúčový. PWA Vizitka nie je len obyčajná stránka - je to bleskovo rýchla, interaktívna a vždy dostupná prezentácia vašej značky, ktorú si môžu klienti pridať priamo na plochu svojho telefónu. Zabudnite na zastarané papierové vizitky, vaša digitálna vizitka bude pracovať pre vás 24/7.
                        </p>
                         <p className="text-lg text-rocket text-balance">
                           Je to ideálny nástroj na prezentáciu vašich služieb, portfólia alebo osobnej značky s dôrazom na rýchlosť a moderný používateľský zážitok.
                        </p>
                    </div>
                </section>
                
                <section className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Pre koho je PWA Vizitka ideálna?</h2>
                    <p className="text-lg text-rocket text-balance">
                        Tento balíček je navrhnutý pre freelancerov, umelcov, konzultantov, malé firmy, remeselníkov a všetkých profesionálov, ktorí potrebujú pôsobivú, modernú a ľahko spravovateľnú online prezentáciu. Je to perfektné riešenie pre portfóliá, osobné stránky alebo jednoduché firemné weby, kde je cieľom jasne odprezentovať ponuku a získať kontakt na klienta.
                    </p>
                </section>

                <section className="mb-20">
                     <Card className="bg-galaxy border-spaceship">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl font-bold text-center text-light">Čo Všetko Balík Obsahuje?</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
                           <div className='space-y-4'>
                                <div className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-light">Dizajn na mieru</h3>
                                        <p className="text-sm text-rocket">Vytvoríme unikátny a moderný dizajn, ktorý bude dokonale odrážať vašu osobnosť alebo firemnú identitu. Žiadne šablóny, len originál.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-light">Do 5 podstránok</h3>
                                        <p className="text-sm text-rocket">Dostatok priestoru pre predstavenie seba (O nás), vašich služieb, galérie prác alebo portfólia, referencií a detailnej kontaktnej stránky.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-light">Kontaktný formulár s ochranou</h3>
                                        <p className="text-sm text-rocket">Implementujeme bezpečný kontaktný formulár, ktorý uľahčí potenciálnym klientom spojenie s vami a zároveň vás ochráni pred spamom.</p>
                                    </div>
                                </div>
                            </div>
                             <div className='space-y-4'>
                                <div className="flex items-start gap-3">
                                    <Zap className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-light">Základná SEO optimalizácia</h3>
                                        <p className="text-sm text-rocket">Postaráme sa o technické SEO základy, správne nastavenie titulkov, popisov a kľúčových slov, aby vás vyhľadávače ako Google ľahko našli.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Smartphone className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-light">Možnosť inštalácie na plochu</h3>
                                        <p className="text-sm text-rocket">Vaša vizitka sa bude správať ako skutočná aplikácia v telefóne alebo počítači, vždy dostupná na jedno kliknutie.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-aurora mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-light">Cena</h3>
                                        <p className="text-sm text-rocket font-bold text-lg">od 999 € (jednorazovo)</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                     </Card>
                </section>

                <section className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-headline text-light">Náš Proces Spolupráce</h2>
                    <ol className="relative border-l border-spaceship">                  
                        <li className="mb-10 ml-6">            
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-sky/10 rounded-full -left-4 ring-8 ring-space text-sky font-bold">1</span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-light">Úvodná Konzultácia a Analýza</h3>
                            <p className="mb-4 text-base font-normal text-rocket">Na začiatku si spoločne prejdeme vaše ciele, predstavy a požiadavky. Chceme do hĺbky pochopiť váš biznis, aby sme mohli navrhnúť riešenie presne na mieru.</p>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-sky/10 rounded-full -left-4 ring-8 ring-space text-sky font-bold">2</span>
                            <h3 className="mb-1 text-lg font-semibold text-light">Návrh Dizajnu a Štruktúry</h3>
                            <p className="text-base font-normal text-rocket">Pripravíme pre vás vizuálny návrh a štruktúru stránok. Až po vašom odsúhlasení sa pustíme do vývoja.</p>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-sky/10 rounded-full -left-4 ring-8 ring-space text-sky font-bold">3</span>
                            <h3 className="mb-1 text-lg font-semibold text-light">Vývoj, Testovanie a Nasadenie</h3>
                            <p className="text-base font-normal text-rocket">Naprogramujeme, dôkladne otestujeme a nasadíme vašu novú PWA Vizitku na vašu doménu. Následne vás zaškolíme do jej používania.</p>
                        </li>
                    </ol>
                </section>

                 <section id="cta" className="bg-galaxy rounded-lg p-12 text-center border border-spaceship">
                     <h2 className="text-3xl font-bold mb-4 font-headline text-light">Ste pripravení vyniknúť?</h2>
                     <p className="text-lg text-rocket mb-8 max-w-2xl mx-auto text-balance">
                         Nechajte vašu digitálnu stopu zažiariť. Investujte do modernej prezentácie, ktorá vám prinesie nových klientov.
                     </p>
                      <Button size="lg" asChild className="bg-sky hover:bg-night-sky">
                        <Link href="/contact">
                            Objednať PWA Vizitku
                            <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </section>
            </main>
        </div>
    )
}
