import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const STATS = [
  { value: "50+", label: "lessons" },
  { value: "EN/PID", label: "bilingual" },
  { value: "0", label: "jargon" },
];

// Lesson 1 insight — concrete analogy, not abstract philosophy
const DEMO_EN =
  "You don't need to understand how AI works any more than you need to understand electricity to turn on a light switch.";
const DEMO_PIDGIN =
  "You no need to understand how AI dey work, just like you no need to understand electricity before you on light. Just sabi how to use am.";

export function Hero() {
  const { lang } = useLang();
  const c = content[lang].hero;
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Both columns fade and lift together as you scroll out
  const colY = useTransform(scrollYProgress, [0, 0.65], [0, -80]);
  const colOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-ivory">
      {/* Warm top-right glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100/60 via-brand-50/20 to-transparent pointer-events-none" />
      {/* Bottom dissolve */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-white pointer-events-none z-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 min-h-screen flex items-center pt-24 pb-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-center">

          {/* Left: text content */}
          <motion.div style={{ y: colY, opacity: colOpacity }}>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-widest uppercase text-brand-600">
                <span className="w-6 h-px bg-brand-400" />
                {c.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-[3rem] sm:text-[3.75rem] lg:text-[4.25rem] xl:text-[5rem] font-extrabold text-neutral-900 leading-[1.04] tracking-tight mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
            >
              {c.headline}
              <br />
              <span className="text-brand-500 italic">{c.headlineAccent}</span>
            </motion.h1>

            <motion.p
              className="text-neutral-500 text-base sm:text-[17px] leading-[1.75] mb-10 max-w-[44ch]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24, ease: EASE }}
            >
              {c.sub}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36, ease: EASE }}
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

            {/* Stats + nudge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-0 mb-3">
                {STATS.map((s, i) => (
                  <div key={s.value} className="flex items-center">
                    <div className={i === 0 ? "pr-4" : "px-4"}>
                      <span className="font-display font-semibold text-sm text-neutral-700">
                        {s.value}
                      </span>
                      <span className="text-neutral-400 text-sm"> {s.label}</span>
                    </div>
                    {i < STATS.length - 1 && (
                      <span className="text-neutral-200 text-xs select-none">·</span>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-400">{c.nudge}</p>
            </motion.div>
          </motion.div>

          {/* Right: bilingual course preview card — desktop only */}
          <motion.div
            className="hidden lg:block"
            style={{ y: colY, opacity: colOpacity }}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
          >
            {/* Slow float — makes the card feel alive */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="rounded-2xl border border-neutral-200 overflow-hidden shadow-[0_4px_24px_rgba(28,25,23,0.10)] bg-white">

                {/* Card header — lesson reference + progress */}
                <div className="px-6 py-4 border-b border-neutral-100 bg-neutral-50 flex items-center gap-3">
                  <span className="font-mono text-[11px] font-bold text-brand-500 bg-brand-50 border border-brand-200 px-2 py-0.5 rounded-md">
                    01
                  </span>
                  <span className="text-sm font-semibold text-neutral-700 flex-1">What AI Actually Is</span>
                  <span className="text-[10px] text-neutral-400 font-medium tabular-nums">1 of 8</span>
                </div>

                {/* English panel — quieter, recedes */}
                <div className="px-6 py-6 border-b border-neutral-100">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-neutral-400 mb-3">
                    Plain English
                  </p>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    "{DEMO_EN}"
                  </p>
                </div>

                {/* Pidgin panel — warmer, leads */}
                <div className="px-6 py-6 bg-brand-50 border-l-2 border-l-brand-300">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-brand-500 mb-3">
                    🇳🇬 Nigerian Pidgin
                  </p>
                  <p className="text-neutral-800 text-sm leading-relaxed font-medium">
                    "{DEMO_PIDGIN}"
                  </p>
                </div>

                {/* Card footer */}
                <div className="px-6 py-4 border-t border-neutral-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                  <span className="text-xs text-neutral-500">
                    Every lesson works in both languages
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Below-card: language toggle indicator */}
            <div className="mt-5 flex items-center gap-2 px-1">
              <div className="flex gap-1.5">
                <span className="text-xs font-semibold text-neutral-700 bg-neutral-100 px-2.5 py-1 rounded-full">EN</span>
                <span className="text-xs font-semibold text-brand-600 bg-brand-50 border border-brand-200 px-2.5 py-1 rounded-full">PID</span>
              </div>
              <span className="text-xs text-neutral-400">Choose your language. Switch anytime.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
