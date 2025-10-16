
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
import { Loader2, Wand2, AlertCircle, Copy, Sparkles, Link as LinkIcon, Key } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  generateMetaDescription,
  GenerateMetaDescriptionOutput,
} from '@/ai/flows/generate-meta-description-flow';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { motion } from 'framer-motion';

const ResultCard = ({ description, onCopy }: { description: string, onCopy: (text: string) => void }) => {
    return (
        <div className="p-4 bg-space-grey/50 rounded-lg border border-spaceship flex items-center justify-between gap-4">
            <p className="text-light text-balance">{description}</p>
            <Button variant="ghost" size="icon" onClick={() => onCopy(description)} aria-label="Skopírovať popis">
                <Copy className="h-5 w-5 text-aurora" />
            </Button>
        </div>
    )
}

export default function MetaGeneratorPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [keywords, setKeywords] = useState('');
  const [analysisResult, setAnalysisResult] = useState<GenerateMetaDescriptionOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!url.trim() || !keywords.trim()) {
      toast({
        variant: 'destructive',
        title: 'Vstupy sú povinné',
        description: 'Prosím, zadajte URL adresu aj kľúčové slová.',
      });
      return;
    }
    
    let fullUrl = url;
    if (!/^https?:\/\//i.test(url)) {
        fullUrl = 'https://' + url;
    }
    try {
        new URL(fullUrl); 
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
      const result = await generateMetaDescription({ url: fullUrl, keywords });
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
        title: "Popis skopírovaný!",
        description: "Môžete ho vložiť do vášho CMS systému.",
    });
  };

  return (
    <main className="container mx-auto px-4 py-24 sm:py-32">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline">
            AI Generátor Meta Popisov
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-rocket text-balance">
            Zadajte URL a kľúčové slová a naša AI pre vás vytvorí 3 unikátne, SEO-friendly meta popisy, ktoré zaujmú vo výsledkoch vyhľadávania.
          </p>
        </div>

        <Card className="w-full max-w-2xl bg-galaxy border-spaceship">
          <CardContent className="pt-6 space-y-4">
             <div className="grid w-full gap-2">
                <div className="relative">
                    <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-rocket" />
                    <Input
                    placeholder="Zadajte URL adresu, napr. https://vasastranka.sk/sluzby"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="pl-10 bg-space-grey border-spaceship focus:ring-aurora"
                    aria-label="URL adresa stránky"
                    />
                </div>
                 <div className="relative">
                    <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-rocket" />
                    <Input
                    placeholder="Hlavné kľúčové slová, napr. SEO, marketing, PWA"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    className="pl-10 bg-space-grey border-spaceship focus:ring-aurora"
                    aria-label="Hlavné kľúčové slová"
                    />
                </div>
              </div>
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
                    Generujem...
                  </>
                ) : (
                  <>
                    <Wand2 />
                    Generovať Meta Popisy
                  </>
                )}
              </Button>
          </CardContent>
        </Card>

        <div className="w-full max-w-2xl min-h-[250px]">
          {isLoading && (
              <motion.div 
                className="flex flex-col items-center justify-center h-64 rounded-lg border border-dashed border-spaceship bg-galaxy/50 backdrop-blur-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                >
                 <Loader2 className="h-12 w-12 animate-spin text-sky mb-4" />
                 <p className="text-rocket">AI analyzuje obsah stránky a tvorí popisky...</p>
                 <p className="text-sm text-rocket/80">(Môže to chvíľu trvať)</p>
              </motion.div>
           )}
          {error && (
             <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Chyba pri Generovaní</AlertTitle>
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
                        <CardTitle className="text-xl font-semibold text-center text-light flex items-center justify-center gap-2">
                            <Sparkles className="text-aurora" />
                            Vygenerované Meta Popisy
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                       {analysisResult.descriptions.map((desc, index) => (
                           <ResultCard key={index} description={desc} onCopy={handleCopy} />
                       ))}
                    </CardContent>
                </Card>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
