'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from '@/styles/hero-section.module.css';
import { cn } from '@/lib/utils';

// SVG Components for layers to allow CSS manipulation and animations
const Layer1Nebula = () => (
    <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className={styles.layer1Nebula}>
        <defs>
            <radialGradient id="nebulaGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="hsl(var(--venus-from))" stopOpacity="0.6" />
                <stop offset="50%" stopColor="hsl(var(--venus-to))" stopOpacity="0.2" />
                <stop offset="100%" stopColor="hsl(var(--space))" stopOpacity="0" />
            </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#nebulaGradient)" />
    </svg>
);

const Layer2Aurora = () => (
    <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden="true" className={styles.layer2Aurora}>
        <defs>
            <linearGradient id="auroraGradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="var(--aurora)" stopOpacity="0" />
                <stop offset="25%" stopColor="var(--aurora)" stopOpacity="0.4" />
                <stop offset="75%" stopColor="var(--aurora)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--aurora)" stopOpacity="0" />
            </linearGradient>
            <filter id="auroraGlow">
                <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <path d="M -100,400 Q 300,200 600,400 T 1300,400" stroke="url(#auroraGradient)" strokeWidth="150" fill="none" filter="url(#auroraGlow)" className={styles.auroraPath1} />
        <path d="M -100,500 Q 300,650 600,500 T 1300,500" stroke="url(#auroraGradient)" strokeWidth="100" fill="none" filter="url(#auroraGlow)" className={styles.auroraPath2} />
    </svg>
);

const Layer3Planet1 = () => (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={styles.layer3Planet1}>
        <defs>
            <radialGradient id="planet1Gradient" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="hsl(var(--primary) / 0.7)" />
                <stop offset="100%" stopColor="hsl(var(--primary))" />
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="50" fill="url(#planet1Gradient)" />
    </svg>
);

const Layer3Planet2 = () => (
    <svg viewBox="0 0 150 150" aria-hidden="true" className={styles.layer3Planet2}>
        <defs>
            <radialGradient id="planet2Gradient" cx="70%" cy="30%" r="70%">
                <stop offset="0%" stopColor="hsl(var(--sun-to))" />
                <stop offset="100%" stopColor="hsl(var(--sun-from))" />
            </radialGradient>
        </defs>
        <circle cx="75" cy="75" r="75" fill="url(#planet2Gradient)" />
        <circle cx="75" cy="75" r="75" fill="black" fillOpacity="0.3" style={{ transform: 'scale(0.95) translate(5px, 5px)' }} />
    </svg>
);


const HeroSection = () => {
    const sceneRef = useRef<HTMLElement>(null);
    let animationFrameId: number;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
        if (!sceneRef.current) return;

        let clientX, clientY;
        if (e instanceof MouseEvent) {
            clientX = e.clientX;
            clientY = e.clientY;
        } else if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            return;
        }

        const { innerWidth, innerHeight } = window;
        const x = (clientX - innerWidth / 2) / (innerWidth / 2); // -1 to 1
        const y = (clientY - innerHeight / 2) / (innerHeight / 2); // -1 to 1

        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
            applyParallax(x, y);
        });
    };

    const applyParallax = (x: number, y: number) => {
        if (!sceneRef.current) return;
        const layers = sceneRef.current.querySelectorAll<HTMLElement>('[data-depth]');
        layers.forEach(layer => {
            const depth = parseFloat(layer.dataset.depth || '0');
            const moveX = x * depth * 20; // Max move 20px
            const moveY = y * depth * 12; // Max move 12px
            const moveZ = depth * -40; // Depth effect
            const rotateX = y * depth * -6; // Max rotate 6deg
            const rotateY = x * depth * 6; // Max rotate 6deg

            layer.style.transform = `translate3d(${moveX}px, ${moveY}px, ${moveZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    };
    
    useEffect(() => {
        const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!isReducedMotion) {
            window.addEventListener('mousemove', handlePointerMove);
            window.addEventListener('touchmove', handlePointerMove);
        }
        
        return () => {
            if (!isReducedMotion) {
                window.removeEventListener('mousemove', handlePointerMove);
                window.removeEventListener('touchmove', handlePointerMove);
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <section
            id="hero"
            ref={sceneRef}
            className={styles.scene}
            aria-label="Parallax Hero Section"
        >
            <div className={cn(styles.layer, styles.layer0)} data-depth="-0.1" aria-hidden="true">
                <div className={styles.layer0Stars}></div>
            </div>

            <div className={cn(styles.layer, styles.layer1)} data-depth="0.2" aria-hidden="true">
                <Layer1Nebula />
            </div>

            <div className={cn(styles.layer, styles.layer2)} data-depth="0.45" aria-hidden="true">
                <Layer2Aurora />
            </div>
            
            <div className={cn(styles.layer, styles.layer3)} data-depth="0.7" aria-hidden="true">
                <Layer3Planet1 />
                <Layer3Planet2 />
            </div>

            <div className={cn(styles.layer, styles.layer4)} data-depth="1.0">
                <div className={styles.uiContent}>
                    <div className={styles.tag}>
                        <p>Váš Partner pre Digitálny Rast</p>
                    </div>
                    <h1>Viditeľnosť, ktorá predáva</h1>
                    <p className={styles.subtitle}>
                        Transformujeme vašu online prítomnosť na merateľné výsledky. S nami nebudete len videní – budete nezabudnuteľní.
                    </p>
                    <div className={styles.ctaContainer}>
                        <Link href="/seo-audit-akcia" className={styles.ctaButton}>
                            Nechaj si urobiť audit
                            <ArrowRight size={18} />
                        </Link>
                        <Link href="/pricing" className={styles.secondaryButton}>
                            Pozri cenník
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
