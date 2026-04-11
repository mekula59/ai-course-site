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

        {/* Tab selector — underline style, horizontally scrollable on mobile */}
        <FadeIn delay={0.1}>
          <div className="relative mb-10">
            <div className="overflow-x-auto -mx-5 px-5 scrollbar-none">
              <div className="flex gap-0 border-b border-neutral-100 min-w-max mx-auto w-fit">
                {c.items.map((uc, i) => (
                  <button
                    key={uc.context}
                    onClick={() => setActive(i)}
                    className={`px-4 py-3 text-sm font-semibold transition-colors relative cursor-pointer whitespace-nowrap ${
                      active === i
                        ? "text-neutral-900"
                        : "text-neutral-400 hover:text-neutral-600"
                    }`}
                  >
                    {uc.context}
                    {active === i && (
                      <motion.span
                        layoutId="tab-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Detail panel */}
        <FadeIn delay={0.15}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="rounded-2xl border border-neutral-100 overflow-hidden"
            >
              {/* Before / After — panel carries full weight */}
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="p-7 sm:p-9 bg-white sm:border-r border-b sm:border-b-0 border-neutral-100">
                  <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-5">
                    {c.beforeLabel}
                  </p>
                  <p className="text-neutral-500 text-base leading-[1.7]">{activeItem.before}</p>
                </div>
                <div className="p-7 sm:p-9 bg-brand-50">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-5">
                    {c.afterLabel}
                  </p>
                  <p className="text-neutral-900 text-base leading-[1.7] font-semibold">
                    {activeItem.after}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </FadeIn>
      </div>
    </section>
  );
}
