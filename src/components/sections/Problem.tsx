import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const problems = [
  {
    icon: "😰",
    title: "AI feels overwhelming",
    body: "You see people talking about ChatGPT, Gemini, Copilot, but you do not even know where to start or what any of it actually does.",
  },
  {
    icon: "😕",
    title: "Everything sounds too technical",
    body: "Every tutorial uses jargon. \"LLM\", \"prompt engineering\", \"tokens\". You just want to know how to use it for real things.",
  },
  {
    icon: "😓",
    title: "You worry you are already behind",
    body: "It feels like everyone else already knows this and you are the only one still figuring it out. You are not.",
  },
  {
    icon: "🤔",
    title: "You are not sure it even applies to you",
    body: "You think AI is for tech people, software engineers, or big companies. But it is already changing every kind of work and everyday life.",
  },
];

export function Problem() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="mb-4">The Problem</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-4">
              You want to use AI. Something keeps stopping you.
            </h2>
            <p className="text-neutral-500 text-lg max-w-xl mx-auto">
              Sound familiar? You are not alone. This is exactly why this course exists.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <div className="flex gap-4 p-6 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-neutral-200 transition-colors">
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
