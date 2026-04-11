import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

export function CourseModules() {
  const { lang } = useLang();
  const c = content[lang].modules;
  const [expanded, setExpanded] = useState<string | null>(c.items[0]?.num ?? null);

  return (
    <section id="modules" className="py-24 px-5 bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="mb-4">{c.label}</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-4">
              {c.heading}
            </h2>
            <p className="text-neutral-500 text-lg max-w-xl mx-auto">{c.sub}</p>
          </div>
        </FadeIn>

        {/* Accordion-style chapter list */}
        <div className="space-y-3">
          {c.items.map((mod, i) => {
            const isOpen = expanded === mod.num;

            return (
              <FadeIn key={mod.num} delay={i * 0.06}>
                <div
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? "bg-white border-brand-200 shadow-sm"
                      : "bg-white border-neutral-200 hover:border-neutral-300"
                  }`}
                >
                  <button
                    className="w-full text-left px-6 py-5 flex items-center gap-5 group"
                    onClick={() => setExpanded(isOpen ? null : mod.num)}
                    aria-expanded={isOpen}
                  >
                    {/* Large decorative number */}
                    <span
                      className={`font-display font-black text-4xl leading-none w-10 flex-shrink-0 transition-colors ${
                        isOpen ? "text-brand-400" : "text-neutral-200 group-hover:text-neutral-300"
                      }`}
                    >
                      {mod.num}
                    </span>

                    <span className="flex-1 font-semibold text-neutral-900 text-base leading-snug">
                      {mod.title}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`flex-shrink-0 text-neutral-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-[4.5rem]">
                          <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                            {mod.desc}
                          </p>
                          <ul className="space-y-2">
                            {mod.lessons.map((lesson) => (
                              <li
                                key={lesson}
                                className="flex gap-2.5 items-start text-sm text-neutral-600"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0 mt-1.5" />
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
