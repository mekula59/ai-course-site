import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

export function UseCases() {
  const { lang } = useLang();
  const c = content[lang].useCases;

  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="mb-4">{c.label}</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-4">
              {c.heading}
            </h2>
            <p className="text-neutral-500 text-lg max-w-xl mx-auto">{c.sub}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.items.map((uc, i) => (
            <FadeIn key={uc.context} delay={i * 0.07}>
              <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{uc.icon}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    {uc.context}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 border border-red-100 rounded-xl">
                    <p className="text-xs font-medium text-red-600 mb-1">{c.beforeLabel}</p>
                    <p className="text-neutral-700 text-sm leading-relaxed">{uc.before}</p>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-100 rounded-xl">
                    <p className="text-xs font-medium text-green-700 mb-1">{c.afterLabel}</p>
                    <p className="text-neutral-700 text-sm leading-relaxed">{uc.after}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
