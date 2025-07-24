import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Text } from '@react-three/drei';
import './App.css';

export default function App() {
  return (
    <>
      <div className="overlay">
        <h1>Dilukshan Sathiyamoorthy</h1>
        <p>Software Engineer | Full Stack Developer</p>
      </div>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <mesh>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="hotpink" wireframe />
          </mesh>
        </Float>
        <Stars radius={100} depth={50} count={2000} factor={4} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </>
  );
}
