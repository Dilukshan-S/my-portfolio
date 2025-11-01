import { Canvas } from "@react-three/fiber";
import { Float, Stars, OrbitControls } from "@react-three/drei";
import "../App.css";

export default function Home() {
  return (
    <div className="hero relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="hero-overlay absolute z-10 text-white text-center space-y-3 p-8 max-w-4xl break-words">
        <h1 className="text-4xl md:text-5xl font-bold">
          Dilukshan Sathiyamoorthy
        </h1>

        <p>
          📧{" "}
          <a href="mailto:sathiyamurthi.20210851@iit.ac.lk">
            sathiyamurthi.20210851@iit.ac.lk
          </a>
        </p>

        <p>
          🌐{" "}
          <a
            className="text-blue-400 underline"
            href="https://linkedin.com/in/sdilukshan1"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            className="text-blue-400 underline"
            href="https://github.com/Dilukshan-S"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>

        <p>
          💼 Software Engineering Graduate (BEng Hons, Second Class Upper
          Division) with hands-on experience building scalable and performant
          web and mobile applications using React.js, React Native, Node.js,
          Firebase, MongoDB, and Express.
        </p>

        <p>
          🔧 Skilled in JavaScript, TypeScript, HTML, CSS, Tailwind CSS, REST
          APIs, JWT Auth, Docker, Git & GitHub, Firebase, and MongoDB.
        </p>

        <p>
          🚀 Passionate about creating modern user experiences, performance
          optimization, and delivering impactful digital products through clean
          and maintainable code.
        </p>
      </div>

      <Canvas
        className="absolute top-0 left-0 z-0"
        camera={{ position: [0, 0, 6] }}
      >
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
