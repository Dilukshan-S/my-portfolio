import React from 'react';
import { motion } from 'framer-motion';

const experience = [
  { 
    role: 'Full Stack Developer Intern', 
    company: 'Cloud99X Ltd', 
    period: '07/2023 – 07/2024', 
    details: [
      'Delivered production-ready features in React.js, React Native, and Node.js, reducing bug reports during testing.',
      'Integrated Google Maps API for real-time location services.',
      'Refactored backend modules, reducing API response latency by 15%.',
      'Implemented and maintained services using Nest.js and Firebase for reliability at scale.',
      'Collaborated on AI-driven automation pipelines and model integrations.',
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-8">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {exp.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}