
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { ArrowRight, Bot, Lightbulb, CheckCircle, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type Step = 'goal' | 'stage' | 'budget' | 'result';

interface Answers {
  goal: string;
  stage: string;
  budget: number;
}

interface Recommendation {
  title: string;
  description: string;
  ctaText: string;
  href: string;
}

const recommendations: Record<string, Recommendation> = {
    'SEO_START': {
        title: 'Odporúčanie: SEO Balík Štart (199 €/mes.)',
        description: 'Tento balík je ideálny pre vás. Zameriame sa na kľúčové slová s nízkou konkurenciou a základný audit. Rýchlo tak získate prvé pozície a návštevnosť, čo je pre začínajúci projekt kľúčové.',
        ctaText: 'Viac o balíku Štart',
        href: '/sluzby/seo-start'
    },
    'SEO_RAST': {
        title: 'Odporúčanie: SEO Balík Rast (349 €/mes.)',
        description: 'Váš projekt potrebuje akcelerovať. S balíkom Rast sa zameriame na technické SEO a začneme budovať spätné odkazy, aby sme predbehli konkurenciu a zvýšili vašu autoritu.',
        ctaText: 'Viac o balíku Rast',
        href: '/sluzby/seo-rast'
    },
    'SEO_EXPERT': {
        title: 'Odporúčanie: SEO Balík Expert (449 €/mes.)',
        description: 'Ste pripravení stať sa lídrom. S balíkom Expert sa zameriame na pokročilú obsahovú stratégiu a intenzívny link building, aby sme z vás spravili autoritu vo vašom segmente.',
        ctaText: 'Viac o balíku Expert',
        href: '/sluzby/seo-expert'
    },
     'PWA_VIZITKA': {
        title: 'Odporúčanie: PWA Vizitka (od 999 €)',
        description: 'Pre nový projekt, kde je kľúčový prvý dojem a profesionálna prezentácia, je PWA Vizitka ideálnou voľbou. Získate modernú, rýchlu a inštalovateľnú stránku.',
        ctaText: 'Viac o PWA Vizitke',
        href: '/sluzby/pwa-vizitka'
    },
    'PWA_BUSINESS': {
        title: 'Odporúčanie: PWA Business (od 2,499 €)',
        description: 'Váš projekt potrebuje rásť a dynamicky komunikovať. PWA Business vám dá blog, push notifikácie a nástroje na budovanie komunity. Ideálne pre aktívny marketing.',
        ctaText: 'Viac o PWA Business',
        href: '/sluzby/pwa-business'
    },
    'DEFAULT': {
        title: 'Máme pre vás riešenie!',
        description: 'Na základe vašich odpovedí vám odporúčame osobnú konzultáciu. Spoločne nájdeme najlepšie riešenie šité na mieru pre váš projekt a rozpočet.',
        ctaText: 'Dohodnúť si konzultáciu',
        href: '/contact'
    }
}

const getRecommendation = (answers: Answers): Recommendation => {
    if (answers.goal === 'zvysit navstevnost' && answers.stage === 'zaciatok' && answers.budget < 300) {
        return recommendations['SEO_START'];
    }
    if (answers.goal === 'zvysit navstevnost' && answers.stage === 'stagnacia' && answers.budget >= 300) {
        return recommendations['SEO_RAST'];
    }
     if (answers.goal === 'budovat znacku' && answers.stage === 'stagnacia' && answers.budget >= 400) {
        return recommendations['SEO_EXPERT'];
    }
     if (answers.goal === 'zlepsit konverzie' && answers.stage === 'zaciatok' && answers.budget >= 900) {
        return recommendations['PWA_VIZITKA'];
    }
    if (answers.goal === 'zlepsit konverzie' && answers.stage === 'stagnacia' && answers.budget >= 1000) {
        return recommendations['PWA_BUSINESS'];
    }

    return recommendations['DEFAULT'];
}

export default function InteractiveServicesPage() {
  const [step, setStep] = useState<Step>('goal');
  const [answers, setAnswers] = useState<Answers>({
    goal: 'zvysit navstevnost',
    stage: 'zaciatok',
    budget: 300,
  });
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const handleNext = () => {
    if (step === 'goal') setStep('stage');
    if (step === 'stage') setStep('budget');
    if (step === 'budget') {
        const result = getRecommendation(answers);
        setRecommendation(result);
        setStep('result');
    }
  };
  
  const handleReset = () => {
      setStep('goal');
      setRecommendation(null);
      setAnswers({
        goal: 'zvysit navstevnost',
        stage: 'zaciatok',
        budget: 300,
      });
  }

  const isNextDisabled = () => {
      if (step === 'goal' && !answers.goal) return true;
      if (step === 'stage' && !answers.stage) return true;
      return false;
  }
  
  const renderStep = () => {
      switch(step) {
          case 'goal':
              return (
                   <motion.div key="goal" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}>
                        <h3 className="font-semibold text-lg md:text-xl text-light mb-4">1/3: Aký je váš hlavný cieľ?</h3>
                        <RadioGroup value={answers.goal} onValueChange={(value) => setAnswers({...answers, goal: value})} className="space-y-3">
                            <Label htmlFor="goal-traffic" className="flex items-center gap-3 p-4 rounded-lg bg-space-grey border border-spaceship cursor-pointer hover:border-aurora/50 has-[:checked]:border-aurora">
                                <RadioGroupItem value="zvysit navstevnost" id="goal-traffic" />
                                Zvýšiť organickú návštevnosť a získať viac zákazníkov.
                            </Label>
                             <Label htmlFor="goal-conversion" className="flex items-center gap-3 p-4 rounded-lg bg-space-grey border border-spaceship cursor-pointer hover:border-aurora/50 has-[:checked]:border-aurora">
                                <RadioGroupItem value="zlepsit konverzie" id="goal-conversion" />
                                Zlepšiť používateľský zážitok a konverzie (PWA).
                            </Label>
                             <Label htmlFor="goal-brand" className="flex items-center gap-3 p-4 rounded-lg bg-space-grey border border-spaceship cursor-pointer hover:border-aurora/50 has-[:checked]:border-aurora">
                                <RadioGroupItem value="budovat znacku" id="goal-brand" />
                                Budovať značku a stať sa autoritou vo svojom odbore.
                            </Label>
                        </RadioGroup>
                   </motion.div>
              )
          case 'stage':
               return (
                   <motion.div key="stage" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}>
                        <h3 className="font-semibold text-lg md:text-xl text-light mb-4">2/3: V akej fáze je váš projekt?</h3>
                        <RadioGroup value={answers.stage} onValueChange={(value) => setAnswers({...answers, stage: value})} className="space-y-3">
                            <Label htmlFor="stage-start" className="flex items-center gap-3 p-4 rounded-lg bg-space-grey border border-spaceship cursor-pointer hover:border-aurora/50 has-[:checked]:border-aurora">
                                <RadioGroupItem value="zaciatok" id="stage-start" />
                                Ešte len začínam alebo mám úplne nový web.
                            </Label>
                            <Label htmlFor="stage-stagnate" className="flex items-center gap-3 p-4 rounded-lg bg-space-grey border border-spaceship cursor-pointer hover:border-aurora/50 has-[:checked]:border-aurora">
                                <RadioGroupItem value="stagnacia" id="stage-stagnate" />
                                Mám web, ale návštevnosť stagnuje alebo klesá.
                            </Label>
                             <Label htmlFor="stage-leader" className="flex items-center gap-3 p-4 rounded-lg bg-space-grey border border-spaceship cursor-pointer hover:border-aurora/50 has-[:checked]:border-aurora">
                                <RadioGroupItem value="leader" id="stage-leader" />
                                Som jeden z lídrov na trhu a chcem si udržať pozíciu.
                            </Label>
                        </RadioGroup>
                   </motion.div>
              )
          case 'budget':
               return (
                    <motion.div key="budget" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}>
                        <h3 className="font-semibold text-lg md:text-xl text-light mb-4">3/3: Aký je váš odhadovaný mesačný marketingový rozpočet?</h3>
                        <div className="flex flex-col items-center p-6 bg-space-grey rounded-lg">
                           <p className="text-4xl font-bold text-aurora mb-4">{answers.budget} €</p>
                           <Slider 
                                value={[answers.budget]} 
                                onValueChange={([value]) => setAnswers({...answers, budget: value})}
                                max={3000}
                                step={50}
                                className="w-full"
                           />
                           <p className="text-sm text-rocket mt-2">Posuňte pre úpravu</p>
                        </div>
                    </motion.div>
               )
           case 'result':
               return (
                    <motion.div key="result" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                        <div className="flex justify-center mb-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-aurora/10">
                            <CheckCircle className="h-10 w-10 text-aurora" />
                          </div>
                        </div>
                        <h3 className="font-bold text-2xl text-light mb-2">{recommendation?.title}</h3>
                        <p className="text-rocket max-w-xl mx-auto text-balance">{recommendation?.description}</p>
                    </motion.div>
               )
      }
  }


  return (
    <div className="bg-space text-light">
      <header className="bg-galaxy py-20 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline text-light">
              Nájdite si službu na mieru
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-rocket text-balance">
              Neviete, kde začať? Odpovedzte na 3 rýchle otázky a naša AI vám odporučí najvhodnejší balík pre váš biznis.
            </p>
          </motion.div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-16 sm:py-24">
        <div className="flex justify-center">
          <Card className="w-full max-w-2xl bg-galaxy border-spaceship text-light">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <Bot className="h-8 w-8 text-sky" />
              </div>
              <CardTitle className="text-2xl font-bold font-headline">Interaktívny poradca</CardTitle>
              <CardDescription className="text-rocket">Pomôžem vám nájsť to pravé riešenie.</CardDescription>
            </CardHeader>
            <CardContent className="min-h-[250px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {renderStep()}
                </AnimatePresence>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-end gap-4">
              {step === 'result' ? (
                <>
                    <Button variant="ghost" onClick={handleReset} className="w-full sm:w-auto text-moon hover:text-light">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Skúsiť znova
                    </Button>
                    <Button asChild size="lg" className="w-full sm:w-auto bg-sky hover:bg-night-sky">
                         <Link href={recommendation?.href || '/contact'}>
                            {recommendation?.ctaText}
                            <ArrowRight className="ml-2 h-4 w-4" />
                         </Link>
                    </Button>
                </>
              ) : (
                <Button size="lg" onClick={handleNext} disabled={isNextDisabled()} className="w-full sm:w-auto bg-sky hover:bg-night-sky">
                    Pokračovať
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
