import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <motion.section
      className="py-16 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Image here*/}
      {/*
      <motion.img
        src="/path-to-headshot.jpg"
        alt="Dilukshan"
        className="w-32 h-32 rounded-full mx-auto mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      />
      */}

      <h2 className="text-3xl font-bold text-black dark:text-gray-200 text-center mb-4">
        About Me
      </h2>
      <motion.p
        className="text-lg text-center text-gray-800 dark:text-gray-300 mb-6"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        I’m a Software Engineer specializing in full-stack development —
        building modern web applications using React, Node.js, and
        performance-focused architecture.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {[
          "React",
          "TypeScript",
          "Node.js",
          "Tailwind CSS",
          "MongoDB",
          "Firebase",
          "AI/ML",
          "Cybersecurity",
        ].map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </motion.div>

      <motion.p
        className="text-lg leading-relaxed text-black dark:text-gray-300 mb-6"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        I hold a BEng (Hons) in Software Engineering with a Second Class Upper
        Division. I also have one year of hands-on industry experience as a Full
        Stack Developer Intern at <strong>Cloud99X</strong>, where I developed
        production features using React.js, React Native, Node.js, Nest.js, and
        Firebase.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <motion.div
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 18px rgba(99, 102, 241, 0.5)",
          }}
          whileTap={{ scale: 0.96 }}
        >
          <Link
            to="/experience"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold 
                 shadow-md hover:bg-indigo-500 hover:text-black dark:hover:bg-indigo-400 transition-colors"
          >
            View Experience
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
