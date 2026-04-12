import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

export function WhatYouLearn() {
  const { lang } = useLang();
  const c = content[lang].whatYouLearn;

  return (
    <section className="py-16 sm:py-24 px-5 bg-ivory">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <div>
              <SectionLabel className="mb-4">{c.label}</SectionLabel>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-5">
                {c.heading}
              </h2>
              <p className="text-neutral-500 text-base leading-relaxed mb-6">{c.body1}</p>
              <p className="text-neutral-500 text-base leading-relaxed">{c.body2}</p>
            </div>
          </FadeIn>

          <div className="space-y-3">
            {c.outcomes.map((item, i) => (
              <FadeIn key={item} delay={i * 0.06}>
                <div className="flex gap-3 items-start py-3 border-b border-neutral-100 last:border-0">
                  <span className="w-6 h-6 bg-brand-100 text-brand-700 text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-neutral-700 text-sm leading-relaxed">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
