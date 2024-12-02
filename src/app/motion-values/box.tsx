"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

export default function Box() {
  const x = useMotionValue(0);

  // const xPoint = useMotionValue(0);
  // const yPoint = useMotionValue(0);

  // const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

  // const x = useSpring(xPoint, spring);
  // const y = useSpring(yPoint, spring);

  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  useMotionValueEvent(x, "change", (latest) => {
    console.log(latest);
  });

  return (
    <motion.div
      className="h-32 w-32 cursor-grab rounded-lg bg-blue-600"
      drag="x"
      style={{ x, opacity }}
    ></motion.div>
  );
}
