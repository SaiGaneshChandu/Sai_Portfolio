import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function Particles() {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const count = 1800;
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 14;

      array[i * 3] =
        (Math.random() - 0.5) * radius * 2;

      array[i * 3 + 1] =
        (Math.random() - 0.5) * radius * 1.5;

      array[i * 3 + 2] =
        (Math.random() - 0.5) * radius;
    }

    return array;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y =
      state.clock.elapsedTime * 0.025;

    pointsRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.08) * 0.04;
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}