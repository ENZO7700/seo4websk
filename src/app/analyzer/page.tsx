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
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  analyzeHeadline,
  AnalyzeHeadlineOutput,
} from '@/ai/flows/analyze-headline-flow';
import { Progress } from '@/components/ui/progress';

export default function AnalyzerPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [headline, setHeadline] = useState('');
  const [analysisResult, setAnalysisResult] =
    useState<AnalyzeHeadlineOutput | null>(null);

  const handleAnalyze = async () => {
    if (!headline.trim()) {
      toast({
        variant: 'destructive',
        title: 'Input Required',
        description: 'Please enter a headline to analyze.',
      });
      return;
    }
    setIsLoading(true);
    setAnalysisResult(null);
    try {
      const result = await analyzeHeadline({ headline });
      setAnalysisResult(result);
    } catch (error) {
      console.error('Failed to analyze headline:', error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with the AI. Please try again.',
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
            SEO Headline Analyzer
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/70 text-balance">
            Get instant feedback on your headlines. Our AI will analyze your
            title for SEO effectiveness and give you actionable suggestions.
          </p>
        </div>

        <Card className="w-full max-w-2xl bg-card/50 backdrop-blur-lg">
          <CardContent className="pt-6">
            <div className="grid w-full gap-2">
              <Textarea
                placeholder="Enter your headline here..."
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                className="min-h-[100px]"
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
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Wand2 />
                    Analyze Headline
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="w-full max-w-2xl min-h-[150px]">
          {analysisResult && (
            <Card className="bg-card/50 backdrop-blur-lg animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">
                  Analysis Complete
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium text-muted-foreground">SEO Score</p>
                    <p className="text-lg font-bold text-primary">{analysisResult.score}/100</p>
                  </div>
                  <Progress value={analysisResult.score} />
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
