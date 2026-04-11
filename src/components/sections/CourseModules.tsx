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
          <div className="text-center mb-12">
            <SectionLabel className="mb-4">{c.label}</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-4">
              {c.heading}
            </h2>
            <p className="text-neutral-500 text-base max-w-lg mx-auto leading-relaxed">{c.sub}</p>
          </div>
        </FadeIn>

        {/* Chapter list with vertical thread */}
        <div className="relative">
          {/* Vertical thread line — connects circle midpoints */}
          <div className="absolute left-[1.35rem] top-10 bottom-8 w-px bg-neutral-200 hidden sm:block" />

          <div className="space-y-0">
            {c.items.map((mod, i) => {
              const isOpen = expanded === mod.num;

              return (
                <FadeIn key={mod.num} delay={i * 0.05}>
                  <div
                    className={`relative transition-colors ${
                      i < c.items.length - 1 ? "border-b border-neutral-100" : ""
                    }`}
                  >
                    <button
                      className="w-full text-left py-6 flex items-start gap-5 group cursor-pointer"
                      onClick={() => setExpanded(isOpen ? null : mod.num)}
                      aria-expanded={isOpen}
                    >
                      {/* Chapter marker — small, functional */}
                      <span
                        className={`relative z-10 flex-shrink-0 w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all sm:block hidden ${
                          isOpen
                            ? "bg-brand-500 border-brand-500 text-white"
                            : "bg-white border-neutral-200 text-neutral-400 group-hover:border-neutral-300"
                        }`}
                      >
                        <span className="font-mono text-[11px] font-bold">{mod.num}</span>
                      </span>

                      {/* Mobile: plain number */}
                      <span
                        className={`sm:hidden flex-shrink-0 font-mono text-xs font-bold pt-1 w-6 transition-colors ${
                          isOpen ? "text-brand-500" : "text-neutral-400"
                        }`}
                      >
                        {mod.num}
                      </span>

                      <div className="flex-1 min-w-0">
                        <span
                          className={`font-display font-bold text-lg leading-snug transition-colors ${
                            isOpen ? "text-neutral-900" : "text-neutral-700 group-hover:text-neutral-900"
                          }`}
                        >
                          {mod.title}
                        </span>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                              className="overflow-hidden"
                            >
                              <p className="text-neutral-500 text-[15px] leading-relaxed mt-3 mb-4">
                                {mod.desc}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {mod.lessons.map((lesson) => (
                                  <span
                                    key={lesson}
                                    className="text-xs text-neutral-600 bg-white border border-neutral-200 px-3 py-1.5 rounded-full"
                                  >
                                    {lesson}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <ChevronDown
                        size={16}
                        className={`flex-shrink-0 text-neutral-300 transition-all duration-300 mt-1 ${
                          isOpen ? "rotate-180 text-brand-400" : ""
                        }`}
                      />
                    </button>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
