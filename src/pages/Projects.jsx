import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Summarizer', desc: 'Video summarization tool with Flask, Whisper, BART, TTS output.' },
  { title: 'MindMate', desc: 'Mental health app with emotion detection (TF + OpenCV).' },
  { title: 'HomeTeq', desc: 'E-commerce system with secure login & payments.' },
];

export default function Projects() {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}