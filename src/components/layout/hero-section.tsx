

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from '@/styles/hero-section.module.css';

const HeroSection = () => {
  return (
    <section 
        id="hero" 
        className={styles.scene} 
        aria-label="Parallax Hero Section"
    >
      <div className={styles.layer} data-depth="-0.1" aria-hidden="true">
        <div className={styles.layer0Stars}></div>
      </div>
      
      <div className={styles.layer} data-depth="0.2" aria-hidden="true">
         <Image src="/assets/parallax/l1_nebula.svg" alt="" fill className={styles.layer1Nebula} />
      </div>

      <div className={styles.layer} data-depth="0.45" aria-hidden="true">
        <Image src="/assets/parallax/l2_aurora.svg" alt="" fill className={styles.layer2Aurora}/>
      </div>

      <div className={styles.layer} data-depth="0.7" aria-hidden="true">
        <Image src="/assets/parallax/l3_planet1.svg" alt="" width={100} height={100} className={styles.layer3Planet1} />
        <Image src="/assets/parallax/l3_planet2.svg" alt="" width={150} height={150} className={styles.layer3Planet2} />
        <div className={styles.shineEffect}></div>
      </div>
      
      <div className={styles.layer} data-depth="1.0">
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
