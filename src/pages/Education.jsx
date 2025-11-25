import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">Education</h2>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <h3 className="text-xl font-semibold">
          BEng (Hons) Software Engineering with Industrial Placement
        </h3>
        <p className="text-lg leading-relaxed">
          I’m a Software Engineering graduate from IIT (affiliated with the University
          of Westminster), now holding a Second Class Upper Division (2:1).
          I enjoy building full-stack applications with clean architecture, modern UI,
          and high-performance logic. I focus on React, Node.js, and cloud-based
          app development, and I love solving real-world problems with elegant code.
        </p>

        <br />

        <h3 className="text-xl font-semibold">Cambridge Advanced Level (Mathematics Stream)</h3>
        <p>Oasis International School</p>
        <p>Achieved 3 A’s and 1 B</p>

        <br />

        <h3 className="text-xl font-semibold">Cambridge Ordinary Level (Science Stream)</h3>
        <p>Oasis International School</p>
        <p>Achieved 1 A* 4 A’s 1 B and 1 C</p>
      </motion.div>
    </motion.section>
  );
}
