import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

// Soft cross-fade with gentle settle — premium testimonial-panel motion
const featureVariants = {
  enter: { opacity: 0, y: 8 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -5 },
};

export function WhyDifferent() {
  const { lang } = useLang();
  const c = content[lang].whyDifferent;

  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = useCallback(
    (idx: number) => {
      setDirection(idx > active ? 1 : -1);
      setActive(idx);
    },
    [active]
  );

  return (
    <section
      id="why"
      className="py-16 sm:py-24 px-5 bg-neutral-900 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <FadeIn>
          <div className="mb-12 sm:mb-14">
            <SectionLabel className="mb-4 text-brand-400">{c.label}</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-4 mb-4 max-w-2xl leading-tight">
              {c.heading}
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed max-w-[46ch]">{c.sub}</p>
          </div>
        </FadeIn>

        {/* Desktop: featured reason + navigation stack */}
        <FadeIn delay={0.1} className="hidden lg:block">
          <div className="grid grid-cols-[1fr_252px] gap-12 items-start">

            {/* Featured active reason — large typographic treatment, no card border */}
            <div>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  variants={featureVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.34, ease: EASE }}
                >
                  {/* Number */}
                  <p className="font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-brand-400 mb-7">
                    {String(active + 1).padStart(2, "0")} / {c.items.length}
                  </p>

                  {/* Title — large typographic anchor */}
                  <h3 className="font-display font-bold text-[2.2rem] sm:text-[2.6rem] leading-[1.08] tracking-tight text-white mb-6">
                    {c.items[active].title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-base sm:text-[17px] leading-relaxed max-w-[50ch]">
                    {c.items[active].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Navigation stack — all 6 reasons, compact */}
            <div className="bg-neutral-800/40 rounded-2xl border border-neutral-700/40 overflow-hidden">
              {c.items.map((item, i) => (
                <button
                  key={i}
                  onClick={() => navigate(i)}
                  className={`group relative w-full text-left focus:outline-none cursor-pointer
                    border-b border-neutral-800/70 last:border-0
                    transition-colors duration-150
                    ${active === i ? "bg-neutral-800/70" : "hover:bg-neutral-800/30"}`}
                >
                  {/* Active left rule */}
                  <motion.div
                    className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full bg-brand-500"
                    initial={false}
                    animate={{
                      opacity: active === i ? 1 : 0,
                      scaleY: active === i ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.2, ease: EASE }}
                    style={{ originY: "center" }}
                  />

                  <div className="py-3.5 px-4">
                    <span
                      className={`block font-mono text-[9px] font-bold tracking-widest uppercase mb-1 transition-colors duration-150 ${
                        active === i ? "text-brand-400" : "text-neutral-600"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`block text-[12px] leading-snug transition-colors duration-150 ${
                        active === i
                          ? "text-white font-semibold"
                          : "text-neutral-500 font-medium group-hover:text-neutral-300"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>

          </div>
        </FadeIn>

        {/* Mobile: numbered tabs + featured panel */}
        <FadeIn delay={0.1} className="lg:hidden">

          {/* Numbered tabs */}
          <div className="flex gap-2 mb-8">
            {c.items.map((_, i) => (
              <button
                key={i}
                onClick={() => navigate(i)}
                className={`flex-1 py-2.5 rounded-xl text-[11px] font-mono font-bold tracking-widest
                  transition-all duration-200 cursor-pointer border ${
                  active === i
                    ? "bg-brand-500 text-white border-brand-500"
                    : "bg-transparent text-neutral-500 border-neutral-700 hover:border-neutral-500 hover:text-neutral-300"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>

          {/* Featured panel — mobile */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={featureVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: EASE }}
            >
              <p className="font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-brand-400 mb-4">
                {String(active + 1).padStart(2, "0")} / {c.items.length}
              </p>
              <h3 className="font-display font-bold text-[1.9rem] leading-[1.1] text-white mb-4">
                {c.items[active].title}
              </h3>
              <p className="text-neutral-400 text-[15px] leading-relaxed">
                {c.items[active].desc}
              </p>
            </motion.div>
          </AnimatePresence>


        </FadeIn>

      </div>
    </section>
  );
}
