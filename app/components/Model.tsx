"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

function MeshComponent() {
  const fileUrl = "/furniture/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={mesh} scale={5}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Model({ className }: { className: string }) {
  return (
    <Suspense
      fallback={
        <>
          <h2>Carregando modelo 3D...</h2>
        </>
      }
    >
      <div className={className}>
        <Canvas className="h-full w-full bg-[#f2f2f2] rounded-2xl">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <PerspectiveCamera makeDefault position={[0, 2.5, 8]} />
          {/* <OrbitControls /> */}
          <MeshComponent />
        </Canvas>
      </div>
    </Suspense>
  );
}
