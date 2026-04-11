import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function LanguageSupport() {
  return (
    <section className="py-20 px-5 bg-neutral-900 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="mb-4 bg-neutral-800 border-neutral-700 text-brand-400">
              Language
            </SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
              Some things just make more sense in Pidgin.
            </h2>
            <p className="text-neutral-400 text-lg max-w-lg mx-auto">
              This is the only AI course that treats Nigerian Pidgin as a full learning
              language. Not a translation. Not a footnote. The real thing.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* English card */}
          <FadeIn delay={0.1}>
            <div className="p-6 bg-neutral-800 rounded-2xl border border-neutral-700 h-full flex flex-col">
              <div className="text-2xl mb-3">✍️</div>
              <h3 className="font-semibold text-white text-base mb-3">Plain English</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-5 flex-1">
                No buzzwords. No assumptions. Everything explained the way a smart
                friend would explain it, not the way a textbook would.
              </p>
              <div className="bg-neutral-900 rounded-xl p-4 border border-neutral-700">
                <p className="text-neutral-300 text-sm leading-relaxed italic">
                  "AI is a computer program that can understand your questions
                  and give you useful answers. Think of it as texting a very
                  knowledgeable assistant."
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Pidgin card */}
          <FadeIn delay={0.2}>
            <div className="p-6 bg-brand-900 rounded-2xl border border-brand-800 h-full flex flex-col">
              <div className="text-2xl mb-3">🇳🇬</div>
              <h3 className="font-semibold text-white text-base mb-3">Nigerian Pidgin</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-5 flex-1">
                Some concepts land better in Pidgin. We know that. So the full
                course is available in natural, everyday Pidgin. No watered-down version.
              </p>
              <div className="bg-neutral-900 rounded-xl p-4 border border-brand-800">
                <p className="text-brand-300 text-sm leading-relaxed italic">
                  "AI na computer program wey fit understand wetin you ask am,
                  and give you correct answer. E be like say you dey chat with
                  person wey sabi everything."
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p className="text-center text-neutral-500 text-sm mt-8">
            Switch between English and Pidgin freely. Learn in the language that makes things click.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
