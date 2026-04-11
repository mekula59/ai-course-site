import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

// The demo quote boxes are fixed demonstrations of each language.
// They do not change with the toggle -- that is the point.
const DEMO_EN = "AI is a computer program that can understand your questions and give you useful answers. Think of it as texting a very knowledgeable assistant.";
const DEMO_PIDGIN = "AI na computer program wey fit understand wetin you ask am, and give you correct answer. E be like say you dey chat with person wey sabi everything.";

export function LanguageSupport() {
  const { lang } = useLang();
  const c = content[lang].languageSupport;

  return (
    <section className="py-20 px-5 bg-neutral-900 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="mb-4 bg-neutral-800 border-neutral-700 text-brand-400">
              {c.label}
            </SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
              {c.heading}
            </h2>
            <p className="text-neutral-400 text-lg max-w-lg mx-auto">{c.sub}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FadeIn delay={0.1}>
            <div className="p-6 bg-neutral-800 rounded-2xl border border-neutral-700 h-full flex flex-col">
              <div className="text-2xl mb-3">✍️</div>
              <h3 className="font-semibold text-white text-base mb-3">{c.englishCard.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-5 flex-1">
                {c.englishCard.body}
              </p>
              <div className="bg-neutral-900 rounded-xl p-4 border border-neutral-700">
                <p className="text-neutral-300 text-sm leading-relaxed italic">
                  "{DEMO_EN}"
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="p-6 bg-brand-900 rounded-2xl border border-brand-800 h-full flex flex-col">
              <div className="text-2xl mb-3">🇳🇬</div>
              <h3 className="font-semibold text-white text-base mb-3">{c.pidginCard.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-5 flex-1">
                {c.pidginCard.body}
              </p>
              <div className="bg-neutral-900 rounded-xl p-4 border border-brand-800">
                <p className="text-brand-300 text-sm leading-relaxed italic">
                  "{DEMO_PIDGIN}"
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p className="text-center text-neutral-500 text-sm mt-8">{c.note}</p>
        </FadeIn>
      </div>
    </section>
  );
}
