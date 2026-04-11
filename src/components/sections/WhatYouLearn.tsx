import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const outcomes = [
  "Understand what AI actually is, without the jargon",
  "Use ChatGPT, Gemini, and other tools with confidence",
  "Write better, faster content using AI",
  "Save hours each week by automating repetitive tasks",
  "Use AI to research, summarise, and organise information",
  "Apply AI to your specific work, business, or school context",
  "Spot AI-generated content and understand its limitations",
  "Stay safe and smart when using AI tools",
  "Keep up with AI changes without getting overwhelmed",
];

export function WhatYouLearn() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <FadeIn>
            <div>
              <SectionLabel className="mb-4">What You Will Learn</SectionLabel>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-5">
                Practical skills you can use from day one.
              </h2>
              <p className="text-neutral-500 text-base leading-relaxed mb-6">
                This is not theory. Every lesson is designed so you can take it, use it immediately,
                and see real results in your daily life or work.
              </p>
              <p className="text-neutral-500 text-base leading-relaxed">
                By the end of this course, AI will no longer feel like something that happens
                to other people. It will be a tool you actually use.
              </p>
            </div>
          </FadeIn>

          {/* Right column: outcomes list */}
          <div className="space-y-3">
            {outcomes.map((item, i) => (
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
