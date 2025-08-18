

'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from '@/styles/hero-section.module.css';

const HeroSection = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const motionEnabledRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const performanceModeRef = useRef(false);

  // Refs for layers to apply transformations
  const layerRefs = {
    l0: useRef<HTMLDivElement>(null),
    l1: useRef<HTMLDivElement>(null),
    l2: useRef<HTMLDivElement>(null),
    l3: useRef<HTMLDivElement>(null),
    l4: useRef<HTMLDivElement>(null),
  };

  const [isMotionActive, setIsMotionActive] = useState(false);
  const [showEnableButton, setShowEnableButton] = useState(false);

  const parallaxFactors = {
    l0: -0.1,
    l1: 0.2,
    l2: 0.45,
    l3: 0.7,
    l4: 1.0,
  };

  const applyParallax = useCallback((x: number, y: number) => {
    if (reducedMotionRef.current || performanceModeRef.current) return;
    
    requestAnimationFrame(() => {
        Object.entries(layerRefs).forEach(([key, ref]) => {
          if (ref.current) {
            const factor = parallaxFactors[key as keyof typeof parallaxFactors];
            const dx = x * factor * 20; 
            const dy = y * factor * 12;
            const dz = factor * -40;
            
            const rotX = Math.max(-6, Math.min(6, y * factor * 12));
            const rotY = Math.max(-6, Math.min(6, x * factor * 12));

            ref.current.style.transform = `translate3d(${dx}px, ${dy}px, ${dz}px) rotateX(${-rotX}deg) rotateY(${rotY}deg)`;
          }
        });
    });
  }, []);

  const handlePointerMove = (e: PointerEvent) => {
    if (!motionEnabledRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    applyParallax(x, y);
  };
  
  const handleDeviceMotion = (e: DeviceOrientationEvent) => {
    if (!motionEnabledRef.current) return;
    const { beta, gamma } = e;
    if (beta === null || gamma === null) return;
    const y = beta / 90;
    const x = gamma / 90;
    applyParallax(x, y);
  };

  const enableMotion = useCallback(async () => {
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      try {
        const permission = await (DeviceOrientationEvent as any).requestPermission();
        if (permission === 'granted') {
          window.addEventListener('deviceorientation', handleDeviceMotion, { passive: true });
          motionEnabledRef.current = true;
          setIsMotionActive(true);
        }
      } catch (err) {
        window.addEventListener('pointermove', handlePointerMove, { passive: true });
        motionEnabledRef.current = true;
        setIsMotionActive(true);
      }
    } else {
      window.addEventListener('deviceorientation', handleDeviceMotion, { passive: true });
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      motionEnabledRef.current = true;
      setIsMotionActive(true);
    }
  }, []);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotionRef.current) {
        document.body.classList.add('reduced-motion');
        return;
    }

    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      setShowEnableButton(true);
    } else {
      enableMotion();
    }
    
    let observer: IntersectionObserver;
    if (sceneRef.current) {
        observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                if(motionEnabledRef.current && !showEnableButton) {
                    window.addEventListener('pointermove', handlePointerMove);
                }
            } else {
                window.removeEventListener('pointermove', handlePointerMove);
            }
        }, { threshold: 0.1 });
        observer.observe(sceneRef.current);
    }
    
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('deviceorientation', handleDeviceMotion);
      if (observer) observer.disconnect();
    };
  }, [showEnableButton, enableMotion]);

  return (
    <section 
        ref={sceneRef} 
        id="hero" 
        className={styles.scene} 
        aria-label="Parallax Hero Section"
    >
      <div className={styles.layer} ref={layerRefs.l0} data-depth="-0.1" aria-hidden="true">
        <div className={styles.layer0Stars}></div>
      </div>
      
      <div className={styles.layer} ref={layerRefs.l1} data-depth="0.2" aria-hidden="true">
         <Image src="/assets/parallax/l1_nebula.svg" alt="" fill className={styles.layer1Nebula} />
      </div>

      <div className={styles.layer} ref={layerRefs.l2} data-depth="0.45" aria-hidden="true">
        <Image src="/assets/parallax/l2_aurora.svg" alt="" fill className={styles.layer2Aurora}/>
      </div>

      <div className={styles.layer} ref={layerRefs.l3} data-depth="0.7" aria-hidden="true">
        <Image src="/assets/parallax/l3_planet1.svg" alt="" width={100} height={100} className={styles.layer3Planet1} />
        <Image src="/assets/parallax/l3_planet2.svg" alt="" width={150} height={150} className={styles.layer3Planet2} />
        <div className={styles.shineEffect}></div>
      </div>
      
      <div className={styles.layer} ref={layerRefs.l4} data-depth="1.0">
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
           {showEnableButton && !isMotionActive && (
             <button onClick={enableMotion} className={styles.motionButton}>Enable Motion</button>
           )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

