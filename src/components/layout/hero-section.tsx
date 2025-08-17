
'use client';

import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import GridPattern from '@/components/ui/grid-pattern';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'anticipate',
    },
  },
};

const animatedTextVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
};

const animatedCharVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
};

const heroText = "seo4web";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex h-screen flex-col items-center justify-center px-4 text-center overflow-hidden"
    >
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
      />

      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="group flex cursor-pointer items-center justify-center gap-4"
          variants={itemVariants}
        >
            <motion.h1
                variants={animatedTextVariants}
                className="bg-gradient-to-br from-primary from-30% to-accent bg-clip-text text-5xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-7xl font-headline"
            >
                {heroText.split("").map((char, i) => (
                    <motion.span key={i} variants={animatedCharVariants}>{char}</motion.span>
                ))}
            </motion.h1>
            <Search className="h-10 w-10 text-primary/40 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:-rotate-12 group-hover:text-accent md:h-16 md:w-16" />
        </motion.div>
        <motion.p
          className="mt-4 max-w-2xl text-balance text-lg text-foreground/80 md:text-xl"
          variants={itemVariants}
        >
          Zvýšte svoje pozície vo vyhľadávačoch a získajte organickú
          návštevnosť. Poskytujeme expertné SEO stratégie pre váš úspech.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Button size="lg" asChild>
              <a href="#features">
                Naše Služby
                <ArrowRight className="ml-2" />
              </a>
            </Button>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Bezplatná Konzultácia</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
