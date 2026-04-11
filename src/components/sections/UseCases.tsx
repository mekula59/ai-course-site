import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

export function UseCases() {
  const { lang } = useLang();
  const c = content[lang].useCases;
  const [active, setActive] = useState(0);

  const activeItem = c.items[active];

  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="mb-4">{c.label}</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-4">
              {c.heading}
            </h2>
            <p className="text-neutral-500 text-lg max-w-xl mx-auto">{c.sub}</p>
          </div>
        </FadeIn>

        {/* Tab selector */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {c.items.map((uc, i) => (
              <button
                key={uc.context}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                  active === i
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-white text-neutral-500 border-neutral-200 hover:border-neutral-400 hover:text-neutral-700"
                }`}
              >
                <span>{uc.icon}</span>
                <span>{uc.context}</span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Detail panel */}
        <FadeIn delay={0.15}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden"
            >
              {/* Header */}
              <div className="px-7 pt-7 pb-5 border-b border-neutral-200 flex items-center gap-3">
                <span className="text-3xl">{activeItem.icon}</span>
                <span className="font-display font-bold text-xl text-neutral-900">
                  {activeItem.context}
                </span>
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                    {c.beforeLabel}
                  </p>
                  <p className="text-neutral-700 text-base leading-relaxed">{activeItem.before}</p>
                </div>
                <div className="p-7 bg-brand-50">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-3">
                    {c.afterLabel}
                  </p>
                  <p className="text-neutral-800 text-base leading-relaxed font-medium">
                    {activeItem.after}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </FadeIn>

        {/* Navigation dots */}
        <FadeIn delay={0.2}>
          <div className="flex justify-center gap-2 mt-6">
            {c.items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all ${
                  active === i
                    ? "w-5 h-2 bg-neutral-900"
                    : "w-2 h-2 bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`View use case ${i + 1}`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
