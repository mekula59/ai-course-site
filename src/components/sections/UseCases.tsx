import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const useCases = [
  {
    context: "At the office",
    icon: "💼",
    before: "You spend 40 minutes writing a client email you are not even happy with.",
    after: "You give AI a brief and have a great first draft in 30 seconds. You review and send.",
  },
  {
    context: "Running a business",
    icon: "🛍️",
    before: "You struggle to write product descriptions, social posts, and follow-up messages.",
    after: "AI helps you create a week's worth of content in an afternoon.",
  },
  {
    context: "In school",
    icon: "📚",
    before: "You stare at a blank page for an hour trying to start your assignment.",
    after: "You use AI to outline, draft, and refine your work without copying or cheating.",
  },
  {
    context: "Job hunting",
    icon: "📄",
    before: "You send the same CV to every job and wonder why you are not getting called.",
    after: "AI helps you tailor your CV and cover letter to each application in minutes.",
  },
  {
    context: "Learning something new",
    icon: "🧠",
    before: "You try to understand a complex topic and give up after reading the same paragraph five times.",
    after: "You ask AI to explain it simply, give you examples, and quiz you on it.",
  },
  {
    context: "Daily admin",
    icon: "✅",
    before: "Your inbox is full. You do not know where to start. Tasks keep piling up.",
    after: "You use AI to draft replies, summarise long emails, and plan your week.",
  },
];

export function UseCases() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="mb-4">Real Life Use Cases</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-4">
              See what changes when you start using AI.
            </h2>
            <p className="text-neutral-500 text-lg max-w-xl mx-auto">
              These are not made-up examples. They are the everyday situations this course is
              built around.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc, i) => (
            <FadeIn key={uc.context} delay={i * 0.07}>
              <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{uc.icon}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{uc.context}</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 border border-red-100 rounded-xl">
                    <p className="text-xs font-medium text-red-600 mb-1">Before</p>
                    <p className="text-neutral-700 text-sm leading-relaxed">{uc.before}</p>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-100 rounded-xl">
                    <p className="text-xs font-medium text-green-700 mb-1">After</p>
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
