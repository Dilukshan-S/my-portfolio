import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function TimelineItem({ icon, title, subtitle, meta, description }) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative flex gap-4 sm:gap-6 group"
    >
      {/* Icon column */}
      <div className="flex flex-col items-center">
        <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-900 text-xl shadow-md group-hover:shadow-lg transition-shadow">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="pb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-lg font-medium">{subtitle}</p>
        {meta && (
          <p className="text-sm text-gray-600 dark:text-gray-400">{meta}</p>
        )}
        {description && (
          <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <motion.section
      className="py-16 px-4 sm:px-6 max-w-4xl mx-auto text-gray-800 dark:text-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
        Education
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        <motion.span
          className="absolute left-[20px] top-0 w-px bg-gray-300 dark:bg-gray-700"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        <TimelineItem
          icon="☁️"
          title="AWS re/Start Program"
          subtitle="CurveUp"
          meta="Sep 2025 – Present"
          description="Hands-on training in Cloud fundamentals, Linux, Networking, AWS services, Python, and real-world cloud scenarios."
        />

        <TimelineItem
          icon="🎓"
          title="BEng (Hons) Software Engineering"
          subtitle="Informatics Institute of Technology (IIT) – University of Westminster"
          meta="2021 – 2025"
          description="Passed with Second Class Honours (Upper division), Gained strong foundation in full-stack development, software design, databases, cloud fundamentals, and real-world project development."
        />

        <TimelineItem
          icon="🎓"
          title="Cambridge Advanced Level – Mathematics Stream"
          subtitle="Oasis International School"
          meta="2018 – 2020"
          description="Achieved 3 A’s and 1 B"
        />

        <TimelineItem
          icon="🎓"
          title="Cambridge Ordinary Level – Science Stream"
          subtitle="Oasis International School"
          meta="2016 – 2018"
          description="Achieved 1 A* · 4 A’s · 1 B · 1 C"
        />
      </motion.div>
    </motion.section>
  );
}
