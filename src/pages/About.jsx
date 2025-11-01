import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg leading-relaxed">
        I’m a Software Engineering graduate from the Informatics Institute of
        Technology (affiliated with the University of Westminster), where I
        completed my BEng (Hons) degree with Second Class Upper Division. I’m
        deeply passionate about building modern web applications, exploring
        full-stack development, and learning cutting-edge technologies to craft
        seamless digital experiences.
      </p>
    </motion.section>
  );
}
