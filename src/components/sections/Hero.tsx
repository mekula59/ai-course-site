import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export function Hero() {
  const { lang } = useLang();
  const c = content[lang].hero;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 pt-20 pb-16 bg-neutral-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-50 via-neutral-50 to-neutral-50 pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full mb-6">
            {c.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 leading-[1.12] tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
        >
          {c.headline}{" "}
          <span className="text-brand-500">{c.headlineAccent}</span>
        </motion.h1>

        <motion.p
          className="text-neutral-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
        >
          {c.sub}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3, ease: EASE }}
        >
          <Button
            size="lg"
            onClick={() =>
              document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {c.primaryCta}
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() =>
              document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {c.secondaryCta}
          </Button>
        </motion.div>

        <motion.p
          className="mt-6 text-sm text-neutral-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {c.nudge}
        </motion.p>
      </div>

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
