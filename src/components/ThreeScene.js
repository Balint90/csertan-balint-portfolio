import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, OrbitControls } from '@react-three/drei'; // Import Torus

const InteractiveTorus = () => {
  const meshRef = useRef();

  // Optional: Add some subtle automatic rotation if desired, or remove useFrame entirely
  useFrame(() => {
    if (meshRef.current) {
      // meshRef.current.rotation.x += 0.005;
      // meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Torus ref={meshRef} args={[1, 0.4, 16, 100]}> {/* args: radius, tube, radialSegments, tubularSegments */}
      <meshStandardMaterial color={'#00d4ff'} />
    </Torus>
  );
};

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <InteractiveTorus />
      <OrbitControls enableZoom={false} /> {/* Add OrbitControls for user interaction */}
    </Canvas>
  );
};

export default ThreeScene;