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
import { Loader2, Wand2, AlertCircle, Download, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generateImage } from '@/ai/flows/generate-image-flow';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ImageGeneratorPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [imageDataUri, setImageDataUri] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        variant: 'destructive',
        title: 'Vstup je povinný',
        description: 'Prosím, zadajte popis obrázku, ktorý chcete vygenerovať.',
      });
      return;
    }
    setIsLoading(true);
    setImageDataUri(null);
    setError(null);
    try {
      const result = await generateImage({ prompt });
      setImageDataUri(result.imageDataUri);
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
            AI Generátor Obrázkov
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/70 text-balance">
            Popíšte svoju predstavu a naša umelá inteligencia pre vás vytvorí unikátny, fotorealistický obrázok.
          </p>
        </div>

        <Card className="w-full max-w-2xl bg-galaxy border-spaceship">
          <CardContent className="pt-6">
            <div className="grid w-full gap-2">
              <Textarea
                placeholder="Napríklad: astronaut na surfe v kozme, digitálne umenie..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[100px] bg-space-grey border-spaceship focus:ring-aurora"
                aria-label="Textové pole pre zadanie popisu obrázku"
              />
              <Button
                size="lg"
                onClick={handleGenerate}
                disabled={isLoading}
                className="w-full bg-sky hover:bg-night-sky"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Generujem...
                  </>
                ) : (
                  <>
                    <Wand2 />
                    Generovať Obrázok
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="w-full max-w-2xl min-h-[256px]">
          {error && (
             <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Chyba pri Generovaní</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
           {isLoading && (
              <motion.div 
                className="flex flex-col items-center justify-center h-64 rounded-lg border border-dashed border-spaceship bg-galaxy/50 backdrop-blur-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                >
                 <Loader2 className="h-12 w-12 animate-spin text-sky mb-4" />
                 <p className="text-rocket">AI práve tvorí vaše majstrovské dielo...</p>
                 <p className="text-sm text-rocket/80">(Môže to trvať aj minútu)</p>
              </motion.div>
           )}
          {imageDataUri && (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="overflow-hidden bg-galaxy border-spaceship">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-center text-light">
                    Váš obrázok je hotový!
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="aspect-video relative w-full rounded-md overflow-hidden border border-spaceship">
                        <Image 
                            src={imageDataUri}
                            alt={prompt}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <Button asChild size="lg" className="w-full bg-sky hover:bg-night-sky">
                        <a href={imageDataUri} download={`ai-image-${Date.now()}.png`}>
                            <Download />
                            Stiahnuť Obrázok
                        </a>
                    </Button>
                </CardContent>
                </Card>
            </motion.div>
          )}
          {!isLoading && !imageDataUri && !error && (
            <div className="flex flex-col items-center justify-center h-64 rounded-lg border border-dashed border-spaceship bg-galaxy/50 backdrop-blur-lg">
               <ImageIcon className="h-16 w-16 text-spaceship mb-4" />
               <p className="text-rocket">Tu sa zobrazí váš vygenerovaný obrázok.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
