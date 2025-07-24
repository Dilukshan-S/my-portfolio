import { Canvas } from '@react-three/fiber';
import { Float, Stars, OrbitControls } from '@react-three/drei';
import '../App.css';

export default function Home() {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1>Dilukshan Sathiyamoorthy</h1>
        <p>📍 Colombo - 15, Sri Lanka</p>
        <p>📞 +94 769652623 | 📧 dilukshan.js@gmail.com</p>
        <p>
          🌐 <a href="https://linkedin.com/in/sdilukshan1" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
          <a href="https://github.com/Dilukshan-S" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
        <p>
          💼 Full Stack Developer with 1+ year of experience building scalable web and mobile applications using React.js, React Native, Node.js, Firebase, MongoDB, and Express.
        </p>
        <p>
          🔧 Skills: JavaScript, TypeScript, HTML, CSS, Tailwind CSS, REST APIs, JWT Auth, Docker, Git & GitHub, Firebase, MongoDB
        </p>
        <p>
          🎓 BEng (Hons) Software Engineering - Informatics Institute of Technology (IIT) affiliated with University of Westminster (Expected 2nd Upper)
        </p>
        <p>
          🚀 Passionate about creative solutions, modern UIs, performance optimization, and delivering impactful digital products.
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
