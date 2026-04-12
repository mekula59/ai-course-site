import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

export function Problem() {
  const { lang } = useLang();
  const c = content[lang].problem;

  return (
    <section className="py-16 sm:py-24 px-5 bg-ivory">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="mb-4">{c.label}</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-4">
              {c.heading}
            </h2>
            <p className="text-neutral-600 text-[17px] max-w-xl mx-auto leading-relaxed">{c.sub}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {c.items.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <div className="flex gap-4 p-6 bg-white rounded-2xl border border-neutral-200/60 hover:border-neutral-300 transition-colors shadow-[0_1px_8px_rgba(28,25,23,0.05)]">
                <span className="text-3xl flex-shrink-0 mt-0.5">{p.icon}</span>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2 text-base">{p.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
