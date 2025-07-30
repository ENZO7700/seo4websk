
'use client';

import { motion } from 'framer-motion';

export function FloatingAstronaut() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <motion.div
         className="absolute top-1/4 left-1/4 h-48 w-48"
         animate={{
            y: ["-10%", "10%", "-10%"],
            rotate: [-15, 15, -15],
            x: ["-5%", "5%", "-5%"]
         }}
         transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut'
         }}
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
