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
import { Input } from '@/components/ui/input';
import { Loader2, Search, Wand2, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  analyzeSeo,
  AnalyzeSeoOutput,
} from '@/ai/flows/analyze-seo-flow';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function SeoAnalyzerPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState<AnalyzeSeoOutput | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!url.trim()) {
      toast({
        variant: 'destructive',
        title: 'Vstup je povinný',
        description: 'Prosím, zadajte URL adresu na analýzu.',
      });
      return;
    }
    // Basic URL validation
    try {
        new URL(url);
    } catch (_) {
         toast({
            variant: 'destructive',
            title: 'Neplatná URL',
            description: 'Prosím, zadajte platnú URL adresu (napr. https://google.com).',
        });
        return;
    }

    setIsLoading(true);
    setAnalysisResult(null);
    setError(null);

    try {
      const result = await analyzeSeo({ url });
      setAnalysisResult(result);
    } catch (err) {
      console.error('Nepodarilo sa analyzovať SEO:', err);
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

  return (
    <main className="container mx-auto px-4 py-24 sm:py-32">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline">
            Hĺbkový SEO Analyzátor
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/70 text-balance">
            Vykonajte hĺbkovú SEO analýzu vašej webovej stránky. Zistite, či sú vaše stránky optimalizované, a ak nie, získajte užitočné údaje.
          </p>
        </div>

        <Card className="w-full max-w-2xl bg-card/50 backdrop-blur-lg">
          <CardContent className="pt-6">
            <div className="grid w-full gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Zadajte URL adresu webovej stránky, napr. https://google.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-10"
                  aria-label="URL adresa webovej stránky"
                  onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                />
              </div>
              <Button
                size="lg"
                onClick={handleAnalyze}
                disabled={isLoading}
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
                    Analyzovať Stránku
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="w-full max-w-2xl min-h-[150px]">
          {error && (
             <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Chyba Analýzy</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {analysisResult && (
            <Card className="bg-card/50 backdrop-blur-lg animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">
                  Výsledky SEO Analýzy
                </CardTitle>
                 <CardDescription className="text-center truncate">
                    Pre: {url}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium text-muted-foreground">Celkové SEO Skóre</p>
                    <p className="text-lg font-bold text-primary">{analysisResult.score}/100</p>
                  </div>
                  <Progress value={analysisResult.score} aria-label={`SEO skóre: ${analysisResult.score} zo 100`} />
                </div>
                
                <div className="space-y-4 text-left">
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Titulok stránky</h3>
                        <p className="text-muted-foreground p-3 bg-muted rounded-md">{analysisResult.title}</p>
                    </div>
                     <div>
                        <h3 className="font-semibold text-lg mb-2">Meta Popis</h3>
                        <p className="text-muted-foreground p-3 bg-muted rounded-md">{analysisResult.description || "Žiadny meta popis nebol nájdený."}</p>
                    </div>
                     <div>
                        <h3 className="font-semibold text-lg mb-2">Štruktúra Nadpisov</h3>
                        <div className="p-3 bg-muted rounded-md space-y-2">
                            {analysisResult.headings.length > 0 ? analysisResult.headings.map((h, i) => (
                                <div key={i} className="flex items-baseline">
                                    <span className="font-bold text-primary w-8">{h.level}:</span>
                                    <p className="text-muted-foreground">{h.text}</p>
                                </div>
                            )) : <p className="text-muted-foreground">Žiadne nadpisy neboli nájdené.</p>}
                        </div>
                    </div>
                </div>

                <div
                  className="prose prose-sm dark:prose-invert text-left text-balance max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: analysisResult.analysis.replace(/\n/g, '<br />'),
                  }}
                />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}
