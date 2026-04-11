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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 pt-24 pb-20 bg-white overflow-hidden">
      {/* Warm radial glow — top center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,_var(--tw-gradient-stops))] from-brand-100/50 via-white to-white pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-brand-600">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500" />
            {c.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-neutral-900 leading-[1.06] tracking-tight mb-7"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
        >
          {c.headline}
          <br />
          <span className="text-brand-500 italic">{c.headlineAccent}</span>
        </motion.h1>

        <motion.p
          className="text-neutral-500 text-base sm:text-[17px] leading-[1.7] mb-10 max-w-md mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: EASE }}
        >
          {c.sub}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 14 }}
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

        {/* Editorial stats strip */}
        <motion.div
          className="flex items-center justify-center mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.38 }}
        >
          {STATS.map((s, i) => (
            <div key={s.value} className="flex items-center">
              <div className="px-4 text-center">
                <span className="font-display font-semibold text-sm text-neutral-700">{s.value}</span>
                <span className="text-neutral-400 text-sm"> {s.label}</span>
              </div>
              {i < STATS.length - 1 && (
                <span className="text-neutral-200 text-xs select-none">·</span>
              )}
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-sm text-neutral-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.50 }}
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
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
