import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const DEMO_EN = "AI is a computer program that can understand your questions and give you useful answers. Think of it as texting a very knowledgeable assistant.";
const DEMO_PIDGIN = "AI na computer program wey fit understand wetin you ask am, and give you correct answer. E be like say you dey chat with person wey sabi everything.";

export function LanguageSupport() {
  const { lang } = useLang();
  const c = content[lang].languageSupport;
  const [activeLang, setActiveLang] = useState<"en" | "pidgin">("en");

  return (
    <section className="py-24 px-5 bg-neutral-900 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel className="mb-4 bg-neutral-800 border-neutral-700 text-brand-400">
              {c.label}
            </SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
              {c.heading}
            </h2>
            <p className="text-neutral-400 text-lg max-w-lg mx-auto">{c.sub}</p>
          </div>
        </FadeIn>

        {/* Interactive language demo */}
        <FadeIn delay={0.1}>
          <div className="bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden mb-6">
            {/* Tab toggle */}
            <div className="flex border-b border-neutral-700">
              <button
                onClick={() => setActiveLang("en")}
                className={`flex-1 py-3.5 text-sm font-semibold transition-all ${
                  activeLang === "en"
                    ? "text-white bg-neutral-700"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                ✍️ {c.englishCard.title}
              </button>
              <button
                onClick={() => setActiveLang("pidgin")}
                className={`flex-1 py-3.5 text-sm font-semibold transition-all ${
                  activeLang === "pidgin"
                    ? "text-brand-300 bg-brand-900/60"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                🇳🇬 {c.pidginCard.title}
              </button>
            </div>

            {/* Quote area */}
            <div className="p-8 sm:p-10 min-h-[160px] flex items-center">
              <AnimatePresence mode="wait">
                {activeLang === "en" ? (
                  <motion.blockquote
                    key="en"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28 }}
                    className="text-neutral-200 text-lg sm:text-xl leading-relaxed italic font-light"
                  >
                    "{DEMO_EN}"
                  </motion.blockquote>
                ) : (
                  <motion.blockquote
                    key="pidgin"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28 }}
                    className="text-brand-200 text-lg sm:text-xl leading-relaxed italic font-light"
                  >
                    "{DEMO_PIDGIN}"
                  </motion.blockquote>
                )}
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>

        {/* Side-by-side info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FadeIn delay={0.15}>
            <div className="p-5 bg-neutral-800/50 rounded-xl border border-neutral-700">
              <h3 className="font-semibold text-white text-sm mb-2">{c.englishCard.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{c.englishCard.body}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="p-5 bg-brand-900/40 rounded-xl border border-brand-800/60">
              <h3 className="font-semibold text-white text-sm mb-2">{c.pidginCard.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{c.pidginCard.body}</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.25}>
          <p className="text-center text-neutral-600 text-sm mt-8">{c.note}</p>
        </FadeIn>
      </div>
    </section>
  );
}
