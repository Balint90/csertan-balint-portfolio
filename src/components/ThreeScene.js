import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, OrbitControls } from '@react-three/drei';
import { MeshPhysicalMaterial } from 'three'; // Import MeshPhysicalMaterial

const InteractiveTorus = ({ color }) => { // Accept color prop
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005; // Subtle automatic rotation
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Torus ref={meshRef} args={[1, 0.4, 16, 100]}>
      <meshPhysicalMaterial
        color={color} // Use the color prop
        roughness={0.2}
        metalness={0.8}
        clearcoat={1}
        clearcoatRoughness={0.2}
      />
    </Torus>
  );
};

const ThreeScene = ({ color }) => { // Accept color prop
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <InteractiveTorus color={color} /> {/* Pass color prop */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeScene;