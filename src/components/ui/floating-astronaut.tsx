
'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import LottiePlayer from './lottie-player';
import astronautAnimation from '@/animations/astronaut.json';

interface FloatingAstronautProps {
  scrollYProgress: MotionValue<number>;
  mouseX: MotionValue;
  mouseY: MotionValue;
}

const FloatingAstronaut = ({ scrollYProgress, mouseX, mouseY }: FloatingAstronautProps) => {
  // Scroll-based transforms
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '150%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.8, 1],
    [1, 1.2, 0.8, 0.5]
  );
  
  // Mouse-based transforms for 4D effect
  const transformX = useTransform(mouseX, [0, 500], [30, -30]);
  const transformY = useTransform(mouseY, [0, 500], [20, -20]);
  const rotateY = useTransform(mouseX, [0, 500], [-25, 25]);
  const rotateX = useTransform(mouseY, [0, 500], [25, -25]);


  return (
    <motion.div
      className="absolute -z-10 h-auto w-48 opacity-80 md:w-64"
      style={{ 
        y, 
        rotate, 
        scale,
        x: transformX,
        y: transformY,
        rotateY: rotateY,
        rotateX: rotateX,
      }}
      initial={{ y: '-20%', opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 0.8,
        scale: 1,
      }}
      transition={{
        opacity: { duration: 1, delay: 0.5 },
        scale: { duration: 1, delay: 0.5 },
      }}
    >
      <LottiePlayer animationData={astronautAnimation} />
    </motion.div>
  );
};

export default FloatingAstronaut;
