import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

export function CourseModules() {
  const { lang } = useLang();
  const c = content[lang].modules;

  return (
    <section id="modules" className="py-20 px-5 bg-neutral-50">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {c.items.map((mod, i) => (
            <FadeIn key={mod.num} delay={i * 0.07}>
              <div className="p-6 bg-white rounded-2xl border border-neutral-200 hover:border-brand-200 hover:shadow-sm transition-all group h-full">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-brand-400 font-display font-bold text-2xl leading-none group-hover:text-brand-500 transition-colors">
                    {mod.num}
                  </span>
                  <h3 className="font-semibold text-neutral-900 text-base leading-snug">{mod.title}</h3>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">{mod.desc}</p>
                <ul className="space-y-1">
                  {mod.lessons.map((lesson) => (
                    <li key={lesson} className="flex gap-2 items-center text-xs text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-300 flex-shrink-0" />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
