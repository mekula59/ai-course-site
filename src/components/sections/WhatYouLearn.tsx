import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import type { Lang } from "@/lib/content";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

// Stage grouping — three phases of the learning journey.
// Names and descriptions are language-specific.
// Items are index references into c.outcomes (language-agnostic — same order in EN and Pidgin).
const STAGE_ITEMS: number[][] = [
  [0, 1],       // Understand — outcomes 1, 2
  [2, 3, 4, 5], // Use        — outcomes 3, 4, 5, 6
  [6, 7, 8],    // Trust      — outcomes 7, 8, 9
];

const STAGES: Record<Lang, Array<{ name: string; desc: string }>> = {
  en: [
    {
      name: "Understand",
      desc: "Get clear on what AI actually is. No jargon, no fear, no assumed knowledge.",
    },
    {
      name: "Use",
      desc: "Build real skills. Writing, research, automation — applied to your actual life.",
    },
    {
      name: "Trust",
      desc: "Know the limits. Stay safe, stay current, and use AI with real confidence.",
    },
  ],
  pidgin: [
    {
      name: "Understand",
      desc: "Get clear on wetin AI actually be. No jargon, no fear, no assumed knowledge.",
    },
    {
      name: "Use",
      desc: "Build real skills. Writing, research, automation — applied to your actual life.",
    },
    {
      name: "Trust",
      desc: "Know the limits. Stay safe, stay current, and use AI with real confidence.",
    },
  ],
};

// Per-outcome context — shown on expand.
// One per outcome, indexed to match c.outcomes order.
const SKILL_META: Record<Lang, Array<{ tag: string; why: string }>> = {
  en: [
    { tag: "Mod 01", why: "Once the fear goes, everything becomes possible. This is where most people get unstuck." },
    { tag: "Mod 02", why: "Free to start, no setup required. You will be using real tools within the first lesson." },
    { tag: "Mod 03", why: "Writing is where most people save the most time. This module alone is worth the course." },
    { tag: "Mod 05", why: "The right prompt turns 30 minutes of repetitive work into under 60 seconds." },
    { tag: "Mod 04", why: "Stop searching through ten tabs. Start asking one clear question and getting a focused answer." },
    { tag: "Mod 05", why: "This is where the course becomes about your life, not a generic demo." },
    { tag: "Mod 06", why: "Knowing the limits makes you a smarter, more confident user of AI." },
    { tag: "Mod 06", why: "Confidence comes from knowing what to watch out for, not from blind trust." },
    { tag: "Mod 06", why: "AI is moving fast. This skill means you stay current without having to follow every update." },
  ],
  pidgin: [
    { tag: "Mod 01", why: "Once the fear go, everything go become possible. This na where most people dey unstuck." },
    { tag: "Mod 02", why: "E free to start, no setup required. You go dey use real tools inside the first lesson." },
    { tag: "Mod 03", why: "Writing na where most people dey save the most time. This module alone worth the course." },
    { tag: "Mod 05", why: "The right prompt go turn 30 minutes of work to under 60 seconds." },
    { tag: "Mod 04", why: "Stop dey search through ten tabs. Start dey ask one clear question and get focused answer." },
    { tag: "Mod 05", why: "This na where the course become about your own life, no be generic demo." },
    { tag: "Mod 06", why: "Knowing the limits go make you smarter, more confident user of AI." },
    { tag: "Mod 06", why: "Confidence dey come from knowing wetin to watch out for, no be blind trust." },
    { tag: "Mod 06", why: "AI dey move fast. This skill mean you go stay current without dey follow every update." },
  ],
};

export function WhatYouLearn() {
  const { lang } = useLang();
  const c = content[lang].whatYouLearn;
  const meta = SKILL_META[lang];
  const stages = STAGES[lang];

  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section className="py-16 sm:py-24 px-5 bg-ivory">
      <div className="max-w-5xl mx-auto">

        {/* Section intro — editorial split header */}
        <FadeIn>
          <div className="mb-12 sm:mb-16">
            <SectionLabel className="mb-4">{c.label}</SectionLabel>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-16 items-start">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
                {c.heading}
              </h2>
              <p className="text-neutral-500 text-base leading-relaxed lg:pt-2">
                {c.body1}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* 3-stage curriculum map */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12 xl:gap-x-12">
            {stages.map((stage, si) => (
              <div key={si}>

                {/* Stage header — chapter marker style */}
                <div className="border-t-2 border-neutral-200 pt-4 mb-6">
                  <span className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-neutral-400">
                    Stage {String(si + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display font-bold text-xl text-neutral-900 mt-2 mb-2">
                    {stage.name}
                  </h3>
                  <p className="text-neutral-500 text-[13px] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                {/* Outcomes in this stage */}
                <div className="divide-y divide-neutral-100">
                  {STAGE_ITEMS[si].map((idx) => (
                    <div key={idx}>
                      <button
                        onClick={() => toggle(idx)}
                        className="group w-full text-left py-3.5 flex items-start gap-3 focus:outline-none cursor-pointer"
                      >
                        {/* Outcome text */}
                        <span
                          className={`flex-1 text-sm leading-snug transition-colors duration-150 ${
                            open === idx
                              ? "text-neutral-900 font-medium"
                              : "text-neutral-600 group-hover:text-neutral-900"
                          }`}
                        >
                          {c.outcomes[idx]}
                        </span>

                        {/* Tag + expand indicator */}
                        <div className="flex items-center gap-2 shrink-0 mt-[1px]">
                          <span
                            className={`font-mono text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded border transition-all duration-150 ${
                              open === idx
                                ? "text-brand-600 bg-brand-50 border-brand-100"
                                : "text-neutral-400 border-neutral-200/70 group-hover:border-neutral-300"
                            }`}
                          >
                            {meta[idx].tag}
                          </span>
                          <span
                            className={`font-mono text-[12px] w-3 text-center leading-none transition-colors duration-150 select-none ${
                              open === idx ? "text-brand-500" : "text-neutral-300 group-hover:text-neutral-500"
                            }`}
                          >
                            {open === idx ? "−" : "+"}
                          </span>
                        </div>
                      </button>

                      {/* Contextual reveal */}
                      <AnimatePresence>
                        {open === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <p className="text-[13px] text-neutral-500 leading-relaxed italic pb-3.5 pr-6">
                              {meta[idx].why}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </FadeIn>

        {/* Closing thought — full width, separated */}
        <FadeIn delay={0.2}>
          <div className="mt-12 sm:mt-16 pt-8 border-t border-neutral-200/60">
            <p className="text-neutral-500 text-base leading-relaxed max-w-2xl">
              {c.body2}
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
