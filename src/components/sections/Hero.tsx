import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 pt-20 pb-16 bg-neutral-50 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-50 via-neutral-50 to-neutral-50 pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full mb-6">
            Beginner AI Course
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 leading-[1.12] tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          AI is changing everything.{" "}
          <span className="text-brand-500">Start using it.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="text-neutral-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          You already use Google, WhatsApp, and YouTube. Learning to use AI is no different.
          This course shows you how, step by step, in plain English and Nigerian Pidgin.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Button
            size="lg"
            onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Early Access
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })}
          >
            See the Course
          </Button>
        </motion.div>

        {/* Social proof nudge */}
        <motion.p
          className="mt-6 text-sm text-neutral-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Free to join. No spam. Waitlist members get access first.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
