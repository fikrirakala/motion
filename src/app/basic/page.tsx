"use client";

import { motion } from "framer-motion";

import Drag from "./drag";
import FadeUp from "./fade-up";
import HoverTap from "./hover-tap";
import Keyframes from "./keyframes";
import Scroll from "./scroll";
import SvgAnimation from "./svg-animation";

export default function BasicPage() {
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        className="grid grid-cols-3 gap-10 p-10"
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
      >
        <FadeUp />
        <Keyframes />
        <HoverTap />
        <Drag />
        <Scroll />
        <SvgAnimation />
      </motion.section>
    </div>
  );
}
