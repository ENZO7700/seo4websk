
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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
      duration: 0.8,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

export default function HomePage() {
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-space text-light">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-galaxy" />
        <div className="absolute h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(3,12,26,0)_0%,var(--space)_100%)]" />
        <div 
          className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_at_50%_50%,var(--aurora),rgba(56,224,140,0)_60%)] opacity-20"
          style={{ animation: 'aurora-pulse 12s infinite alternate' }}
        />
        <div 
          className="absolute bottom-0 right-[-20%] top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_at_50%_50%,var(--sky),rgba(29,116,246,0)_60%)] opacity-20"
           style={{ animation: 'sky-pulse 15s infinite alternate' }}
        />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl bg-clip-text bg-gradient-to-br from-light/90 via-light to-moon font-headline"
          variants={itemVariants}
        >
          Viditeľnosť, ktorá predáva
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg tracking-tight text-rocket text-balance"
          variants={itemVariants}
        >
          Transformujeme vašu online prítomnosť na merateľné výsledky. S nami
          nebudete len videní – budete nezabudnuteľní.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <Button asChild size="lg" className="w-full sm:w-auto bg-sky hover:bg-night-sky text-light shadow-lg shadow-sky/20">
            <Link href="/seo-audit-akcia">
              <Sparkles className="mr-2" />
              Nechaj si urobiť audit
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-spaceship bg-galaxy/50 text-light hover:bg-space-grey hover:text-light">
            <Link href="/pricing">
              Pozri cenník
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
      <style jsx global>{`
        @keyframes aurora-pulse {
          0% { transform: scale(0.8) translate(20%, -10%); opacity: 0.1; }
          50% { opacity: 0.25; }
          100% { transform: scale(1.2) translate(-10%, 10%); opacity: 0.1; }
        }
        @keyframes sky-pulse {
          0% { transform: scale(0.9) translate(-15%, 15%); opacity: 0.15; }
          50% { opacity: 0.3; }
          100% { transform: scale(1.1) translate(10%, -5%); opacity: 0.15; }
        }
      `}</style>
    </main>
  );
}
