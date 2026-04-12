import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export function CourseModules() {
  const { lang } = useLang();
  const c = content[lang].modules;
  const [expanded, setExpanded] = useState<string | null>(c.items[0]?.num ?? null);

  return (
    <section id="modules" className="py-16 sm:py-24 bg-neutral-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="mb-14">
            <SectionLabel className="mb-5 text-brand-400">
              {c.label}
            </SectionLabel>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mt-4 mb-5 leading-tight tracking-tight">
              {c.heading}
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed max-w-lg">{c.sub}</p>
          </div>
        </FadeIn>

        <div className="space-y-2">
          {c.items.map((mod, i) => {
            const isOpen = expanded === mod.num;

            return (
              <FadeIn key={mod.num} delay={i * 0.04}>
                <div
                  className={`relative overflow-hidden rounded-2xl transition-all duration-400 ${
                    isOpen ? "bg-white shadow-lg" : "bg-neutral-800/50 hover:bg-neutral-800"
                  }`}
                >
                  {/* Large decorative chapter number — background texture */}
                  <div
                    aria-hidden
                    className={`absolute right-5 top-1/2 -translate-y-1/2 font-display font-black select-none pointer-events-none leading-none transition-all duration-500 ${
                      isOpen
                        ? "text-[6rem] text-brand-100/60"
                        : "text-[4.5rem] text-neutral-700/60"
                    }`}
                  >
                    {mod.num}
                  </div>

                  <button
                    className="w-full text-left px-6 sm:px-8 py-6 flex items-start gap-5 group cursor-pointer relative z-10"
                    onClick={() => setExpanded(isOpen ? null : mod.num)}
                    aria-expanded={isOpen}
                  >
                    {/* Left accent bar */}
                    <div
                      className={`flex-shrink-0 w-0.5 self-stretch rounded-full transition-all duration-400 ${
                        isOpen
                          ? "bg-brand-500"
                          : "bg-neutral-600 group-hover:bg-neutral-500"
                      }`}
                    />

                    <div className="flex-1 min-w-0 pr-12">
                      <span
                        className={`font-mono text-xs font-bold mb-2 block transition-colors ${
                          isOpen ? "text-brand-500" : "text-neutral-600"
                        }`}
                      >
                        {mod.num}
                      </span>
                      <span
                        className={`font-display font-bold text-xl sm:text-2xl leading-snug transition-colors ${
                          isOpen
                            ? "text-neutral-900"
                            : "text-neutral-200 group-hover:text-white"
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
                            transition={{ duration: 0.35, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <p className="text-neutral-500 text-[15px] leading-relaxed mt-4 mb-5">
                              {mod.desc}
                            </p>
                            <div className="flex flex-wrap gap-2 pb-1">
                              {mod.lessons.map((lesson) => (
                                <span
                                  key={lesson}
                                  className="text-xs text-neutral-600 bg-neutral-100 border border-neutral-200 px-3 py-1.5 rounded-full"
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
                      size={18}
                      className={`flex-shrink-0 mt-1 transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 text-brand-500"
                          : "text-neutral-600 group-hover:text-neutral-400"
                      }`}
                    />
                  </button>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
