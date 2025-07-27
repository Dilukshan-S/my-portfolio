import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'HTML', 'CSS', 'Java', 'Python', 'JavaScript', 'React', 'React Native',
  'Node.js', 'Tailwind CSS', 'Firebase', 'MongoDB', 'SQL', 'Git', 'Docker',
  'TypeScript', 'Nest.js'
];

export default function Skills() {
  return (
    <motion.section
      className="py-16 px-4 md:px-8 lg:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 text-black dark:bg-gray-800 dark:text-white p-4 rounded-lg shadow-md transition-colors text-center hover:shadow-lg hover:scale-105 duration-200"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}