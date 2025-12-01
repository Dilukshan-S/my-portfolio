import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl text-black dark:text-gray-300 font-bold mb-6">About Me</h2>

      <motion.p
        className="text-lg leading-relaxed text-black dark:text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        I'm a Software Engineering graduate from the Informatics Institute of
        Technology (affiliated with the University of Westminster), where I
        completed my BEng (Hons) degree with a <strong>Second Class Upper
        Division</strong>. I’m deeply passionate about full-stack development,
        building modern web applications, and creating seamless digital
        experiences with clean architecture and performance-first thinking.
      </motion.p>

      <motion.p
        className="text-lg leading-relaxed text-black dark:text-gray-300 mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        I enjoy working with JavaScript, TypeScript, React.js, Node.js, MongoDB,
        Firebase, and modern UI frameworks like Tailwind CSS. I'm also passionate about
        <span className="font-semibold text-purple-600 dark:text-purple-400"> AI/ML applications</span> and building intelligent systems.
        My focus is on delivering intuitive interfaces, building scalable backend services,
        and engineering solutions that solve real problems.
      </motion.p>

      <motion.p
        className="text-lg leading-relaxed text-black dark:text-gray-300 mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        Alongside software engineering, I also have hands-on experience in
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          {" "}cybersecurity
        </span>
        —including vulnerability assessment, network exploitation, web
        application security testing, cryptographic attacks, social engineering
        simulation, and defensive security practices. This background helps me
        design applications that are not only efficient but also hardened
        against real-world threats.
      </motion.p>

      <motion.p
        className="text-lg leading-relaxed text-black dark:text-gray-300 mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        I'm driven by curiosity, creativity, and a desire to continuously learn.
        Whether it's front-end engineering, backend development, system design,
        cybersecurity hardening, or AI/ML innovation, I enjoy building solutions that leave a
        meaningful impact.
      </motion.p>

      <motion.div
        className="mt-8 p-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg border border-indigo-300 dark:border-indigo-700"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.9 }}
      >
        <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-2">Let's collaborate</h3>
        <p className="text-indigo-800 dark:text-indigo-200">
          Open to exploring opportunities in full-stack development, AI/ML, cybersecurity research, or innovative projects that push boundaries.
        </p>
      </motion.div>
    </motion.section>
  );
}
