"use client";

import { useRef } from "react";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Page() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#2563eb", "#ef4444"]
  );

  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <div className="h-[2000px]"></div>
      <div className="flex h-screen w-full items-center justify-center">
        <motion.div
          ref={targetRef}
          className="h-[300px] w-[200px] bg-blue-600"
          style={{ opacity, scale }}
        ></motion.div>
      </div>
      <div className="h-[2000px]"></div>
    </>
  );
}
