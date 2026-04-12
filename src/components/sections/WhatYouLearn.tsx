import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import type { Lang } from "@/lib/content";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

// Module tag + "why this matters" — turns a static list into a scannable workbook.
// One row per outcome. Click to reveal the why. One open at a time.
const SKILL_META: Record<Lang, Array<{ tag: string; why: string }>> = {
  en: [
    { tag: "Mod 01", why: "Once the fear goes, everything becomes possible. This is where most people get unstuck." },
    { tag: "Mod 02", why: "Free to start, no setup required. You'll be using real tools within the first lesson." },
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
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section className="py-16 sm:py-24 px-5 bg-ivory">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: editorial header — unchanged */}
          <FadeIn>
            <div className="lg:sticky lg:top-28">
              <SectionLabel className="mb-4">{c.label}</SectionLabel>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-5">
                {c.heading}
              </h2>
              <p className="text-neutral-500 text-base leading-relaxed mb-5">{c.body1}</p>
              <p className="text-neutral-500 text-base leading-relaxed">{c.body2}</p>
            </div>
          </FadeIn>

          {/* Right: interactive skill explorer */}
          <FadeIn delay={0.1}>
            <div className="bg-surface rounded-2xl border border-neutral-200/70 overflow-hidden
              shadow-[0_2px_12px_rgba(26,18,8,0.05),0_1px_3px_rgba(26,18,8,0.04)]">
              {c.outcomes.map((outcome, i) => (
                <div key={i} className="border-b border-neutral-100/80 last:border-0">
                  {/* Skill row — clickable */}
                  <button
                    onClick={() => toggle(i)}
                    className="group w-full text-left px-5 py-3.5 flex items-center gap-3.5 focus:outline-none cursor-pointer
                      hover:bg-neutral-50/60 transition-colors duration-150"
                  >
                    {/* Number badge */}
                    <span
                      className={`font-mono text-[11px] font-bold shrink-0 transition-colors duration-200 ${
                        open === i ? "text-brand-500" : "text-neutral-300 group-hover:text-neutral-400"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Outcome text */}
                    <span
                      className={`flex-1 text-sm leading-snug transition-colors duration-200 ${
                        open === i ? "text-neutral-900 font-medium" : "text-neutral-600 group-hover:text-neutral-800"
                      }`}
                    >
                      {outcome}
                    </span>

                    {/* Module tag */}
                    <span
                      className={`text-[10px] font-bold font-mono tracking-wider shrink-0 px-2 py-0.5 rounded-md border transition-all duration-200 ${
                        open === i
                          ? "text-brand-600 bg-brand-50 border-brand-100"
                          : "text-neutral-400 bg-transparent border-neutral-200/60 group-hover:border-neutral-300"
                      }`}
                    >
                      {meta[i].tag}
                    </span>

                    {/* Chevron */}
                    <motion.span
                      animate={{ rotate: open === i ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: EASE }}
                      className="shrink-0"
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-colors duration-200 ${
                          open === i ? "text-brand-400" : "text-neutral-300 group-hover:text-neutral-400"
                        }`}
                      />
                    </motion.span>
                  </button>

                  {/* Expandable "why this matters" */}
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-4 pl-[52px]">
                          <div className="border-l-2 border-brand-200 pl-3 py-0.5">
                            <p className="text-[13px] text-neutral-500 leading-relaxed">
                              {meta[i].why}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
