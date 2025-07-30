
'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export function FloatingAstronaut() {
  const controls = useAnimation();
  const [isBouncing, setIsBouncing] = useState(false);
  const astronautRef = useRef<HTMLDivElement>(null);
  const velocityRef = useRef({ x: 0, y: 0 });
  const positionRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef(-15);

  // Set initial position once on mount
  useEffect(() => {
    if (astronautRef.current) {
        const { innerWidth, innerHeight } = window;
        positionRef.current = {
            x: innerWidth / 4,
            y: innerHeight / 4,
        };
        controls.set({
            x: positionRef.current.x,
            y: positionRef.current.y,
            rotate: rotationRef.current
        });
    }
  }, [controls]);
  
  // Handle animation logic
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (isBouncing) {
        // Bouncing logic
        if (astronautRef.current) {
          const { innerWidth, innerHeight } = window;
          const astronautSize = 192; // 12rem = 192px

          positionRef.current.x += velocityRef.current.x;
          positionRef.current.y += velocityRef.current.y;
          
          // Bounce off walls
          if (positionRef.current.x <= 0 || positionRef.current.x >= innerWidth - astronautSize) {
            velocityRef.current.x *= -1;
            rotationRef.current += 30 * Math.sign(velocityRef.current.x);
          }
          if (positionRef.current.y <= 0 || positionRef.current.y >= innerHeight - astronautSize) {
            velocityRef.current.y *= -1;
            rotationRef.current -= 30 * Math.sign(velocityRef.current.y);
          }

          controls.start({
            x: positionRef.current.x,
            y: positionRef.current.y,
            rotate: rotationRef.current,
            transition: { type: 'spring', stiffness: 200, damping: 25, mass: 1 }
          });
        }
      } 
      animationFrameId = requestAnimationFrame(animate);
    };
    
    if (isBouncing) {
        animationFrameId = requestAnimationFrame(animate);
    } else {
       // Gentle floating animation
        controls.start({
            y: [positionRef.current.y, positionRef.current.y + 20, positionRef.current.y],
            rotate: [-15, 15, -15],
            x: [positionRef.current.x, positionRef.current.x + 10, positionRef.current.x],
            transition: {
                duration: 25,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut'
            }
        });
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isBouncing, controls]);


  const startBouncing = () => {
    if (isBouncing) return;
    
    controls.stop();
    
    // Set initial position from the last known animated value
    if(astronautRef.current) {
        const computedStyle = window.getComputedStyle(astronautRef.current);
        const matrix = new DOMMatrix(computedStyle.transform);
        positionRef.current = { x: matrix.e, y: matrix.f };
    }

    velocityRef.current = {
      x: (Math.random() - 0.5) * 15,
      y: (Math.random() - 0.5) * 15,
    };
    
    setIsBouncing(true);
  };


  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <motion.div
         ref={astronautRef}
         className="absolute top-0 left-0 h-48 w-48 cursor-pointer pointer-events-auto"
         onClick={startBouncing}
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
