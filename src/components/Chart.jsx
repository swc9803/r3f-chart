import { useEffect, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import gsap from 'gsap';

const Chart = ({ selectedCountry }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (selectedCountry) {
      const scaleFactor = selectedCountry.popltn_cnt
        ? selectedCountry.popltn_cnt / 100000000
        : 1;

      gsap.to(chartRef.current.scale, {
        y: scaleFactor,
        duration: 1,
        ease: 'power2.out',
      });
      gsap.to(chartRef.current.rotation, {
        y: `+= ${360 * (Math.PI / 180)}`,
        duration: 1,
        ease: 'power2.out',
      });
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

      <mesh castShadow receiveShadow ref={chartRef}>
        <boxGeometry args={[1, 2, 1]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.6} />
      </mesh>
    </>
  );
};

export default Chart;
