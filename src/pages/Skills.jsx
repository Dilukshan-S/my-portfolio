import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  FileText,
  Settings,
  ShieldCheck,
  Brain,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "React Native",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Nest.js", "Express.js", "Flask (Python)", "PHP"],
  },
  {
    title: "Databases",
    icon: FileText,
    items: ["Firestore", "MongoDB", "MySQL"],
  },
  {
    title: "Cloud / BaaS / APIs",
    icon: FileText,
    items: ["Firebase", "Google Maps API", "REST API", "CI/CD"],
  },
  {
    title: "Programming Languages",
    icon: FileText,
    items: ["Java", "Python", "TypeScript", "PHP"],
  },
  {
    title: "AI/ML",
    icon: Brain,
    items: [
      "Keras",
      "Numpy",
      "OpenCV",
      "Pandas",
      "Librosa",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "NLP (BART, SBERT)",
    ],
  },
  {
    title: "DevOps / Tools",
    icon: Settings,
    items: ["Git", "Docker", "Vite", "CI/CD"],
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    items: [
      "Network Vulnerability Assessment",
      "ARP Spoofing / MiTM",
      "Web Security (SQLi, XSS, CSRF)",
      "Cryptography & Hash Cracking",
      "Social Engineering Simulation",
      "Denial-of-Service Testing",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

export default function Skills() {
  // theme: "blue" or "purple"
  const [glowTheme, setGlowTheme] = useState("blue");

  const glowClasses = {
    blue: {
      bg: "from-blue-400 to-blue-600",
      ring: "ring-blue-400/40",
      text: "text-blue-500",
      shadow: "shadow-blue-600/30",
    },
    purple: {
      bg: "from-purple-500 to-pink-500",
      ring: "ring-purple-400/40",
      text: "text-purple-500",
      shadow: "shadow-pink-600/30",
    },
  };

  const currentGlow = glowClasses[glowTheme];

  return (
    <motion.section
      className="py-16 px-4 md:px-8 lg:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Skills</h2>

          {/* Theme toggle */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Glow
            </span>
            <div className="inline-flex bg-white/5 p-1 rounded-full shadow-sm">
              <button
                onClick={() => setGlowTheme("blue")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-shadow ${
                  glowTheme === "blue"
                    ? `bg-gradient-to-r ${glowClasses.blue.bg} text-white shadow-md`
                    : "bg-transparent text-gray-600/90 dark:text-gray-300/90"
                }`}
                aria-pressed={glowTheme === "blue"}
              >
                Blue
              </button>

              <button
                onClick={() => setGlowTheme("purple")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-shadow ${
                  glowTheme === "purple"
                    ? `bg-gradient-to-r ${glowClasses.purple.bg} text-white shadow-md`
                    : "bg-transparent text-gray-600/90 dark:text-gray-300/90"
                }`}
                aria-pressed={glowTheme === "purple"}
              >
                Purple
              </button>
            </div>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.title}
                variants={cardVariants}
                whileHover={{ scale: 1.025 }}
                className="relative p-6 rounded-2xl
                  bg-white/6 dark:bg-gray-800/40 backdrop-blur-sm
                  border border-white/6 dark:border-gray-700/30
                  shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Icon with gradient glow */}
                <div className="flex items-start gap-4">
                  <div
                    className={`relative flex items-center justify-center w-14 h-14 rounded-full 
                      before:absolute before:inset-0 before:rounded-full before:blur-2xl before:opacity-80
                      after:absolute after:inset-0 after:rounded-full after:opacity-40`}
                    style={{
                      // the gradient background for the glow layer
                      background: `linear-gradient(135deg, ${
                        glowTheme === "blue"
                          ? "#60a5fa 0%, #2563eb 100%"
                          : "#7c3aed 0%, #ec4899 100%"
                      })`,
                      WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                    }}
                    aria-hidden
                  >
                    {/* Soft outer glow via boxShadow */}
                    <div
                      className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full"
                      style={{
                        boxShadow:
                          glowTheme === "blue"
                            ? "0 8px 30px rgba(37,99,235,0.18), 0 4px 10px rgba(96,165,250,0.08)"
                            : "0 8px 30px rgba(236,72,153,0.18), 0 4px 10px rgba(124,58,237,0.08)",
                        background: "rgba(255,255,255,0.02)",
                      }}
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                        className={`${
                          glowTheme === "blue" ? "text-white" : "text-white"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {category.items.length} skills
                    </p>
                  </div>
                </div>

                {/* Tags / badges */}
                <div className="mt-4">
                  <ul className="flex flex-wrap gap-2">
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="inline-flex items-center text-sm px-3 py-1 rounded-md
                          bg-white/10 dark:bg-white/5 border border-white/6 dark:border-white/6
                          backdrop-blur-sm"
                      >
                        <span className="truncate max-w-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* bottom gradient underline to add subtle polish */}
                <div
                  className="absolute left-6 right-6 bottom-3 h-[2px] rounded-full opacity-60"
                  style={{
                    background:
                      glowTheme === "blue"
                        ? "linear-gradient(90deg, rgba(96,165,250,0.25), rgba(37,99,235,0.6))"
                        : "linear-gradient(90deg, rgba(124,58,237,0.25), rgba(236,72,153,0.6))",
                  }}
                  aria-hidden
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
