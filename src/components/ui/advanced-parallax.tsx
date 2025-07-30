
"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/three';

interface AdvancedParallaxProps {
  speed?: number;
  layers?: number;
}

function Scene({ speed = 0.5, layers = 3 }: AdvancedParallaxProps) {
  const { size, viewport, mouse } = useThree();
  const depth = layers;

  const [{ springMouse }, api] = useSpring(() => ({
    springMouse: [0, 0],
    config: { mass: 5, tension: 250, friction: 100 },
  }));

  useFrame((state, delta) => {
    api.start({ springMouse: [mouse.x * size.width / 2, mouse.y * size.height / 2] });

    // Optional: add some constant rotation to the layers
    for (let i = 0; i < layers; i++) {
        const layerRef = refs.current[i];
        if(layerRef) {
            layerRef.rotation.x += 0.001 * (i + 1);
            layerRef.rotation.y += 0.001 * (i + 1);
        }
    }
  });
  
  const refs = useRef<THREE.Group[]>([]);
  const count = 50;
  
  const layerObjects = useMemo(() => Array.from({ length: depth }).map((_, i) => {
    return Array.from({ length: count }).map(() => {
        const x = (Math.random() - 0.5) * viewport.width * 2;
        const y = (Math.random() - 0.5) * viewport.height * 2;
        const z = (Math.random() - 0.5) * 5;
        const scale = Math.random() * 0.5 + 0.1;
        return {
            position: new THREE.Vector3(x, y, z),
            scale: new THREE.Vector3(scale, scale, scale),
            color: new THREE.Color().setHSL(Math.random(), 0.7, 0.7)
        }
    })
  }), [depth, viewport.width, viewport.height]);


  return (
    <>
      {layerObjects.map((objects, i) => (
        <animated.group 
            key={i} 
            ref={(el) => (refs.current[i] = el!)}
            position={springMouse.to((x, y) => [
                x / 5 * (i + 1) * speed, 
                y / 5 * (i + 1) * speed, 
                i * -2
            ])}
        >
          {objects.map((obj, j) => (
             <mesh key={j} position={obj.position} scale={obj.scale}>
                <dodecahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color={obj.color} roughness={0.75} metalness={0.5} />
            </mesh>
          ))}
        </animated.group>
      ))}
    </>
  );
}


const AdvancedParallax: React.FC<AdvancedParallaxProps> = (props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen -z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={200}/>
            <Scene {...props} />
        </Canvas>
    </div>
  );
};

export default AdvancedParallax;
