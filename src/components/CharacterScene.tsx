"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, OrbitControls, Sparkles } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group, Mesh } from "three";

function Character() {
  const characterRef = useRef<Group>(null);
  const leftPupilRef = useRef<Mesh>(null);
  const rightPupilRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!characterRef.current) return;
    const t = state.clock.getElapsedTime();
    characterRef.current.rotation.y = Math.sin(t * 0.6) * 0.4;
    characterRef.current.position.y = Math.sin(t * 1.4) * 0.18 + 0.15;

    const pointerX = state.pointer.x * 0.12;
    const pointerY = state.pointer.y * 0.12;

    [leftPupilRef.current, rightPupilRef.current].forEach((pupil, index) => {
      if (!pupil) return;
      const baseX = index === 0 ? -0.24 : 0.24;
      pupil.position.x = baseX + pointerX;
      pupil.position.y = 1.22 + pointerY * 0.6;
    });
  });

  return (
    <group ref={characterRef} position={[0, 0.2, 0]}>
      <mesh castShadow position={[0, 1.12, 0]}>
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshStandardMaterial
          color="#ffe4ef"
          roughness={0.35}
          metalness={0.1}
        />
      </mesh>

      <mesh castShadow position={[0, 0.1, 0]}>
        <capsuleGeometry args={[0.52, 1.5, 24, 32]} />
        <meshStandardMaterial
          color="#2563eb"
          roughness={0.45}
          metalness={0.25}
        />
      </mesh>

      <group position={[-0.8, 0.3, 0]} rotation={[0, 0, 0.6]}>
        <mesh castShadow>
          <capsuleGeometry args={[0.16, 0.7, 16, 32]} />
          <meshStandardMaterial color="#1e3a8a" roughness={0.5} />
        </mesh>
      </group>

      <group position={[0.8, 0.3, 0]} rotation={[0, 0, -0.6]}>
        <mesh castShadow>
          <capsuleGeometry args={[0.16, 0.7, 16, 32]} />
          <meshStandardMaterial color="#1e3a8a" roughness={0.5} />
        </mesh>
      </group>

      <group position={[0, -0.8, 0]}>
        <mesh castShadow position={[-0.2, -0.4, 0]}>
          <capsuleGeometry args={[0.17, 0.8, 16, 32]} />
          <meshStandardMaterial color="#1d4ed8" roughness={0.45} />
        </mesh>
        <mesh castShadow position={[0.2, -0.4, 0]}>
          <capsuleGeometry args={[0.17, 0.8, 16, 32]} />
          <meshStandardMaterial color="#1d4ed8" roughness={0.45} />
        </mesh>
      </group>

      <group position={[0, 1.12, 0.46]}>
        <mesh castShadow position={[-0.24, 0.04, 0]}>
          <sphereGeometry args={[0.14, 32, 32]} />
          <meshStandardMaterial color="#fef2f8" roughness={0.25} />
        </mesh>
        <mesh castShadow position={[0.24, 0.04, 0]}>
          <sphereGeometry args={[0.14, 32, 32]} />
          <meshStandardMaterial color="#fef2f8" roughness={0.25} />
        </mesh>

        <mesh ref={leftPupilRef} position={[-0.24, 1.22, 0.56]}>
          <sphereGeometry args={[0.07, 24, 24]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        <mesh ref={rightPupilRef} position={[0.24, 1.22, 0.56]}>
          <sphereGeometry args={[0.07, 24, 24]} />
          <meshStandardMaterial color="#111827" />
        </mesh>

        <mesh castShadow position={[0, 0.02, 0.05]} rotation={[Math.PI * 0.08, 0, 0]}>
          <torusGeometry args={[0.2, 0.04, 16, 48, Math.PI]} />
          <meshStandardMaterial color="#fb7185" roughness={0.3} />
        </mesh>
      </group>

      <group position={[0.95, 0.6, 0.2]}>
        <mesh castShadow>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial
            color="#fcd34d"
            emissive="#facc15"
            emissiveIntensity={0.6}
          />
        </mesh>
        <Sparkles
          count={24}
          size={3.5}
          scale={[1.5, 1.5, 1.5]}
          speed={0.6}
          color="#fde68a"
        />
      </group>
    </group>
  );
}

export default function CharacterScene() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 1.6, 4.2], fov: 42 }} shadows dpr={[1, 2]}>
        <color attach="background" args={["#030712"]} />
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[5, 6, 3]}
          intensity={1.1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <spotLight
          position={[-4, 6, -4]}
          angle={0.7}
          penumbra={0.6}
          intensity={0.8}
          color="#a855f7"
        />
        <Suspense fallback={null}>
          <Character />
        </Suspense>
        <ContactShadows
          position={[0, -1.15, 0]}
          opacity={0.45}
          scale={6}
          blur={2.4}
          far={3}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
