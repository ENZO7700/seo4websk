
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2, AlertCircle, Ear, Copy, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  analyzeHeadline,
  AnalyzeHeadlineOutput,
} from '@/ai/flows/analyze-headline-flow';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

const ResultCard = ({ title, onCopy }: { title: string, onCopy: (text: string) => void }) => {
    return (
        <div className="p-3 bg-space-grey/50 rounded-lg border border-spaceship flex items-center justify-between gap-2">
            <p className="text-light font-medium text-balance">{title}</p>
            <Button variant="ghost" size="icon" onClick={() => onCopy(title)} aria-label="Skopírovať návrh">
                <Copy className="h-5 w-5 text-aurora" />
            </Button>
        </div>
    )
}

export default function AnalyzerPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [headline, setHeadline] = useState('');
  const [analysisResult, setAnalysisResult] =
    useState<AnalyzeHeadlineOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!headline.trim()) {
      toast({
        variant: 'destructive',
        title: 'Vstup je povinný',
        description: 'Prosím, zadajte titulok na analýzu.',
      });
      return;
    }
    setIsLoading(true);
    setAnalysisResult(null);
    setError(null);
    try {
      const result = await analyzeHeadline({ headline });
      setAnalysisResult(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Vyskytol sa neznámy problém s AI. Skúste to prosím znova.';
      setError(errorMessage);
      toast({
        variant: 'destructive',
        title: 'Nastala chyba!',
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCopy = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    toast({
        title: "Titulok skopírovaný!",
        description: "Môžete ho použiť vo svojom článku.",
    });
  };

  return (
    <main className="container mx-auto px-4 py-24 sm:py-32">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline">
            SEO Analyzátor Titulkov
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-rocket text-balance">
            Získajte okamžitú spätnú väzbu. Naša AI analyzuje váš titulok, ohodnotí ho a navrhne lepšie, klikateľnejšie alternatívy.
          </p>
        </div>

        <Card className="w-full max-w-2xl bg-galaxy border-spaceship">
          <CardContent className="pt-6">
            <div className="grid w-full gap-2">
              <Textarea
                placeholder="Zadajte váš titulok sem..."
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                className="min-h-[100px] bg-space-grey border-spaceship focus:ring-aurora"
                aria-label="Textové pole pre zadanie titulku"
              />
              <Button
                size="lg"
                onClick={handleAnalyze}
                disabled={isLoading}
                variant="cta"
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Analyzujem...
                  </>
                ) : (
                  <>
                    <Wand2 />
                    Analyzovať Titulok
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="w-full max-w-2xl min-h-[150px]">
          {isLoading && (
              <motion.div 
                className="flex flex-col items-center justify-center h-64 rounded-lg border border-dashed border-spaceship bg-galaxy/50 backdrop-blur-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                >
                 <Loader2 className="h-12 w-12 animate-spin text-sky mb-4" />
                 <p className="text-rocket">AI analyzuje a generuje audio...</p>
                 <p className="text-sm text-rocket/80">(Môže to chvíľu trvať)</p>
              </motion.div>
          )}
          {error && (
             <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Chyba Analýzy</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {analysisResult && (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="bg-galaxy border-spaceship">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-center text-light">
                    Analýza dokončená
                    </CardTitle>
                     <CardDescription className="text-center text-rocket">Pre titulok: "{headline}"</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-sm font-medium text-rocket">Celkové SEO Skóre</p>
                        <p className="text-lg font-bold text-aurora">{analysisResult.score}/100</p>
                    </div>
                    <Progress value={analysisResult.score} aria-label={`SEO skóre: ${analysisResult.score} zo 100`} />
                    </div>

                    {analysisResult.audioDataUri && (
                    <div className='flex items-center justify-center p-2 bg-space-grey rounded-md'>
                        <div className="flex items-center gap-3 w-full">
                        <Ear className="h-5 w-5 text-aurora"/>
                        <p className="text-sm text-moon font-medium">Stručné audio zhrnutie:</p>
                        <audio controls src={analysisResult.audioDataUri} className="w-full h-10">
                            Váš prehliadač nepodporuje audio element.
                        </audio>
                        </div>
                    </div>
                    )}
                    
                    <Separator />
                    
                     <div
                        className="prose prose-sm dark:prose-invert text-left text-balance max-w-none text-light"
                        dangerouslySetInnerHTML={{ __html: analysisResult.analysis.replace(/(\*\*.*?\*\*)/g, '<h4>$1</h4>').replace(/\*/g, '<li>') }}
                    />
                    
                    <Separator />
                    
                    <div>
                        <h4 className="font-semibold text-light mb-3 flex items-center gap-2">
                            <Sparkles className="text-aurora"/>
                            Navrhované Alternatívy
                        </h4>
                        <div className="space-y-2">
                            {analysisResult.suggestions.map((suggestion, index) => (
                                <ResultCard key={index} title={suggestion} onCopy={handleCopy}/>
                            ))}
                        </div>
                    </div>
                </CardContent>
                </Card>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
