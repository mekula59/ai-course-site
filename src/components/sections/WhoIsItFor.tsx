import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import type { Lang } from "@/lib/content";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

// Short node labels (for orbital nodes and mobile chips).
// Editorial context note per audience — shown in the detail panel.
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
      short: "Beginners",
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
      short: "Beginners",
      note: "You be the reason we build this course. Module 01 dey start exactly where you dey. No assumed knowledge.",
    },
    {
      short: "Feeling behind",
      note: "The only way to stop falling behind na to start. Module 01 dey take under 60 minutes and e go change everything.",
    },
  ],
};

// Orbital geometry — 6 nodes on a circle.
// Container: 280×280px, center at (140,140), radius 100px.
const ORBITAL_SIZE = 280;
const ORBITAL_RADIUS = 100;
const ORBITAL_CENTER = ORBITAL_SIZE / 2;

const NODE_POSITIONS = Array.from({ length: 6 }, (_, i) => {
  const angleDeg = i * 60 - 90; // start from top, go clockwise
  const angleRad = angleDeg * (Math.PI / 180);
  return {
    x: ORBITAL_CENTER + ORBITAL_RADIUS * Math.cos(angleRad),
    y: ORBITAL_CENTER + ORBITAL_RADIUS * Math.sin(angleRad),
  };
});

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

  // Shared detail panel — used by both desktop orbital and mobile chip selector
  const detailPanel = (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={active}
        custom={direction}
        variants={panelVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.28, ease: EASE }}
        className="bg-surface rounded-2xl border border-neutral-200/70 overflow-hidden
          shadow-[0_2px_16px_rgba(26,18,8,0.07),0_1px_3px_rgba(26,18,8,0.04)]"
      >
        {/* Panel header */}
        <div className="px-6 py-3 border-b border-neutral-100 bg-ivory/50 flex items-center gap-2">
          <span className="font-mono text-[10px] font-bold text-brand-600 bg-brand-50 border border-brand-100 px-2 py-0.5 rounded-md tracking-wider">
            {String(active + 1).padStart(2, "0")}
          </span>
          <span className="text-xs text-neutral-400 font-medium">of {c.items.length}</span>
        </div>

        {/* Panel body */}
        <div className="px-6 py-4">
          <h3 className="font-display font-bold text-lg text-neutral-900 mb-3 leading-snug">
            {c.items[active].role}
          </h3>
          <p className="text-neutral-500 text-sm leading-relaxed mb-4">
            {c.items[active].desc}
          </p>
          <div className="border-l-2 border-brand-200 pl-3 py-0.5">
            <p className="text-neutral-600 text-sm font-medium leading-relaxed">
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

        {/* Desktop: orbital hub + detail panel */}
        <FadeIn delay={0.1} className="hidden lg:block">
          <div className="grid grid-cols-[300px_1fr] gap-10 items-center">

            {/* Orbital hub */}
            <div className="flex flex-col items-center">
              <div
                className="relative"
                style={{ width: ORBITAL_SIZE, height: ORBITAL_SIZE }}
              >
                {/* SVG connection lines — behind everything */}
                <svg
                  width={ORBITAL_SIZE}
                  height={ORBITAL_SIZE}
                  className="absolute inset-0 pointer-events-none"
                  style={{ zIndex: 0 }}
                >
                  {NODE_POSITIONS.map((pos, i) => (
                    <line
                      key={i}
                      x1={ORBITAL_CENTER}
                      y1={ORBITAL_CENTER}
                      x2={pos.x}
                      y2={pos.y}
                      stroke={active === i ? "#d1c0aa" : "#e5dfd8"}
                      strokeWidth={active === i ? 1.5 : 1}
                      strokeDasharray={active === i ? undefined : "3 4"}
                      strokeLinecap="round"
                    />
                  ))}
                </svg>

                {/* Center circle */}
                <div
                  className="absolute flex items-center justify-center"
                  style={{
                    left: ORBITAL_CENTER,
                    top: ORBITAL_CENTER,
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                    width: 60,
                    height: 60,
                  }}
                >
                  <div className="w-full h-full rounded-full bg-ivory border-2 border-neutral-200 flex items-center justify-center shadow-[0_1px_4px_rgba(26,18,8,0.08)]">
                    <span className="font-display font-bold text-xs text-neutral-400 text-center leading-tight select-none">
                      Is this<br />you?
                    </span>
                  </div>
                </div>

                {/* 6 orbital nodes */}
                {NODE_POSITIONS.map((pos, i) => (
                  <motion.button
                    key={i}
                    onClick={() => navigate(i)}
                    className="absolute focus:outline-none cursor-pointer"
                    style={{
                      left: pos.x,
                      top: pos.y,
                      transform: "translate(-50%, -50%)",
                      zIndex: 2,
                    }}
                    animate={{
                      scale: active === i ? 1.06 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  >
                    <span
                      className={`inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all duration-200 border ${
                        active === i
                          ? "bg-neutral-900 text-white border-neutral-900 shadow-[0_2px_8px_rgba(26,18,8,0.18)]"
                          : "bg-surface text-neutral-500 border-neutral-200 hover:border-neutral-400 hover:text-neutral-700 shadow-[0_1px_3px_rgba(26,18,8,0.06)]"
                      }`}
                    >
                      {meta[i].short}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Detail panel */}
            <div>{detailPanel}</div>
          </div>
        </FadeIn>

        {/* Mobile: chip selector + detail panel */}
        <FadeIn delay={0.1} className="lg:hidden">
          {/* Chip grid */}
          <div className="flex flex-wrap gap-2 mb-6">
            {c.items.map((_, i) => (
              <button
                key={i}
                onClick={() => navigate(i)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                  active === i
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-transparent text-neutral-500 border-neutral-200 hover:border-neutral-400 hover:text-neutral-700"
                }`}
              >
                {meta[i].short}
              </button>
            ))}
          </div>

          {/* Detail panel */}
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
