"use client";

import { Canvas } from "@react-three/fiber";
import NeuralNetworkParticles from "./NeuralNetworkParticles";
import { useEffect, useState } from "react";

export default function Background3D() {
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="fixed inset-0 bg-[#050a14] -z-50" />;

  return (
    <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none opacity-60">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]} // Optimize pixel ratio
      >
        <ambientLight intensity={0.5} />
        <NeuralNetworkParticles />
      </Canvas>
    </div>
  );
}
