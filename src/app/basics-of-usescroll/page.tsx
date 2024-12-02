"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Page() {
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#ff0000", "#00ff00", "#0000ff"]
  );

  return (
    <motion.div className="h-[2000px]">
      <motion.div
        className="fixed left-0 right-0 top-0 h-5 w-full origin-left bg-primary"
        style={{
          scaleX: scrollYProgress,
          // opacity,
          backgroundColor,
        }}
      ></motion.div>
    </motion.div>
  );
}
