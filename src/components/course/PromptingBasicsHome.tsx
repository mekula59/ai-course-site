import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { CourseLink, type CourseNavigate } from "@/components/course/CourseLink";
import { Button } from "@/components/ui/Button";
import { useLang } from "@/context/LanguageContext";
import {
  getCourseStartPath,
  getCourseFinalWrapUpPath,
  getLocalizedText,
  getModulePath,
  type Course,
  type PlannedCourse,
} from "@/lib/course";

interface PromptingBasicsHomeProps {
  course: Course;
  plan: PlannedCourse;
  navigate: CourseNavigate;
}

export function PromptingBasicsHome({
  course,
  plan,
  navigate,
}: PromptingBasicsHomeProps) {
  const { lang } = useLang();
  const labels =
    lang === "pidgin"
      ? {
          status: "Complete free course",
          courseSize: "12 lessons + Prompt Playbook",
          statusNote: "Start from the short guide, follow the four modules, then use the Prompt Playbook whenever you need am.",
          start: "Start course",
          viewLearningPath: "See learning path",
          learningPath: "Your learning path",
          pathIntro: "Start here, then follow the lessons in order. Come back to the Prompt Playbook anytime you need am.",
          openModule: "Open module",
          lessons: "lessons",
          startHere: "Start from here",
          playbook: "Prompt Playbook",
          playbookIntro: "Keep the checklist, worked example, worksheet, and 22 prompts close for real tasks.",
          openPlaybook: "Open Prompt Playbook",
          coreEyebrow: "One check to remember",
          coreHeading: "Before you send the prompt, check the CORE.",
          coreBody: "AI know the situation? E know wetin you want make e do? E know the rules? E know the kind answer wey you want back?",
          coreItems: [
            ["C", "Context", "Wetin AI need know?"],
            ["O", "Objective", "Wetin you want make AI do?"],
            ["R", "Rules", "Which facts, limits, tone, or boundaries e suppose follow?"],
            ["E", "Expected result", "Which kind answer you want back?"],
          ],
        }
      : {
          status: "Complete free course",
          courseSize: "12 lessons + Prompt Playbook",
          statusNote: "Begin with the short guide, follow the four modules, then return to the Prompt Playbook whenever you need it.",
          start: "Start course",
          viewLearningPath: "View learning path",
          learningPath: "Your learning path",
          pathIntro: "Start here, then follow the lessons in order. Return to the Prompt Playbook whenever you need it.",
          openModule: "Open module",
          lessons: "lessons",
          startHere: "Start here",
          playbook: "Prompt Playbook",
          playbookIntro: "Keep the checklist, worked example, worksheet, and 22 prompts close for real tasks.",
          openPlaybook: "Open Prompt Playbook",
          coreEyebrow: "One check to remember",
          coreHeading: "Before you send it, check the CORE.",
          coreBody: "AI needs the situation, the job, the rules, and the kind of answer you want back.",
          coreItems: [
            ["C", "Context", "What does AI need to know?"],
            ["O", "Objective", "What do you want AI to do?"],
            ["R", "Rules", "What facts, limits, tone, or boundaries should it follow?"],
            ["E", "Expected result", "What kind of answer do you want back?"],
          ],
        };

  return (
    <div className="px-5 py-10 sm:py-16">
      <div className="w-full max-w-5xl mx-auto">
        <section className="relative overflow-hidden rounded-3xl border border-brand-100 bg-brand-50 p-6 sm:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-24 h-64 w-64 rounded-full border-[40px] border-brand-100/60"
          />
          <div className="relative max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-xs font-bold text-brand-700 ring-1 ring-brand-100">
                <CheckCircle2 size={14} />
                {labels.status}
              </span>
              <span className="rounded-full bg-neutral-900 px-3 py-1.5 text-xs font-bold text-neutral-100">
                {labels.courseSize}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-neutral-900 mb-5">
              {getLocalizedText(plan.title, lang)}
            </h1>
            <p className="text-base sm:text-lg leading-8 text-neutral-700 max-w-2xl">
              {getLocalizedText(plan.description, lang)}
            </p>
            <p className="mt-4 text-sm sm:text-base leading-7 text-neutral-600 max-w-2xl">
              {labels.statusNote}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button asChild className="w-full sm:w-auto">
                <CourseLink href={getCourseStartPath(course)} navigate={navigate}>
                  {labels.start}
                  <ArrowRight size={17} className="ml-2" />
                </CourseLink>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="w-full sm:w-auto border border-brand-200 bg-surface/70"
              >
                <a href="#learning-path">{labels.viewLearningPath}</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-3xl bg-neutral-900 text-white" aria-labelledby="core-heading">
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-300 mb-3">
                {labels.coreEyebrow}
              </p>
              <h2 id="core-heading" className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                {labels.coreHeading}
              </h2>
              <p className="text-sm sm:text-base leading-7 text-neutral-200">
                {labels.coreBody}
              </p>
            </div>
            <ol className="grid grid-cols-2 gap-2.5">
              {labels.coreItems.map(([letter, name, question]) => (
                <li key={letter} className="rounded-2xl border border-white/10 bg-white/5 p-3.5 sm:p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 font-display text-sm font-bold text-white">
                      {letter}
                    </span>
                    <h3 className="font-display text-sm font-bold text-white">{name}</h3>
                  </div>
                  <p className="text-xs leading-5 text-neutral-300">{question}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="learning-path" aria-labelledby="learning-path-heading" className="mt-10 scroll-mt-24 sm:mt-14">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-2">
            {labels.learningPath}
          </p>
          <h2
            id="learning-path-heading"
            className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-3"
          >
            {labels.learningPath}
          </h2>
          <p className="text-sm sm:text-base leading-7 text-neutral-600 max-w-2xl">
            {labels.pathIntro}
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <CourseLink
              href={getCourseStartPath(course)}
              navigate={navigate}
              className="group rounded-2xl border border-brand-100 bg-brand-50 p-5 sm:p-6 hover:border-brand-300 transition-colors"
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700 mb-3">
                {labels.startHere}
              </p>
              <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
                {getLocalizedText(course.startHere.lesson.title, lang)}
              </h3>
              <p className="text-sm leading-7 text-neutral-700">
                {getLocalizedText(course.startHere.lesson.intro, lang)}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                {labels.start}
                <ArrowRight size={16} />
              </span>
            </CourseLink>

            {course.modules.map((module) => (
              <CourseLink
                key={module.slug}
                href={getModulePath(module.slug, course.slug)}
                navigate={navigate}
                className="group rounded-2xl border border-neutral-200 bg-surface p-5 sm:p-6 hover:border-brand-300 transition-colors"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 font-display text-sm font-bold text-neutral-100">
                    {module.number}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                  {getLocalizedText(module.title, lang)}
                </h3>
                <p className="text-sm leading-7 text-neutral-600">
                  {getLocalizedText(module.description, lang)}
                </p>
                <ol className="mt-5 space-y-2 text-sm leading-6 text-neutral-700">
                  {module.lessons.map((lesson, index) => (
                    <li key={lesson.slug} className="flex gap-3">
                      <span className="text-neutral-400">{index + 1}.</span>
                      <span>{getLocalizedText(lesson.title, lang)}</span>
                    </li>
                  ))}
                </ol>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  <BookOpen size={16} />
                  {module.lessons.length} {labels.lessons} | {labels.openModule}
                </span>
              </CourseLink>
            ))}
            <CourseLink
              href={getCourseFinalWrapUpPath(course)}
              navigate={navigate}
              className="group rounded-2xl bg-neutral-900 p-5 text-white transition-colors hover:bg-neutral-800 sm:p-6 md:col-span-2"
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-300 mb-3">
                {labels.playbook}
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                {getLocalizedText(course.finalWrapUp.lesson.title, lang)}
              </h3>
              <p className="max-w-2xl text-sm leading-7 text-neutral-300">
                {labels.playbookIntro}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-300">
                {labels.openPlaybook}
                <ArrowRight size={16} />
              </span>
            </CourseLink>
          </div>
        </section>
      </div>
    </div>
  );
}
