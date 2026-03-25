"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function NeuralNetworkParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particleCount = 100;
  const maxDistance = 2;

  // Generate random positions and velocities
  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15; // z
      velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      });
    }
    return { positions, velocities };
  }, [particleCount]);

  useFrame(() => {
    if (!pointsRef.current || !linesRef.current) return;

    const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    // Update particle positions
    for (let i = 0; i < particleCount; i++) {
      positionsArray[i * 3] += velocities[i].x;
      positionsArray[i * 3 + 1] += velocities[i].y;
      positionsArray[i * 3 + 2] += velocities[i].z;

      // Simple boundary bounce
      if (Math.abs(positionsArray[i * 3]) > 7.5) velocities[i].x *= -1;
      if (Math.abs(positionsArray[i * 3 + 1]) > 7.5) velocities[i].y *= -1;
      if (Math.abs(positionsArray[i * 3 + 2]) > 7.5) velocities[i].z *= -1;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Calculate connections
    const linePositions = [];
    const lineOpacities = [];
    
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positionsArray[i * 3] - positionsArray[j * 3];
        const dy = positionsArray[i * 3 + 1] - positionsArray[j * 3 + 1];
        const dz = positionsArray[i * 3 + 2] - positionsArray[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          linePositions.push(
            positionsArray[i * 3], positionsArray[i * 3 + 1], positionsArray[i * 3 + 2],
            positionsArray[j * 3], positionsArray[j * 3 + 1], positionsArray[j * 3 + 2]
          );
          // Opacity based on distance
          const alpha = 1.0 - dist / maxDistance;
          lineOpacities.push(alpha, alpha);
        }
      }
    }

    // Update lines geometry
    linesRef.current.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    linesRef.current.geometry.setAttribute('color', new THREE.Float32BufferAttribute(lineOpacities.flatMap(a => [0.38, 0.4, 0.94, a]), 4)); // Indigo color mapped
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.08} color="#8b5cf6" transparent opacity={0.8} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial vertexColors transparent depthWrite={false} />
      </lineSegments>
    </group>
  );
}
