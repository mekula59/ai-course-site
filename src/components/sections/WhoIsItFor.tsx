import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import type { Lang } from "@/lib/content";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

// Short field labels (used in the scatter map — concise by design).
// Editorial notes per audience shown in the detail panel.
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

// Scatter field positions — intentional organic asymmetry, not circular.
// Each position is a percentage of the field container (360 × 210px on desktop).
// Arranged in three loose rows with deliberate left/right offset per row.
const FIELD_POSITIONS = [
  { top: "6%",  left: "3%"  },   // 0 — top-left
  { top: "6%",  left: "54%" },   // 1 — top-right
  { top: "42%", left: "8%"  },   // 2 — mid-left
  { top: "44%", left: "52%" },   // 3 — mid-right
  { top: "76%", left: "16%" },   // 4 — bottom, slightly right of left
  { top: "74%", left: "49%" },   // 5 — bottom-right
];

const panelVariants = {
  enter: (dir: number) => ({ opacity: 0, y: dir * 10 }),
  center: { opacity: 1, y: 0 },
  exit: (dir: number) => ({ opacity: 0, y: dir * -8 }),
};

export function WhoIsItFor() {
  const { lang } = useLang();
  const c = content[lang].whoIsItFor;
  const meta = AUDIENCE_META[lang];

  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };

  // Detail panel — shared between desktop and mobile layouts
  const detailPanel = (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={active}
        custom={direction}
        variants={panelVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.26, ease: EASE }}
        className="bg-surface rounded-2xl border border-neutral-200/70 overflow-hidden
          shadow-[0_2px_14px_rgba(26,18,8,0.06),0_1px_3px_rgba(26,18,8,0.04)]"
      >
        <div className="px-6 py-6 sm:py-7">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-900 mb-3 leading-snug">
            {c.items[active].role}
          </h3>
          <p className="text-neutral-500 text-sm leading-relaxed mb-5">
            {c.items[active].desc}
          </p>
          <div className="border-l-2 border-brand-200 pl-3.5 py-0.5">
            <p className="text-neutral-600 text-[13px] font-medium leading-relaxed">
              {meta[active].note}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );

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
            <p className="text-neutral-500 text-base max-w-xl mx-auto leading-relaxed">{c.sub}</p>
          </div>
        </FadeIn>

        {/* Desktop: scatter field + detail panel */}
        <FadeIn delay={0.1} className="hidden lg:block">
          <div className="grid grid-cols-[360px_1fr] gap-10 items-center">

            {/* Audience scatter field */}
            <div>
              {/* Field label */}
              <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-neutral-400 mb-4 pl-1">
                Select to explore
              </p>

              {/* Scatter container */}
              <div className="relative h-[210px]">
                {c.items.map((item, i) => (
                  <motion.button
                    key={i}
                    onClick={() => navigate(i)}
                    className="absolute focus:outline-none cursor-pointer"
                    style={{ top: FIELD_POSITIONS[i].top, left: FIELD_POSITIONS[i].left }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      animate={
                        active === i
                          ? {
                              backgroundColor: "rgba(26,18,8,1)",
                              color: "#fefcf9",
                            }
                          : {
                              backgroundColor: "rgba(26,18,8,0)",
                              color: "#7c756f",
                            }
                      }
                      whileHover={active !== i ? { color: "#1a1208" } : {}}
                      transition={{ duration: 0.18, ease: EASE }}
                      className="inline-flex items-center px-3 py-1.5 rounded-full
                        text-[13px] font-semibold whitespace-nowrap leading-none"
                    >
                      {meta[i].short}
                    </motion.span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Detail panel */}
            <div>{detailPanel}</div>
          </div>
        </FadeIn>

        {/* Mobile: 2-column grid selector + detail panel */}
        <FadeIn delay={0.1} className="lg:hidden">
          <div className="grid grid-cols-2 gap-2 mb-5">
            {c.items.map((item, i) => (
              <button
                key={i}
                onClick={() => navigate(i)}
                className={`px-3 py-3 rounded-xl text-[13px] font-semibold text-left
                  border transition-all duration-200 cursor-pointer leading-snug ${
                  active === i
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-transparent text-neutral-500 border-neutral-200 hover:border-neutral-400 hover:text-neutral-700"
                }`}
              >
                {meta[i].short}
              </button>
            ))}
          </div>
          <div>{detailPanel}</div>
        </FadeIn>

        {/* Bottom callout */}
        <FadeIn delay={0.3}>
          <div className="mt-10 px-6 py-5 bg-brand-50/60 border border-brand-100 rounded-2xl text-center">
            <p className="text-brand-800 font-medium text-sm sm:text-base">{c.callout}</p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
