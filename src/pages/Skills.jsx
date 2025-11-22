import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Tailwind CSS']
  },
  {
    title: "Backend",
    items: ['Node.js', 'Nest.js', 'Firebase', 'MongoDB', 'SQL']
  },
  {
    title: "Programming Languages",
    items: ['Java', 'Python']
  },
  {
    title: "DevOps / Tools",
    items: ['Git', 'Docker']
  },
  {
    title: "Cybersecurity",
    items: [
      'Network Vulnerability Assessment',
      'ARP Spoofing / MiTM',
      'Web Security (SQLi, XSS, CSRF)',
      'Cryptography & Hash Cracking',
      'Social Engineering Simulation',
      'Denial-of-Service Testing'
    ]
  }
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
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              {category.title}
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {category.items.map((item, idx) => (
                <li key={idx} className="border-b border-gray-300/40 dark:border-gray-700/40 pb-1">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
