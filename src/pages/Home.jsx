import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { Float, Stars, OrbitControls } from "@react-three/drei";
import "../App.css";

export default function Home() {
  // Build CV URL that works both locally and when deployed (Vite base-aware)
  const cvUrl = `${import.meta.env.BASE_URL || "/"}Dilukshan_CV.pdf`;

  return (
    <div className="hero relative min-h-[calc(100vh-64px)] w-full flex items-center justify-center overflow-hidden">
      {/* Overlay card: ensures consistent readability in both light/dark themes */}
      <div
        className="hero-overlay absolute z-10 text-center p-8 max-w-4xl w-[92%] sm:w-3/4 md:w-2/3 rounded-xl 
                   bg-white/90 dark:bg-black/60 backdrop-blur-md
                   text-gray-900 dark:text-white space-y-4"
      >
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Dilukshan Sathiyamoorthy
        </motion.h1>

        {/* Role / Short tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-200"
        >
          Software Engineering Graduate (BEng Hons — Second Class Upper Division) •
          Full-Stack Developer (React / Node.js)
        </motion.h2>

        {/* Contact row: email + social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-2"
        >
          <a
            href="mailto:sathiyamurthi.20210851@iit.ac.lk"
            className="text-sm md:text-base text-gray-700 dark:text-gray-200 hover:underline"
            aria-label="Send email"
          >
            📧 sathiyamurthi.20210851@iit.ac.lk
          </a>

          <span className="hidden sm:inline text-gray-400">|</span>

          <a
            href="https://linkedin.com/in/sdilukshan1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm md:text-base text-blue-600 dark:text-blue-400 hover:underline"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <FaLinkedin />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href="https://github.com/Dilukshan-S"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm md:text-base text-gray-700 dark:text-gray-200 hover:underline"
            aria-label="GitHub profile (opens in new tab)"
          >
            <FaGithub />
            <span className="hidden sm:inline text-blue-400">GitHub</span>
          </a>
        </motion.div>
        <br></br>

        {/* Short bullets / summary */}
        <div className="mt-3 space-y-2">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-sm md:text-base text-gray-700 dark:text-gray-200"
          >
            🔧 Skilled in JavaScript, TypeScript, React, Node.js, AI/ML, Tailwind CSS, Firebase, MongoDB, Docker, and modern cloud tooling.
          </motion.p>

        <br></br>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="text-sm md:text-base text-gray-700 dark:text-gray-200"
          >
            🚀 Passionate about building performant, secure and maintainable applications — I have hands-on cybersecurity experience (vulnerability assessment, web & network testing) and a strong interest in AI/ML research and applied solutions.
          </motion.p>
        </div>

        <br></br>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          {/* Download CV button */}
          <a
            href={cvUrl}
            download="Dilukshan_CV.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-md text-sm md:text-base transition"
            aria-label="Download CV (PDF)"
            title="Download CV (PDF)"
          >
            <FaDownload aria-hidden="true" />
            <span>Download CV (PDF)</span>
          </a>

    
        </motion.div>
      </div>

      {/* 3D Canvas background (keeps full-screen cover) */}
      <Canvas
        className="absolute inset-0 z-0"
        camera={{ position: [0, 0, 6] }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={0.6} />
        <Float speed={1.4} rotationIntensity={1.2} floatIntensity={1.6}>
          <mesh>
            <torusKnotGeometry args={[1, 0.28, 128, 16]} />
            <meshStandardMaterial color="#8b5cf6" metalness={0.6} roughness={0.2} />
          </mesh>
        </Float>
        <Stars radius={100} depth={50} count={600} factor={4} saturation={0.0} fade />
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
