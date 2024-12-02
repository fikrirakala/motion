"use client";

import { motion } from "framer-motion";

export default function Page() {
  const text = "Crafting Beautiful Experiences With Framer Motion";
  const letters = text.split("");

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -12,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="mx-auto w-full max-w-screen-xl py-20">
      <motion.div
        className="text-9xl font-medium"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {letters.map((letter, i) => (
          <motion.div className="inline-block" key={i} variants={itemVariants}>
            {letter === " " ? <span>&nbsp;</span> : letter}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
