
'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useControls } from 'leva';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const RippleSphere = () => {
    const { theme } = useTheme();
    const ref = useRef<THREE.Mesh>(null!);
    const { color, wireframe, roughness, metalness, speed, amplitude } = useControls({
        color: '#673ab7',
        wireframe: false,
        roughness: { value: 0.1, min: 0, max: 1 },
        metalness: { value: 0.9, min: 0, max: 1 },
        speed: { value: 1.5, min: 0.1, max: 5 },
        amplitude: { value: 0.2, min: 0, max: 1 },
    });

    useFrame((state) => {
        if (ref.current) {
            const time = state.clock.getElapsedTime();
            const position = ref.current.geometry.attributes.position as THREE.BufferAttribute;

            for (let i = 0; i < position.count; i++) {
                const p = new THREE.Vector3().fromBufferAttribute(position, i);
                const noise = 0.5 + 0.5 * THREE.MathUtils.lerp(
                    Math.sin(p.length() * 4 - time * speed),
                    Math.cos(p.x * 2 - time * speed),
                    0.5
                );
                p.normalize().multiplyScalar(1 + noise * amplitude);
                position.setXYZ(i, p.x, p.y, p.z);
            }
            position.needsUpdate = true;
            ref.current.rotation.y += 0.001;
        }
    });

    // Use a different color for the seo4web theme for better contrast
    const sphereColor = theme === 'seo4web' ? 'hsl(var(--aurora))' : color;

    return (
        <Sphere ref={ref} args={[1, 64, 64]} >
            <meshStandardMaterial 
                color={sphereColor} 
                wireframe={wireframe} 
                roughness={roughness}
                metalness={metalness}
            />
        </Sphere>
    );
};


export default function ExperimentsPage() {
  return (
    <div className="w-full h-screen bg-background">
        <Canvas camera={{ position: [0, 0, 2.5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <RippleSphere />
            <OrbitControls enableZoom={false} />
        </Canvas>
    </div>
  );
}
