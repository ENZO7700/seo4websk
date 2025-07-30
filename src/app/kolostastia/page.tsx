
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Gift, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const segments = [
  { text: 'SEO Audit Zdarma', color: 'bg-blue-500', icon: <Star /> },
  { text: '10% Zľava na Link Building', color: 'bg-green-500', icon: <Gift /> },
  { text: 'Konzultácia Zadarmo', color: 'bg-yellow-500', icon: <Zap /> },
  { text: 'Analýza Kľúčových Slov', color: 'bg-purple-500', icon: <Star /> },
  { text: '5% Zľava na On-Page SEO', color: 'bg-indigo-500', icon: <Gift /> },
  { text: 'Technická SEO Analýza', color: 'bg-pink-500', icon: <Zap /> },
  { text: 'Bonusový Spätný Odkaz', color: 'bg-red-500', icon: <Star /> },
  { text: 'Zľava na PWA', color: 'bg-teal-500', icon: <Gift /> },
];

export default function WheelOfFortunePage() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<typeof segments[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setResult(null);

    const randomSegment = Math.floor(Math.random() * segments.length);
    const segmentAngle = 360 / segments.length;
    const randomAngleWithinSegment = Math.random() * segmentAngle;
    
    // Add multiple full rotations for visual effect
    const fullRotations = 5 * 360;
    const targetRotation =
      fullRotations + (360 - (randomSegment * segmentAngle + randomAngleWithinSegment));

    setRotation(targetRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setResult(segments[randomSegment]);
      setIsModalOpen(true);
    }, 4000); // Corresponds to the transition duration
  };

  return (
    <>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-24 sm:py-32 text-center overflow-hidden">
        <div className="text-center mb-12">
           <h1 className="text-4xl font-bold tracking-tighter md:text-6xl font-headline">
                Koleso Šťastia
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/80 text-balance">
                Zatočte si a vyhrajte exkluzívne zľavy a bonusy na naše SEO služby. Skúste svoje šťastie ešte dnes!
            </p>
        </div>

        <div className="relative flex flex-col items-center justify-center">
            {/* Pointer */}
             <div className="absolute -top-4 z-10 h-8 w-8">
                 <div className="h-0 w-0 border-x-8 border-x-transparent border-t-[16px] border-t-primary transform-gpu"></div>
            </div>

            {/* Wheel */}
            <div
                className="relative h-80 w-80 rounded-full border-8 border-primary/50 shadow-2xl transition-transform duration-[4000ms] ease-out"
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                {segments.map((segment, index) => {
                    const angle = (360 / segments.length) * index;
                    return (
                        <div
                            key={index}
                            className={cn(
                                "absolute h-1/2 w-1/2 origin-bottom-right transform-gpu flex items-center justify-center",
                                segment.color
                            )}
                            style={{
                                transform: `rotate(${angle}deg)`,
                                clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 0)`
                            }}
                        >
                             <div className="flex flex-col items-center justify-center text-white text-xs font-bold transform -rotate-45 -translate-y-4 text-center">
                                {segment.icon}
                                <span className="mt-1 block w-20">{segment.text}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            
            {/* Spin Button */}
            <Button
                size="lg"
                onClick={spinWheel}
                disabled={isSpinning}
                className="mt-12 w-48 h-16 rounded-full text-xl font-bold shadow-lg"
            >
                {isSpinning ? 'Točí sa...' : 'ZATOČIŤ'}
            </Button>
        </div>

      </main>

       {result && (
        <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl text-center font-bold">Gratulujeme!</AlertDialogTitle>
                <AlertDialogDescription className="text-center text-lg pt-4">
                    Vytočili ste si:
                    <span className="font-bold text-primary block mt-2 text-xl">{result.text}</span>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Button variant="outline" onClick={() => setIsModalOpen(false)}>Zatočiť znova</Button>
                     <Button asChild>
                        <Link href="/contact">Uplatniť Výhru</Link>
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}

