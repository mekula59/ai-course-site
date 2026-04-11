import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CheckCircle2 } from "lucide-react";

const audiences = [
  {
    role: "Working professionals",
    desc: "You want to get more done at work, write faster, think clearer, and stop wasting time on repetitive tasks.",
  },
  {
    role: "Business owners",
    desc: "You want to use AI to grow your business, create content, answer customer questions, and do more with less.",
  },
  {
    role: "Students",
    desc: "You want to research better, write stronger essays, study smarter, and actually understand difficult topics.",
  },
  {
    role: "Job seekers",
    desc: "You want to write better CVs and cover letters, prepare for interviews, and stand out in a competitive market.",
  },
  {
    role: "Curious beginners",
    desc: "You have heard about AI and want to understand what it actually is and how to use it without feeling confused.",
  },
  {
    role: "Anyone falling behind",
    desc: "You feel like the world is changing fast and you want to keep up, stay relevant, and feel confident with new tools.",
  },
];

export function WhoIsItFor() {
  return (
    <section className="py-20 px-5 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="mb-4">Who This Is For</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-4">
              This course was built for you.
            </h2>
            <p className="text-neutral-500 text-lg max-w-xl mx-auto">
              No tech background. No coding. No prior experience with AI.
              Just a real desire to learn something useful.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {audiences.map((a, i) => (
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
            <p className="text-brand-800 font-medium">
              If you have ever used Google Search, you can learn this. AI tools are that accessible.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
