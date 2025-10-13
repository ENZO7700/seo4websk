
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
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2, AlertCircle, Key, FileText, Check, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  analyzeSemanticRelevance,
  AnalyzeSemanticRelevanceOutput,
} from '@/ai/flows/analyze-semantic-relevance-flow';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

const ResultDisplay = ({ result }: { result: AnalyzeSemanticRelevanceOutput }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="bg-galaxy border-spaceship">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-center text-light flex items-center justify-center gap-2">
          <Sparkles className="text-aurora" />
          Výsledky Analýzy
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium text-rocket">Skóre Sémantickej Relevancie</p>
            <p className="text-lg font-bold text-aurora">{result.relevanceScore}/100</p>
          </div>
          <Progress value={result.relevanceScore} aria-label={`Sémantické skóre: ${result.relevanceScore} zo 100`} />
        </div>

        <div>
            <h4 className="font-semibold text-light mb-2">Stručné Zhodnotenie:</h4>
            <p className="text-rocket text-balance">{result.analysis}</p>
        </div>
        
         <div>
            <h4 className="font-semibold text-light mb-2">Odporúčané Témy na Doplnenie:</h4>
            <ul className="space-y-2">
                {result.suggestedTopics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2 p-2 bg-space-grey/50 rounded-md">
                       <Check className="h-5 w-5 text-aurora mt-0.5 flex-shrink-0"/>
                       <span className="text-moon">{topic}</span>
                    </li>
                ))}
            </ul>
        </div>
        
        <div>
            <h4 className="font-semibold text-light mb-2">Celkový Sentiment Textu:</h4>
            <p className="font-bold text-sky">{result.overallSentiment}</p>
        </div>

      </CardContent>
    </Card>
  </motion.div>
);

export default function SemanticAnalyzerPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [mainKeyword, setMainKeyword] = useState('');
  const [articleText, setArticleText] = useState('');
  const [analysisResult, setAnalysisResult] = useState<AnalyzeSemanticRelevanceOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!mainKeyword.trim() || !articleText.trim()) {
      toast({
        variant: 'destructive',
        title: 'Vstupy sú povinné',
        description: 'Prosím, zadajte kľúčové slovo aj text článku.',
      });
      return;
    }

    setIsLoading(true);
    setAnalysisResult(null);
    setError(null);

    try {
      const result = await analyzeSemanticRelevance({ mainKeyword, articleText });
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

  return (
    <main className="container mx-auto px-4 py-24 sm:py-32">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline">
            AI Analyzátor Sémantickej Relevancie
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-rocket text-balance">
            Zistite, ako dobre váš text pokrýva tému, a získajte návrhy na jeho vylepšenie, aby ste dominovali vo výsledkoch vyhľadávania.
          </p>
        </div>

        <Card className="w-full max-w-2xl bg-galaxy border-spaceship">
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-center text-light">Zadajte vstupy pre analýzu</CardTitle>
            </CardHeader>
          <CardContent className="space-y-4">
             <div className="grid w-full gap-2">
                <div className="relative">
                    <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-rocket" />
                    <Input
                        placeholder="Hlavné kľúčové slovo alebo téma"
                        value={mainKeyword}
                        onChange={(e) => setMainKeyword(e.target.value)}
                        className="pl-10 bg-space-grey border-spaceship focus:ring-aurora"
                        aria-label="Hlavné kľúčové slovo alebo téma"
                    />
                </div>
                <div className="relative">
                     <FileText className="absolute left-3 top-3 h-5 w-5 text-rocket" />
                     <Textarea
                        placeholder="Vložte sem celý text vášho článku..."
                        value={articleText}
                        onChange={(e) => setArticleText(e.target.value)}
                        className="pl-10 bg-space-grey border-spaceship focus:ring-aurora min-h-[200px]"
                        aria-label="Text článku"
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
                    Analyzujem...
                  </>
                ) : (
                  <>
                    <Wand2 />
                    Spustiť Analýzu
                  </>
                )}
              </Button>
          </CardContent>
        </Card>

        <div className="w-full max-w-2xl min-h-[300px]">
           {isLoading && (
              <motion.div 
                className="flex flex-col items-center justify-center h-64 rounded-lg border border-dashed border-spaceship bg-galaxy/50 backdrop-blur-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                >
                 <Loader2 className="h-12 w-12 animate-spin text-sky mb-4" />
                 <p className="text-rocket">AI číta a analyzuje váš text...</p>
                 <p className="text-sm text-rocket/80">(Môže to chvíľu trvať)</p>
              </motion.div>
           )}
          {error && (
             <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Chyba pri Analýze</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {analysisResult && <ResultDisplay result={analysisResult} />}
        </div>
      </div>
    </main>
  );
}
