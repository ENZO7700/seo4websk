
'use client';

import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const quotes = [
    "Houston, máme... ďalšieho návštevníka!",
    "Jeden malý klik pre človeka, jeden veľký skok pre mňa.",
    "Pozor, môj jetpack je trochu náladový.",
    "Som expert na SEO... Space Exploration Officer.",
    "Vidím odtiaľto vašu pozíciu na Google. Treba ju vylepšiť!",
    "Vo vesmíre nikto nepočuje váš krik... ale moje vtipy áno.",
    "Smerujem ku hviezdam, alebo len k ďalšiemu okraju obrazovky?",
    "Toto je lepšie ako ranná káva."
];


export function FloatingAstronaut() {
  const controls = useAnimation();
  const [currentQuote, setCurrentQuote] = useState<string | null>(null);
  const quoteTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startFloatingAnimation = (x: number, y: number) => {
    controls.start({
      x: [x, x + 10, x - 10, x],
      y: [y, y + 20, y - 20, y],
      rotate: [-15, 15],
      transition: {
        duration: 25,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      },
    });
  };

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    const initialX = innerWidth / 4;
    const initialY = innerHeight / 4;
    startFloatingAnimation(initialX, initialY);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const handleJump = () => {
    controls.stop(); 

    if (quoteTimeoutRef.current) {
        clearTimeout(quoteTimeoutRef.current);
    }
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);

    quoteTimeoutRef.current = setTimeout(() => {
        setCurrentQuote(null);
    }, 5000);


    const { innerWidth, innerHeight } = window;
    const astronautSize = 192; 

    const newX = Math.random() * (innerWidth - astronautSize);
    const newY = Math.random() * (innerHeight - astronautSize);
    
    controls.start({
        x: newX,
        y: newY,
        rotate: Math.random() * 360 - 180,
        transition: { type: 'spring', stiffness: 150, damping: 20 },
    }).then(() => {
        startFloatingAnimation(newX, newY);
    });
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <motion.div
         className="absolute top-0 left-0 h-48 w-48 cursor-pointer pointer-events-auto"
         onClick={handleJump}
         animate={controls}
         initial={{ rotate: -15 }}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
        >
        <AnimatePresence>
            {currentQuote && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-48 bg-background border text-foreground rounded-lg p-2 text-center text-sm shadow-xl"
                >
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-border" />
                    {currentQuote}
                </motion.div>
            )}
        </AnimatePresence>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="h-full w-full drop-shadow-2xl"
            aria-hidden="true"
        >
            <g transform="translate(10, 10)">
            {/* Main Body */}
            <path
                d="M100,50 C40,50 40,130 100,130 C160,130 160,50 100,50 Z"
                fill="#E0E0E0"
                stroke="#BDBDBD"
                strokeWidth="4"
            />
            {/* Visor */}
            <path
                d="M70,75 C70,60 130,60 130,75 C130,95 70,95 70,75 Z"
                fill="#212121"
            />
            {/* Visor Reflection */}
            <path
                d="M80,73 Q90,68 115,73"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinecap="round"
            />
            {/* Legs */}
            <path
                d="M80,125 C70,150 75,160 80,160"
                fill="none"
                stroke="#BDBDBD"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <path
                d="M120,125 C130,150 125,160 120,160"
                fill="none"
                stroke="#BDBDBD"
                strokeWidth="4"
                strokeLinecap="round"
            />
            {/* Arms */}
            <motion.path
                d="M50,90 C30,80 20,100 40,110"
                fill="none"
                stroke="#BDBDBD"
                strokeWidth="4"
                strokeLinecap="round"
                animate={{
                    d: ["M50,90 C30,80 20,100 40,110", "M50,90 C35,85 25,105 40,110", "M50,90 C30,80 20,100 40,110"]
                }}
                 transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut'
                 }}
            />
             <motion.path
                d="M150,90 C170,80 180,100 160,110"
                fill="none"
                stroke="#BDBDBD"
                strokeWidth="4"
                strokeLinecap="round"
                 animate={{
                    d: ["M150,90 C170,80 180,100 160,110", "M150,90 C165,85 175,105 160,110", "M150,90 C170,80 180,100 160,110"]
                }}
                 transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut'
                 }}
            />
            {/* Backpack */}
            <rect
                x="30"
                y="80"
                width="25"
                height="40"
                rx="5"
                fill="#BDBDBD"
                stroke="#9E9E9E"
                strokeWidth="3"
            />
            </g>
        </svg>
        </motion.div>
    </div>
  );
}
