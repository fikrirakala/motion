"use client";

import { motion } from "framer-motion";

export default function Page() {
  const containerVariants = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <div>
      <div className="flex min-h-screen w-full items-center justify-center"></div>

      <div className="flex min-h-screen w-full items-center justify-center">
        <motion.div
          className="flex gap-4 bg-blue-300 p-5"
          variants={containerVariants}
          animate="hidden"
          whileInView="show"
          viewport={{
            margin: "-100px",
          }}
        >
          <motion.div
            className="h-32 w-32 bg-blue-600"
            variants={itemVariants}
          ></motion.div>
          <motion.div
            className="h-32 w-32 bg-blue-600"
            variants={itemVariants}
          ></motion.div>
          <motion.div
            className="h-32 w-32 bg-blue-600"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
      </div>

      <div className="flex min-h-screen w-full items-center justify-center"></div>
    </div>
  );
}
