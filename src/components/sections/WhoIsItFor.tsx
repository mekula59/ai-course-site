import { useState, useEffect, useCallback } from "react";
import type { Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import type { Lang } from "@/types/language";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];
const AUTO_DELAY = 5600;
const SWIPE_THRESHOLD = 40;

const AUDIENCE_META: Record<Lang, Array<{ short: string; note: string }>> = {
  en: [
    {
      short: "Professionals",
      note: "Modules 03 and 05 are shaped around your working week. Faster writing, better summaries, cleaner workflows.",
    },
    {
      short: "Business owners",
      note: "Content, customer replies, proposals. Modules 03 and 05 focus on work you can apply immediately.",
    },
    {
      short: "Students",
      note: "Better research and stronger writing, without crossing any academic line. Module 04 is built for this.",
    },
    {
      short: "Job seekers",
      note: "A CV and cover letter that sound relevant to the role, not generic. Module 03 covers this directly.",
    },
    {
      short: "Curious beginners",
      note: "Module 01 starts exactly where you are. No assumed knowledge, no technical barrier to entry.",
    },
    {
      short: "Feeling behind",
      note: "Module 01 takes under an hour and gives you a clear place to begin instead of more overwhelm.",
    },
  ],
  pidgin: [
    {
      short: "Professionals",
      note: "Module 03 and 05 dey shaped around your working week. Faster writing, better summaries, cleaner workflows.",
    },
    {
      short: "Business owners",
      note: "Content, customer replies, proposals. Module 03 and 05 focus on work wey you fit apply immediately.",
    },
    {
      short: "Students",
      note: "Better research and stronger writing, without crossing any academic line. Module 04 na for this.",
    },
    {
      short: "Job seekers",
      note: "CV and cover letter wey sound relevant to the role, no be generic. Module 03 dey cover this directly.",
    },
    {
      short: "Curious beginners",
      note: "Module 01 dey start exactly where you dey. No assumed knowledge and no technical barrier.",
    },
    {
      short: "Feeling behind",
      note: "Module 01 no reach one hour and e give you clear place to begin instead of more overwhelm.",
    },
  ],
};

interface AudienceItem {
  role: string;
  desc: string;
}

interface DetailPanelProps {
  active: number;
  items: AudienceItem[];
  meta: Array<{ short: string; note: string }>;
}

function DetailPanel({ active, items, meta }: DetailPanelProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-neutral-900/10 bg-[#1b140d] p-6 text-white shadow-[0_28px_80px_rgba(64,33,10,0.18)] sm:p-8 lg:min-h-[28rem] lg:p-10">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        animate={
          reducedMotion
            ? undefined
            : {
                opacity: [0.7, 0.92, 0.7],
              }
        }
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: reducedMotion ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reducedMotion ? 0 : -8 }}
          transition={{ duration: reducedMotion ? 0.01 : 0.42, ease: EASE }}
          className="relative flex h-full flex-col justify-between"
        >
          <div>
            <div className="mb-8 flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-amber-200">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-white/55">{meta[active].short}</span>
              </div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/28">
                In view
              </span>
            </div>

            <h3 className="mb-4 max-w-[14ch] font-display text-[2rem] leading-[1.03] font-bold tracking-[-0.03em] text-white sm:text-[2.35rem]">
              {items[active].role}
            </h3>
            <p className="max-w-[42ch] text-[15px] leading-[1.8] text-white/74 sm:text-[16px]">
              {items[active].desc}
            </p>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/34">
              Good place to begin
            </p>
            <p className="max-w-[42ch] text-sm leading-relaxed text-amber-100/80">
              {meta[active].note}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

interface MobileSliderProps {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  items: AudienceItem[];
  meta: Array<{ short: string; note: string }>;
}

