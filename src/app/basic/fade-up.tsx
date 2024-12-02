"use client";

import { motion } from "framer-motion";

export default function FadeUp() {
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
        className="h-20 w-20 rounded-lg bg-stone-100"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      ></motion.div>
      <motion.div
        className="h-20 w-20 rounded-full bg-stone-100"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      ></motion.div>
    </motion.div>
  );
}
