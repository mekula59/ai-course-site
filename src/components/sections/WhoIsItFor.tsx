import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import type { Lang } from "@/types/language";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];
const AUTO_DELAY = 5200; // ms — slow, deliberate pacing
const SWIPE_THRESHOLD = 45; // px

const AUDIENCE_META: Record<Lang, Array<{ short: string; note: string }>> = {
  en: [
    {
      short: "Professionals",
      note: "Modules 03 and 05 are built around your working week. Faster writing, better summaries, cleaner workflows.",
    },
    {
      short: "Business owners",
      note: "Content, customer replies, proposals — Modules 03 and 05 give you tools that work before you finish your tea.",
    },
    {
      short: "Students",
      note: "Better research and faster writing, without crossing any academic line. Module 04 is made for you.",
    },
    {
      short: "Job seekers",
      note: "A CV that actually speaks to the role, not a generic template. Module 03 covers this directly.",
    },
    {
      short: "Curious beginners",
      note: "You are the reason this course exists. Module 01 starts exactly where you are. No assumed knowledge.",
    },
    {
      short: "Feeling behind",
      note: "The only way to stop falling behind is to start. Module 01 takes under 60 minutes and changes everything.",
    },
  ],
  pidgin: [
    {
      short: "Professionals",
      note: "Module 03 and 05 dey build around your own working week. Faster writing, better summaries, cleaner workflows.",
    },
    {
      short: "Business owners",
      note: "Content, customer replies, proposals — Module 03 and 05 give you tools wey go work before you finish your tea.",
    },
    {
      short: "Students",
      note: "Better research and faster writing, without crossing any academic line. Module 04 na for you.",
    },
    {
      short: "Job seekers",
      note: "CV wey dey actually speak to the role, no be generic template. Module 03 dey cover this directly.",
    },
    {
      short: "Curious beginners",
      note: "You be the reason we build this course. Module 01 dey start exactly where you dey. No assumed knowledge.",
    },
    {
      short: "Feeling behind",
      note: "The only way to stop falling behind na to start. Module 01 dey take under 60 minutes and e go change everything.",
    },
  ],
};

// ─── Desktop detail panel (unchanged) ────────────────────────────────────────

interface DetailPanelProps {
  active: number;
  items: Array<{ role: string; desc: string }>;
  meta: Array<{ short: string; note: string }>;
}

function DetailPanel({ active, items, meta }: DetailPanelProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: EASE }}
        className="bg-neutral-900 rounded-2xl"
      >
        <div className="px-7 py-7 sm:py-8">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 leading-snug">
            {items[active].role}
          </h3>
          <p className="text-neutral-400 text-sm sm:text-[15px] leading-relaxed mb-5">
            {items[active].desc}
          </p>
          <div className="border-t border-neutral-800 pt-4">
            <p className="text-brand-400 text-[13px] leading-relaxed">
              {meta[active].note}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Mobile placard slider ────────────────────────────────────────────────────

interface MobileSliderProps {
  active: number;
  setActive: (i: number) => void;
  items: Array<{ role: string; desc: string }>;
  meta: Array<{ short: string; note: string }>;
}

function MobileSlider({ active, setActive, items, meta }: MobileSliderProps) {
  const count = items.length;
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  // Auto-advance — slow, deliberate
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setActive((active + 1) % count);
    }, AUTO_DELAY);
    return () => clearInterval(id);
  }, [paused, active, count, setActive]);

  const goTo = useCallback(
    (idx: number, dir: 1 | -1) => {
      setDirection(dir);
      setActive(idx);
      setPaused(true);
    },
    [setActive]
  );

  const handleDragEnd = useCallback(
    (_e: unknown, info: PanInfo) => {
      if (info.offset.x < -SWIPE_THRESHOLD) {
        goTo((active + 1) % count, 1);
      } else if (info.offset.x > SWIPE_THRESHOLD) {
        goTo((active - 1 + count) % count, -1);
      }
    },
    [active, count, goTo]
  );

  const cardVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 20 }),
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0 },
  };

  return (
    <div>
      {/* Card — full width, draggable */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={active}
          custom={direction}
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.48, ease: EASE }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.07}
          onDragEnd={handleDragEnd}
          className="bg-neutral-900 rounded-2xl select-none touch-pan-y cursor-grab active:cursor-grabbing"
          aria-live="polite"
        >
          <div className="px-6 pt-7 pb-7">
            {/* Audience title */}
            <h3 className="font-display font-bold text-[1.75rem] text-white leading-[1.1] tracking-tight mb-4">
              {items[active].role}
            </h3>

            {/* Description */}
            <p className="text-neutral-400 text-[15px] leading-[1.75] mb-6">
              {items[active].desc}
            </p>

            {/* Course note */}
            <div className="border-t border-neutral-800 pt-4">
              <p className="text-brand-400 text-[13px] leading-relaxed">
                {meta[active].note}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Auto-advance progress bar */}
      <div className="mt-3 h-[1.5px] bg-neutral-200/40 rounded-full overflow-hidden">
        {!paused && (
          <motion.div
            key={`prog-${active}`}
            className="h-full bg-brand-400/55"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: AUTO_DELAY / 1000, ease: "linear" }}
          />
        )}
      </div>

      {/* Position dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > active ? 1 : -1)}
            aria-label={`Card ${i + 1} of ${count}`}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              i === active
                ? "w-5 h-1.5 bg-neutral-800"
                : "w-1.5 h-1.5 bg-neutral-300 hover:bg-neutral-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function WhoIsItFor() {
  const { lang } = useLang();
  const c = content[lang].whoIsItFor;
  const meta = AUDIENCE_META[lang];
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 sm:py-24 px-5 bg-ivory">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16">
            <SectionLabel className="mb-4">{c.label}</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-4">
              {c.heading}
            </h2>
            <p className="text-neutral-500 text-base max-w-xl mx-auto leading-relaxed">
              {c.sub}
            </p>
          </div>
        </FadeIn>

        {/* Desktop: vertical pill selector + detail panel */}
        <FadeIn delay={0.1} className="hidden lg:block">
          <div className="grid grid-cols-[220px_1fr] gap-12 items-start">

            <nav className="flex flex-col gap-1" aria-label="Audience selector">
              {c.items.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActive(i)}
                  whileTap={{ scale: 0.97 }}
                  className="relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-xl cursor-pointer"
                >
                  <motion.span
                    animate={
                      active === i
                        ? { backgroundColor: "rgba(26,18,8,0.95)", color: "#fefcf9" }
                        : { backgroundColor: "rgba(26,18,8,0)", color: "#9d958f" }
                    }
                    whileHover={active !== i ? { color: "#1a1208" } : {}}
                    transition={{ duration: 0.16, ease: EASE }}
                    className="flex w-full items-center px-4 py-2.5 rounded-xl text-[14px] font-semibold leading-snug"
                  >
                    {meta[i].short}
                  </motion.span>
                </motion.button>
              ))}
            </nav>

            <DetailPanel active={active} items={c.items} meta={meta} />
          </div>
        </FadeIn>

        {/* Mobile: premium placard slider */}
        <FadeIn delay={0.1} className="lg:hidden">
          <MobileSlider
            active={active}
            setActive={setActive}
            items={c.items}
            meta={meta}
          />
        </FadeIn>

        {/* Bottom callout */}
        <FadeIn delay={0.3}>
          <div className="mt-10 pt-7 border-t border-neutral-200/60 text-center">
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              {c.callout}
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
