import { ArrowRight, BookOpen, Clock3, LockKeyhole } from "lucide-react";
import { CourseLink, type CourseNavigate } from "@/components/course/CourseLink";
import { Button } from "@/components/ui/Button";
import { useLang } from "@/context/LanguageContext";
import {
  getCourseStartPath,
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
  const isComplete = course.releaseStatus === "live";
  const publishedModuleSlugs = new Set(course.modules.map((module) => module.slug));
  const labels =
    lang === "pidgin"
      ? {
          status: "Course preview",
          liveStatus: "Free course",
          statusNote:
            "Start Here, Module 1, and Module 2 ready for testing. The rest of the course still dey draft.",
          completeStatusNote:
            "Start from the short guide, work through all four modules, then keep the Prompt Playbook close for everyday use.",
          start: "Start From Here",
          updates: "Get Course Updates",
          available: "Ready to test",
          availableIntro:
            "Start with the short guide, then work through all twelve lessons and the Prompt Playbook.",
          plan: "Full course plan",
          planIntro:
            "You fit see the full learning path here, but only completed sections get links.",
          ready: "Ready to test",
          draft: "Draft",
          module: "Module",
          lessons: "lessons",
          startHere: "Start from here",
          draftNote: "Lessons never publish yet.",
          notComplete: "This course never complete",
          complete: "Full course ready",
        }
      : {
          status: "Course preview",
          liveStatus: "Free course",
          statusNote:
            "Start Here, Module 1, and Module 2 are ready for testing. The rest of the course is still in draft.",
          completeStatusNote:
            "Begin with the short guide, work through all four modules, then keep the Prompt Playbook close for everyday use.",
          start: "Start Here",
          updates: "Get Course Updates",
          available: "Ready to test",
          availableIntro:
            "Begin with the short guide, then work through all twelve lessons and the Prompt Playbook.",
          plan: "Full course plan",
          planIntro:
            "The complete learning path is visible here, but only finished sections have links.",
          ready: "Ready to test",
          draft: "Draft",
          module: "Module",
          lessons: "lessons",
          startHere: "Start here",
          draftNote: "Lessons are not published yet.",
          notComplete: "This course is not complete",
          complete: "Full course ready",
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
                <Clock3 size={14} />
                {isComplete ? labels.liveStatus : labels.status}
              </span>
              <span className="rounded-full bg-neutral-900 px-3 py-1.5 text-xs font-bold text-neutral-100">
                {isComplete ? labels.complete : labels.notComplete}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-neutral-900 mb-5">
              {getLocalizedText(plan.title, lang)}
            </h1>
            <p className="text-base sm:text-lg leading-8 text-neutral-700 max-w-2xl">
              {getLocalizedText(plan.description, lang)}
            </p>
            <p className="mt-4 text-sm sm:text-base leading-7 text-neutral-600 max-w-2xl">
              {isComplete ? labels.completeStatusNote : labels.statusNote}
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
                <CourseLink href="/#course-updates" navigate={navigate}>
                  {labels.updates}
                </CourseLink>
              </Button>
            </div>
          </div>
        </section>

        <section aria-labelledby="available-preview-heading" className="mt-10 sm:mt-14">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-2">
            {labels.available}
          </p>
          <h2
            id="available-preview-heading"
            className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-3"
          >
            {labels.available}
          </h2>
          <p className="text-sm sm:text-base leading-7 text-neutral-600 max-w-2xl">
            {labels.availableIntro}
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
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                    {labels.ready}
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
                  {module.lessons.length} {labels.lessons}
                </span>
              </CourseLink>
            ))}
          </div>
        </section>

        <section aria-labelledby="full-plan-heading" className="mt-12 sm:mt-16">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-2">
            {labels.plan}
          </p>
          <h2
            id="full-plan-heading"
            className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-3"
          >
            {labels.plan}
          </h2>
          <p className="text-sm sm:text-base leading-7 text-neutral-600 max-w-2xl">
            {labels.planIntro}
          </p>

          <ol className="mt-6 divide-y divide-neutral-200 border-y border-neutral-200">
            {plan.modules?.map((module) => {
              const isReady = publishedModuleSlugs.has(module.slug);
              const content = (
                <div className="grid gap-4 py-6 sm:grid-cols-[72px_minmax(0,1fr)_auto] sm:items-start">
                  <span className="font-display text-2xl font-bold text-neutral-300">
                    {module.number}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 mb-2">
                      {labels.module} {module.number}
                    </p>
                    <h3 className="font-display text-xl font-bold text-neutral-900 mb-3">
                      {getLocalizedText(module.title, lang)}
                    </h3>
                    <ol className="space-y-1.5 text-sm leading-6 text-neutral-600">
                      {module.lessons.map((lesson, index) => (
                        <li key={lesson.slug}>
                          {index + 1}. {getLocalizedText(lesson.title, lang)}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <span
                    className={
                      isReady
                        ? "w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700"
                        : "inline-flex w-fit items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold text-neutral-500"
                    }
                  >
                    {!isReady ? <LockKeyhole size={12} /> : null}
                    {isReady ? labels.ready : labels.draft}
                  </span>
                </div>
              );

              return (
                <li key={module.slug}>
                  {isReady ? (
                    <CourseLink
                      href={getModulePath(module.slug, course.slug)}
                      navigate={navigate}
                      className="group block hover:bg-brand-50/50 transition-colors"
                    >
                      {content}
                    </CourseLink>
                  ) : (
                    <div>
                      {content}
                      <p className="-mt-3 pb-5 pl-0 text-xs text-neutral-500 sm:pl-[72px]">
                        {labels.draftNote}
                      </p>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </div>
  );
}
