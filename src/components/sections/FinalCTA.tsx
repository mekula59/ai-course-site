import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

export function FinalCTA() {
  const { lang } = useLang();
  const c = content[lang].finalCta;

  return (
    <section className="py-28 px-5 bg-neutral-900 overflow-hidden relative">
      {/* Warm glow — centered lower half */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_100%,_var(--tw-gradient-stops))] from-brand-900/70 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <FadeIn className="mb-10">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-brand-500">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500" />
            {lang === "en" ? "Ready when you are" : "You fit start now"}
          </span>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl font-extrabold text-white mb-6 leading-[1.06] tracking-tight">
            {c.heading}
            <br />
            <span className="text-brand-400 italic">{c.headingBreak}</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-10 max-w-md mx-auto">
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
              className="text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-600"
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
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-neutral-500 text-xs font-medium">
            <span>Free to join</span>
            <span className="w-px h-3 bg-neutral-600 hidden sm:block" />
            <span>No credit card</span>
            <span className="w-px h-3 bg-neutral-600 hidden sm:block" />
            <span>Built for Nigeria</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
