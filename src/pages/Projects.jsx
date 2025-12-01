import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBook } from 'react-icons/fa';
import { Brain } from 'lucide-react';

const projects = [
{
title: 'AI Video Summarizer',
desc: 'Full-stack automated summarization pipeline. Utilizes OpenAI Whisper for transcription, BART for text synthesis, and SBERT for semantic video segmentation. Features real-time progress tracking via Server-Sent Events (SSE).',
tags: [
'Python', 'Flask (REST API)', 'PyTorch', 'BART', 'OpenAI', 'Whisper',
'SBERT', 'torchvision', 'librosa', 'noisereduce', 'moviepy', 'gTTS',
'rouge_score', 'scikit-learn', 'React.js'
],
demo: '[https://youtu.be/2UtSpiLgqO8](https://youtu.be/2UtSpiLgqO8)',
research: '[https://www.researchgate.net/](https://www.researchgate.net/)...',
},
{
title: 'MindMate',
desc: 'Led the development of a multi-modal mental health app. Engineered an emotion recognition system fusing Facial Analysis (OpenCV/TensorFlow) and Audio Sentiment (Librosa) to provide personalized feedback.',
tags: ['Python', 'Numpy', 'Pandas', 'TensorFlow', 'OpenCV', 'Firebase', 'Librosa', 'Keras'],
github: '[https://github.com/Dilukshan-S/FutureX](https://github.com/Dilukshan-S/FutureX)',
},
{
title: 'Weather App',
desc: 'Responsive dashboard delivering real-time forecasts via OpenWeatherMap API integration. Features dynamic background rendering based on climate conditions and geolocation support.',
tags: ['React', 'Rest API', 'JavaScript', 'CSS'],
github: '[https://github.com/Dilukshan-S/weather_app](https://github.com/Dilukshan-S/weather_app)',
},
{
title: 'Security Assessment Lab – Cybersecurity Module',
desc: 'Hands-on real-world penetration testing and vulnerability analysis: reconnaissance, network exploitation, web application attacks (SQLi, XSS, CSRF), cryptographic attacks, MiTM, DoS simulations, and defensive strategies.',
tags: [
'Nmap', 'Dirbuster', 'Wireshark', 'Hydra', 'Burp Suite',
'SQLi', 'XSS', 'CSRF', 'ARP Spoofing', 'MiTM', 'DoS'
],
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
return ( <section id="projects-section" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-950">
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.2 }}
variants={containerVariants}
className="max-w-6xl mx-auto"
> <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
Featured Projects </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          variants={cardVariants}
          className="rounded-xl overflow-hidden flex flex-col relative group shadow-lg border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          {/* Gradient Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-10 rounded-xl pointer-events-none"></div>

          {/* Thumbnail / Placeholder */}
          <div className="h-40 w-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
            <Brain size={40} className="text-white/70" />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow relative z-10">
            {/* AI/ML Badge */}
            {(p.title.includes('AI') || p.title.includes('MindMate')) && (
              <div className="mb-2 inline-flex items-center gap-1 px-2 py-1 bg-purple-100 dark:bg-purple-900/40 rounded-md border border-purple-300 dark:border-purple-700 w-fit">
                <Brain size={14} className="text-purple-600 dark:text-purple-400" />
                <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">AI/ML</span>
              </div>
            )}

            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              {p.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
              {p.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white text-sm font-medium"
                >
                  <FaGithub size={18} /> Code
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
                >
                  <FaExternalLinkAlt size={16} /> Demo
                </a>
              )}
              {p.research && (
                <a
                  href={p.research}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 text-sm font-medium"
                >
                  <FaBook size={16} /> Thesis
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
