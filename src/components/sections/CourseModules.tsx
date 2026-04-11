import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const modules = [
  {
    num: "01",
    title: "What Is AI, Really?",
    desc: "Cut through the hype. Understand what AI can and cannot do, where it comes from, and why it matters now.",
    lessons: ["Demystifying AI", "How AI tools work", "What changed in 2023+"],
  },
  {
    num: "02",
    title: "Your First AI Tools",
    desc: "Hands-on introduction to ChatGPT, Gemini, and other beginner-friendly tools you can start using today.",
    lessons: ["Setting up your account", "Your first conversation", "Tips for better results"],
  },
  {
    num: "03",
    title: "AI for Writing",
    desc: "Use AI to draft emails, reports, essays, messages, social media posts, and anything you write at work or school.",
    lessons: ["Writing faster with AI", "Editing and tone", "Avoiding AI-sounding text"],
  },
  {
    num: "04",
    title: "AI for Research and Learning",
    desc: "Learn how to use AI as a research partner, not a search engine. Find better answers, faster.",
    lessons: ["Asking better questions", "Summarising long content", "Fact-checking AI outputs"],
  },
  {
    num: "05",
    title: "AI at Work and in Business",
    desc: "Real applications for real jobs. See how people in sales, admin, marketing, HR, and more are using AI daily.",
    lessons: ["Automating repetitive tasks", "AI for your role", "Building a simple AI workflow"],
  },
  {
    num: "06",
    title: "Staying Safe and Staying Smart",
    desc: "Understand the risks, limitations, and ethics of AI. Use it with confidence, not blind trust.",
    lessons: ["When not to trust AI", "Data privacy basics", "Building good AI habits"],
  },
];

export function CourseModules() {
  return (
    <section id="modules" className="py-20 px-5 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel className="mb-4">Course Modules</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-4 mb-4">
              Six focused modules. Zero fluff.
            </h2>
            <p className="text-neutral-500 text-lg max-w-xl mx-auto">
              Each module is designed to be completed in under an hour, with practical exercises
              you can apply the same day.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {modules.map((mod, i) => (
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
