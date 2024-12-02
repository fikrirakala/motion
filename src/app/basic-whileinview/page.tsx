"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <div>
      <div className="h-screen w-full"></div>
      <div className="flex h-screen w-full items-center justify-center">
        <motion.button
          className="inline-flex h-24 w-96 items-center justify-center rounded bg-blue-600 font-medium text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: "all" }}
          onViewportEnter={() => console.log("Enter")}
          onViewportLeave={() => console.log("Leave")}
        >
          Show me on scroll
        </motion.button>
      </div>
      <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
    </div>
  );
}
