import React from 'react';
import { motion } from 'framer-motion';

const skills = ['HTML', 'CSS', 'Java', 'Python', 'JavaScript', 'React', 'Node.js', 'Tailwind CSS', 'Firebase','MongoDB', 'SQL', 'Git', 'Docker', 'TypeScript', 'React Native', 'Nest.js'];
export default function Skills() {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            className="bg-gray-200 dark:bg-gray-800 p-4 rounded text-center"
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