import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Electron = ({ radius, angleSpeed, particleSize }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * angleSpeed;
    ref.current.position.x = radius * Math.cos(t);
    ref.current.position.y = radius * Math.sin(t);
  });

  return (
    <mesh ref={ref} position={[radius, 0, 0]}>
      <sphereGeometry args={[particleSize, 32, 32]} />
      <meshStandardMaterial color="#E2BBE9" />
    </mesh>
  );
};

const Orbit = ({ radius, color, opacity }) => (
  <mesh>
    <ringGeometry args={[radius - 0.01, radius + 0.01, 64]} />
    <meshBasicMaterial color={color} side={THREE.DoubleSide} transparent opacity={opacity} />
  </mesh>
);

const AtomBackground = ({ orbitColor = "#5A639C", orbitOpacity = 0.1 }) => {
  const electronConfigs = [
    { radius: 1.5, angleSpeed: 1, particleSize: 0.05 },
    { radius: 2.5, angleSpeed: 0.7, particleSize: 0.05 },
    { radius: 3.5, angleSpeed: 0.5, particleSize: 0.05 },
  ];

  return (
    <div style={{ width: '100vw', height: '100vh', top: 0, left: 0, zIndex: -1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Canvas style={{ width: '80vw', height: '100vh' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <spotLight 
          position={[0, 0, 0]} 
          angle={Math.PI / 2} 
          penumbra={0.5} 
          intensity={1} 
          distance={4} 
          decay={2} 
          color={new THREE.Color(0.5, 0, 0.5)} 
        />
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#E2BBE9" />
        </mesh>
        {electronConfigs.map((config, index) => (
          <React.Fragment key={index}>
            <Electron radius={config.radius} angleSpeed={config.angleSpeed} particleSize={config.particleSize} />
            <Orbit radius={config.radius} color={orbitColor} opacity={orbitOpacity} />
          </React.Fragment>
        ))}
      </Canvas>
    </div>
  );
};

export default AtomBackground;

