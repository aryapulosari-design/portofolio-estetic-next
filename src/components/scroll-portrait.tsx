"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, type PointerEvent } from "react";

export default function ScrollPortrait({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [10, -18]);
  const rotate = useTransform(scrollYProgress, [0, 1], [1.5, -1]);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(pointerY, { stiffness: 150, damping: 24 });
  const rotateY = useSpring(pointerX, { stiffness: 150, damping: 24 });

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - box.left) / box.width - 0.5) * 7);
    pointerY.set((0.5 - (event.clientY - box.top) / box.height) * 7);
  };

  const reset = () => { pointerX.set(0); pointerY.set(0); };

  return (
    <figure ref={ref} className="intro-photo-column">
      <motion.div className="intro-photo-sticky" style={reducedMotion ? undefined : { y, rotate }}>
        <motion.div className="intro-photo-frame" style={reducedMotion ? undefined : { rotateX, rotateY }} onPointerMove={move} onPointerLeave={reset}>
          <Image src={src} alt={alt} fill priority sizes="(max-width: 767px) 288px, (max-width: 1023px) 38vw, 400px" className="intro-photo-image" />
        </motion.div>
      </motion.div>
    </figure>
  );
}
