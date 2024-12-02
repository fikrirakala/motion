"use client";

import Image from "next/image";
import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import Background from "../../../public/images/bg-image-parallax-1.jpg";

export default function Section() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log(latest);
  // });

  return (
    <div ref={containerRef} className="h-screen overflow-hidden bg-blue-500">
      <motion.div className="relative h-[120vh]" style={{ y }}>
        <Image src={Background} alt="" fill className="object-cover" />
      </motion.div>
    </div>
  );
}
