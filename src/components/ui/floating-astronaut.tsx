
'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import LottiePlayer from './lottie-player';
import astronautAnimation from '@/animations/astronaut.json';

interface FloatingAstronautProps {
  scrollYProgress: MotionValue<number>;
}

const FloatingAstronaut = ({ scrollYProgress }: FloatingAstronautProps) => {
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '150%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.8, 1],
    [1, 1.2, 0.8, 0.5]
  );

  return (
    <motion.div
      className="absolute -z-10 h-auto w-48 opacity-80 md:w-64"
      style={{ y, rotate, scale }}
      initial={{ y: '-20%', opacity: 0, scale: 0.5 }}
      animate={{
        y: ['-20%', '-15%', '-20%'],
        opacity: 0.8,
        scale: 1,
      }}
      transition={{
        y: {
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        },
        opacity: { duration: 1, delay: 0.5 },
        scale: { duration: 1, delay: 0.5 },
      }}
    >
      <LottiePlayer animationData={astronautAnimation} />
    </motion.div>
  );
};

export default FloatingAstronaut;
