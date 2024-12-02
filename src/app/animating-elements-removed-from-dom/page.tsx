"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

export default function Page() {
  const [show, setShow] = useState(false);

  const variants = {
    hidden: {
      opacity: "var(--opacity-from)",
    },
    visible: {
      opacity: "var(--opacity-to)",
      transition: {
        staggerChildren: 0.25,
      },
    },
    exit: {
      opacity: "var(--opacity-from)",
      transition: {
        when: "afterChildren",
        staggerChildren: 0.25,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 16,
    },
    visible: {
      opacity: "var(--opacity-to)",
      x: 0,
    },
    exit: {
      opacity: 0,
      x: 16,
    },
  };

  return (
    <div className="flex w-full flex-col items-center gap-10 py-20">
      <motion.button
        className="inline-flex min-w-24 rounded-full bg-blue-600 px-8 py-4 font-medium text-white hover:bg-blue-700"
        whileTap={{ scale: 0.9 }}
        onClick={() => setShow(!show)}
      >
        {show ? "Remove" : "Add"}
      </motion.button>

      <AnimatePresence>
        {show ? (
          <motion.div
            className="flex w-[200px] flex-col gap-4 rounded-lg bg-blue-300 p-4 [--opacity-from:0] [--opacity-to:1]"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              variants={itemVariants}
              className="h-10 w-full rounded-md bg-blue-800"
            ></motion.div>
            <motion.div
              variants={itemVariants}
              className="h-10 w-full rounded-md bg-blue-800"
            ></motion.div>
            <motion.div
              variants={itemVariants}
              className="h-10 w-full rounded-md bg-blue-800"
            ></motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
