import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      className="py-16 px-6 text-gray-800 dark:text-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        Education
      </h2>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          BEng (Hons) Software Engineering with Industrial Placement
        </h3>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I’m a Software Engineering graduate from IIT ...
        </p>

        <br />

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Cambridge Advanced Level (Mathematics Stream)
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Oasis International School
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Achieved 3 A’s and 1 B
        </p>

        <br />

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Cambridge Ordinary Level (Science Stream)
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Oasis International School
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Achieved 1 A* 4 A’s 1 B and 1 C
        </p>

        <br />

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Training
        </h3>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          AWS re/Start Program (Sep 2025 - Present) — CurveUp
        </p>
        <p className="text-md text-gray-700 dark:text-gray-300">
          Cloud fundamentals, Linux, Networking, AWS services, Python
        </p>
      </motion.div>
    </motion.section>
  );
}
