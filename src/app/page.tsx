"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Search,
  FileText,
  Link2,
  Cog,
  ArrowRight,
  Sparkles,
  Users,
} from "lucide-react";
import { Seo4WebLogo } from "@/components/icons/logo";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Keyword Research",
    description:
      "We identify the most valuable keywords to target for your business, driving relevant traffic to your site.",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "On-Page SEO",
    description:
      "Optimizing your content, titles, and meta descriptions to improve rankings and click-through rates.",
  },
  {
    icon: <Link2 className="h-8 w-8 text-primary" />,
    title: "Link Building",
    description:
      "Building high-quality backlinks to your site to increase authority and improve search engine trust.",
  },
  {
    icon: <Cog className="h-8 w-8 text-primary" />,
    title: "Technical SEO",
    description:
      "Ensuring your site is technically sound, fast, and easy for search engines to crawl and index.",
  },
];


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div className="animate-pulse">
          <Seo4WebLogo className="h-24 w-24" />
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <main className="relative z-10">
        <section
          id="hero"
          className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-background/50 backdrop-blur-sm"
        >
          <h1
            className="animate-fade-in-up bg-gradient-to-br from-primary from-30% to-accent bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl font-headline"
            style={{ animationDelay: "0.2s" }}
          >
            seo4web
          </h1>
          <p
            className="mt-4 max-w-2xl animate-fade-in-up text-lg text-foreground/80 md:text-xl text-balance"
            style={{ animationDelay: "0.4s" }}
          >
            Boost your search engine rankings and drive organic traffic. We provide expert SEO strategies tailored for your success.
          </p>
          <div
            className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button size="lg" asChild>
              <a href="#features">
                Explore Services
                <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </section>

        <section id="features" className="bg-background/80 backdrop-blur-lg py-20 px-4 sm:py-32">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline animate-fade-in-up">
                Our Core SEO Services
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70 text-balance animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                We provide a comprehensive suite of SEO services to elevate your online presence from every angle.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="transform border-primary/20 bg-card/50 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up"
                   style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CardHeader>
                    {feature.icon}
                    <CardTitle className="mt-4 text-xl font-semibold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-background py-20 px-4 sm:py-32">
          <div className="container mx-auto grid items-center gap-12 md:grid-cols-2">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Image
                src="https://placehold.co/600x400.png"
                alt="About seo4web"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl shadow-primary/10"
                data-ai-hint="digital marketing team"
              />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline">
                Results-Driven SEO Experts
              </h2>
              <p className="mt-4 text-lg text-foreground/70 text-balance">
                seo4web was founded on the principle of delivering measurable results. We combine data-driven strategies with proven SEO techniques to help your business grow. We believe in building partnerships and are committed to your success.
              </p>
              <div className="mt-6 flex gap-8">
                <div>
                  <Sparkles className="h-6 w-6 text-primary" />
                  <h3 className="mt-2 text-lg font-bold">Data-Driven</h3>
                  <p className="text-sm text-muted-foreground">Decisions backed by data and analytics.</p>
                </div>
                <div>
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="mt-2 text-lg font-bold">Client-Focused</h3>
                  <p className="text-sm text-muted-foreground">Your success is our top priority.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
