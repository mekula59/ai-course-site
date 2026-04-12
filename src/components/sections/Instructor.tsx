import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

// Restrained typewriter — characters appear one at a time, no blinking cursor.
// A thin vertical mark fades gently when typing completes. Applied to the
// section heading only. Triggers once when the element enters view.
function TypewriterHeading({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 48);
    return () => clearInterval(id);
  }, [inView, text]);

  return (
    <div ref={ref}>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
        {/* Non-breaking space preserves line height before first character */}
        {displayed || "\u00A0"}
        <motion.span
          aria-hidden="true"
          className="inline-block w-[2px] h-[0.82em] bg-neutral-300 ml-[2px] align-text-bottom rounded-sm"
          animate={{ opacity: done ? 0 : 1 }}
          transition={{ duration: 0.6 }}
        />
      </h2>
    </div>
  );
}

export function Instructor() {
  const { lang } = useLang();
  const c = content[lang].instructor;

  return (
    <section className="py-16 sm:py-24 px-5 bg-ivory">
      <div className="max-w-4xl mx-auto">

        {/* Section label */}
        <FadeIn>
          <SectionLabel className="mb-6">{c.label}</SectionLabel>
        </FadeIn>

        {/* Typed heading — the human hook. Appears on its own, no card. */}
        <div className="mb-12 sm:mb-14">
          <TypewriterHeading text={c.heading} />
        </div>

        {/* Bio — editorial layout, no card border */}
        <FadeIn delay={0.35}>
          <div className="grid grid-cols-1 sm:grid-cols-[88px_1fr] gap-7 sm:gap-10 items-start">

            {/* Abstract warm avatar — replaces emoji placeholder */}
            <div className="shrink-0">
              <div className="w-[88px] h-[88px] rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-brand-100 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-brand-300/80" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              {/* Role */}
              <p className="text-brand-600 text-sm font-semibold tracking-wide mb-5">
                {c.role}
              </p>

              {/* First paragraph — the personal voice, slightly more prominent */}
              <p className="text-neutral-700 text-[15px] leading-relaxed mb-4">
                {c.bio[0]}
              </p>

              {/* Remaining paragraphs — softer */}
              {c.bio.slice(1).map((para, i) => (
                <p key={i} className="text-neutral-500 text-sm leading-relaxed mb-3 last:mb-0">
                  {para}
                </p>
              ))}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1.5 border border-neutral-200 rounded-full text-neutral-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
