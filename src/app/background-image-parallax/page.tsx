"use client";

import { useEffect } from "react";

import Lenis from "lenis";

import Intro from "./intro";
import Section from "./section";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Intro />
      <div className="h-[100vh] bg-black"></div>
      <Section />
      <div className="h-[100vh] bg-black"></div>
    </main>
  );
}
