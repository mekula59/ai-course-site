import {
  ArrowLeft,
  ArrowRight,
  ClipboardList,
  Lightbulb,
  MessageSquareText,
} from "lucide-react";
import { CourseLink, type CourseNavigate } from "@/components/course/CourseLink";
import {
  getAdjacentLessons,
  getLessonPath,
  getModulePath,
  lessonReferences,
  type LessonReference,
} from "@/lib/course";

interface LessonPageProps {
  reference: LessonReference;
  navigate: CourseNavigate;
}

export function LessonPage({ reference, navigate }: LessonPageProps) {
  const { module, lesson, lessonIndex } = reference;
  const { previous, next } = getAdjacentLessons(module.slug, lesson.slug);
  const currentLessonNumber =
    lessonReferences.findIndex(
      ({ module: itemModule, lesson: itemLesson }) =>
        itemModule.slug === module.slug && itemLesson.slug === lesson.slug
    ) + 1;
  const progressPercent = (currentLessonNumber / lessonReferences.length) * 100;

  return (
    <div className="px-5 py-8 sm:py-14">
      <article className="w-full max-w-2xl mx-auto">
        <CourseLink
          href={getModulePath(module.slug)}
          navigate={navigate}
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors mb-7"
        >
          <ArrowLeft size={16} />
          Back to module
        </CourseLink>

        <header className="mb-10">
          <div className="mb-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
                Module {module.number}, Lesson {lessonIndex + 1}
              </p>
              <p className="text-xs font-medium text-neutral-500">
                Lesson {currentLessonNumber} of {lessonReferences.length}
              </p>
            </div>
            <div className="h-1 rounded-full bg-neutral-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-brand-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-neutral-900 mb-5 break-words max-w-[13ch] sm:max-w-none">
            {lesson.title}
          </h1>
          <p className="text-base sm:text-lg leading-8 text-neutral-600 max-w-[34ch] sm:max-w-none">
            {lesson.intro}
          </p>
        </header>

        <div className="space-y-9">
          {lesson.content.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl sm:text-2xl font-bold leading-snug text-neutral-900 mb-3 max-w-[18ch] sm:max-w-none">
                {section.heading}
              </h2>
              <p className="text-base leading-8 text-neutral-700 max-w-[34ch] sm:max-w-none">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <section className="mt-12 space-y-3" aria-label="Lesson workbook">
          <div className="bg-surface border border-neutral-200 rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb size={18} className="text-brand-500" />
              <h2 className="font-display text-lg font-bold text-neutral-900">
                Key takeaway
              </h2>
            </div>
            <p className="text-sm leading-7 text-neutral-700 max-w-[34ch] sm:max-w-none">
              {lesson.keyTakeaway}
            </p>
          </div>

          <div className="bg-neutral-900 text-white rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-3">
              <MessageSquareText size={18} className="text-brand-400" />
              <h2 className="font-display text-lg font-bold text-white">
                Example prompt
              </h2>
            </div>
            <p className="text-sm leading-7 text-neutral-200 max-w-[34ch] sm:max-w-none">
              {lesson.examplePrompt}
            </p>
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-3">
              <ClipboardList size={18} className="text-brand-600" />
              <h2 className="font-display text-lg font-bold text-neutral-900">
                Practice task
              </h2>
            </div>
            <p className="text-sm leading-7 text-neutral-700 max-w-[34ch] sm:max-w-none">
              {lesson.practiceTask}
            </p>
          </div>
        </section>

        <nav
          className="mt-12 border-t border-neutral-200 pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3"
          aria-label="Lesson navigation"
        >
          {previous ? (
            <CourseLink
              href={getLessonPath(previous.module.slug, previous.lesson.slug)}
              navigate={navigate}
              className="group bg-surface border border-neutral-200 rounded-2xl p-5 hover:border-brand-300 transition-all"
            >
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 mb-3">
                <ArrowLeft size={14} />
                Previous
              </span>
              <span className="font-display font-bold text-neutral-900 group-hover:text-brand-700 transition-colors">
                {previous.lesson.title}
              </span>
            </CourseLink>
          ) : (
            <div className="hidden sm:block" />
          )}

          {next ? (
            <CourseLink
              href={getLessonPath(next.module.slug, next.lesson.slug)}
              navigate={navigate}
              className="group bg-surface border border-neutral-200 rounded-2xl p-5 hover:border-brand-300 transition-all sm:text-right"
            >
              <span className="flex items-center gap-2 sm:justify-end text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 mb-3">
                Next
                <ArrowRight size={14} />
              </span>
              <span className="font-display font-bold text-neutral-900 group-hover:text-brand-700 transition-colors">
                {next.lesson.title}
              </span>
            </CourseLink>
          ) : (
            <CourseLink
              href="/course"
              navigate={navigate}
              className="group bg-surface border border-neutral-200 rounded-2xl p-5 hover:border-brand-300 transition-all sm:text-right"
            >
              <span className="flex items-center gap-2 sm:justify-end text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 mb-3">
                Finish
                <ArrowRight size={14} />
              </span>
              <span className="font-display font-bold text-neutral-900 group-hover:text-brand-700 transition-colors">
                Back to course home
              </span>
            </CourseLink>
          )}
        </nav>
      </article>
    </div>
  );
}