function MobileSlider({ active, setActive, items, meta }: MobileSliderProps) {
  const count = items.length;
  const reducedMotion = useReducedMotion();
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setActive((current) => (current + 1) % count);
    }, AUTO_DELAY);
    return () => window.clearInterval(id);
  }, [paused, count, setActive]);

  useEffect(() => {
    if (!paused) return;
    const id = window.setTimeout(() => setPaused(false), 9000);
    return () => window.clearTimeout(id);
  }, [paused]);

  const goTo = useCallback(
    (idx: number, dir: 1 | -1) => {
      setDirection(dir);
      setActive(idx);
      setPaused(true);
    },
    [setActive]
  );

  const handleDragEnd = useCallback(
    (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (info.offset.x < -SWIPE_THRESHOLD) {
        goTo((active + 1) % count, 1);
      } else if (info.offset.x > SWIPE_THRESHOLD) {
        goTo((active - 1 + count) % count, -1);
      }
    },
    [active, count, goTo]
  );

  const cardVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: reducedMotion ? 0 : dir * 28,
      scale: reducedMotion ? 1 : 0.985,
    }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({
      opacity: 0,
      x: reducedMotion ? 0 : dir * -18,
      scale: reducedMotion ? 1 : 0.99,
    }),
  };

  return (
    <div className="lg:hidden">
      <div className="relative overflow-hidden rounded-[2rem] border border-neutral-900/10 bg-[#1b140d] text-white shadow-[0_28px_80px_rgba(64,33,10,0.15)]">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          animate={
            reducedMotion
              ? undefined
              : {
                  opacity: [0.72, 0.9, 0.72],
                }
          }
          transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
        />

        <div className="relative px-5 pt-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-amber-200/90">
              Who this fits
            </span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/36">
              {String(active + 1).padStart(2, "0")} / {count}
            </span>
          </div>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: reducedMotion ? 0.01 : 0.5, ease: EASE }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragStart={() => setPaused(true)}
            onDragEnd={handleDragEnd}
            className="relative px-5 pb-5 select-none touch-pan-y cursor-grab active:cursor-grabbing"
            aria-live="polite"
          >
            <div className="rounded-[1.65rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                  {meta[active].short}
                </span>
              </div>

              <h3 className="mb-4 max-w-[12ch] font-display text-[2rem] leading-[1.03] font-bold tracking-[-0.03em] text-white">
                {items[active].role}
              </h3>
              <p className="mb-7 text-[15px] leading-[1.8] text-white/76">
                {items[active].desc}
              </p>

              <div className="border-t border-white/10 pt-5">
                <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/34">
                  Good place to begin
                </p>
                <p className="text-[13px] leading-relaxed text-amber-100/80">
                  {meta[active].note}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 h-[2px] overflow-hidden rounded-full bg-neutral-300/70">
        {!paused && (
          <motion.div
            key={`prog-${active}`}
            className="h-full rounded-full bg-neutral-900/70"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: AUTO_DELAY / 1000, ease: "linear" }}
          />
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > active ? 1 : -1)}
              aria-label={`Card ${i + 1} of ${count}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "h-1.5 w-7 bg-neutral-900"
                  : "h-1.5 w-1.5 bg-neutral-400"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => goTo((active - 1 + count) % count, -1)}
            aria-label="Previous audience"
            className="rounded-full border border-neutral-300 bg-white px-3.5 py-2 text-sm text-neutral-700"
          >
            Prev
          </button>
          <button
            onClick={() => goTo((active + 1) % count, 1)}
            aria-label="Next audience"
            className="rounded-full border border-neutral-900 bg-neutral-900 px-3.5 py-2 text-sm text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export function WhoIsItFor() {
  const { lang } = useLang();
  const c = content[lang].whoIsItFor;
  const meta = AUDIENCE_META[lang];
  const [active, setActive] = useState(0);

  return (
    <section className="bg-ivory px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12 max-w-2xl sm:mb-16">
            <SectionLabel className="mb-4">{c.label}</SectionLabel>
            <h2 className="mt-4 mb-4 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
              {c.heading}
            </h2>
            <p className="max-w-[46ch] text-base leading-relaxed text-neutral-500">
              {c.sub}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="hidden lg:block">
          <div className="grid items-start gap-10 lg:grid-cols-[280px_minmax(0,1fr)] xl:gap-14">
            <nav
              aria-label="Audience selector"
              className="rounded-[1.75rem] border border-neutral-900/8 bg-white/65 p-3 shadow-[0_18px_40px_rgba(24,15,8,0.06)] backdrop-blur-sm"
            >
              <div className="mb-4 px-3 pt-2">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-400">
                  Choose the closest fit
                </p>
              </div>

              <div className="space-y-1.5">
                {c.items.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setActive(i)}
                    layout
                    className="relative w-full overflow-hidden rounded-[1.2rem] px-4 py-4 text-left focus:outline-none"
                    transition={{ layout: { duration: 0.35, ease: EASE } }}
                  >
                    {active === i ? (
                      <motion.span
                        layoutId="who-active-tab"
                        className="absolute inset-0 rounded-[1.2rem] border border-neutral-900/10 bg-neutral-900"
                        transition={{ duration: 0.35, ease: EASE }}
                      />
                    ) : null}

                    <span className="relative flex items-start gap-4">
                      <span
                        className={`mt-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] ${
                          active === i ? "text-amber-200" : "text-neutral-400"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block text-[15px] leading-snug ${
                            active === i
                              ? "font-semibold text-white"
                              : "font-medium text-neutral-700"
                          }`}
                        >
                          {meta[i].short}
                        </span>
                        <span
                          className={`mt-1 block text-[13px] leading-relaxed ${
                            active === i ? "text-white/60" : "text-neutral-400"
                          }`}
                        >
                          {c.items[i].role}
                        </span>
                      </span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </nav>

            <DetailPanel active={active} items={c.items} meta={meta} />
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="lg:hidden">
          <MobileSlider
            active={active}
            setActive={setActive}
            items={c.items}
            meta={meta}
          />
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mt-10 border-t border-neutral-200/70 pt-7">
            <p className="max-w-[48ch] text-sm leading-relaxed text-neutral-500 sm:text-base">
              {c.callout}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
