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
      >
        <h3 className="text-xl font-semibold">
          BEng (Hons) Software Engineering with Industrial Placement
        </h3>
        <p>Completed with Second Class Upper Division</p>
        <p>
          Informatics Institute of Technology affiliated with University of
          Westminster (2021–2025)
        </p>
        <br></br>
        <p className="text-xl font-semibold">
          Cambridge A-Level: passed with 3 A's, 1 B
        </p>
        <p>Oasis International School</p>
      </motion.div>
    </motion.section>
  );
}
