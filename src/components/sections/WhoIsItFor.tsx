import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import type { Lang } from "@/types/language";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

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

            {/* Selector column */}
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

            {/* Detail panel */}
            <DetailPanel active={active} items={c.items} meta={meta} />
          </div>
        </FadeIn>

        {/* Mobile: horizontal scroll chips + detail panel */}
        <FadeIn delay={0.1} className="lg:hidden">
          <div className="flex gap-2 mb-5 overflow-x-auto -mx-5 px-5 pb-1 scrollbar-none">
            {c.items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 px-3.5 py-2.5 rounded-xl text-[12px] font-semibold transition-all duration-200 cursor-pointer border whitespace-nowrap ${
                  active === i
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "text-neutral-500 border-neutral-200 hover:border-neutral-400 hover:text-neutral-700"
                }`}
              >
                {meta[i].short}
              </button>
            ))}
          </div>
          <DetailPanel active={active} items={c.items} meta={meta} />
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
