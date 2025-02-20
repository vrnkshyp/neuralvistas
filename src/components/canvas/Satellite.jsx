import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; // Import GLTFLoader from Three.js instead of useGLTF

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    // Load the GLTF model
    const loader = new GLTFLoader();
    loader.load("./satellite/scene.gltf", (gltf) => {
      setModel(gltf.scene);
    });
  }, []);

  if (!model) return null; // Return null if model is not loaded yet

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024} // Updated property name
        shadow-mapSize-height={1024} // Updated property name
      />
      <pointLight intensity={1} />
      <primitive
        object={model}
        scale={isMobile ? 0.7 : 0.65}
        position={isMobile ? [0, -3, -2.2] : [0, -1.25, -0.5]}
        rotation={[-0.1, -0.1, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [15, 5, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;