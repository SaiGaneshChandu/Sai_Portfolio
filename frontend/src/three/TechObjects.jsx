import { Float, Icosahedron, Torus, RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function RotatingObject({
  type,
  position,
  scale = 1,
  speed = 0.5
}) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.x =
      state.clock.elapsedTime * speed;

    ref.current.rotation.y =
      state.clock.elapsedTime * speed * 1.3;

    ref.current.rotation.z =
      Math.sin(state.clock.elapsedTime * speed) * 0.15;
  });

  if (type === "cube") {
    return (
      <RoundedBox
        ref={ref}
        args={[1.3, 1.3, 1.3]}
        radius={0.18}
        smoothness={6}
        position={position}
        scale={scale}
      >
        <meshPhysicalMaterial
          color="#7c3aed"
          metalness={0.85}
          roughness={0.15}
          transmission={0.15}
          thickness={0.5}
        />
      </RoundedBox>
    );
  }

  if (type === "torus") {
    return (
      <Torus
        ref={ref}
        args={[1.1, 0.22, 32, 100]}
        position={position}
        scale={scale}
      >
        <meshPhysicalMaterial
          color="#22d3ee"
          metalness={1}
          roughness={0.1}
          transmission={0.1}
        />
      </Torus>
    );
  }

  return (
    <Icosahedron
      ref={ref}
      args={[1.2, 1]}
      position={position}
      scale={scale}
    >
      <meshPhysicalMaterial
        color="#a855f7"
        metalness={0.9}
        roughness={0.2}
        wireframe
      />
    </Icosahedron>
  );
}

function TechOrb({ position, scale = 1 }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.elapsedTime;

    ref.current.position.y =
      position[1] + Math.sin(time * 1.2) * 0.25;

    ref.current.rotation.y = time * 0.5;
  });

  return (
    <mesh
      ref={ref}
      position={position}
      scale={scale}
    >
      <sphereGeometry args={[0.35, 32, 32]} />

      <meshPhysicalMaterial
        color="#6366f1"
        emissive="#312e81"
        emissiveIntensity={1.5}
        metalness={0.8}
        roughness={0.15}
      />
    </mesh>
  );
}

export default function TechObjects() {
  return (
    <group>
      <Float
        speed={1.2}
        rotationIntensity={0.8}
        floatIntensity={1.5}
      >
        <RotatingObject
          type="cube"
          position={[-4.8, 2.2, -3]}
          scale={0.7}
          speed={0.35}
        />
      </Float>

      <Float
        speed={1.5}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <RotatingObject
          type="torus"
          position={[4.5, 1.8, -4]}
          scale={0.75}
          speed={0.45}
        />
      </Float>

      <Float
        speed={1}
        rotationIntensity={1.2}
        floatIntensity={2}
      >
        <RotatingObject
          type="icosahedron"
          position={[3.8, -2.8, -3]}
          scale={0.8}
          speed={0.3}
        />
      </Float>

      <Float
        speed={1.4}
        rotationIntensity={0.8}
        floatIntensity={1.8}
      >
        <RotatingObject
          type="cube"
          position={[-4, -2.5, -5]}
          scale={0.5}
          speed={0.55}
        />
      </Float>

      <TechOrb
        position={[-2.8, 3.2, -2]}
        scale={1}
      />

      <TechOrb
        position={[2.8, 2.8, -4]}
        scale={0.8}
      />

      <TechOrb
        position={[-3.2, -3.2, -3]}
        scale={0.7}
      />

      <TechOrb
        position={[4.2, -1.5, -5]}
        scale={0.6}
      />
    </group>
  );
}