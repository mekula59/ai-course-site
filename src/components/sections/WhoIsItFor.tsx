import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CheckCircle2 } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

export function WhoIsItFor() {
  const { lang } = useLang();
  const c = content[lang].whoIsItFor;

  return (
    <section className="py-20 px-5 bg-neutral-50">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {c.items.map((a, i) => (
            <FadeIn key={a.role} delay={i * 0.07}>
              <div className="p-6 bg-white rounded-2xl border border-neutral-200 h-full hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-brand-500 flex-shrink-0" />
                  <h3 className="font-semibold text-neutral-900 text-sm">{a.role}</h3>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed">{a.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-10 p-6 bg-brand-50 border border-brand-200 rounded-2xl text-center">
            <p className="text-brand-800 font-medium">{c.callout}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
