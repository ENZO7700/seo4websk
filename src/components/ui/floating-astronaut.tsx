
'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export function FloatingAstronaut() {
  const controls = useAnimation();
  const [isBouncing, setIsBouncing] = useState(false);
  const position = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const constraintsRef = useRef<HTMLDivElement>(null);

  const startBouncing = () => {
    if (isBouncing) return;
    
    // Stop the gentle floating animation
    controls.stop();
    setIsBouncing(true);

    // Initial random velocity
    velocity.current = {
      x: (Math.random() - 0.5) * 8,
      y: (Math.random() - 0.5) * 8,
    };
    
    // Set initial position to wherever the astronaut was clicked
    if (constraintsRef.current) {
        const rect = constraintsRef.current.getBoundingClientRect();
        position.current = { x: rect.left, y: rect.top };
    }
  };
  
  useEffect(() => {
    if (!isBouncing) {
      // Gentle floating animation
      controls.start({
        y: ["-10%", "10%", "-10%"],
        rotate: [-15, 15, -15],
        x: ["-5%", "5%", "-5%"],
        transition: {
            duration: 25,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut'
        }
      });
    } else {
        // Bouncing animation logic
        const animate = () => {
            if (constraintsRef.current) {
                const { innerWidth, innerHeight } = window;
                const astronautSize = 192; // 12rem or 192px

                let newX = position.current.x + velocity.current.x;
                let newY = position.current.y + velocity.current.y;
                let newRotation = parseFloat(controls.get('rotate') as string || '0');

                // Bounce off walls
                if (newX <= 0 || newX >= innerWidth - astronautSize) {
                    velocity.current.x *= -1;
                    newRotation += 30 * Math.sign(velocity.current.x);
                }
                if (newY <= 0 || newY >= innerHeight - astronautSize) {
                    velocity.current.y *= -1;
                    newRotation -= 30 * Math.sign(velocity.current.y);
                }
                
                position.current.x = newX;
                position.current.y = newY;

                controls.start({
                    x: position.current.x,
                    y: position.current.y,
                    rotate: newRotation,
                    transition: { type: 'spring', stiffness: 400, damping: 50 }
                });
            }
        };
        const intervalId = setInterval(animate, 16); // roughly 60fps
        return () => clearInterval(intervalId);
    }
  }, [isBouncing, controls]);


  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <motion.div
         ref={constraintsRef}
         className="absolute top-1/4 left-1/4 h-48 w-48 cursor-pointer pointer-events-auto"
         onClick={startBouncing}
         animate={controls}
         initial={{ rotate: -15}}
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
