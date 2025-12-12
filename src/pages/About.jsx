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

      {/* Add headshot image here later */}
      {/*
      <motion.img
        src="/path-to-headshot.jpg"
        alt="Dilukshan headshot"
        className="w-32 h-32 rounded-full mx-auto mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      />
      */}

      {/* Strong intro */}
      <h2 className="text-3xl font-bold text-black dark:text-gray-200 text-center mb-4">
        About Me
      </h2>
      <motion.p
        className="text-lg text-center text-gray-800 dark:text-gray-300 mb-6"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        I’m a Software Engineer specializing in full-stack development — building modern web applications using React, Node.js, and performance-focused architecture.
      </motion.p>

      {/* Tech skills list */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {["React", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB", "Firebase", "AI/ML", "Cybersecurity"].map((skill) => (
          <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 rounded-full text-sm font-medium">
            {skill}
          </span>
        ))}
      </motion.div>

      {/* Experience summary */}
      <motion.p
        className="text-lg leading-relaxed text-black dark:text-gray-300 mb-6"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        I hold a BEng (Hons) in Software Engineering with a Second Class Upper Division. I also have one year of hands-on industry experience as a Full Stack Developer Intern at <strong>Cloud99X</strong>, where I developed production features using React.js, React Native, Node.js, Nest.js, and Firebase.
      </motion.p>

      {/* What drives you */}
      <motion.p
        className="text-lg leading-relaxed text-black dark:text-gray-300 mb-6"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        I’m passionate about solving real problems through clean code, thoughtful UI/UX, and reliable backends — with an eye toward secure, scalable systems. I’m constantly learning, whether that’s new libraries, security hardening techniques, or AI/ML innovations.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <Link
          to="/experience"
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500 transition"
        >
          View Experience
        </Link>

        <a
          href="/resume.pdf"
          download
          className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900 transition"
        >
          Download Resume
        </a>
      </motion.div>
    </motion.section>
  );
}
