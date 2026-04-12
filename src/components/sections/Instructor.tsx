import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

export function Instructor() {
  const { lang } = useLang();
  const c = content[lang].instructor;

  return (
    <section className="py-16 sm:py-24 px-5 bg-ivory">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="mb-4">{c.label}</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4">
              {c.heading}
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-8 items-start bg-white rounded-2xl border border-neutral-200/70 shadow-[0_2px_16px_rgba(28,25,23,0.07)] p-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-brand-100 flex items-center justify-center text-4xl">
                👤
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-display font-bold text-xl text-neutral-900 mb-1">{c.title}</h3>
              <p className="text-brand-600 text-sm font-medium mb-4">{c.role}</p>
              <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
                {c.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 bg-white border border-neutral-200 rounded-full text-neutral-600"
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
