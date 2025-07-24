import { Canvas } from '@react-three/fiber';
import { Float, Stars, OrbitControls } from '@react-three/drei';
import '../App.css';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1>Dilukshan Sathiyamoorthy</h1>
        <p>📍 Colombo - 15, Sri Lanka</p>
        <p>📞 +94 769652623 | 📧 dilukshan.js@gmail.com</p>
        <p>
          🌐 <a href="https://linkedin.com/in/sdilukshan1" target="_blank">LinkedIn</a> | 
          <a href="https://github.com/Dilukshan-S" target="_blank">GitHub</a>
        </p>
      </div>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <mesh>
            <torusKnotGeometry args={[1, 0.3, 100, 16]} />
            <meshStandardMaterial color="violet" wireframe />
          </mesh>
        </Float>
        <Stars radius={100} depth={50} count={1000} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}