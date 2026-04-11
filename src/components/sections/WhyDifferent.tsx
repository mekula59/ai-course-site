import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const differences = [
  {
    icon: "🎯",
    title: "Built for beginners, not techies",
    desc: "We did not water down an advanced course. We built this from the ground up for people with zero technical background.",
  },
  {
    icon: "🌍",
    title: "Made for the African context",
    desc: "Our examples, use cases, and language are grounded in Nigerian and African realities. Not Silicon Valley assumptions.",
  },
  {
    icon: "🗣️",
    title: "Pidgin support, not an afterthought",
    desc: "Nigerian Pidgin is treated as a full learning language here, not a footnote. You can learn everything in Pidgin.",
  },
  {
    icon: "⚡",
    title: "You use it the same day",
    desc: "Every lesson ends with something you can do immediately. No waiting until you finish the course to get value.",
  },
  {
    icon: "🚫",
    title: "No fluff, no filler",
    desc: "We respect your time. No unnecessary history lessons, no bloated theory sections, no padding to look impressive.",
  },
  {
    icon: "🔄",
    title: "Always updated",
    desc: "AI is moving fast. This course stays current. When major tools change, the content gets updated to match.",
  },
];

export function WhyDifferent() {
  return (
    <section id="why" className="py-20 px-5 bg-neutral-900 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="mb-4 bg-neutral-800 border-neutral-700 text-brand-400">
              Why This Course
            </SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
              Other AI courses were not built for you. This one was.
            </h2>
            <p className="text-neutral-400 text-lg max-w-xl mx-auto">
              Most AI education is made for a Western, tech-savvy audience.
              This course starts from a different place entirely.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differences.map((d, i) => (
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
