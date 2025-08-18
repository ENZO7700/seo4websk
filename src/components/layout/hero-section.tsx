
'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import GridPattern from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';

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

export function HeroSection() {
  return (
    <section
      id="hero"
      className={cn(
        "relative flex h-screen min-h-[700px] flex-col items-center justify-center px-4 text-center overflow-hidden",
        "[--theme-color:var(--space)] text-light",
        "bg-[--theme-color]"
      )}
    >
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
            "absolute inset-0 -z-10 h-full w-full",
            "fill-galaxy/50 stroke-spaceship/30 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        )}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 rounded-full p-1 bg-grad-venus"
        >
          <div className="rounded-full bg-galaxy px-4 py-1.5">
            <p className="text-sm font-medium tracking-wide text-transparent bg-grad-venus bg-clip-text">
              Váš Partner pre Digitálny Rast
            </p>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold tracking-tighter text-light sm:text-6xl md:text-7xl lg:text-8xl font-headline"
        >
          Viditeľnosť, ktorá predáva
        </motion.h1>

        <motion.p
          className="mt-6 max-w-3xl text-balance text-lg text-rocket md:text-xl"
          variants={itemVariants}
        >
          Transformujeme vašu online prítomnosť na merateľné výsledky. S nami nebudete len videní – budete nezabudnuteľní.
        </motion.p>
        
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Button size="lg" asChild className="bg-sky hover:bg-night-sky text-light">
              <Link href="/seo-audit-akcia">
                Nechaj si urobiť audit
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button size="lg" variant="outline" asChild className="border-spaceship bg-galaxy/50 text-light hover:bg-space-grey hover:text-light">
              <Link href="/pricing">Pozri cenník</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
