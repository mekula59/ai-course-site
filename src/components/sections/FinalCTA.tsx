import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export function FinalCTA() {
  const { lang } = useLang();
  const c = content[lang].finalCta;

  return (
    <section className="py-28 px-5 bg-neutral-900 overflow-hidden relative">
      {/* Subtle warm accent gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,_var(--tw-gradient-stops))] from-brand-900/60 via-transparent to-transparent pointer-events-none" />

      {/* Editorial large text watermark */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
      >
        <span className="font-display font-black text-[22vw] text-white/[0.03] select-none leading-none tracking-tighter">
          START
        </span>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <FadeIn>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-400 border border-brand-800 bg-brand-900/40 px-3 py-1.5 rounded-full mb-8">
            {lang === "en" ? "Ready when you are" : "You fit start now"}
          </span>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-[1.08] tracking-tight">
            {c.heading}
            <br className="hidden sm:block" />
            <span className="text-brand-400 italic">{c.headingBreak}</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="text-neutral-400 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            {c.sub}
          </p>
        </FadeIn>

        <FadeIn delay={0.24}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {c.primaryCta}
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-700"
              onClick={() =>
                document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {c.secondaryCta}
            </Button>
          </div>
        </FadeIn>

        {/* Trust strip */}
        <FadeIn delay={0.32}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-neutral-600 text-xs font-medium">
            <span>No credit card needed</span>
            <span className="w-px h-3 bg-neutral-700 hidden sm:block" />
            <span>Free early access</span>
            <span className="w-px h-3 bg-neutral-700 hidden sm:block" />
            <span>Cancel anytime</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
