import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion'; // Alebo použiť GSAP
import { useSpring, animated } from '@react-spring/three'; // Pre paralax s react-spring

interface AdvancedParallaxProps {
  // Props pre prispôsobenie
  speed?: number;
  layers?: number;
  colors?: string[];
  // Ďalšie props podľa potreby
}

const AdvancedParallax: React.FC<AdvancedParallaxProps> = ({
  speed = 0.5,
  layers = 3,
  colors = ['#ff00ff', '#00ffff', '#0000ff'],
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree(); // Pre prístup k pozícii myši v React Three Fiber

  // Príklad paralax efektu s react-spring
  const [{ springMouse }, api] = useSpring(() => ({
    springMouse: [0, 0],
    config: { mass: 1, tension: 170, friction: 26 },
  }));

  // Reakcia na pohyb myši
  // Použite useThree().mouse alebo pridajte event listenery
  // Update springMouse hodnoty

  // Animácia v čase (4. dimenzia) a reakcia na interakciu
  useFrame((state) => {
    // Tu implementovať logiku animácie a 4D efektu
    // - Pohyb vrstiev na základe springMouse hodnôt (paralax)
    // - Zmeny v čase (rotácia, mierka, farba, pozícia) na základe state.clock.elapsedTime
    // - Prípadná reakcia na skrolovanie
  });

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {/* Tu vykresliť 3D objekty/vrstvy */}
      {/* Príklad:*/}
      <animated.mesh ref={meshRef} position={springMouse.to((x, y) => [x, y, 0])}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </animated.mesh>
      {/* Ďalšie vrstvy s rôznymi nastaveniami pre paralax a animácie */}
    </Canvas>
  );
};

export default AdvancedParallax;
# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.
