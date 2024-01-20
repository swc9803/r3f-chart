import { useEffect, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Chart = ({ selectedCountry }) => {
  const torusRef = useRef();

  useEffect(() => {
    if (selectedCountry) {
      const scaleFactor = selectedCountry.popltn_cnt
        ? selectedCountry.popltn_cnt / 100000000
        : 1;
      torusRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }
  }, [selectedCountry]);

  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />

      <directionalLight
        castShadow
        color={0xffffff}
        intensity={1.2}
        position={[-3, 3, 3]}
        shadow-mapSize={[1024 * 2, 1024 * 2]}
      />

      <mesh receiveShadow rotation-x={THREE.MathUtils.degToRad(-90)}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#2c3e50"
          roughness={0.5}
          metalness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh castShadow receiveShadow position-y={1.7} ref={torusRef}>
        <torusKnotGeometry args={[1, 0.2, 128, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.6} />
      </mesh>

      <group name="smallSpherePivot">
        <mesh castShadow receiveShadow position={[3, 0.5, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            color="#e74c3c"
            roughness={0.2}
            metalness={0.5}
            emissive="#ff4c3c"
            toneMapped={false}
            emissiveIntensity={50}
          />
          <pointLight color="#ff4c3c" intensity={20} />
        </mesh>
      </group>
    </>
  );
};

export default Chart;
