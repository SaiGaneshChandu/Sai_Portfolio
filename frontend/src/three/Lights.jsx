import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PointLight, SpotLight } from "three";

export default function Lights() {
  const pointLightRef = useRef();
  const spotLightRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (pointLightRef.current) {
      pointLightRef.current.position.x =
        Math.sin(time * 0.5) * 5;

      pointLightRef.current.position.y =
        Math.cos(time * 0.35) * 3 + 2;
    }

    if (spotLightRef.current) {
      spotLightRef.current.position.x =
        Math.cos(time * 0.25) * 4;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />

      <directionalLight
        position={[5, 8, 5]}
        intensity={2.5}
      />

      <pointLight
        ref={pointLightRef}
        position={[4, 3, 4]}
        intensity={8}
        distance={18}
        decay={2}
      />

      <pointLight
        position={[-5, -2, 3]}
        intensity={6}
        distance={15}
        decay={2}
      />

      <spotLight
        ref={spotLightRef}
        position={[0, 6, 6]}
        intensity={8}
        distance={25}
        angle={0.5}
        penumbra={1}
        decay={2}
      />
    </>
  );
}