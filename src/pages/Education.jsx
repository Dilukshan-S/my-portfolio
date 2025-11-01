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
        <p className="italic text-gray-300">
          Informatics Institute of Technology, affiliated with the University of
          Westminster (2021–2025)
        </p>
        <p className="text-green-400 font-medium">
          Graduated with Second Class Upper Division
        </p>

        <br />

        <h3 className="text-xl font-semibold">Cambridge Advanced Level</h3>
        <p>Oasis International School</p>
        <p>Achieved 3 A’s and 1 B</p>
      </motion.div>
    </motion.section>
  );
}
