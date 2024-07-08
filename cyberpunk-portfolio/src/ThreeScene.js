import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function ThreeScene() {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'purple'} wireframe />
    </mesh>
  );
}

export default ThreeScene;
