import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg leading-relaxed">
        I'm a final-year Software Engineering student at IIT (Westminster) passionate about building modern web applications and learning emerging technologies.
      </p>
    </motion.section>
  );
}