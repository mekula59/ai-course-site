import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { content } from "@/lib/content";
import type { Lang } from "@/types/language";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

// Stage grouping for the current four-module beginner course.
// Names and descriptions are language-specific.
// Items are index references into c.outcomes, same order in EN and Pidgin.
const STAGE_ITEMS: number[][] = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7, 8],
];

const STAGES: Record<Lang, Array<{ name: string; desc: string }>> = {
  en: [
    {
      name: "Understand",
      desc: "Start with what AI chat tools are, what they can do, and where they can go wrong.",
    },
    {
      name: "Ask",
      desc: "Learn how to give AI the task, context, tone, and format it needs.",
    },
    {
      name: "Use",
      desc: "Apply AI to real work, school, business, writing, summaries, planning, and daily tasks.",
    },
    {
      name: "Check",
      desc: "Review answers, protect private details, and build a simple habit you can keep using.",
    },
  ],
  pidgin: [
    {
      name: "Understand",
      desc: "Start with wetin AI chat tools be, wetin dem fit do, and where dem fit miss road.",
    },
    {
      name: "Ask",
      desc: "Learn how to give AI the task, context, tone, and format wey e need.",
    },
    {
      name: "Use",
      desc: "Use AI for real work, school, business, writing, summaries, planning, and daily tasks.",
    },
    {
      name: "Check",
      desc: "Check answers, protect private details, and build simple habit wey you fit continue.",
    },
  ],
};

// Per-outcome context shown on expand.
// One per outcome, indexed to match c.outcomes order.
const SKILL_META: Record<Lang, Array<{ tag: string; why: string }>> = {
  en: [
    { tag: "Start Here", why: "You begin with plain language, real examples, and one small task you can try right away." },
    { tag: "Module 1", why: "This is where AI stops feeling mysterious. You learn what it can help with and when to slow down." },
    { tag: "Module 2", why: "Better answers usually start with clearer requests. This module teaches you how to ask without big grammar." },
    { tag: "Module 2", why: "You learn to include the task, audience, details, tone, and format before AI starts guessing." },
    { tag: "Module 3", why: "This is where the course becomes practical: writing, summaries, study, business, planning, and daily tasks." },
    { tag: "Module 3", why: "A weak first answer is not the end. You learn how to adjust it until it fits your real situation." },
    { tag: "Module 4", why: "AI can sound sure and still be wrong. This module teaches you what to check before using an answer." },
    { tag: "Module 4", why: "You learn what not to paste into AI, and how to remove private details before asking for help." },
    { tag: "Wrap-up", why: "The course ends with a simple routine: ask, check, edit, and use what actually makes sense." },
  ],
  pidgin: [
    { tag: "Start Here", why: "You go start with simple language, real examples, and one small task wey you fit try immediately." },
    { tag: "Module 1", why: "Na here AI no go look mysterious again. You go learn where e fit help and when you suppose calm down." },
    { tag: "Module 2", why: "Better answer usually start with clearer request. This module go show you how to ask without big grammar." },
    { tag: "Module 2", why: "You go learn to add task, audience, details, tone, and format before AI start to guess." },
    { tag: "Module 3", why: "Na here the course become practical: writing, summaries, study, business, planning, and everyday tasks." },
    { tag: "Module 3", why: "Weak first answer no mean you don finish. You go learn how to adjust am until e fit your real matter." },
    { tag: "Module 4", why: "AI fit sound sure and still wrong. This module go show you wetin to check before you use answer." },
    { tag: "Module 4", why: "You go learn wetin you no suppose paste inside AI, and how to remove private details before you ask for help." },
    { tag: "Wrap-up", why: "The course end with simple routine: ask, check, edit, and use wetin actually make sense." },
  ],
};

export function WhatYouLearn() {
  const { lang } = useLang();
  const { theme } = useTheme();
  const isDark = theme === "dark";
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

        {/* Four-stage curriculum map */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 xl:gap-x-10">
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
                        className="group w-full text-left py-3.5 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 focus:outline-none cursor-pointer"
                      >
                        {/* Outcome text */}
                        <span
                          className={`flex-1 text-sm leading-snug transition-colors duration-150 ${
                            open === idx
                              ? "text-neutral-900 font-medium"
                              : "text-neutral-600 group-hover:text-neutral-900"
                          }`}
                          style={
                            isDark
                              ? { color: open === idx ? "#f4ede3" : "#d6c6b5" }
                              : undefined
                          }
                        >
                          {c.outcomes[idx]}
                        </span>

                        {/* Tag + expand indicator */}
                        <div className="flex items-center gap-2 shrink-0 mt-[1px]">
                          <span
                            className={`font-mono text-[9px] font-bold tracking-wider px-2 py-1 rounded-full border transition-all duration-150 ${
                              open === idx
                                ? "text-brand-600 bg-brand-50 border-brand-100"
                                : "text-neutral-400 border-neutral-200/70 group-hover:border-neutral-300"
                            }`}
                            style={
                              isDark
                                ? open === idx
                                  ? {
                                      backgroundColor: "rgb(223 114 32 / 0.16)",
                                      borderColor: "rgb(223 114 32 / 0.46)",
                                      color: "#f2b778",
                                    }
                                  : {
                                      borderColor: "rgb(99 70 52 / 0.62)",
                                      color: "#b09c8d",
                                    }
                                : undefined
                            }
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
