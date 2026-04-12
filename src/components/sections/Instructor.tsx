import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

function HeadingReveal({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div ref={ref}>
      <motion.h2
        className="font-display text-[2.2rem] sm:text-[2.8rem] font-bold text-neutral-900 leading-[1.08] tracking-tight"
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration: 0.58, ease: EASE }}
      >
        {text}
      </motion.h2>
    </div>
  );
}

export function Instructor() {
  const { lang } = useLang();
  const c = content[lang].instructor;

  return (
    <section className="py-16 sm:py-24 px-5 bg-ivory">
      <div className="max-w-4xl mx-auto">
        <div className="border-t border-neutral-200/80 pt-8 sm:pt-10">
          <FadeIn>
            <SectionLabel className="mb-7">{c.label}</SectionLabel>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start">
            <FadeIn delay={0.08}>
              <aside className="lg:sticky lg:top-28">
                <div className="rounded-[2rem] overflow-hidden border border-neutral-200/80 bg-surface shadow-[0_6px_24px_rgba(26,18,8,0.05)]">
                  <div className="aspect-[4/5] bg-[linear-gradient(180deg,rgba(245,213,173,0.45)_0%,rgba(254,252,249,0.95)_46%,rgba(244,237,227,0.95)_100%)] p-5 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <span className="text-[10px] font-medium tracking-[0.14em] uppercase text-neutral-500 rounded-full border border-neutral-200/80 bg-white/80 px-3 py-1.5">
                        Final photo before launch
                      </span>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-full max-w-[210px] aspect-[4/5] rounded-[1.5rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.62)_0%,rgba(244,237,227,0.96)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] flex items-center justify-center">
                        <div className="w-[62%] h-[62%] rounded-[999px] bg-brand-100/80 flex items-center justify-center">
                          <div className="w-[72%] h-[72%] rounded-[999px] border border-brand-200/80" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pb-6 pt-6 border-b border-neutral-200/80">
                  <p className="font-display text-[1.7rem] sm:text-[1.9rem] font-bold text-neutral-900 leading-none">
                    {c.title}
                  </p>
                  <p className="mt-2 text-sm text-brand-700 font-medium">
                    {c.role}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-3 py-1.5 border border-neutral-200 rounded-full text-neutral-600 bg-surface/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </aside>
            </FadeIn>

            <div>
              <div className="mb-8 sm:mb-10">
                <HeadingReveal text={c.heading} />
              </div>

              <div className="space-y-5">
                <FadeIn delay={0.2}>
                  <p className="text-neutral-800 text-[16px] sm:text-[17px] leading-[1.8] max-w-[58ch]">
                    {c.bio[0]}
                  </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <p className="text-neutral-600 text-[15px] leading-[1.85] max-w-[58ch]">
                    {c.bio[1]}
                  </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <p className="text-neutral-600 text-[15px] leading-[1.85] max-w-[58ch]">
                    {c.bio[2]}
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
