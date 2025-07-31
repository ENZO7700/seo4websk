
'use client';

import { useState, useEffect } from 'react';
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
  const [result, setResult] = useState<(typeof segments)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures the component only renders on the client, preventing hydration mismatches.
    setIsClient(true);
  }, []);

  const spinWheel = () => {
    if (isSpinning || !isClient) return;
    setIsSpinning(true);
    setResult(null);

    // This logic is now safely on the client side
    const randomSegment = Math.floor(Math.random() * segments.length);
    const segmentAngle = 360 / segments.length;
    // Add a bit of randomness to where it lands within the segment
    const randomAngleWithinSegment = Math.random() * (segmentAngle - 10) + 5; 
    
    // Add multiple full rotations for a better spinning effect
    const fullRotations = 10 * 360; 
    const targetRotation =
      fullRotations + (360 - (randomSegment * segmentAngle + randomAngleWithinSegment));

    setRotation(targetRotation);

    // Wait for the animation to finish before showing the result
    setTimeout(() => {
      setIsSpinning(false);
      setResult(segments[randomSegment]);
      setIsModalOpen(true);
    }, 8000); // This duration should match the CSS transition duration
  };
  
  if (!isClient) {
    // Render nothing or a placeholder on the server
    return null;
  }

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

        <div className="relative flex flex-col items-center justify-center select-none">
            {/* Pointer */}
             <div className="absolute -top-4 z-20 h-8 w-8 drop-shadow-lg">
                 <div style={{
                    clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
                 }} className="h-8 w-8 bg-primary transform-gpu"></div>
            </div>

            {/* Wheel */}
            <div
                className="relative h-80 w-80 rounded-full border-8 border-primary/50 shadow-2xl transition-transform duration-[8000ms] ease-in-out"
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                <div className="absolute inset-0 h-full w-full rounded-full overflow-hidden">
                    {segments.map((segment, index) => {
                        const angle = (360 / segments.length) * index;
                        const skewY = 90 - (360 / segments.length);
                        const segmentAngle = 360 / segments.length;
                        return (
                            <div
                                key={index}
                                className={cn(
                                    "absolute h-1/2 w-1/2 origin-bottom-right",
                                    segment.color
                                )}
                                style={{
                                    transform: `rotate(${angle}deg) skewY(-${skewY}deg)`,
                                }}
                            >
                                <div 
                                    className="flex flex-col items-center justify-center text-white text-xs font-bold text-center"
                                    style={{
                                      transform: `skewY(${skewY}deg) rotate(${segmentAngle / 2}deg)`,
                                      position: 'absolute',
                                      top: '20px',
                                      left: '20px',
                                      textAlign: 'center',
                                      width: '100px',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'center',
                                      gap: '4px',
                                    }}
                                >
                                    {segment.icon}
                                    <span className="block">{segment.text}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
            {/* Spin Button */}
            <button
                onClick={spinWheel}
                disabled={isSpinning}
                className="absolute z-10 flex items-center justify-center h-24 w-24 rounded-full bg-background border-4 border-primary text-primary font-bold text-xl uppercase tracking-wider shadow-lg transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSpinning ? '...' : 'Točiť'}
            </button>
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
                <AlertDialogFooter className="sm:justify-center">
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
