"use client";

import { motion } from "framer-motion";

export default function HoverTap() {
  const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
      variants={gridSquareVariants}
    >
      <motion.button
        className="w-1/2 rounded-lg bg-emerald-600 py-4 text-lg font-medium tracking-wide text-gray-100"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1, backgroundColor: "#d1d5db", color: "black" }}
        transition={{ damping: 10, stiffness: 600 }}
      >
        Subscribe
      </motion.button>
    </motion.div>
  );
}
