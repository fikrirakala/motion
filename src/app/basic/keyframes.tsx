"use client";

import { motion } from "framer-motion";

export default function Keyframes() {
  const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
      variants={gridSquareVariants}
    >
      <motion.div
        className="h-1/3 w-1/3 bg-rose-400 shadow-md"
        animate={{
          scale: [1, 2, 2, 1],
          rotate: [0, 90, 180, 0],
          borderRadius: ["10%", "10%", "50%", "10%"],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
          delay: 1,
        }}
      ></motion.div>
    </motion.div>
  );
}
