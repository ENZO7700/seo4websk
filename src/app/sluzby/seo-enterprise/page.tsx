
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
                           Enterprise riešenie znamená, že vaše ciele sa stávajú našimi. Poskytneme vám dedikovaného SEO manažéra, ktorý bude úzko spolupracovať s vaším tímom. Navrhneme stratégiu presne na mieru, či už ide o expanziu na nové trhy, alebo o riešenie komplexných technických výziev.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Balík obsahuje:</h3>
                                    <p className="text-muted-foreground">Všetko z balíka Korporát, plus medzinárodné SEO, dedikovaný SEO manažér, školenia pre váš tím a kompletné prepojenie s vašimi biznis cieľmi.</p>
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
                     <h2 className="text-3xl font-bold mb-4 font-headline">Poďme spoločne definovať budúcnosť vášho úspechu.</h2>
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
