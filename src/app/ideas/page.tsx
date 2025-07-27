
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Loader2, Wand2 } from "lucide-react";
import { generateIdea } from "@/ai/flows/generate-idea-flow";
import { useToast } from "@/hooks/use-toast";

export default function IdeasPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [generatedIdea, setGeneratedIdea] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setGeneratedIdea(null);
    try {
      const result = await generateIdea();
      setGeneratedIdea(result.idea);
    } catch (error) {
      console.error("Failed to generate idea:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with the AI. Please try again.",
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
            Idea Generator
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/70 text-balance">
            Tap into the aether. Generate a unique, futuristic concept with a
            single click.
          </p>
        </div>

        <Button
          size="lg"
          onClick={handleGenerate}
          disabled={isLoading}
          className="min-w-[200px]"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Wand2 />
              Generate Idea
            </>
          )}
        </Button>

        <div className="w-full max-w-2xl min-h-[150px]">
          {generatedIdea && (
            <Card className="bg-card/50 backdrop-blur-lg animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">
                  Your Generated Idea
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-center text-balance text-primary font-medium">
                  "{generatedIdea}"
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}
