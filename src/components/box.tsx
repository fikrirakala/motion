"use client";

import { motion } from "framer-motion";

export default function Box() {
  const variants = {
    initial: { scale: 1 },
    hover: {
      rotate: 180,
    },
  };

  return (
    <motion.div
      className="h-32 w-32 rounded bg-primary"
      variants={variants}
      initial="initial"
      whileHover="hover"
      transition={{ duration: 1, type: "spring", repeat: Infinity }}
    ></motion.div>
  );
}
