"use client";

import { motion } from "framer-motion";

export default function SvgAnimation() {
  const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const svgIconVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(252, 211, 77, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(252, 211, 77, 1)",
    },
  };

  return (
    <motion.div
      className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
      variants={gridSquareVariants}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-1/2 stroke-amber-500 stroke-[0.5]"
      >
        <motion.path
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          variants={svgIconVariants}
          initial="hidden"
          animate="visible"
          transition={{
            default: {
              duration: 2,
              ease: "easeInOut",
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
            },
            fill: {
              duration: 2,
              ease: "easeIn",
              delay: 2,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
}
