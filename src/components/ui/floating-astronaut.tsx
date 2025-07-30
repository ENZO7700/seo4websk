
'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function FloatingAstronaut() {
  const controls = useAnimation();
  const astronautRef = useRef<HTMLDivElement>(null);
  // Use a ref to store the position to avoid re-renders on animation updates
  const positionRef = useRef({ x: 0, y: 0 });

  const startFloatingAnimation = (x: number, y: number) => {
    controls.start({
      x: [x, x + 10, x - 10, x],
      y: [y, y + 20, y - 20, y],
      rotate: [-15, 10, -10, 15, -15],
      transition: {
        duration: 25,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      },
    });
  };

  // Set initial position and start floating
  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    positionRef.current = {
      x: innerWidth / 4,
      y: innerHeight / 4,
    };
    startFloatingAnimation(positionRef.current.x, positionRef.current.y);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const handleJump = () => {
    controls.stop(); // Stop the current floating animation

    const { innerWidth, innerHeight } = window;
    const astronautSize = 192; // 12rem = 192px

    const newX = Math.random() * (innerWidth - astronautSize);
    const newY = Math.random() * (innerHeight - astronautSize);
    
    // Update the ref for the new base position
    positionRef.current = { x: newX, y: newY };

    // Start the jump animation
    controls.start({
        x: newX,
        y: newY,
        rotate: Math.random() * 360 - 180, // A wild rotation for the jump
        transition: { type: 'spring', stiffness: 150, damping: 20 },
    }).then(() => {
        // Once the jump is complete, resume floating at the new position
        startFloatingAnimation(positionRef.current.x, positionRef.current.y);
    });
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <motion.div
         ref={astronautRef}
         className="absolute top-0 left-0 h-48 w-48 cursor-pointer pointer-events-auto"
         onClick={handleJump}
         animate={controls}
         initial={{ rotate: -15 }}
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="h-full w-full"
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
