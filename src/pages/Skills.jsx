import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  FileText,
  Settings,
  ShieldCheck,
  Brain,
  Cloud,
  Terminal,
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
    title: "Cloud Computing (AWS)",
    icon: Cloud,
    items: [
      "Amazon EC2",
      "Amazon S3",
      "AWS IAM",
      "AWS VPC (Basics)",
      "Amazon RDS (Basics)",
      "AWS CloudWatch",
      "Shared Responsibility Model",
      "Cloud Security Fundamentals",
    ],
  },
  {
    title: "Cloud Services, BaaS & APIs",
    icon: FileText,
    items: ["Firebase", "Google Maps API", "REST APIs", "CI/CD"],
  },
  {
    title: "Programming Languages",
    icon: FileText,
    items: ["Java", "Python", "TypeScript", "PHP"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    items: [
      "Keras",
      "NumPy",
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
    title: "Linux & Security Tools",
    icon: Terminal,
    items: [
      "Linux (Ubuntu, Kali)",
      "Linux Command Line (Bash)",
      "User & Permission Management",
      "Networking Basics (TCP/IP, DNS)",
      "Firewall Basics (iptables, ufw)",
      "Nmap",
      "Wireshark",
      "Metasploit",
    ],
  },
  {
    title: "DevOps / Tools",
    icon: Settings,
    items: ["Git", "Docker", "Vite", "CI/CD Pipelines"],
  },
  {
    title: "Cybersecurity (Linux-based Labs)",
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
  const [glowTheme, setGlowTheme] = useState("blue");

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

          {/* Glow toggle (RESTORED) */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Glow
            </span>
            <div className="inline-flex bg-white/5 p-1 rounded-full shadow-sm">
              <button
                onClick={() => setGlowTheme("blue")}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  glowTheme === "blue"
                    ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                Blue
              </button>

              <button
                onClick={() => setGlowTheme("purple")}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  glowTheme === "purple"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-300"
                }`}
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
          {skillCategories.map((category) => {
            const Icon = category.icon;

            const gradient =
              glowTheme === "blue"
                ? "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)"
                : "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)";

            const shadow =
              glowTheme === "blue"
                ? "0 8px 30px rgba(37,99,235,0.18)"
                : "0 8px 30px rgba(236,72,153,0.18)";

            return (
              <motion.article
                key={category.title}
                variants={cardVariants}
                whileHover={{ scale: 1.025 }}
                className="relative p-6 rounded-2xl
                  bg-white/6 dark:bg-gray-800/40 backdrop-blur-sm
                  border border-white/6 dark:border-gray-700/30
                  shadow-sm hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-full"
                    style={{ background: gradient, boxShadow: shadow }}
                  >
                    <Icon size={20} className="text-white" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {category.items.length} skills
                    </p>
                  </div>
                </div>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm px-3 py-1 rounded-md
                        bg-white/10 dark:bg-white/5 border border-white/10"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
