"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Orbit,
  MousePointerClick,
  TabletSmartphone,
  Layers,
  ArrowRight,
  Sparkles,
  Users,
  Feather,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AetherFlowLogo } from "@/components/icons/logo";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "Parallax Panning",
    description:
      "Engaging parallax scrolling effects with configurable intensity for a dynamic and immersive experience.",
  },
  {
    icon: <Orbit className="h-8 w-8 text-primary" />,
    title: "Animated Transitions",
    description:
      "Smooth, animated transitions between application states for a psychologically pleasing user experience.",
  },
  {
    icon: <MousePointerClick className="h-8 w-8 text-primary" />,
    title: "Micro-Interactions",
    description:
      "Real-time feedback through micro-interactions on UI elements, enhancing user engagement and delight.",
  },
  {
    icon: <TabletSmartphone className="h-8 w-8 text-primary" />,
    title: "Responsive Layout",
    description:
      "A fluid and adaptive interface that provides a seamless experience across all devices and screen sizes.",
  },
];

const Shape1 = ({ style }: { style: React.CSSProperties }) => (
  <svg
    style={style}
    className="absolute top-1/4 left-1/4 h-1/2 w-1/2 text-primary/10"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M40.3,-68.1C52.1,-60.9,61.4,-49.8,68.7,-37.1C76,-24.4,81.3,-10,80.8,3.9C80.3,17.8,74.1,31.2,65.3,42.4C56.5,53.7,45.2,62.8,32.7,69.5C20.2,76.2,6.5,80.5,-6.9,80.9C-20.3,81.3,-33.5,77.7,-46.1,70.1C-58.7,62.5,-70.6,50.8,-76.9,37.3C-83.1,23.8,-83.7,8.4,-79.8,-5.5C-75.9,-19.4,-67.6,-31.8,-57.8,-41.2C-48,-50.6,-36.7,-57.1,-25.2,-62.7C-13.6,-68.3,-1.9,-73,10.6,-74.9C23.1,-76.7,35.4,-75.4,40.3,-68.1Z"
      transform="translate(100 100)"
    />
  </svg>
);

const Shape2 = ({ style }: { style: React.CSSProperties }) => (
  <svg
    style={style}
    className="absolute right-0 top-1/2 h-1/2 w-1/2 text-accent/10"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M59.3,-58.5C73.8,-45.9,80.5,-26.3,79,-8.5C77.4,9.3,67.6,25.3,55.1,39.4C42.7,53.5,27.6,65.7,9.7,70C-8.2,74.3,-28.9,70.7,-43.3,60.2C-57.8,49.7,-66,32.3,-70.6,13.7C-75.2,-4.8,-76.3,-24.5,-67.8,-39.1C-59.4,-53.7,-41.5,-63.2,-25.1,-67.2C-8.8,-71.2,6,-69.7,20.8,-69.1C35.6,-68.5,50.3,-68.8,59.3,-58.5Z"
      transform="translate(100 100)"
    />
  </svg>
);

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Shortened splash screen time

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div className="animate-pulse">
          <AetherFlowLogo className="h-24 w-24" />
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <div className="pointer-events-none fixed top-0 left-0 z-0 h-full w-full">
        <Shape1
          style={{
            transform: `translateY(${
              scrollY * 0.3
            }px) rotate(${scrollY * 0.05}deg)`,
          }}
        />
        <Shape2
          style={{
            transform: `translateY(${
              scrollY * 0.5
            }px) rotate(-${scrollY * 0.05}deg)`,
          }}
        />
      </div>

      <main className="relative z-10">
        <section
          id="hero"
          className="flex min-h-screen flex-col items-center justify-center px-4 text-center"
        >
          <div className="absolute inset-0 -z-10 bg-background/50 backdrop-blur-sm"></div>
          <h1
            className="animate-fade-in-up bg-gradient-to-br from-primary from-30% to-accent bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl font-headline"
            style={{ animationDelay: "0.2s" }}
          >
            AetherFlow
          </h1>
          <p
            className="mt-4 max-w-2xl animate-fade-in-up text-lg text-foreground/80 md:text-xl text-balance"
            style={{ animationDelay: "0.4s" }}
          >
            Experience the future of web. AetherFlow combines cutting-edge
            technology with breathtaking design to create a seamless,
            futuristic digital experience.
          </p>
          <div
            className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button size="lg" asChild>
              <a href="#features">
                Explore Features
                <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                toast({
                  title: "Let's Get Started!",
                  description:
                    "Welcome to AetherFlow. We're excited to have you.",
                });
              }}
            >
              Get Started
            </Button>
          </div>
        </section>

        <section id="features" className="bg-background/80 backdrop-blur-lg py-20 px-4 sm:py-32">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline animate-fade-in-up">
                Built for the Future
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70 text-balance animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Our platform is packed with features designed to provide a
                modern, interactive, and visually stunning user experience.
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
                alt="About AetherFlow"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl shadow-primary/10"
                data-ai-hint="abstract technology"
              />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline">
                Crafted with Passion
              </h2>
              <p className="mt-4 text-lg text-foreground/70 text-balance">
                AetherFlow was born from a desire to blend art with technology, creating web experiences that are not only functional but also deeply engaging and memorable. We believe in the power of great design to tell a story and connect with users on an emotional level.
              </p>
              <div className="mt-6 flex gap-8">
                <div>
                  <Sparkles className="h-6 w-6 text-primary" />
                  <h3 className="mt-2 text-lg font-bold">Innovation</h3>
                  <p className="text-sm text-muted-foreground">Pushing boundaries of what's possible.</p>
                </div>
                <div>
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="mt-2 text-lg font-bold">User-Centric</h3>
                  <p className="text-sm text-muted-foreground">Intuitive and accessible for everyone.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}