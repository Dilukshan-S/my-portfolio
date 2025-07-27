import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Summarizer', desc: 'Video summarization tool using Flask, Whisper, BART, and TTS.' },
  { title: 'MindMate', desc: 'Mental health app with real-time emotion detection using TensorFlow and OpenCV.' },
  { title: 'HomeTeq', desc: 'E-commerce system featuring secure login, payment integration, and order tracking.' },
];

export default function Projects() {
  return (
    <motion.section
      className="py-16 px-4 md:px-8 lg:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white text-black dark:bg-gray-900 dark:text-white p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 transition-colors hover:scale-[1.02] hover:shadow-xl duration-300"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="leading-relaxed text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}