import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { CourseLink, type CourseNavigate } from "@/components/course/CourseLink";
import { Button } from "@/components/ui/Button";
import { useLang } from "@/context/LanguageContext";
import { getLocalizedText, type PlannedCourse } from "@/lib/course";

interface PlannedCoursePageProps {
  course: PlannedCourse;
  navigate: CourseNavigate;
}

export function PlannedCoursePage({ course, navigate }: PlannedCoursePageProps) {
  const { lang } = useLang();
  const labels =
    lang === "pidgin"
      ? {
          status: "Coming next",
          note: "This course never open yet",
          explanation:
            "The course outline dey ready, but the lessons never publish. Join course updates so you go know when e open.",
          outline: "Course plan",
          startHere: "Start from here",
          finalWrapUp: "Final wrap-up",
          lessons: "lessons",
          updates: "Get Course Updates",
          back: "Back to Courses",
        }
      : {
          status: "Coming next",
          note: "This course is not open yet",
          explanation:
            "The course outline is ready, but the lessons are still being written. Join course updates to hear when it opens.",
          outline: "Course plan",
          startHere: "Start here",
          finalWrapUp: "Final wrap-up",
          lessons: "lessons",
          updates: "Get Course Updates",
          back: "Back to Courses",
        };

  return (
    <div className="px-5 py-10 sm:py-16">
      <div className="w-full max-w-4xl mx-auto">
        <CourseLink
          href="/courses"
          navigate={navigate}
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          {labels.back}
        </CourseLink>

        <section className="bg-surface border border-neutral-200 rounded-3xl p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700">
              <Clock3 size={14} />
              {labels.status}
            </span>
            {course.level && (
              <span className="rounded-full bg-neutral-50 border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-neutral-600">
                {getLocalizedText(course.level, lang)}
              </span>
            )}
            {course.languageSupport && (
              <span className="rounded-full bg-neutral-50 border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-neutral-600">
                {getLocalizedText(course.languageSupport, lang)}
              </span>
            )}
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-neutral-900 max-w-3xl mb-5">
            {getLocalizedText(course.title, lang)}
          </h1>
          <p className="text-base sm:text-lg leading-8 text-neutral-600 max-w-3xl">
            {getLocalizedText(course.description, lang)}
          </p>

          <div className="mt-7 rounded-2xl bg-neutral-50 border border-neutral-200 p-5 sm:p-6">
            <p className="font-display text-lg font-bold text-neutral-900 mb-2">
              {labels.note}
            </p>
            <p className="text-sm sm:text-base leading-7 text-neutral-600 max-w-2xl">
              {labels.explanation}
            </p>
            <Button asChild className="mt-5">
              <CourseLink href="/#course-updates" navigate={navigate}>
                {labels.updates}
                <ArrowRight size={17} className="ml-2" />
              </CourseLink>
            </Button>
          </div>
        </section>

        {course.modules && course.startHere && course.finalWrapUp && (
          <section aria-labelledby="planned-outline-heading" className="mt-10 sm:mt-12">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-2">
              {labels.status}
            </p>
            <h2
              id="planned-outline-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-5"
            >
              {labels.outline}
            </h2>

            <div className="space-y-3">
              <div className="bg-surface border border-neutral-200 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600 mb-2">
                  {labels.startHere}
                </p>
                <h3 className="font-display text-lg font-bold text-neutral-900">
                  {getLocalizedText(course.startHere.title, lang)}
                </h3>
              </div>

              {course.modules.map((module) => (
                <article
                  key={module.slug}
                  className="bg-surface border border-neutral-200 rounded-2xl p-5 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600 mb-2">
                        Module {module.number}
                      </p>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-neutral-900">
                        {getLocalizedText(module.title, lang)}
                      </h3>
                    </div>
                    <span className="text-xs font-semibold text-neutral-500 shrink-0">
                      {module.lessons.length} {labels.lessons}
                    </span>
                  </div>
                  <ol className="space-y-2 text-sm leading-6 text-neutral-600">
                    {module.lessons.map((lesson, index) => (
                      <li key={lesson.slug} className="flex gap-3">
                        <span className="text-neutral-400 tabular-nums">
                          {index + 1}.
                        </span>
                        <span>{getLocalizedText(lesson.title, lang)}</span>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}

              <div className="bg-surface border border-neutral-200 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600 mb-2">
                  {labels.finalWrapUp}
                </p>
                <h3 className="font-display text-lg font-bold text-neutral-900">
                  {getLocalizedText(course.finalWrapUp.title, lang)}
                </h3>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
