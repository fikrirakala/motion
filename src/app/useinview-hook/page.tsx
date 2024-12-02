"use client";

import { useEffect, useRef } from "react";

import { motion, useInView } from "framer-motion";

export default function Page() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });

  useEffect(() => {
    if (isInView) {
      console.log("In view");
    } else {
      console.log("not in view");
    }
  });

  return (
    <div>
      <div className="h-screen w-full"></div>
      <div className="flex h-screen w-full items-center justify-center">
        <motion.button
          ref={ref}
          className="inline-flex h-24 w-96 items-center justify-center rounded bg-blue-600 font-medium text-white"
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 2 }}
        >
          Show me on scroll
        </motion.button>
      </div>
      <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
    </div>
  );
}
