import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";

import Particles from "./Particles";
import TechObjects from "./TechObjects";
import Lights from "./Lights";

export default function Scene() {
  return (
    <div className="three-scene">
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 10]}
          fov={55}
        />

        <Suspense fallback={null}>
          <Lights />
          <Particles />
          <TechObjects />
        </Suspense>
      </Canvas>
    </div>
  );
}