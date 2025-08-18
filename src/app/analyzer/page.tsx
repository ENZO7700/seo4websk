
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
import { Loader2, Wand2, AlertCircle, Ear } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  analyzeHeadline,
  AnalyzeHeadlineOutput,
} from '@/ai/flows/analyze-headline-flow';
import { generateAudio } from '@/ai/flows/generate-audio-flow';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { motion } from 'framer-motion';

export default function AnalyzerPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [headline, setHeadline] = useState('');
  const [analysisResult, setAnalysisResult] =
    useState<AnalyzeHeadlineOutput | null>(null);
  const [audioDataUri, setAudioDataUri] = useState<string | null>(null);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
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
    setAudioDataUri(null);
    setError(null);
    try {
      const result = await analyzeHeadline({ headline });
      setAnalysisResult(result);
      
      // Once analysis is done, generate audio
      setIsAudioLoading(true);
      try {
          const audioResult = await generateAudio({ text: result.analysis });
          setAudioDataUri(audioResult.audioDataUri);
      } catch (audioErr) {
          console.error("Audio generation failed:", audioErr);
          // Non-critical error, so we just log it and don't show a blocking error
          toast({
            variant: 'default',
            title: 'Audio sa nepodarilo vygenerovať',
            description: 'Analýza je dostupná v textovej podobe.',
          });
      } finally {
        setIsAudioLoading(false);
      }

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
            SEO Analyzátor Titulkov
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/70 text-balance">
            Získajte okamžitú spätnú väzbu na vaše titulky. Naša AI analyzuje
            váš titulok z pohľadu SEO a poskytne vám praktické návrhy na zlepšenie.
          </p>
        </div>

        <Card className="w-full max-w-2xl">
          <CardContent className="pt-6">
            <div className="grid w-full gap-2">
              <Textarea
                placeholder="Zadajte váš titulok sem..."
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                className="min-h-[100px]"
                aria-label="Textové pole pre zadanie titulku"
              />
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
                    Analyzovať Titulok
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
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-center">
                    Analýza dokončená
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-sm font-medium text-muted-foreground">SEO Skóre</p>
                        <p className="text-lg font-bold text-primary">{analysisResult.score}/100</p>
                    </div>
                    <Progress value={analysisResult.score} aria-label={`SEO skóre: ${analysisResult.score} zo 100`} />
                    </div>

                    {(isAudioLoading || audioDataUri) && (
                    <div className='flex items-center justify-center p-2 bg-muted rounded-md'>
                        {isAudioLoading ? (
                        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>Generujem audio...</span>
                        </div>
                        ) : audioDataUri ? (
                            <div className="flex items-center gap-3 w-full">
                            <Ear className="h-5 w-5 text-primary"/>
                            <audio controls src={audioDataUri} className="w-full h-10">
                                Váš prehliadač nepodporuje audio element.
                            </audio>
                            </div>
                        ) : null}
                    </div>
                    )}

                    <div
                    className="prose prose-sm dark:prose-invert text-left text-balance max-w-none"
                    dangerouslySetInnerHTML={{
                        __html: analysisResult.analysis.replace(/\n/g, '<br />'),
                    }}
                    />
                </CardContent>
                </Card>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
