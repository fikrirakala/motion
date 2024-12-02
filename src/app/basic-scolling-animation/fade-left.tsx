"use client";

import { ReactNode } from "react";

import { motion } from "framer-motion";

export default function FadeLeft({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
