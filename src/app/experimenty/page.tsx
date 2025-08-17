
'use client';

import { Suspense } from 'react';

export default function ExperimentsPage() {
  return (
    <div className="w-full min-h-screen bg-background flex items-center justify-center">
       <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tighter md:text-6xl font-headline text-foreground">
                Laboratórium Experimentov
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-foreground/70 text-balance">
                Tento priestor je pripravený pre budúce statické vizuálne experimenty.
            </p>
       </div>
    </div>
  );
}
