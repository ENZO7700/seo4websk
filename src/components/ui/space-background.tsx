
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const stars: { x: number; y: number; z: number }[] = [];
    const numStars = 500;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * width,
      });
    }

    const draw = () => {
        ctx.fillStyle = 'hsl(var(--background))';
        ctx.fillRect(0, 0, width, height);
    
        for (let i = 0; i < numStars; i++) {
            const star = stars[i];
            const x = (star.x - width / 2) * (width / star.z) + width / 2;
            const y = (star.y - height / 2) * (width / star.z) + height / 2;
            const radius = (width / star.z) / 2;
    
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(var(--primary), ${0.5 + Math.random() * 0.3})`;
            ctx.fill();
    
            star.z -= 0.5;
            if (star.z <= 0) {
            star.z = width;
            }
        }
    
        requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  );
};

export default SpaceBackground;
