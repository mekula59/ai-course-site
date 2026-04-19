import { useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const featureVariants = {
  enter: { opacity: 0, y: 14 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export function WhyDifferent() {
  const { lang } = useLang();
  const c = content[lang].whyDifferent;
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const reducedMotion = useReducedMotion();
  const activeItem = c.items[active];

  const navigate = useCallback(
    (idx: number) => {
      if (idx === active) return;
      setDirection(idx > active ? 1 : -1);
      setActive(idx);
    },
    [active]
  );

  return (
    <section
      id="why"
      className="relative overflow-hidden bg-neutral-900 px-5 py-16 sm:py-24"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        animate={
          reducedMotion
            ? undefined
            : {
                background: [
                  "radial-gradient(circle at 14% 22%, rgba(244, 114, 182, 0.17), transparent 34%), radial-gradient(circle at 86% 18%, rgba(251, 191, 36, 0.14), transparent 24%), linear-gradient(180deg, rgba(23, 23, 23, 0.96), rgba(10, 10, 10, 1))",
                  "radial-gradient(circle at 22% 28%, rgba(244, 114, 182, 0.2), transparent 36%), radial-gradient(circle at 74% 20%, rgba(251, 191, 36, 0.16), transparent 25%), linear-gradient(180deg, rgba(23, 23, 23, 0.96), rgba(10, 10, 10, 1))",
                  "radial-gradient(circle at 14% 22%, rgba(244, 114, 182, 0.17), transparent 34%), radial-gradient(circle at 86% 18%, rgba(251, 191, 36, 0.14), transparent 24%), linear-gradient(180deg, rgba(23, 23, 23, 0.96), rgba(10, 10, 10, 1))",
                ],
              }
        }
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-brand-500/18 blur-3xl"
        animate={
          reducedMotion
            ? undefined
            : {
                x: ["-2%", "7%", "-1%"],
                y: ["0%", "8%", "-3%"],
                scale: [1, 1.08, 1],
              }
        }
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-6rem] top-[26rem] h-64 w-64 rounded-full bg-amber-300/10 blur-3xl"
        animate={
          reducedMotion
            ? undefined
            : {
                x: ["0%", "9%", "1%"],
                y: ["0%", "-6%", "2%"],
                scale: [1, 0.94, 1],
              }
        }
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="relative mb-12 sm:mb-14">
            <SectionLabel className="mb-4 text-brand-400">{c.label}</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-4 mb-4 max-w-2xl leading-tight">
              {c.heading}
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed max-w-[46ch]">{c.sub}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="hidden lg:block">
          <div className="relative grid grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] gap-8 xl:gap-12 items-start">
            <div className="relative min-h-[31rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm xl:p-10">
              <motion.div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ opacity: active % 2 === 0 ? 0.5 : 0.9 }}
                transition={{ duration: 0.8, ease: EASE }}
              />
              <motion.div
                aria-hidden="true"
                className="absolute inset-0"
                animate={
                  reducedMotion
                    ? undefined
                    : {
                        background: [
                          "radial-gradient(circle at 78% 18%, rgba(236, 72, 153, 0.18), transparent 24%), radial-gradient(circle at 18% 82%, rgba(251, 191, 36, 0.12), transparent 28%)",
                          "radial-gradient(circle at 72% 24%, rgba(236, 72, 153, 0.22), transparent 26%), radial-gradient(circle at 24% 76%, rgba(251, 191, 36, 0.14), transparent 30%)",
                          "radial-gradient(circle at 78% 18%, rgba(236, 72, 153, 0.18), transparent 24%), radial-gradient(circle at 18% 82%, rgba(251, 191, 36, 0.12), transparent 28%)",
                        ],
                      }
                }
                transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
              />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  variants={featureVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: reducedMotion ? 0.01 : 0.55, ease: EASE }}
                  className="relative z-10 flex min-h-[27rem] flex-col justify-between"
                >
                  <div>
                    <div className="mb-12 flex items-center justify-between gap-4">
                      <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
                        <span className="text-lg leading-none">{activeItem.icon}</span>
                        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand-300">
                          In Focus
                        </span>
                      </div>
                      <p className="font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-brand-300/80">
                        {String(active + 1).padStart(2, "0")} / {c.items.length}
                      </p>
                    </div>

                    <div className="max-w-[44rem]">
                      <p className="mb-5 text-sm font-medium tracking-[0.08em] text-white/45">
                        This course is intentionally shaped around trust, clarity, and immediate usefulness.
                      </p>
                      <h3 className="mb-6 font-display text-[2.35rem] font-bold leading-[1.02] tracking-[-0.03em] text-white xl:text-[3rem]">
                        {activeItem.title}
                      </h3>
                      <p className="max-w-[48ch] text-[1.05rem] leading-relaxed text-neutral-300">
                        {activeItem.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-6 border-t border-white/10 pt-8">
                    <div className="max-w-[34ch]">
                      <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
                        Why It Lands
                      </p>
                      <p className="text-sm leading-relaxed text-neutral-400">
                        Calm presentation, strong conviction, and one clear reason at a time make the section easier to trust and easier to remember.
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {c.items.map((_, index) => (
                        <motion.span
                          key={index}
                          className="h-1.5 rounded-full bg-white/15"
                          animate={{
                            width: index === active ? 40 : 14,
                            backgroundColor:
                              index === active
                                ? "rgba(248, 113, 113, 0.95)"
                                : "rgba(255, 255, 255, 0.14)",
                          }}
                          transition={{ duration: reducedMotion ? 0.01 : 0.45, ease: EASE }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm">
              {c.items.map((item, i) => (
                <motion.button
                  key={i}
                  onClick={() => navigate(i)}
                  onMouseEnter={() => navigate(i)}
                  layout
                  className={`group relative mb-2 w-full overflow-hidden rounded-[1.25rem] border text-left last:mb-0 focus:outline-none ${
                    active === i
                      ? "border-white/12 bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                      : "border-transparent bg-transparent hover:border-white/8 hover:bg-white/[0.04]"
                  }`}
                  transition={{ layout: { duration: reducedMotion ? 0.01 : 0.45, ease: EASE } }}
                >
                  <motion.div
                    className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full bg-brand-400"
                    initial={false}
                    animate={{
                      opacity: active === i ? 1 : 0,
                      scaleY: active === i ? 1 : 0.24,
                    }}
                    transition={{ duration: reducedMotion ? 0.01 : 0.35, ease: EASE }}
                    style={{ originY: "center" }}
                  />

                  <div className="relative px-5 py-4">
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 text-lg leading-none transition-opacity duration-300 ${
                          active === i ? "opacity-100" : "opacity-55"
                        }`}
                      >
                        {item.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center justify-between gap-3">
                          <span
                            className={`font-mono text-[10px] font-bold uppercase tracking-[0.18em] ${
                              active === i ? "text-brand-300" : "text-white/28"
                            }`}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {active === i ? (
                            <span className="rounded-full border border-brand-400/25 bg-brand-500/10 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-brand-200">
                              Active
                            </span>
                          ) : null}
                        </div>

                        <p
                          className={`text-[15px] leading-snug transition-colors duration-300 ${
                            active === i
                              ? "font-semibold text-white"
                              : "font-medium text-neutral-500 group-hover:text-neutral-300"
                          }`}
                        >
                          {item.title}
                        </p>

                        <AnimatePresence initial={false}>
                          {active === i ? (
                            <motion.p
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: reducedMotion ? 0.01 : 0.32, ease: EASE }}
                              className="overflow-hidden pr-3 text-[13px] leading-relaxed text-neutral-400"
                            >
                              {item.desc}
                            </motion.p>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:hidden">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={featureVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: reducedMotion ? 0.01 : 0.45, ease: EASE }}
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5">
                    <span className="text-base leading-none">{activeItem.icon}</span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-brand-300">
                      In Focus
                    </span>
                  </div>
                  <p className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-brand-300/80">
                    {String(active + 1).padStart(2, "0")} / {c.items.length}
                  </p>
                </div>

                <h3 className="mb-4 font-display text-[2rem] font-bold leading-[1.04] tracking-[-0.03em] text-white">
                  {activeItem.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-300">{activeItem.desc}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex gap-2">
              {c.items.map((_, index) => (
                <motion.span
                  key={index}
                  className="h-1.5 rounded-full bg-white/15"
                  animate={{
                    width: index === active ? 34 : 12,
                    backgroundColor:
                      index === active
                        ? "rgba(248, 113, 113, 0.95)"
                        : "rgba(255, 255, 255, 0.14)",
                  }}
                  transition={{ duration: reducedMotion ? 0.01 : 0.35, ease: EASE }}
                />
              ))}
            </div>

            <div className="mt-6 space-y-2">
              {c.items.map((item, i) => (
                <motion.button
                  key={i}
                  onClick={() => navigate(i)}
                  layout
                  className={`w-full rounded-[1.15rem] border px-4 py-3 text-left focus:outline-none ${
                    active === i
                      ? "border-white/12 bg-white/[0.07]"
                      : "border-transparent bg-transparent"
                  }`}
                  transition={{ layout: { duration: reducedMotion ? 0.01 : 0.35, ease: EASE } }}
                >
                  <div className="flex items-start gap-3">
                    <span className={`mt-0.5 text-base leading-none ${active === i ? "opacity-100" : "opacity-55"}`}>
                      {item.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center justify-between gap-3">
                        <span
                          className={`font-mono text-[10px] font-bold uppercase tracking-[0.18em] ${
                            active === i ? "text-brand-300" : "text-white/30"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {active === i ? (
                          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-brand-200">
                            Active
                          </span>
                        ) : null}
                      </div>

                      <p
                        className={`text-[14px] leading-snug ${
                          active === i ? "font-semibold text-white" : "font-medium text-neutral-400"
                        }`}
                      >
                        {item.title}
                      </p>

                      <AnimatePresence initial={false}>
                        {active === i ? (
                          <motion.p
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 10 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: reducedMotion ? 0.01 : 0.28, ease: EASE }}
                            className="overflow-hidden pr-2 text-[13px] leading-relaxed text-neutral-400"
                          >
                            {item.desc}
                          </motion.p>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
