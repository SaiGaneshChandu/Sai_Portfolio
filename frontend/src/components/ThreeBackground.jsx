import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  OrbitControls,
  Sphere,
  Stars
} from "@react-three/drei";
import { useRef } from "react";

function AnimatedSphere({ position, size, speed, distort }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x =
      state.clock.elapsedTime * speed * 0.35;

    meshRef.current.rotation.y =
      state.clock.elapsedTime * speed * 0.5;
  });

  return (
    <Float
      speed={speed}
      rotationIntensity={1.5}
      floatIntensity={2}
    >
      <Sphere
        ref={meshRef}
        args={[size, 64, 64]}
        position={position}
      >
        <MeshDistortMaterial
          color="#6c63ff"
          roughness={0.15}
          metalness={0.8}
          distort={distort}
          speed={2}
        />
      </Sphere>
    </Float>
  );
}

function BackgroundScene() {
  return (
    <>
      <ambientLight intensity={0.35} />

      <pointLight
        position={[5, 5, 5]}
        intensity={8}
        distance={20}
      />

      <pointLight
        position={[-5, -3, 4]}
        intensity={5}
        distance={15}
      />

      <Stars
        radius={80}
        depth={50}
        count={2500}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />

      <AnimatedSphere
        position={[-4, 2, -3]}
        size={1.4}
        speed={1.2}
        distort={0.45}
      />

      <AnimatedSphere
        position={[4, -1, -5]}
        size={1.8}
        speed={0.8}
        distort={0.55}
      />

      <AnimatedSphere
        position={[2, 4, -8]}
        size={0.8}
        speed={1.5}
        distort={0.35}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.15}
      />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="three-background">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 55
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true
        }}
      >
        <BackgroundScene />
      </Canvas>
    </div>
  );
}