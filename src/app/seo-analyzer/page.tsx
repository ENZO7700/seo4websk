
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
import { Loader2, Search, Wand2, AlertCircle, FileText, ListChecks, Goal, Code } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  advancedSeoAudit,
  AdvancedSeoAuditOutput,
} from '@/ai/flows/advanced-seo-audit-flow';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';

const CodeSnippet = ({ title, code, lang }: { title: string, code: string, lang: string }) => (
    <div className="mb-4">
        <h4 className="font-semibold mb-2 text-light">{title}</h4>
        <pre className="bg-space-grey p-4 rounded-md overflow-x-auto text-sm text-moon">
            <code className={`language-${lang}`}>{code.trim()}</code>
        </pre>
    </div>
);

export default function SeoAnalyzerPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState<AdvancedSeoAuditOutput | null>(
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
    try {
        // Simple regex to check for protocol and some domain characters
        if (!/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(url)) {
             throw new Error("Neplatný formát URL");
        }
        // Ensure it starts with http:// or https:// for the fetch to work
        let fullUrl = url;
        if (!/^https?:\/\//i.test(url)) {
            fullUrl = 'https://' + url;
        }
        new URL(fullUrl); // This will throw if the URL is truly invalid
        setUrl(fullUrl); // Update state with the corrected URL
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
      const result = await advancedSeoAudit({ url });
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
            Pokročilý SEO Audit
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-rocket text-balance">
            Zadajte doménu a získajte hĺbkový audit hlavnej stránky a dvoch podstránok, vrátane konkrétnych odporúčaní a úryvkov kódu na opravu.
          </p>
        </div>

        <Card className="w-full max-w-2xl bg-galaxy border-spaceship">
          <CardContent className="pt-6">
            <div className="grid w-full gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-rocket" />
                <Input
                  placeholder="Zadajte URL adresu, napr. https://google.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-10 bg-space-grey border-spaceship focus:ring-aurora"
                  aria-label="URL adresa webovej stránky"
                  onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                />
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
                    Auditujem...
                  </>
                ) : (
                  <>
                    <Wand2 />
                    Spustiť Audit
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="w-full max-w-4xl min-h-[250px]">
          {isLoading && (
              <motion.div 
                className="flex flex-col items-center justify-center h-64 rounded-lg border border-dashed border-spaceship bg-galaxy/50 backdrop-blur-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                >
                 <Loader2 className="h-12 w-12 animate-spin text-sky mb-4" />
                 <p className="text-rocket">AI práve analyzuje váš web...</p>
                 <p className="text-sm text-rocket/80">(Môže to trvať aj minútu, analyzujem 3 stránky)</p>
              </motion.div>
           )}
          {error && (
             <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Chyba Auditu</AlertTitle>
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
                        Výsledky SEO Auditu
                        </CardTitle>
                        <CardDescription className="text-center truncate text-rocket">
                            Pre: {url}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="summary" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-space-grey border-spaceship">
                                <TabsTrigger value="summary"><FileText className="mr-2 h-4 w-4" />Súhrn</TabsTrigger>
                                <TabsTrigger value="wins"><ListChecks className="mr-2 h-4 w-4" />Top 10</TabsTrigger>
                                <TabsTrigger value="plan"><Goal className="mr-2 h-4 w-4" />Plán Opráv</TabsTrigger>
                                <TabsTrigger value="snippets"><Code className="mr-2 h-4 w-4" />Kód</TabsTrigger>
                            </TabsList>
                            <TabsContent value="summary" className="pt-6">
                                <div className="prose dark:prose-invert max-w-none text-light" dangerouslySetInnerHTML={{ __html: analysisResult.summary.replace(/\n/g, '<br />') }} />
                            </TabsContent>
                             <TabsContent value="wins" className="pt-6">
                                <div className="prose dark:prose-invert max-w-none text-light" dangerouslySetInnerHTML={{ __html: analysisResult.top10QuickWins.replace(/\n/g, '<br />') }} />
                            </TabsContent>
                             <TabsContent value="plan" className="pt-6">
                                <div className="prose dark:prose-invert max-w-none text-light" dangerouslySetInnerHTML={{ __html: analysisResult.fixPlan.replace(/\n/g, '<br />') }} />
                            </TabsContent>
                            <TabsContent value="snippets" className="pt-6">
                                <CodeSnippet title="Canonical" code={analysisResult.snippets.canonical} lang="html" />
                                <CodeSnippet title="Preload Hero Image" code={analysisResult.snippets.preloadHero} lang="html" />
                                <CodeSnippet title="JSON-LD (Organization & WebSite)" code={analysisResult.snippets.jsonLd} lang="json" />
                                <CodeSnippet title="Security Headers (Nginx & Meta)" code={analysisResult.snippets.securityHeaders} lang="nginx" />
                                <CodeSnippet title="OpenGraph & Twitter Cards" code={analysisResult.snippets.openGraph} lang="html" />
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
