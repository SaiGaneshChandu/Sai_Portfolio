import { Float, RoundedBox, Torus, Icosahedron } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function FloatingCube({ position, scale = 1 }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.x =
      state.clock.elapsedTime * 0.35;

    ref.current.rotation.y =
      state.clock.elapsedTime * 0.5;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={1.2}
      floatIntensity={2}
    >
      <RoundedBox
        ref={ref}
        args={[1.2, 1.2, 1.2]}
        radius={0.18}
        smoothness={5}
        position={position}
        scale={scale}
      >
        <meshStandardMaterial
          color="#7c3aed"
          metalness={0.9}
          roughness={0.18}
          transparent
          opacity={0.8}
        />
      </RoundedBox>
    </Float>
  );
}

function FloatingTorus({ position, scale = 1 }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.x =
      state.clock.elapsedTime * 0.6;

    ref.current.rotation.y =
      state.clock.elapsedTime * 0.35;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1.5}
      floatIntensity={2.5}
    >
      <Torus
        ref={ref}
        args={[1, 0.25, 32, 100]}
        position={position}
        scale={scale}
      >
        <meshStandardMaterial
          color="#22d3ee"
          metalness={1}
          roughness={0.12}
        />
      </Torus>
    </Float>
  );
}

function FloatingIcosahedron({ position, scale = 1 }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.x =
      state.clock.elapsedTime * 0.45;

    ref.current.rotation.z =
      state.clock.elapsedTime * 0.3;
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={1.8}
      floatIntensity={2}
    >
      <Icosahedron
        ref={ref}
        args={[1, 1]}
        position={position}
        scale={scale}
      >
        <meshStandardMaterial
          color="#a855f7"
          metalness={0.85}
          roughness={0.2}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
}

export default function FloatingObjects() {
  return (
    <group>
      <FloatingCube
        position={[-5, 1, -2]}
        scale={0.8}
      />

      <FloatingCube
        position={[5, 2.5, -4]}
        scale={0.55}
      />

      <FloatingTorus
        position={[4, -2, -3]}
        scale={0.9}
      />

      <FloatingTorus
        position={[-4, -2.5, -5]}
        scale={0.65}
      />

      <FloatingIcosahedron
        position={[0, 3.5, -6]}
        scale={1}
      />

      <FloatingIcosahedron
        position={[2, -3.5, -5]}
        scale={0.7}
      />
    </group>
  );
}