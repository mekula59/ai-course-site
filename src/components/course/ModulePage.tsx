import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { CourseLink, type CourseNavigate } from "@/components/course/CourseLink";
import { Button } from "@/components/ui/Button";
import {
  beginnerCourse,
  getCoursePath,
  getLessonPath,
  getLocalizedLesson,
  getLocalizedText,
  type Course,
  type CourseModule,
} from "@/lib/course";
import { useLang } from "@/context/LanguageContext";

interface ModulePageProps {
  course?: Course;
  module: CourseModule;
  navigate: CourseNavigate;
}

function ModuleDiagram({
  module,
  lang,
  label,
}: {
  module: CourseModule;
  lang: "en" | "pidgin";
  label: string;
}) {
  if (!module.diagram) return null;

  const steps = module.diagram.steps.map((step) => getLocalizedText(step, lang));
  const connectors =
    module.diagram.connectors || Array.from({ length: Math.max(steps.length - 1, 0) }, () => "→");

  return (
    <section
      aria-label={label}
      className="mt-7 bg-surface border border-neutral-200 rounded-2xl p-4 sm:p-5"
    >
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 mb-3">
        {label}
      </p>
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-2.5">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          const connector = connectors[index] || "→";

          return (
            <div key={`${module.slug}-${step}`} className="contents">
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-3 text-sm font-semibold leading-snug text-neutral-700">
                {step}
              </div>
              {!isLast && (
                <>
                  <span
                    aria-hidden="true"
                    className="hidden sm:inline-flex shrink-0 items-center justify-center px-0.5 text-sm font-bold text-brand-500"
                  >
                    {connector}
                  </span>
                  <span
                    aria-hidden="true"
                    className="sm:hidden pl-4 text-sm font-bold text-brand-500 leading-none"
                  >
                    ↓
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function ModulePage({
  course = beginnerCourse,
  module,
  navigate,
}: ModulePageProps) {
  const { lang } = useLang();
  const firstLesson = module.lessons[0];
  const moduleTitle = getLocalizedText(module.title, lang);
  const moduleDescription = getLocalizedText(module.description, lang);
  const labels =
    lang === "pidgin"
      ? {
          backToCourse: "Go back to course",
          module: "Module",
          lessons: "lessons",
          moduleIntro: "Follow these lessons one by one. E go make the module easier.",
          startModule: "Start this module",
          lessonsHeading: "Lessons",
          lessonCount: "Lesson",
          of: "of",
        }
      : {
          backToCourse: "Back to course",
          module: "Module",
          lessons: "lessons",
          moduleIntro: "Work through these lessons in order for the smoothest path.",
          startModule: "Start this module",
          lessonsHeading: "Lessons",
          lessonCount: "Lesson",
          of: "of",
        };

  return (
    <div className="px-5 py-10 sm:py-14">
      <div className="w-full max-w-3xl mx-auto">
        <CourseLink
          href={getCoursePath(course.slug)}
          navigate={navigate}
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors mb-7"
        >
          <ArrowLeft size={16} />
          {labels.backToCourse}
        </CourseLink>

        <header className="mb-9">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-4">
            {labels.module} {module.number}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-neutral-900 mb-5 break-words max-w-[13ch] sm:max-w-none">
            {moduleTitle}
          </h1>
          <p className="text-base sm:text-lg leading-8 text-neutral-600 max-w-[34ch] sm:max-w-none">
            {moduleDescription}
          </p>

          {module.framing ? (
            <p className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 px-5 py-4 text-sm leading-7 text-neutral-700">
              {getLocalizedText(module.framing, lang)}
            </p>
          ) : null}

          <ModuleDiagram
            module={module}
            lang={lang}
            label={lang === "pidgin" ? "How this module dey work" : "How this module works"}
          />

          {firstLesson && (
            <div className="mt-7 bg-surface border border-neutral-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 mb-2">
                  {module.lessons.length} {labels.lessons}
                </p>
                <p className="text-sm leading-6 text-neutral-600 max-w-[32ch] sm:max-w-none">
                  {labels.moduleIntro}
                </p>
              </div>
              <Button asChild className="w-full sm:w-auto">
                <CourseLink
                  href={getLessonPath(module.slug, firstLesson.slug, course.slug)}
                  navigate={navigate}
                >
                  {labels.startModule}
                  <ArrowRight size={18} className="ml-2" />
                </CourseLink>
              </Button>
            </div>
          )}
        </header>

        <section aria-labelledby="lessons-heading">
          <div className="flex items-center gap-3 mb-5">
            <BookOpen size={20} className="text-brand-500" />
            <h2
              id="lessons-heading"
              className="font-display text-2xl font-bold text-neutral-900"
            >
              {labels.lessonsHeading}
            </h2>
          </div>

          <ol className="space-y-3">
            {module.lessons.map((lesson, index) => (
              <li key={lesson.slug}>
                {(() => {
                  const localizedLesson = getLocalizedLesson(lesson, lang);

                  return (
                    <CourseLink
                      href={getLessonPath(module.slug, lesson.slug, course.slug)}
                      navigate={navigate}
                      className="group block bg-surface border border-neutral-200 rounded-2xl p-5 sm:p-6 hover:border-brand-300 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center shrink-0">
                          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-display font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 mb-2">
                                {labels.lessonCount} {index + 1} {labels.of}{" "}
                                {module.lessons.length}
                              </p>
                              <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                                {localizedLesson.title}
                              </h3>
                            </div>
                            <ArrowRight
                              size={20}
                              className="hidden sm:block text-neutral-400 group-hover:text-brand-500 transition-colors"
                            />
                          </div>
                          <p className="text-sm sm:text-base leading-7 text-neutral-600 max-w-[34ch] sm:max-w-none">
                            {localizedLesson.intro}
                          </p>
                        </div>
                      </div>
                    </CourseLink>
                  );
                })()}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
