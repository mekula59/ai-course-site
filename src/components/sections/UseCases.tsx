import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export function UseCases() {
  const { lang } = useLang();
  const c = content[lang].useCases;
  const [active, setActive] = useState(0);

  const activeItem = c.items[active];

  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 bg-ivory overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="mb-14">
            <SectionLabel className="mb-4">{c.label}</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-4">
              {c.heading}
            </h2>
            <p className="text-neutral-600 text-[15px] leading-relaxed max-w-lg">{c.sub}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-0 lg:gap-10 items-start">

            {/* Left: scenario navigator */}
            <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible -mx-5 px-5 lg:mx-0 lg:px-0 pb-6 lg:pb-0 scrollbar-none">
              {c.items.map((uc, i) => (
                <button
                  key={uc.context}
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 lg:flex-shrink text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap lg:whitespace-normal ${
                    active === i
                      ? "bg-neutral-900 text-white"
                      : "text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50"
                  }`}
                >
                  <span className={`block font-mono text-[10px] mb-0.5 ${active === i ? "text-neutral-400" : "text-neutral-300"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {uc.context}
                </button>
              ))}
            </nav>

            {/* Right: story panel */}
            <div className="min-h-[340px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.28, ease: EASE }}
                  className="h-full"
                >
                  {/* Panel */}
                  <div className="rounded-2xl border border-neutral-200/70 overflow-hidden h-full shadow-[0_2px_20px_rgba(28,25,23,0.07)]">
                    {/* Context header */}
                    <div className="px-8 pt-8 pb-6 border-b border-neutral-100">
                      <span className="text-2xl mb-3 block" role="img" aria-hidden="true">
                        {activeItem.icon}
                      </span>
                      <h3 className="font-display font-bold text-2xl text-neutral-900 leading-snug">
                        {activeItem.context}
                      </h3>
                    </div>

                    {/* Before / After — narrative layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                      <div className="px-8 py-7 bg-white sm:border-r border-b sm:border-b-0 border-neutral-100">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-5">
                          {c.beforeLabel}
                        </p>
                        <p className="text-neutral-500 text-[15px] leading-[1.75]">
                          {activeItem.before}
                        </p>
                      </div>

                      <div className="px-8 py-7 bg-brand-50 relative">
                        {/* Transition arrow — desktop only */}
                        <div className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border border-neutral-200 items-center justify-center shadow-sm">
                          <ArrowRight size={14} className="text-brand-500" />
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-brand-500 mb-5">
                          {c.afterLabel}
                        </p>
                        <p className="text-neutral-900 text-[15px] leading-[1.75] font-semibold">
                          {activeItem.after}
                        </p>
                      </div>
                    </div>
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
