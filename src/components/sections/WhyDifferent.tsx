import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

export function WhyDifferent() {
  const { lang } = useLang();
  const c = content[lang].whyDifferent;

  return (
    <section id="why" className="py-20 px-5 bg-neutral-900 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="mb-4 bg-neutral-800 border-neutral-700 text-brand-400">
              {c.label}
            </SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
              {c.heading}
            </h2>
            <p className="text-neutral-400 text-lg max-w-xl mx-auto">{c.sub}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.items.map((d, i) => (
            <FadeIn key={d.title} delay={i * 0.07}>
              <div className="p-6 bg-neutral-800 rounded-2xl border border-neutral-700 hover:border-brand-700 transition-colors h-full">
                <div className="text-3xl mb-4">{d.icon}</div>
                <h3 className="font-semibold text-white text-base mb-2">{d.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{d.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
