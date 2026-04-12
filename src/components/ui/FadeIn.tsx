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
      y: reduced ? 0 : direction === "up" ? 10 : direction === "down" ? -10 : 0,
      x: reduced ? 0 : direction === "left" ? 10 : direction === "right" ? -10 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: reduced ? 0.01 : 0.55,
        delay: reduced ? 0 : delay,
        ease: EASE,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
