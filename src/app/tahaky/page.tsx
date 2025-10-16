
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Wand2, Search, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { answerSeoQuestion, AnswerSeoQuestionOutput } from '@/ai/flows/answer-seo-question-flow';
import { motion } from 'framer-motion';

const faqItems = [
  {
    id: 'on-page',
    question: 'On-Page SEO: Optimalizácia priamo na stránke',
    answer: `
            <p>On-Page SEO je základom všetkého. Sú to úpravy, ktoré máte plne pod kontrolou priamo na vašom webe.</p>
            <ul>
                <li><strong>Optimalizácia titulkov (Title Tags):</strong> Každá stránka musí mať unikátny a výstižný titulok do 60 znakov, ktorý obsahuje hlavné kľúčové slovo.</li>
                <li><strong>Meta popisy (Meta Descriptions):</strong> Pútavý popis do 160 znakov, ktorý láka na kliknutie. Hoci priamo neovplyvňuje pozície, má obrovský vplyv na mieru prekliku (CTR).</li>
                <li><strong>Štruktúra nadpisov (H1, H2, H3):</strong> Používajte iba jeden H1 nadpis na stránke. Ostatné nadpisy (H2, H3...) používajte na logické členenie obsahu.</li>
                <li><strong>Interné prelinkovanie:</strong> Odkazujte z nových článkov na staré a naopak. Pomáhate tým používateľom aj vyhľadávačom objavovať relevantný obsah.</li>
                <li><strong>Optimalizácia obrázkov:</strong> Komprimujte obrázky a vždy vypĺňajte ALT texty. Pomáha to rýchlosti načítania a prístupnosti.</li>
            </ul>
        `,
  },
  {
    id: 'technical',
    question: 'Technické SEO: Pevné základy pre váš web',
    answer: `
            <p>Technické SEO zabezpečuje, že vyhľadávače dokážu váš web bez problémov prechádzať, indexovať a pochopiť jeho obsah.</p>
            <ul>
                <li><strong>Rýchlosť načítania:</strong> Váš web by sa mal načítať do 3 sekúnd. Používajte nástroje ako Google PageSpeed Insights a zamerajte sa na metriky Core Web Vitals.</li>
                <li><strong>Responzívny dizajn:</strong> Stránka sa musí dokonale zobrazovať na všetkých zariadeniach – mobiloch, tabletoch aj desktopoch.</li>
                <li><strong>SSL certifikát (HTTPS):</strong> Bezpečnosť je dnes štandard a Google weby bez HTTPS penalizuje.</li>
                <li><strong>Sitemap.xml a Robots.txt:</strong> Tieto súbory dávajú vyhľadávačom mapu vášho webu a inštrukcie, čo (ne)majú indexovať.</li>
                <li><strong>Štruktúrované dáta (Schema Markup):</strong> Pomôžte Googlu pochopiť kontext vášho obsahu (recenzie, produkty, udalosti) a získajte tak výhodu vo výsledkoch vyhľadávania vo forme rich snippets.</li>
            </ul>
        `,
  },
  {
    id: 'link-building',
    question: 'Link Building: Budovanie autority',
    answer: `
            <p>Spätné odkazy (backlinks) sú pre Google ako odporúčania. Čím viac kvalitných a relevantných webov na vás odkazuje, tým väčšiu autoritu máte.</p>
            <ul>
                <li><strong>Kvalita nad kvantitou:</strong> Jeden odkaz z relevantného, autoritatívneho webu má väčšiu váhu ako 100 odkazov z nekvalitných stránok.</li>
                <li><strong>Guest blogging:</strong> Píšte články pre iné weby vo vašom obore a získajte za to spätný odkaz.</li>
                <li><strong>Analýza konkurencie:</strong> Zistite, odkiaľ získavajú odkazy vaši konkurenti, a skúste osloviť rovnaké weby.</li>
                <li><strong>Broken Link Building:</strong> Nájdite nefunkčné odkazy na iných weboch a ponúknite im ako náhradu váš relevantný obsah.</li>
            </ul>
        `,
  },
  {
    id: 'local-seo',
    question: 'Lokálne SEO: Dominujte vo svojom meste',
    answer: `
            <p>Ak máte kamennú prevádzku alebo pôsobíte v konkrétnom regióne, lokálne SEO je pre vás kľúčové.</p>
            <ul>
                <li><strong>Google Business Profile:</strong> Vytvorte si a kompletne optimalizujte profil. Zbierajte recenzie, pridávajte fotky a pravidelne publikujte príspevky.</li>
                <li><strong>Lokálne kľúčové slová:</strong> Optimalizujte na frázy ako "oprava mobilov Bratislava" alebo "reštaurácia v Trnave".</li>
                <li><strong>Lokálne citácie (NAPs):</strong> Uistite sa, že vaše meno, adresa a telefónne číslo (Name, Address, Phone) sú konzistentné vo všetkých online registroch.</li>
            </ul>
        `,
  },
];

