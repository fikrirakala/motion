"use client";

import { useRef } from "react";

import { motion } from "framer-motion";

export default function Drag() {
  const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const constraintsRef = useRef(null);

  return (
    <motion.div
      className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
      variants={gridSquareVariants}
      ref={constraintsRef}
    >
      <motion.div
        className="h-1/3 w-1/3 cursor-grab rounded-3xl bg-orange-500"
        drag
        dragConstraints={constraintsRef}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      ></motion.div>
    </motion.div>
  );
}
