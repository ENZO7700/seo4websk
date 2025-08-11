
'use client';

import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Stars(props: any) {
  const ref = useRef<any>();
  
  const count = 5000;
  const size = 0.005;
  const speed = 0.3;
  const color = '#5756C2';
  
  const sphere = useMemo(() => random.inSphere(new Float32Array(count * 3), { radius: 1.5 }), [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10 * speed;
      ref.current.rotation.y -= delta / 15 * speed;
    }
  });
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ExperimentsPage() {
  return (
    <div className="w-full h-screen bg-background">
       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
            <h1 className="text-4xl font-bold tracking-tighter md:text-6xl font-headline text-foreground">
                3D Laboratórium
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-foreground/70 text-balance">
                Interaktívna 3D scéna s časticami.
            </p>
       </div>
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
}
