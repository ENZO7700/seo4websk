
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import GridPattern from '@/components/ui/grid-pattern';
import FloatingAstronaut from '@/components/ui/floating-astronaut';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const yGrid = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <motion.section
      id="hero"
      ref={targetRef}
      style={{ opacity }}
      className="relative flex h-screen flex-col items-center justify-center px-4 text-center"
    >
      <motion.div
        style={{ y: yGrid, scale }}
        className="absolute inset-0 -z-20"
      >
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          className="[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
        />
      </motion.div>

      <FloatingAstronaut scrollYProgress={scrollYProgress} />

      <motion.div
        style={{ y, scale }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div
          className="group flex cursor-pointer items-center justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="bg-gradient-to-br from-primary from-30% to-accent bg-clip-text text-5xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-7xl font-headline"
          >
            seo4web
          </motion.h1>
          <motion.div variants={itemVariants}>
            <Search className="h-10 w-10 text-primary/40 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:-rotate-12 group-hover:text-accent md:h-16 md:w-16" />
          </motion.div>
        </motion.div>
        <motion.p
          className="mt-4 max-w-2xl text-balance text-lg text-foreground/80 md:text-xl"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          Zvýšte svoje pozície vo vyhľadávačoch a získajte organickú
          návštevnosť. Poskytujeme expertné SEO stratégie pre váš úspech.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial="hidden"
          animate="visible"
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
    </motion.section>
  );
}
