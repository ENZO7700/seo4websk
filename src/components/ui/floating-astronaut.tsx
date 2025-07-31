
'use client';

import Lottie from 'lottie-react';
import astronautAnimation from '@/animations/astronaut.json';
import { motion } from 'framer-motion';

const FloatingAstronaut = () => {
    return (
        <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 z-0"
            animate={{
                y: ["0%", "5%", "0%"],
                rotate: [0, 5, 0],
            }}
            transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror"
            }}
        >
            <Lottie animationData={astronautAnimation} loop={true} />
        </motion.div>
    )
}

export default FloatingAstronaut;
