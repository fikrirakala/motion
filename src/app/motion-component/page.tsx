"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <motion.div
        className="h-[200px] w-[200px] rounded-lg bg-blue-600"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        whileHover={{
          scale: 2,
          transition: { duration: 2 },
        }}
        whileTap={{ scale: 0.8, transition: { duration: 0.3 } }}
      ></motion.div>
    </div>
  );
}
