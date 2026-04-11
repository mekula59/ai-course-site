import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const DEMO_EN = "AI is like texting a very knowledgeable assistant. Ask it anything. It answers clearly, without judgement.";
const DEMO_PIDGIN = "AI na like say you dey chat with person wey sabi everything. You ask am anything. E go answer you clearly, no yab you.";

export function LanguageSupport() {
  const { lang } = useLang();
  const c = content[lang].languageSupport;

  return (
    <section className="relative py-24 px-5 bg-neutral-900 overflow-hidden">
      {/* Entry bridge — blends from the light section above into dark */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <SectionLabel className="mb-5 bg-neutral-800 border-neutral-700 text-brand-400">
              {c.label}
            </SectionLabel>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mt-4 mb-5 leading-[1.1] tracking-tight">
              {c.heading}
            </h2>
            <p className="text-neutral-400 text-base max-w-md mx-auto leading-relaxed">{c.sub}</p>
          </div>
        </FadeIn>

        {/* Dual language display — English recedes, Pidgin leads */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-neutral-700 bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden mb-6">
            {/* English column — 2/5 width, quieter */}
            <div className="p-7 sm:col-span-2">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-500 mb-5">
                {c.englishCard.title}
              </p>
              <blockquote className="text-neutral-400 text-base leading-relaxed font-light italic mb-5">
                "{DEMO_EN}"
              </blockquote>
              <p className="text-neutral-600 text-sm leading-relaxed">{c.englishCard.body}</p>
            </div>

            {/* Pidgin column — 3/5 width, warmer and more alive */}
            <div className="p-7 sm:p-9 sm:col-span-3 bg-brand-900/30">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-brand-400 mb-5">
                🇳🇬 {c.pidginCard.title}
              </p>
              <blockquote className="text-brand-100 text-base sm:text-lg leading-relaxed font-light italic mb-5">
                "{DEMO_PIDGIN}"
              </blockquote>
              <p className="text-neutral-400 text-sm leading-relaxed">{c.pidginCard.body}</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.18}>
          <p className="text-center text-neutral-500 text-sm">{c.note}</p>
        </FadeIn>
      </div>
      {/* Exit bridge — dissolves into the next section */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-b from-transparent to-neutral-50/60 pointer-events-none" />
    </section>
  );
}
