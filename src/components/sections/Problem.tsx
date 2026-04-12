import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import type { Lang } from "@/types/language";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];
const AUTO_INTERVAL = 4800;

// Short selector labels + resonance pull quotes per problem item.
const EDITORIAL: Record<Lang, Array<{ short: string; resonance: string }>> = {
  en: [
    {
      short: "It feels overwhelming",
      resonance:
        "You open a tool, read three sentences, close the tab. It was not built for you. This course was.",
    },
    {
      short: "Everything sounds technical",
      resonance:
        'Every guide assumes you know what "LLM" means. You just want to know if AI can help you write an email.',
    },
    {
      short: "You feel behind",
      resonance:
        "The fear that everyone else already figured this out is the most common reason people never start.",
    },
    {
      short: "Not sure it applies to you",
      resonance:
        "It is not for engineers and startups. It is for anyone with a task and an internet connection.",
    },
  ],
  pidgin: [
    {
      short: "E feel like too much",
      resonance:
        "You open tool, you read three sentences, you close the tab. Dem no build am for you. We build this one for you.",
    },
    {
      short: "Everything sound technical",
      resonance:
        'Every guide assume say you sabi wetin "LLM" mean. You just wan know if AI fit help you write email.',
    },
    {
      short: "You feel like you dey behind",
      resonance:
        "The fear say everybody else don already figure this out na the most common reason people never start.",
    },
    {
      short: "No sure say e relate to you",
      resonance:
        "E no be for engineers and startups alone. E na for anybody wey get task and internet connection.",
    },
  ],
};

const panelVariants = {
  enter: (dir: number) => ({ opacity: 0, y: dir * 10 }),
  center: { opacity: 1, y: 0 },
  exit: (dir: number) => ({ opacity: 0, y: dir * -8 }),
};

export function Problem() {
  const { lang } = useLang();
  const c = content[lang].problem;
  const editorial = EDITORIAL[lang];

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const panelRef = useRef<HTMLDivElement>(null);

  const navigate = useCallback(
    (idx: number) => {
      setDirection(idx >= active ? 1 : -1);
      setActive(idx);
      setPaused(true);
      if (window.innerWidth < 1024) {
        setTimeout(() => {
          panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 80);
      }
    },
    [active]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setActive((i) => (i + 1) % c.items.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [paused, c.items.length]);

  useEffect(() => {
    if (!paused) return;
    const id = setTimeout(() => setPaused(false), 6000);
    return () => clearTimeout(id);
  }, [paused, active]);

  const item = c.items[active];
  const ed = editorial[active];

  return (
    <section
      className="py-16 sm:py-24 px-5 bg-ivory"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <FadeIn>
          <div className="mb-12 sm:mb-16">
            <SectionLabel className="mb-4">{c.label}</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-4 max-w-lg leading-tight">
              {c.heading}
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed max-w-[40ch]">
              {c.sub}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>

          {/* Mobile: horizontal number tabs */}
          <div className="flex gap-2 mb-5 lg:hidden">
            {c.items.map((_, i) => (
              <button
                key={i}
                onClick={() => navigate(i)}
                className={`flex-1 py-2.5 rounded-xl text-[11px] font-mono font-bold tracking-widest transition-all duration-200 cursor-pointer border ${
                  active === i
                    ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                    : "bg-transparent text-neutral-400 border-neutral-200 hover:border-neutral-400 hover:text-neutral-600"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>

          {/* Mobile progress bar — auto-advance indicator */}
          <div className="lg:hidden h-px mb-7 bg-neutral-200/60 overflow-hidden rounded-full">
            {!paused && (
              <motion.div
                key={`mob-prog-${active}`}
                className="h-full bg-brand-400/60"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTO_INTERVAL / 1000, ease: "linear" }}
              />
            )}
          </div>

          {/* Main layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-14 items-start">

            {/* Desktop selector — typographic index, not a card list */}
            <div className="hidden lg:block pt-1">
              {c.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => navigate(i)}
                  className="group relative w-full text-left focus:outline-none cursor-pointer"
                >
                  {/* Active left rule */}
                  <motion.div
                    className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full bg-brand-500"
                    initial={false}
                    animate={{
                      opacity: active === i ? 1 : 0,
                      scaleY: active === i ? 1 : 0.25,
                    }}
                    transition={{ duration: 0.2, ease: EASE }}
                    style={{ originY: "center" }}
                  />

                  <div
                    className={`pl-5 pr-1 py-4 border-b border-neutral-200/40 ${
                      i === 0 ? "border-t border-neutral-200/40" : ""
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span
                        className={`font-mono text-[10px] font-bold tracking-wider shrink-0 mt-[2px] transition-colors duration-200 ${
                          active === i ? "text-brand-500" : "text-neutral-300"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-[13px] leading-snug transition-all duration-200 ${
                          active === i
                            ? "text-neutral-900 font-semibold"
                            : "text-neutral-400 font-medium group-hover:text-neutral-600"
                        }`}
                      >
                        {editorial[i].short}
                      </span>
                    </div>

                    {/* Progress bar — active item only, below text */}
                    <AnimatePresence>
                      {active === i && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="mt-2.5 h-px bg-neutral-200/60 overflow-hidden rounded-full"
                        >
                          {!paused && (
                            <motion.div
                              key={`${i}-prog`}
                              className="h-full bg-brand-400/50"
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{
                                duration: AUTO_INTERVAL / 1000,
                                ease: "linear",
                              }}
                            />
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              ))}
            </div>

            {/* Detail area — editorial, no card */}
            <div ref={panelRef} className="lg:sticky lg:top-28">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  variants={panelVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.26, ease: EASE }}
                >
                  <h3 className="font-display font-bold text-[1.9rem] sm:text-[2.1rem] text-neutral-900 mb-5 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 text-base leading-relaxed max-w-[44ch]">
                    {item.body}
                  </p>
                  <div className="mt-7 pt-6 border-t border-neutral-200/50">
                    <p className="text-neutral-700 text-[15px] leading-relaxed">
                      {ed.resonance}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
