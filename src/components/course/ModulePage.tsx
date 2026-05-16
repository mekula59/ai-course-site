import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { CourseLink, type CourseNavigate } from "@/components/course/CourseLink";
import { Button } from "@/components/ui/Button";
import { getLessonPath, type CourseModule } from "@/lib/course";

interface ModulePageProps {
  module: CourseModule;
  navigate: CourseNavigate;
}

export function ModulePage({ module, navigate }: ModulePageProps) {
  const firstLesson = module.lessons[0];

  return (
    <div className="px-5 py-10 sm:py-14">
      <div className="w-full max-w-3xl mx-auto">
        <CourseLink
          href="/course"
          navigate={navigate}
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors mb-7"
        >
          <ArrowLeft size={16} />
          Back to course
        </CourseLink>

        <header className="mb-9">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-4">
            Module {module.number}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-neutral-900 mb-5 break-words max-w-[13ch] sm:max-w-none">
            {module.title}
          </h1>
          <p className="text-base sm:text-lg leading-8 text-neutral-600 max-w-[34ch] sm:max-w-none">
            {module.description}
          </p>

          {firstLesson && (
            <div className="mt-7 bg-surface border border-neutral-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 mb-2">
                  {module.lessons.length} lessons
                </p>
                <p className="text-sm leading-6 text-neutral-600 max-w-[32ch] sm:max-w-none">
                  Work through these lessons in order for the smoothest path.
                </p>
              </div>
              <Button asChild className="w-full sm:w-auto">
                <CourseLink
                  href={getLessonPath(module.slug, firstLesson.slug)}
                  navigate={navigate}
                >
                  Start this module
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
              Lessons
            </h2>
          </div>

          <ol className="space-y-3">
            {module.lessons.map((lesson, index) => (
              <li key={lesson.slug}>
                <CourseLink
                  href={getLessonPath(module.slug, lesson.slug)}
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
                            Lesson {index + 1} of {module.lessons.length}
                          </p>
                          <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                            {lesson.title}
                          </h3>
                        </div>
                        <ArrowRight
                          size={20}
                          className="hidden sm:block text-neutral-400 group-hover:text-brand-500 transition-colors"
                        />
                      </div>
                      <p className="text-sm sm:text-base leading-7 text-neutral-600 max-w-[34ch] sm:max-w-none">
                        {lesson.intro}
                      </p>
                    </div>
                  </div>
                </CourseLink>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
