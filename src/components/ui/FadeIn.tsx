import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInProps) {
  const reduced = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      y: reduced ? 0 : direction === "up" ? 18 : direction === "down" ? -18 : 0,
      x: reduced ? 0 : direction === "left" ? 18 : direction === "right" ? -18 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: reduced ? 0.01 : 0.5,
        delay: reduced ? 0 : delay,
        ease: EASE,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
