"use client";

import { motion, useScroll } from "framer-motion";

export default function Scroll() {
  const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
      variants={gridSquareVariants}
    >
      <motion.div className="aspect-square w-40 rounded-xl bg-gray-50/20">
        <motion.div
          className="h-full w-full origin-bottom rounded-xl bg-gray-400"
          style={{ scaleY: scrollYProgress }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}
