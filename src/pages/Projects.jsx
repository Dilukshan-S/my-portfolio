import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBook } from 'react-icons/fa';

const projects = [
  {
    title: 'AI Video Summarizer',
    // Updated description to highlight the specific AI stack & research aspect
    desc: 'Full-stack automated summarization pipeline. Utilizes OpenAI Whisper for transcription, BART for text synthesis, and SBERT for semantic video segmentation. Features real-time progress tracking via Server-Sent Events (SSE).',
    tags: ['Python', 'Flask (REST API)', 'PyTorch', 'facebook/bart-large-cnn (BART)', 'OpenAI', 'Whisper (base)', 'sentence-transformers (all-MiniLM-L6-v2 / SBERT)', 'torchvision (ResNet50, R3D-18)', 'librosa', 'noisereduce', 'moviepy', 'gTTS', 'rouge_score',
'scikit-learn', 'React.js'],
    //github: null, // Add your GitHub link here
    demo: 'https://youtu.be/2UtSpiLgqO8', 
    research: 'https://www.researchgate.net/...' 
  },
  {
    title: 'MindMate',
    desc: 'Led the development of a multi-modal mental health app. Engineered an emotion recognition system fusing Facial Analysis (OpenCV/TensorFlow) and Audio Sentiment (Librosa) to provide personalized feedback.',
    tags: ['Python', 'Numpy', 'Pandas', 'TensorFlow', 'OpenCV', 'Firebase', 'Librosa', 'Keras'],
    github: 'https://github.com/Dilukshan-S/FutureX',
    demo: null,
  },
  {
    title: 'Weather App',
    // Replaced HomeTeq with Weather App
    desc: 'Responsive dashboard delivering real-time forecasts via OpenWeatherMap API integration. Features dynamic background rendering based on climate conditions and geolocation support.',
    tags: ['React', 'Rest API', 'JavaScript', 'CSS'],
    github: 'https://github.com/Dilukshan-S/weather_app',
    demo: null, 
  },
  {
  title: 'Security Assessment Lab – Cybersecurity Module',
  desc: 'Hands-on real-world penetration testing and vulnerability analysis: reconnaissance, network exploitation, web application attacks (SQLi, XSS, CSRF), cryptographic attacks, MiTM, DoS simulations, and defensive strategies.',
  tags: [
    'Nmap', 'Dirbuster', 'Wireshark', 'Hydra', 'Burp Suite',
    'SQLi', 'XSS', 'CSRF', 'ARP Spoofing', 'MiTM', 'DoS'
  ],
  github: null,
  demo: null,
  research: null
},
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

export default function Projects() {
  return (
    <section id="projects-section" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col"
              whileHover={{ y: -8, shadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-600 to-indigo-700 w-full flex items-center justify-center">
                 <span className="text-white font-bold opacity-30 text-2xl">{p.title}</span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    {p.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                  {p.desc}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links Footer */}
                <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  {p.github && (
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors text-sm font-medium"
                    >
                      <FaGithub size={18} /> Code
                    </a>
                  )}
                  
                  {/* Research Paper Button (Only renders if 'research' link exists) */}
                  {p.research && (
                    <a 
                      href={p.research} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors text-sm font-medium"
                    >
                      <FaBook size={16} /> Thesis
                    </a>
                  )}

                  {/* Live Demo Button */}
                  {p.demo && (
                    <a 
                      href={p.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors text-sm font-medium ml-auto"
                    >
                      <FaExternalLinkAlt size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}