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
              Plain English. And yes, Pidgin too.
            </h2>
            <p className="text-neutral-400 text-lg max-w-xl mx-auto">
              This course is designed to be understood by everyone, including those who think better
              in Nigerian Pidgin.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* English card */}
          <FadeIn delay={0.1}>
            <div className="p-6 bg-neutral-800 rounded-2xl border border-neutral-700 h-full">
              <div className="text-2xl mb-3">🇬🇧</div>
              <h3 className="font-semibold text-white text-base mb-3">Clear English</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                No buzzwords, no assumptions, no tech speak. Everything is explained the way
                a smart friend would explain it to you over coffee.
              </p>
              <div className="bg-neutral-900 rounded-xl p-4 border border-neutral-700">
                <p className="text-neutral-300 text-sm italic">
                  "AI is a computer system that can understand your questions and give you
                  useful answers, almost like texting a very knowledgeable assistant."
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Pidgin card */}
          <FadeIn delay={0.2}>
            <div className="p-6 bg-brand-900 rounded-2xl border border-brand-800 h-full">
              <div className="text-2xl mb-3">🇳🇬</div>
              <h3 className="font-semibold text-white text-base mb-3">Nigerian Pidgin Support</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                For those who think and understand better in Pidgin, key lessons are available
                in natural Nigerian Pidgin so nothing is lost in translation.
              </p>
              <div className="bg-neutral-900 rounded-xl p-4 border border-brand-800">
                <p className="text-brand-300 text-sm italic">
                  "AI na computer wey fit understand your question and give you correct answer,
                  like say you dey chat with person wey sabi everything."
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p className="text-center text-neutral-500 text-sm mt-8">
            You can switch between English and Pidgin at any time. Learn in the language that clicks for you.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