export default function TahakyPage() {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnswerSeoQuestionOutput | null>(null);
  const { toast } = useToast();

  const handleAsk = async () => {
    if (!question.trim()) {
      toast({
        variant: 'destructive',
        title: 'Otázka je povinná',
        description: 'Prosím, zadajte otázku, na ktorú chcete odpoveď.',
      });
      return;
    }
    setIsLoading(true);
    setResult(null);
    try {
        const fullContext = faqItems.map(item => `Sekcia: ${item.question}\nObsah: ${item.answer.replace(/<[^>]+>/g, ' ')}`).join('\n\n');
        const searchResult = await answerSeoQuestion({ question, context: fullContext });
        setResult(searchResult);
    } catch (error) {
        toast({
            variant: 'destructive',
            title: 'Nastala chyba',
            description: 'Nepodarilo sa získať odpoveď od AI. Skúste to prosím znova.',
        });
    } finally {
        setIsLoading(false);
    }
  };


  return (
    <div className="bg-background text-foreground">
      <header className="bg-card py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tighter md:text-6xl font-headline">
              Znalostná Databáza a SEO Ťaháky
            </h1>
            <p className="mt-4 mx-auto max-w-3xl text-lg text-muted-foreground text-balance">
              Spýtajte sa našej AI na čokoľvek zo sveta SEO alebo si prejdite naše osvedčené tipy a stratégie, ktoré vám pomôžu dostať sa na vrchol.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          
          <Card className="mb-12">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-bold text-foreground font-headline">
                    <Wand2 className="text-primary"/>
                    Spýtajte sa našej AI
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                    Položte otázku v prirodzenom jazyku a AI vám odpovie na základe našej znalostnej databázy.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col sm:flex-row gap-2">
                    <Input 
                        type="text"
                        placeholder="Napríklad: Ako optimalizovať obrázky?"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
                        className="bg-background text-foreground"
                    />
                    <Button onClick={handleAsk} disabled={isLoading} variant="default">
                        {isLoading ? <Loader2 className="animate-spin" /> : <Search />}
                        <span className="ml-2">Hľadať Odpoveď</span>
                    </Button>
                </div>
                 {isLoading && (
                    <div className="mt-6 flex justify-center items-center gap-2 text-muted-foreground">
                        <Loader2 className="animate-spin h-5 w-5" />
                        <span>AI hľadá najlepšiu odpoveď...</span>
                    </div>
                 )}
                 {result && (
                    <motion.div 
                        className="mt-6 p-6 bg-muted/50 rounded-lg border"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h3 className="flex items-center gap-2 font-bold text-lg text-primary mb-2">
                            <Sparkles className="h-5 w-5" />
                            Odpoveď od AI:
                        </h3>
                        <div className="prose prose-lg dark:prose-invert text-foreground" dangerouslySetInnerHTML={{ __html: result.answer.replace(/\n/g, '<br />') }} />
                         {result.source && (
                            <p className="text-sm text-muted-foreground mt-4 pt-4 border-t">
                                <strong>Zdroj:</strong> {result.source}
                            </p>
                        )}
                    </motion.div>
                 )}
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-center mb-8 font-headline">Manuálne SEO Ťaháky</h2>
          <Accordion
            type="single"
            collapsible
            className="w-full bg-card rounded-2xl p-4 border"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                value={`item-${index + 1}`}
                key={index}
                className="border-b last:border-b-0"
              >
                <AccordionTrigger className="text-lg text-left text-foreground hover:no-underline text-balance">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    className="prose prose-lg dark:prose-invert text-base text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </div>
  );
}
