
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
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
  { text: 'SEO Audit Zdarma', color: 'from-blue-500/70 to-blue-800/70', icon: <Star /> },
  { text: '10% Zľava na Link Building', color: 'from-green-500/70 to-green-800/70', icon: <Gift /> },
  { text: 'Konzultácia Zadarmo', color: 'from-yellow-500/70 to-yellow-800/70', icon: <Zap /> },
  { text: 'Analýza Kľúčových Slov', color: 'from-purple-500/70 to-purple-800/70', icon: <Star /> },
  { text: '5% Zľava na On-Page SEO', color: 'from-indigo-500/70 to-indigo-800/70', icon: <Gift /> },
  { text: 'Technická SEO Analýza', color: 'from-pink-500/70 to-pink-800/70', icon: <Zap /> },
  { text: 'Bonusový Spätný Odkaz', color: 'from-red-500/70 to-red-800/70', icon: <Star /> },
  { text: 'Zľava na PWA', color: 'from-teal-500/70 to-teal-800/70', icon: <Gift /> },
];

export default function WheelOfFortunePage() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<(typeof segments)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const spinWheel = () => {
    if (isSpinning || !isClient) return;
    setIsSpinning(true);
    setResult(null);

    const randomSegment = Math.floor(Math.random() * segments.length);
    const segmentAngle = 360 / segments.length;
    const randomAngleWithinSegment = Math.random() * (segmentAngle * 0.8) + (segmentAngle * 0.1); 
    
    const fullRotations = 10 * 360; 
    const targetRotation =
      fullRotations + (360 - (randomSegment * segmentAngle + randomAngleWithinSegment));

    setRotation(targetRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setResult(segments[randomSegment]);
      setIsModalOpen(true);
    }, 8000); 
  };
  
  if (!isClient) {
    return null;
  }

  return (
    <>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-24 sm:py-32 text-center overflow-hidden bg-space text-light">
        <div className="text-center mb-12">
           <h1 className="text-4xl font-bold tracking-tighter md:text-6xl font-headline text-light">
                Koleso Šťastia
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-rocket text-balance">
                Zatočte si a vyhrajte exkluzívne zľavy a bonusy na naše SEO služby. Skúste svoje šťastie ešte dnes!
            </p>
        </div>

        <div className="relative flex flex-col items-center justify-center select-none w-full max-w-[500px]">
            <div className="absolute -top-3 z-20 h-10 w-10 drop-shadow-lg">
                 <div style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }} 
                      className="h-8 w-8 bg-aurora transform-gpu animate-bounce">
                 </div>
            </div>

            <div
                className={cn(
                    "relative h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] rounded-full",
                    "border-8 border-double border-spaceship bg-galaxy shadow-2xl shadow-sky/20",
                    "transition-transform duration-[8000ms] ease-out"
                )}
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                <div className="absolute inset-0 h-full w-full rounded-full overflow-hidden">
                    {segments.map((segment, index) => {
                        const angle = (360 / segments.length) * index;
                        const skewY = 90 - (360 / segments.length);
                        return (
                            <div
                                key={index}
                                className={cn(
                                    "absolute h-1/2 w-1/2 origin-bottom-right bg-gradient-to-tr",
                                    segment.color
                                )}
                                style={{
                                    transform: `rotate(${angle}deg) skewY(-${skewY}deg)`,
                                    borderLeft: '1px solid hsl(var(--spaceship) / 0.5)',
                                }}
                            >
                                <div 
                                    className="flex flex-col items-center justify-start text-white text-xs sm:text-sm font-bold text-center pt-4 sm:pt-6"
                                    style={{
                                      transform: `skewY(${skewY}deg) rotate(${ (360 / segments.length) / 2}deg) translateY(-50%)`,
                                      position: 'absolute',
                                      top: '50%',
                                      left: '10%',
                                      width: '80%',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'center',
                                      gap: '4px',
                                    }}
                                >
                                    <div className="h-6 w-6 sm:h-8 sm:w-8">{segment.icon}</div>
                                    <span className="block max-w-[100px] leading-tight pt-1">{segment.text}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                 <div
                    onClick={spinWheel}
                    role="button"
                    aria-label="Točiť kolesom"
                    className="absolute z-10 flex items-center justify-center h-20 w-20 sm:h-28 sm:w-28 rounded-full bg-space border-4 border-sky text-aurora font-bold text-xl uppercase tracking-wider shadow-lg transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}
                >
                     {isSpinning ? '...' : 'Točiť'}
                </div>
            </div>
            
            <Button
                onClick={spinWheel}
                disabled={isSpinning}
                size="lg"
                className="mt-12 bg-sky hover:bg-night-sky"
            >
                {isSpinning ? 'Veľa šťastia!' : 'Zatočiť Kolesom'}
            </Button>
        </div>
      </main>

       {result && (
        <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <AlertDialogContent className="bg-galaxy border-spaceship text-light">
                <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl text-center font-bold text-aurora flex items-center justify-center gap-2">
                    <Gift /> Gratulujeme!
                </AlertDialogTitle>
                <AlertDialogDescription className="text-center text-lg pt-4 text-rocket">
                    Vytočili ste si:
                    <span className="font-bold text-light block mt-2 text-xl">{result.text}</span>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="sm:justify-center">
                    <Button variant="outline" onClick={() => setIsModalOpen(false)} className="border-spaceship bg-space-grey hover:bg-space-grey/80">Zatočiť znova</Button>
                     <Button asChild className="bg-sky hover:bg-night-sky">
                        <Link href="/contact">Uplatniť Výhru</Link>
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}
