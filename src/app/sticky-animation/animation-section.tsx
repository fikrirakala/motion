"use client";

import Image from "next/image";
import { useRef } from "react";

import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { cn } from "@/lib/utils";

export default function AnimationSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  return (
    <section className="relative">
      <div className="relative mx-auto w-full max-w-screen-2xl">
        <div ref={ref} className="relative h-[200vh]">
          <div className="sticky top-0 z-[1] flex min-h-screen w-full flex-col items-center justify-center">
            <motion.div
              className="relative z-[1] max-w-[370px] text-center"
              style={{ opacity: textOpacity }}
            >
              <h2 className="text-7xl font-medium">
                20 flexible spending categories
              </h2>
              <p className="mt-6 text-lg">
                Tedy allows your business culture to shine by giving you full
                control over category selection and allowances. Is not that
                amazing?
              </p>
            </motion.div>

            <ImageContainer
              scrollYProgress={scrollYProgress}
              x={-420}
              y={-350}
              scale={0.4}
              src="/images/entertainment.webp"
            />

            <ImageContainer
              scrollYProgress={scrollYProgress}
              x={-660}
              y={-120}
              scale={0.3}
              src="/images/culinary.webp"
            />

            <ImageContainer
              scrollYProgress={scrollYProgress}
              x={-300}
              y={380}
              scale={0.3}
              src="/images/dental-care.webp"
            />

            <ImageContainer
              scrollYProgress={scrollYProgress}
              x={-570}
              y={250}
              scale={0.4}
              src="/images/active-life.webp"
            />

            <ImageContainer
              scrollYProgress={scrollYProgress}
              x={600}
              y={-150}
              scale={0.4}
              src="/images/mental-health.webp"
            />

            <ImageContainer
              scrollYProgress={scrollYProgress}
              x={650}
              y={380}
              scale={0.3}
              src="/images/personal-care.webp"
            />

            <ImageContainer
              scrollYProgress={scrollYProgress}
              x={200}
              y={-370}
              scale={0.3}
              src="/images/pets.webp"
            />

            <ImageContainer
              scrollYProgress={scrollYProgress}
              x={400}
              y={300}
              scale={0.4}
              src="/images/training.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type ImageContainerProps = {
  scrollYProgress: MotionValue<number>;
  x: number;
  y: number;
  scale: number;
  src: string;
};

function ImageContainer({
  scrollYProgress,
  x,
  y,
  scale,
  src,
}: ImageContainerProps) {
  const imageX = useTransform(scrollYProgress, [0, 1], [0, x]);

  const imageY = useTransform(scrollYProgress, [0, 1], [0, y]);

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, scale]);

  return (
    <motion.div
      className={cn("absolute z-[2] aspect-square h-[500px] w-[500px]")}
      style={{
        x: useSpring(imageX, {
          // stiffness: 100,
          // damping: 300,
          // restDelta: 0.001,
          bounce: 0,
        }),
        y: useSpring(imageY, {
          // stiffness: 100,
          // damping: 300,
          // restDelta: 0.001,
          bounce: 0,
        }),
        scale: imageScale,
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[5rem]">
        <Image
          src={src}
          alt=""
          width={500}
          height={500}
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );
}
