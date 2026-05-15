import { useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const featureVariants = {
  enter: { opacity: 0, y: 18 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export function WhyDifferent() {
  const { lang } = useLang();
  const c = content[lang].whyDifferent;
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const reducedMotion = useReducedMotion();
  const activeItem = c.items[active];
  const prevItem = c.items[(active - 1 + c.items.length) % c.items.length];
  const nextItem = c.items[(active + 1) % c.items.length];

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
                  "radial-gradient(circle at 12% 14%, rgba(244,114,182,0.16), transparent 32%), radial-gradient(circle at 84% 18%, rgba(251,191,36,0.12), transparent 22%), linear-gradient(180deg, rgba(24,24,27,0.96), rgba(10,10,10,1))",
                  "radial-gradient(circle at 18% 22%, rgba(244,114,182,0.2), transparent 34%), radial-gradient(circle at 76% 22%, rgba(251,191,36,0.16), transparent 24%), linear-gradient(180deg, rgba(24,24,27,0.96), rgba(10,10,10,1))",
                  "radial-gradient(circle at 12% 14%, rgba(244,114,182,0.16), transparent 32%), radial-gradient(circle at 84% 18%, rgba(251,191,36,0.12), transparent 22%), linear-gradient(180deg, rgba(24,24,27,0.96), rgba(10,10,10,1))",
                ],
              }
        }
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full bg-brand-400/12 blur-3xl"
        animate={
          reducedMotion
            ? undefined
            : {
                opacity: [0.6, 0.85, 0.6],
              }
        }
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl"
        animate={
          reducedMotion
            ? undefined
            : {
                opacity: [0.55, 0.75, 0.55],
              }
        }
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/40 to-transparent"
        animate={{ opacity: active % 2 === 0 ? 0.45 : 0.8 }}
        transition={{ duration: reducedMotion ? 0.01 : 0.7, ease: EASE }}
      />

      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-10 max-w-2xl sm:mb-14">
            <SectionLabel className="mb-4 text-brand-400">{c.label}</SectionLabel>
            <h2 className="mt-4 mb-4 max-w-xl font-display text-3xl leading-tight font-bold text-white sm:text-4xl">
              {c.heading}
            </h2>
            <p className="max-w-[47ch] text-base leading-relaxed text-neutral-400">{c.sub}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(290px,0.9fr)] lg:gap-10 xl:gap-14">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.32)] backdrop-blur-sm sm:p-8 lg:min-h-[31rem] lg:p-10">
              <motion.div
                aria-hidden="true"
                className="absolute inset-x-10 bottom-6 top-10 rounded-[1.8rem] border border-white/6 bg-white/[0.025]"
                animate={{
                  opacity: active === 0 ? 0.16 : 0.22,
                }}
                transition={{ duration: reducedMotion ? 0.01 : 0.45, ease: EASE }}
              />
              <motion.div
                aria-hidden="true"
                className="absolute inset-x-8 bottom-4 top-8 rounded-[1.9rem] border border-white/8 bg-white/[0.03]"
                animate={{
                  opacity: active === 0 ? 0.24 : 0.32,
                }}
                transition={{ duration: reducedMotion ? 0.01 : 0.45, ease: EASE }}
              />
              <motion.div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-brand-300 via-brand-400 to-amber-300"
                animate={{ opacity: active % 2 === 0 ? 0.8 : 1 }}
                transition={{ duration: reducedMotion ? 0.01 : 0.5, ease: EASE }}
              />
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_18%_84%,rgba(251,191,36,0.08),transparent_26%)]"
                animate={{ opacity: active % 2 === 0 ? 0.65 : 0.9 }}
                transition={{ duration: reducedMotion ? 0.01 : 0.6, ease: EASE }}
              />

              <div className="relative flex min-h-full flex-col justify-between gap-12">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={active}
                    custom={direction}
                    variants={featureVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: reducedMotion ? 0.01 : 0.48, ease: EASE }}
                    className="flex flex-1 flex-col"
                  >
                    <div className="mb-10 flex items-center justify-between gap-4">
                      <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
                        <span className="text-lg leading-none">{activeItem.icon}</span>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-200">
                          {String(active + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/28">
                        In view
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col justify-between gap-10 xl:flex-row xl:gap-12">
                      <div className="max-w-[46rem] flex-1">
                        <h3 className="mb-6 max-w-[14ch] font-display text-[2.2rem] leading-[1.02] font-bold tracking-[-0.035em] text-white sm:text-[2.5rem] xl:text-[3rem]">
                          {activeItem.title}
                        </h3>
                        <p className="max-w-[46ch] text-[1.02rem] leading-relaxed text-neutral-300 sm:text-[1.08rem]">
                          {activeItem.desc}
                        </p>
                      </div>

                      <div className="hidden w-full max-w-[14rem] xl:block">
                        <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/30">
                          Also true
                        </p>
                        <div className="space-y-3">
                          {[prevItem, nextItem].map((item, idx) => (
                            <div
                              key={`${item.title}-${idx}`}
                              className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-left"
                            >
                              <div className="mb-1 flex items-center justify-between gap-3">
                                <span className="text-sm leading-none opacity-70">{item.icon}</span>
                                {idx === 1 ? (
                                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-white/22">
                                    Next
                                  </span>
                                ) : null}
                              </div>
                              <p className="text-[13px] leading-snug text-neutral-400">{item.title}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-end justify-between gap-6 border-t border-white/10 pt-6">
                  <p className="max-w-[28ch] text-sm leading-relaxed text-neutral-500">
                    Clear, practical, and close to real life.
                  </p>
                  <div className="flex gap-2">
                    {c.items.map((_, index) => (
                      <motion.span
                        key={index}
                        className="h-1.5 rounded-full bg-white/12"
                        animate={{
                          width: index === active ? 38 : 12,
                          backgroundColor:
                            index === active
                              ? "rgba(251, 146, 60, 0.95)"
                              : "rgba(255, 255, 255, 0.14)",
                        }}
                        transition={{ duration: reducedMotion ? 0.01 : 0.35, ease: EASE }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden rounded-[1.6rem] border border-white/10 bg-black/20 p-2.5 backdrop-blur-sm lg:block">
              <div className="mb-3 flex items-center justify-between px-3 pt-2">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/34">
                  Select a reason
                </p>
              </div>

              <div className="space-y-1.5">
                {c.items.map((item, i) => (
                  <motion.button
                    key={i}
                    onClick={() => navigate(i)}
                    onMouseEnter={() => navigate(i)}
                    layout
                    className={`group relative w-full overflow-hidden rounded-[1.2rem] px-4 py-4 text-left transition-colors duration-300 focus:outline-none ${
                      active === i ? "bg-white/[0.075]" : "hover:bg-white/[0.04]"
                    }`}
                    transition={{ layout: { duration: reducedMotion ? 0.01 : 0.42, ease: EASE } }}
                  >
                    {active === i ? (
                      <motion.div
                        layoutId="why-different-active"
                        className="absolute inset-0 rounded-[1.2rem] border border-white/10 bg-white/[0.05]"
                        transition={{ duration: reducedMotion ? 0.01 : 0.4, ease: EASE }}
                      />
                    ) : null}

                    <div className="relative flex items-start gap-4">
                      <div className="flex w-10 shrink-0 flex-col items-center pt-0.5">
                        <span
                          className={`font-mono text-[10px] font-bold uppercase tracking-[0.18em] ${
                            active === i ? "text-brand-200" : "text-white/26"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <motion.span
                          className="mt-2 h-8 w-px bg-white/10"
                          animate={{
                            opacity: i === c.items.length - 1 ? 0 : 1,
                            backgroundColor:
                              active === i ? "rgba(251, 146, 60, 0.5)" : "rgba(255,255,255,0.08)",
                          }}
                          transition={{ duration: reducedMotion ? 0.01 : 0.35, ease: EASE }}
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-start justify-between gap-3">
                          <p
                            className={`max-w-[20ch] text-[15px] leading-snug ${
                              active === i
                                ? "font-semibold text-white"
                                : "font-medium text-neutral-400 group-hover:text-neutral-200"
                            }`}
                          >
                            {item.title}
                          </p>
                          <span
                            className={`text-sm leading-none ${
                              active === i ? "opacity-100" : "opacity-35 group-hover:opacity-70"
                            }`}
                          >
                            {item.icon}
                          </span>
                        </div>

                        <AnimatePresence initial={false}>
                          {active === i ? (
                            <motion.p
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: "auto", marginTop: 10 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: reducedMotion ? 0.01 : 0.28, ease: EASE }}
                              className="max-w-[33ch] overflow-hidden text-[13px] leading-relaxed text-neutral-400"
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
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-6 lg:hidden">
          <div className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max gap-2">
              {c.items.map((item, i) => (
                <button
                  key={i}
                  onClick={() => navigate(i)}
                  className={`relative rounded-full border px-4 py-2.5 text-left transition-colors duration-300 focus:outline-none ${
                    active === i
                      ? "border-white/12 bg-white/[0.08] text-white"
                      : "border-white/8 bg-white/[0.02] text-neutral-400"
                  }`}
                >
                  {active === i ? (
                    <motion.span
                      layoutId="why-different-mobile-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.05]"
                      transition={{ duration: reducedMotion ? 0.01 : 0.35, ease: EASE }}
                    />
                  ) : null}
                  <span className="relative flex items-center gap-2">
                    <span className="text-sm leading-none">{item.icon}</span>
                    <span className="text-[13px] leading-none font-medium">{item.title}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {c.items.map((item, i) => (
              <button
                key={item.title}
                onClick={() => navigate(i)}
                className={`relative w-full overflow-hidden rounded-[1.1rem] border px-4 py-3 text-left transition-colors duration-300 focus:outline-none ${
                  active === i
                    ? "border-white/12 bg-white/[0.07]"
                    : "border-white/8 bg-white/[0.025]"
                }`}
              >
                {active === i ? (
                  <motion.span
                    layoutId="why-different-mobile-row"
                    className="absolute inset-0 rounded-[1.1rem] bg-white/[0.04]"
                    transition={{ duration: reducedMotion ? 0.01 : 0.35, ease: EASE }}
                  />
                ) : null}
                <span className="relative flex items-center justify-between gap-3">
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/32">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={active === i ? "text-sm font-medium text-white" : "text-sm font-medium text-neutral-400"}>
                      {item.title}
                    </span>
                  </span>
                  <span className={active === i ? "opacity-100" : "opacity-40"}>{item.icon}</span>
                </span>
              </button>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
