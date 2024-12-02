"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <motion.div
        className="h-[200px] w-[200px] rounded-lg bg-blue-600"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
          times: [0, 0.5, 0.75, 0.875, 1],
        }}
      ></motion.div>
    </div>
  );
}
