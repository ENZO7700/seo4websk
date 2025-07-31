
'use client';

import Lottie from 'lottie-react';
import astronautAnimation from '@/animations/astronaut.json';
import { motion } from 'framer-motion';

const FloatingAstronaut = () => {
    return (
        <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 z-0 opacity-70"
            initial={{ y: -20, opacity: 0 }}
            animate={{
                y: [0, 20, 0],
                rotate: [0, 5, -5, 0],
                opacity: 0.7
            }}
            transition={{
                delay: 0.5,
                duration: 2,
                ease: "easeInOut",
                y: {
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                },
                rotate: {
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }
            }}
        >
            <Lottie animationData={astronautAnimation} loop={true} />
        </motion.div>
    )
}

export default FloatingAstronaut;
