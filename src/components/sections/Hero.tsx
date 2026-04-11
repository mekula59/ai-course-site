import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const STATS = [
  { value: "50+", label: "lessons" },
  { value: "2", label: "languages" },
  { value: "100%", label: "practical" },
];

export function Hero() {
  const { lang } = useLang();
  const c = content[lang].hero;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 pt-24 pb-20 bg-neutral-50 overflow-hidden">
      {/* Editorial background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,_var(--tw-gradient-stops))] from-brand-100/60 via-neutral-50 to-neutral-50 pointer-events-none" />

      {/* Large decorative word — editorial feel */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] font-display font-black text-[18vw] sm:text-[14vw] text-neutral-200/50 select-none pointer-events-none whitespace-nowrap leading-none tracking-tighter"
      >
        AI
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 bg-white border border-brand-200 px-3 py-1.5 rounded-full mb-8 shadow-sm">
            {c.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-900 leading-[1.08] tracking-tight mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
        >
          {c.headline}{" "}
          <span className="text-brand-500 italic">{c.headlineAccent}</span>
        </motion.h1>

        <motion.p
          className="text-neutral-500 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: EASE }}
        >
          {c.sub}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease: EASE }}
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

        {/* Stats strip */}
        <motion.div
          className="flex items-center justify-center gap-6 sm:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.42 }}
        >
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display font-bold text-xl text-neutral-900">{s.value}</div>
              <div className="text-xs text-neutral-400 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="mt-6 text-sm text-neutral-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          {c.nudge}
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-300"
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
